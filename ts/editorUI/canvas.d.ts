export interface CanvasInterface {
    CanFinishDrawing: boolean;
    MouseDown?: (e: MouseEvent, scaleFactor: number) => void;
    MouseMove?: (e: MouseEvent, scaleFactor: number) => void;
    MouseUp?: (e: MouseEvent, scaleFactor: number) => void;
    MouseOut?: (e: MouseEvent, scaleFactor: number) => void;
    DrawFunction: (ctx: CanvasRenderingContext2D, width: number, height: number) => void;
    CompositeOperation: GlobalCompositeOperation;
}
export declare class NoOPCVSFunc implements CanvasInterface {
    CanFinishDrawing: boolean;
    DrawFunction: (ctx: CanvasRenderingContext2D) => void;
    CompositeOperation: GlobalCompositeOperation;
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
