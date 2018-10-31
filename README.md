# NOIA Network SDK Examples

LIVE Example here: https://noia-network.github.io/examples/

## Running examples locally

1.  Clone this repository.

```sh
git clone https://github.com/noia-network/examples.git
```

2.  Open cloned project's directory

```sh
$ cd examples
```

3.  Install dependencies

```sh
$ npm install
```

4.  Run examples server

```sh
$ npm start
```

5.  Open server's link http://localhost:8888

## Minimal plain Javascript / TypeScript usage

```ts
import { NoiaClient, NoiaClientContainer } from "@noia-network/sdk";

import * as PieceWorker from "worker-loader!@noia-network/sdk/worker";
import * as Sha1Worker from "worker-loader!rusha/dist/rusha";

NoiaClientContainer.initialize(
    new NoiaClient({
        logger: undefined,
        pieceWorkerConstructor: () => new PieceWorker(),
        sha1WorkerConstructor: () => new Sha1Worker()
    })
);

async function main() {
    const noiaClient = NoiaClientContainer.getClient();

    const imageStream = await noiaClient.openStream({
        src: "https://noia.network/samples/image.jpg"
    });

    const bytes = await imageStream.getBytes({
        start: 0,
        length: imageStream.metadata.torrent.length
    });

    // bytes are available here
}
```

Depending on your build pipeline, you might need to add this import too:
```ts
import "@noia-network/sdk/dist/vendors~main";
```

That's it! Only your imagination is the limit!
