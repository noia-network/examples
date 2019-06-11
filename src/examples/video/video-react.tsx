import * as React from "react";
import * as ReactDOM from "react-dom";
import { NoiaClient, NoiaClientContainer } from "@noia-network/sdk";
import { Video } from "@noia-network/sdk-react";

import * as PieceWorker from "worker-loader!@noia-network/sdk/worker";
import * as Sha1Worker from "worker-loader!rusha/dist/rusha";

import "@noia-network/sdk/dist/vendors~main";

import "./video.scss";

const noiaClient = new NoiaClient({
    logger: undefined,
    pieceWorkerConstructor: () => new PieceWorker(),
    sha1WorkerConstructor: () => new Sha1Worker()
});
NoiaClientContainer.initialize(noiaClient);

interface ExampleViewProps {
    noiaClient: NoiaClient;
}

export class ExampleView extends React.Component<ExampleViewProps> {
    public render(): JSX.Element {
        return (
            <div className="video-example">
                <Video
                    controls={true}
                    loop={true}
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
                    mimeType="video/mp4"
                    loaderComponent={<div className="loader" />}
                />
            </div>
        );
    }
}

export async function run(container: HTMLElement): Promise<void> {
    console.info("Video with React example.");

    ReactDOM.render(<ExampleView noiaClient={noiaClient} />, container);
}
