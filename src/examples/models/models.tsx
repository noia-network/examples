import * as React from "react";
import * as ReactDOM from "react-dom";
import * as StlViewer from "stl-viewer";
import { NoiaClient } from "@noia-network/sdk";
import { bytesToBase64 } from "../../base64";
import "@noia-network/sdk/dist/vendors~main";
import "./models.scss";

interface Props {
    url: string;
}

class ModelViewer extends React.Component<Props> {
    public render(): JSX.Element {
        return <StlViewer url={this.props.url} modelColor="#808080" cameraX={180} />;
    }
}

export async function run(container: HTMLElement, noiaClient: NoiaClient): Promise<void> {
    console.info("Models example.");
    container.className = "models-example";
    container.innerHTML = `<div class="loader" />`;

    const stream = await noiaClient.openStream({
        // 64mb bust model of Gutenberg
        // src: "ipfs:QmZzRF2DwNi2RqFiZRZqfP7UAXyxte4LLfsqbQ1aQ15hh4"
        src: "https://noia.network/samples/model.bin"
    });

    // Load model bytes
    const modelBytes = await stream.getAllBytes();

    console.info(`Model downloaded (${modelBytes.length} bytes)`);
    const modelType: string = "application/sla";
    ReactDOM.render(<ModelViewer url={`data:${modelType};base64,${bytesToBase64(modelBytes)}`} />, container);
}
