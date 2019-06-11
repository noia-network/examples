import { NoiaClient } from "@noia-network/sdk";

import * as renderMedia from "render-media";
import * as from from "from2";
import { logger } from "../../logger";

import "./video.scss";

export async function run(container: HTMLElement, noiaClient: NoiaClient): Promise<void> {
    console.info("Video example.");
    container.className = "video-example";
    container.innerHTML = `<div class="loader" />`;

    const noiaStream = await noiaClient.openStream({
        src: "https://example.noia.network/samples/video.mp4"
    });

    const videoType = "video/mp4";

    if (noiaStream.masterData.metadata === undefined) {
        container.innerHTML = `
        <video controls>
            <source type="${videoType}" src="${noiaStream.masterData.src}">
            <p>This browser does not support the video element.</p>
        </video>`;
    } else {
        // Buffer 1/10th of the video in advance.
        noiaStream.bufferBytes({
            start: 0,
            length: noiaStream.masterData.metadata.bufferLength / 10
        });

        const file: renderMedia.RenderFile = {
            name: "video.mp4",
            length: noiaStream.masterData.metadata.bufferLength,
            createReadStream: (opts: renderMedia.CreateReadStreamOptions = {}) => {
                const start = opts.start || 0;
                const end = opts.end || noiaStream.masterData.metadata.bufferLength - 1;

                let startBytes: number = start;
                return from(async (size, next) => {
                    const nextBytesPromise = noiaStream.getBytes({ start: startBytes, length: size });

                    const chunksToBuffer = 50;

                    // Buffer a few more chunks, while the current frames are shown.
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
}
