import "@noia-network/sdk/dist/vendors~main";
import { NoiaClient } from "@noia-network/sdk";
import { bytesToBase64 } from "../../base64";
import "./image.scss";

export async function run(container: HTMLElement, noiaClient: NoiaClient): Promise<void> {
  console.info("Image example.");
  container.className = "image-example";
  container.innerHTML = `<div class="loader" />`;

  const stream = await noiaClient.openStream({
    src: "https://noia.network/samples/image.jpg"
  });

  // Load image bytes
  const imageBytes = await stream.getAllBytes();

  console.info(`Image downloaded (${imageBytes.length} bytes)`);

  // Render image as bytes
  const imageType = "image/jpeg";
  container.innerHTML = `<img src="data:${imageType};base64,${bytesToBase64(
    imageBytes
  )}" />`;
}
