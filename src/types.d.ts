// declare module "@noia-network/sdk" {
//     export class NoiaClient {
//         constructor(workerConstructor: () => Worker)
//     }
// }

declare module "stl-viewer" {
    import * as React from "react";

    namespace StlViewer {
        interface StlViewerProps {
            className?: string;
            url?: string;
            width?: number;
            height?: number;
            backgroundColor?: string;
            modelColor?: string;
            rotate?: boolean;
            orbitControls?: boolean;
            cameraX?: number;
            cameraY?: number;
            cameraZ?: number;
            lightX?: number;
            lightY?: number;
            lightZ?: number;
            lightColor?: string;
            rotationSpeeds?: number[];
        }
    }

    class StlViewer extends React.Component<StlViewer.StlViewerProps> {}

    export = StlViewer;
}

declare module "render-media" {
    import * as stream from "stream";

    export interface CreateReadStreamOptions {
        start?: number;
        end?: number;
    }

    export interface RenderFile {
        name: string;
        length?: number;
        createReadStream: (options?: CreateReadStreamOptions) => void;
    }

    export interface RenderMediaOptions {
        /**
         * Autoplay video/audio files.
         * @default true
         */
        autoplay?: boolean;
        /**
         * Mute video/audio files.
         * @default false
         */
        muted?: boolean;
        /**
         * Show video/audio player controls.
         * @default true
         */
        controls?: boolean;
        /**
         * Files above this size will skip the "blob" strategy and fail.
         * @default 200 * 1000 * 1000 bytes
         */
        maxBlobLength?: number;
    }

    export function append(
        file: RenderFile,
        rootElement: HTMLElement,
        options?: RenderMediaOptions,
        callback?: (error: Error | null, element: HTMLElement) => void
    ): void;

    export function render(
        file: unknown,
        element: HTMLElement,
        options: RenderMediaOptions,
        callback?: (error: Error | null, element: HTMLElement) => void
    ): void;

    export const mime: { [extension: string]: string };
}

declare module "readable-stream" {
    import * as stream from "stream";
    export = stream;
}
