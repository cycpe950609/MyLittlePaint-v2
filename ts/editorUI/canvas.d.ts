export interface CanvasInterface {
    Name: string;
    Tip?: string;
    ImgName?: string;
    CursorName?: string;
    CanFinishDrawing: boolean;
    PointerDown?: (e: MouseEvent, scaleFactor: number) => void;
    PointerMove?: (e: MouseEvent, scaleFactor: number) => void;
    PointerUp?: (e: MouseEvent, scaleFactor: number) => void;
    PointerOut?: (e: MouseEvent, scaleFactor: number) => void;
    DrawFunction: (ctx: CanvasRenderingContext2D, width: number, height: number) => void;
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
    PointerDown(e: MouseEvent, scaleFactor: number): void;
    PointerMove(e: MouseEvent, scaleFactor: number): void;
    PointerUp(e: MouseEvent, scaleFactor: number): void;
    PointerOut(e: MouseEvent, scaleFactor: number): void;
    DrawFunction(ctx: CanvasRenderingContext2D, width: number, height: number): void;
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
}
export declare class NoOPCanvas implements CanvasBase {
    update?: ((time: number) => void) | undefined;
    name: string;
    attachCanvas(container: HTMLDivElement): void;
    setFunction(func: CanvasInterface): void;
    resizeCanvas(e?: UIEvent): void;
    removeCanvas(): void;
    render(): void;
}
