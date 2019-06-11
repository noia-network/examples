import "@noia-network/sdk/dist/vendors~main";
import { NoiaClient } from "@noia-network/sdk";
import { bytesToBase64 } from "../../base64";
import "./image.scss";

export async function run(container: HTMLElement, noiaClient: NoiaClient): Promise<void> {
    console.info("Image example.");
    container.className = "image-example";
    container.innerHTML = `<div class="loader" />`;

    const stream = await noiaClient.openStream({
        src: "https://example.noia.network/samples/image.jpg"
    });

    // Load image bytes
    const imageBytes = await stream.getAllBytes();

    const imageType = "image/jpeg";

    console.info(`Image downloaded (${imageBytes.length} bytes)`);

    const blob = new Blob([imageBytes], { type: imageType });
    const blobUrl = URL.createObjectURL(blob);

    // Render image as bytes
    container.innerHTML = `<img src="${blobUrl}" />`;
}
