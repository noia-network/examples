import "@noia-network/sdk/dist/vendors~main";
import "./image.scss";
import { NoiaClient } from "@noia-network/sdk";
import { bytesToBase64 } from "../../base64";

export async function run(container: HTMLElement, noiaClient: NoiaClient): Promise<void> {
  console.info("Image example.");
  container.className = "image-example";
  container.innerHTML = `<div class="loader" />`;

  // Load image bytes
  const imageBytes = await noiaClient.download({
    src: "ipfs:QmeMHGKY3WWTt41EK5sntQVuPY8Wcq7R47KEE4jm4nNQTu"
  });

  console.info(`Image downloaded (${imageBytes.length} bytes)`);

  // Render image as bytes
  const imageType = "image/jpeg";
  container.innerHTML = `<img src="data:${imageType};base64,${bytesToBase64(
    imageBytes
  )}" />`;
}
