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
