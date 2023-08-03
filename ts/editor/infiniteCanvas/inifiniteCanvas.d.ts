import L from "leaflet";
import "./canvas.css";
import { CanvasBase, CanvasInterface } from "../../editorUI/canvas";
export type GlobalState = {
    map: L.Map;
    funcInUsed: CanvasInterface;
    isDrawing: boolean;
};
export declare const DebugCoordsLayer: (new (...args: any[]) => any) & typeof L.Class;
export declare class InfiniteCanvasLayer extends L.GridLayer implements CanvasBase {
    private state;
    private EventFired;
    constructor(getGlobalState: () => GlobalState);
    name: string;
    attachCanvas: (container: HTMLDivElement) => void;
    private draw_func;
    setFunction: (func: CanvasInterface) => void;
    resizeCanvas: (e?: UIEvent | undefined) => void;
    removeCanvas: () => void;
    render: () => void;
    update?: ((time: number) => void) | undefined;
    isUpdate: boolean;
    private finishDrawing;
    createTile(coords: L.Coords): HTMLCanvasElement;
}
declare class InfiniteCanvas {
    constructor();
    private container;
    addTo(CNTId: string | HTMLDivElement): void;
}
export default InfiniteCanvas;
