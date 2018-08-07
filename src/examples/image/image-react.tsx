import * as React from "react";
import * as ReactDOM from "react-dom";
import { NoiaClient, NoiaClientContainer } from "@noia-network/sdk";
import * as Worker from "worker-loader!@noia-network/sdk/worker";
import { Image } from "@noia-network/sdk-react";
import "@noia-network/sdk/dist/vendors~main";

import "./image.scss";

const noiaClient = new NoiaClient(() => new Worker());
NoiaClientContainer.initialize(noiaClient);

interface ExampleViewProps {
  noiaClient: NoiaClient;
}

export class ExampleView extends React.Component<ExampleViewProps> {
  public render(): JSX.Element {
    return (
      <div className="image-example">
        <Image
          src="https://noia.network/samples/image.jpg"
          loaderComponent={<div className="loader" />}
        />
      </div>
    );
  }
}

export async function run(
  container: HTMLElement
): Promise<void> {
  console.info("Image with React example.");

  ReactDOM.render(<ExampleView noiaClient={noiaClient} />, container);
}
