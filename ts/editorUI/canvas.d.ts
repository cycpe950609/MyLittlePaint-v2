import Konva from "konva";
export type PaintEvent = {
    X: number;
    Y: number;
    type: "touch" | "mouse" | "pen";
    pressure: number;
};
export interface CanvasInterface {
    Name: string;
    HistoryName?: string;
    Tip?: string;
    ImgName?: string;
    CursorName?: string;
    CanFinishDrawing: boolean;
    PointerDown?: (e: PaintEvent) => void;
    PointerMove?: (e: PaintEvent) => void;
    PointerUp?: (e: PaintEvent) => void;
    PointerOut?: (e: PaintEvent) => void;
    DrawFunction: (ctx: Konva.Layer, width: number, height: number, rotate: number) => void;
    CompositeOperation: GlobalCompositeOperation;
}
export declare class DrawBase implements CanvasInterface {
    Name: string;
    private _canfinishDrawing;
    get CanFinishDrawing(): boolean;
    protected LastX: number;
    protected LastY: number;
    protected NextX: number;
    protected NextY: number;
    protected ifDrawing: boolean;
    protected ifMouseMove: boolean;
    PointerDown(e: PaintEvent): void;
    PointerMove(e: PaintEvent): void;
    PointerUp(e: PaintEvent): void;
    PointerOut(e: PaintEvent): void;
    protected rotatedDelta(radian: number): [number, number];
    protected rotatedPoint(x: number, y: number, radian: number): [number, number];
    DrawFunction(ctx: Konva.Layer, width: number, height: number, rotate: number): void;
    CompositeOperation: GlobalCompositeOperation;
}
export declare class NoOPCVSFunc extends DrawBase {
}
export interface CanvasBase {
    name: string;
    attachCanvas: (container: HTMLDivElement) => void;
    setFunction: (func: CanvasInterface) => void;
    resizeCanvas: (e?: UIEvent) => void;
    removeCanvas: () => void;
    render: () => void;
    update?: (time: DOMHighResTimeStamp) => void;
    isUpdate: boolean;
}
export declare class NoOPCanvas implements CanvasBase {
    update?: ((time: number) => void) | undefined;
    name: string;
    attachCanvas(container: HTMLDivElement): void;
    setFunction(func: CanvasInterface): void;
    resizeCanvas(e?: UIEvent): void;
    removeCanvas(): void;
    render(): void;
    isUpdate: boolean;
}
