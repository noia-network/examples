import "./assets/reset.scss";
import "./assets/main.scss";
import "./assets/loader.scss";

import "@noia-network/sdk/dist/vendors~main";
import { NoiaClient } from "@noia-network/sdk";
import * as Worker from "worker-loader!@noia-network/sdk/worker";

import * as ImageExample from "./examples/image/image";
import * as ImageReactExample from "./examples/image/image-react";
import * as VideoExample from "./examples/video/video";
import * as ModelsExample from "./examples/models/models";

/**
 * Just a convenience function to not duplicate this code all over again
 * @param containerId Id for container
 */
export function createExampleContainer(containerId: string, title: string): HTMLDivElement {
  const root = document.getElementById("root")!;
  const div = document.createElement("div");
  div.id = containerId;
  div.className = "example-container";
  div.innerHTML = `<h2>${title}</h2>`;
  const innerDiv = document.createElement("div");
  div.appendChild(innerDiv);
  root.appendChild(div);
  return innerDiv;
}

const noiaClient = new NoiaClient(() => new Worker());

document.addEventListener(
  "DOMContentLoaded",
  (): void => {
    ImageExample.run(createExampleContainer("image", "Image example"), noiaClient);
    ImageReactExample.run(createExampleContainer("image", "Image example"), noiaClient);
    VideoExample.run(createExampleContainer("video", "Video example"), noiaClient);
    ModelsExample.run(createExampleContainer("models", "Models example"), noiaClient);
  }
);
