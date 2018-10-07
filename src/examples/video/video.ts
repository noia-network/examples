import { NoiaClient } from "@noia-network/sdk";
import { bytesToBase64 } from "../../base64";

import * as renderMedia from "render-media";
import * as from from "from2";
import { ReadInput } from "from2";
import { logger } from "../../logger";
import { Writable, Readable } from "readable-stream";

import "./video.scss";
import { PieceResult } from "@noia-network/sdk/dist/contracts/node";

export async function run(container: HTMLElement, noiaClient: NoiaClient): Promise<void> {
    console.info("Video example.");
    container.className = "video-example";
    container.innerHTML = `<div class="loader" />`;

    const imageStream = await noiaClient.openStream({
        src: "https://noia.network/samples/image.jpg"
    });

    const pieceResult = await imageStream.getPiece({
        offset: 0,
        length: imageStream.metadata.torrent.pieceLength,
        piece: 0,
        infoHash: imageStream.metadata.torrent.infoHash
    });
    const bytes = await imageStream.getBytes({
        start: 0,
        length: imageStream.metadata.torrent.length
    });

    // const imageBytes = await imageStream.getAllBytes();

    const noiaStream = await noiaClient.openStream({
        src: "https://noia.network/samples/video.mp4"
        // src: "https://noia.network/samples/image.jpg"
    });

    const promises: Array<Promise<PieceResult>> = [];
    // Pre-cache pieces
    for (let index = 0; index < 100; index++) {
        promises.push(
            noiaStream.getPiece({
                infoHash: noiaStream.metadata.torrent.infoHash,
                length: noiaStream.metadata.torrent.pieceLength,
                piece: index,
                offset: 0
            })
        );
    }

    const file: renderMedia.RenderFile = {
        // name: "image.jpg",
        name: "video.mp4",
        length: noiaStream.metadata.torrent.length,
        createReadStream: (opts: renderMedia.CreateReadStreamOptions = {}) => {
            const start = opts.start || 0;
            const end = opts.end || noiaStream.metadata.torrent.length - 1;

            let startBytes: number = start;
            return from(async (size, next) => {
                const nextBytesPromise = noiaStream.getBytes({ start: startBytes, length: size });

                const chunksToBuffer = 50;

                // Buffer a few more byte ranges
                for (let i = 0; i < chunksToBuffer; i++) {
                    noiaStream.getBytes({ start: startBytes + size * i, length: size });
                }

                const nextBytes = await nextBytesPromise;

                startBytes += size;
                next(null, nextBytes);

                if (startBytes > end) {
                    next(null, null);
                }
            });
        }
    };

    const video = document.createElement("video");
    video.controls = true;
    container.innerHTML = "";
    container.append(video);

    renderMedia.render(file, video, {}, (err: Error | null, elem: HTMLElement) => {
        if (err) {
            return console.error(err.message);
        }
        // Rendered element with the media in it.
        logger.Debug("Rendered element with the media in it.", elem);
    });
}
