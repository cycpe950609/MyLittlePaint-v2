import { CanvasBase, CanvasInterface } from "../editorUI/canvas";
import FunctionInterface from "../editorUI/interface/function";
import ModeFunction from "../editorUI/interface/mode";
import { btnClear, btnRedo, btnSave, btnUndo, btnUpload } from "./menu";
export declare class btnCanvas implements FunctionInterface {
    Name: string;
    ImgName?: string | undefined;
    Tip?: string | (() => string) | undefined;
    private draw_func;
    constructor(name: string, imgName: string, tip: string, func: CanvasInterface);
    StartFunction: (cvs: CanvasBase) => boolean;
}
export declare class EditorCanvas implements CanvasBase {
    name: string;
    private scrollDiv;
    private backgroundDiv;
    private cvs;
    private ctx;
    private prev_cvs;
    private prev_ctx;
    private draw_func;
    private EventFired;
    private width;
    private height;
    constructor(width: number, height: number);
    FinishDrawing(): void;
    attachCanvas(container: HTMLDivElement): void;
    setFunction: (func: CanvasInterface) => void;
    resizeCanvas: (e?: UIEvent) => void;
    removeCanvas: () => void;
    render: () => void;
    open: () => void;
    private stk_history;
    private his_step;
    undo: () => void;
    redo: () => void;
    save(): void;
    clear(): void;
}
declare class modeEditor implements ModeFunction {
    Enable: boolean;
    CenterCanvas: EditorCanvas;
    MenuToolbarLeft: (btnUpload | btnUndo | btnRedo | btnClear | btnCanvas)[];
    MenuToolbarRight: btnSave[];
    LeftToolbarTop: btnCanvas[];
    StartMode(): void;
    EndMode(): void;
}
export default modeEditor;
