# NOIA Network SDK Examples


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

```
NoiaClient must be initialized
noiaClient.openStream opens a stream with given url of content to be served
Main functions to be used from the stream:
getBytes() - returns required range of bytes;
getAllBytes() - loads all bytes for given content;
Check other exposed stream functions for custom implementations.
```

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
## Minimal plain Javascript / TypeScript usage to get picture using getAllBytes()

```
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
```
## Minimal plain Javascript / TypeScript usage to get video without buffering using getAllBytes()

```
const stream = await noiaClient.openStream({
        src: "https://noia.network/samples/video.mp4"
    });

    // Load video bytes
    const videoBytes = await stream.getAllBytes();

    console.info(`Video downloaded (${videoBytes.length} bytes)`);

    // Render video
    const videoType = "video/mp4";
    container.innerHTML = `
<video controls>
    <source type="video/mp4" src="data:${videoType};base64,${bytesToBase64(videoBytes)}">
</video>`;
```
## Plain Javascript / TypeScript usage to get video with buffering using Rendermedia
## Noia SDK low level functions can be used in other video player implementations for buffering

```
const noiaStream = await noiaClient.openStream({
        src: "https://noia.network/samples/video.mp4"
    });

    // Buffer 1/10th of the video in advance.
    noiaStream.bufferBytes({
        start: 0,
        length: noiaStream.masterData.metadata.bufferLength / 10
    });

    const file: renderMedia.RenderFile = {
        name: "video.mp4",
        length: noiaStream.masterData.metadata.bufferLength,
        createReadStream: (opts: renderMedia.CreateReadStreamOptions = {}) => {
            const start = opts.start || 0;
            const end = opts.end || noiaStream.masterData.metadata.bufferLength - 1;

            let startBytes: number = start;
            return from(async (size, next) => {
                const nextBytesPromise = noiaStream.getBytes({ start: startBytes, length: size });

                const chunksToBuffer = 50;

                // Buffer a few more chunks, while the current frames are shown.
                for (let i = 0; i < chunksToBuffer; i++) {
                    noiaStream.getBytes({ start: startBytes + size * i, length: size });
                }

                const nextBytes = await nextBytesPromise;

                startBytes += size;
                next(null, nextBytes);

                if (startBytes > end) {
                    next(null, null);
                }
            });
        }
    };
```


Depending on your build pipeline, you might need to add this import too:
```ts
import "@noia-network/sdk/dist/vendors~main";
```

That's it! Only your imagination is the limit!
