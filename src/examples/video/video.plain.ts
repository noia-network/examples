import "./video.scss";

import { NoiaClient } from "@noia-network/sdk";
import { bytesToBase64 } from "../../base64";

export async function run(container: HTMLElement, noiaClient: NoiaClient): Promise<void> {
    console.info("Video example.");
    container.className = "video-example";
    container.innerHTML = `<div class="loader" />`;

    const stream = await noiaClient.openStream({
        src: "https://noia.network/samples/video.mp4"
    });

    // Load video bytes
    const videoBytes = await stream.getAllBytes();

    console.info(`Video downloaded (${videoBytes.length} bytes)`);

    // Render video
    const videoType = "video/mp4";
    const blob = new Blob([videoBytes], { type: videoType });
    const blobUrl = URL.createObjectURL(blob);
    stream.masterData.src = blobUrl;
    container.innerHTML = `
    <video controls>
        <source type="${videoType}" src="data:${videoType};base64,${blobUrl}">
    </video>`;
}
