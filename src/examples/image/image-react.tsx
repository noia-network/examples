import "@noia-network/sdk/dist/vendors~main";
import "./image.scss";
import { NoiaClient } from "@noia-network/sdk";
import { bytesToBase64 } from "../../base64";
import * as React from "react";
import * as ReactDOM from "react-dom";

//#region Prepare
let client: NoiaClient;
//#endregion

//#region React Image
interface Props {
  src: string;
}

interface State {
  bytes?: Buffer;
}

export class Image extends React.Component<Props, State> {
  public state: State = {};

  public async componentDidMount(): Promise<void> {
    const imageBytes = await client.download({
      src: this.props.src
    });
    console.info(`Image downloaded (${imageBytes.length} bytes)`);
    this.setState(() => ({
      bytes: imageBytes
    }));
  }

  public render(): JSX.Element {
    // Show loader until we have image bytes
    if (this.state.bytes == null) {
      return <div className="loader" />;
    }

    const imageType = "image/jpeg";
    return (
      <img
        src={`data:${imageType};base64,${bytesToBase64(this.state.bytes)}`}
      />
    );
  }
}
//#endregion

interface AppProps {
  noiaClient: NoiaClient;
}

export class App extends React.Component<AppProps> {
  public render(): JSX.Element {
    return (
      <div>
        <Image src="ipfs:QmeMHGKY3WWTt41EK5sntQVuPY8Wcq7R47KEE4jm4nNQTu" />
      </div>
    );
  }
}

export async function run(
  container: HTMLElement,
  noiaClient: NoiaClient
): Promise<void> {
  console.info("Image with React example.");
  container.className = "image-example";
  client = noiaClient;

  ReactDOM.render(<App noiaClient={noiaClient} />, container);
}
