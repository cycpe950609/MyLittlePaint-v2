import { CanvasBase, CanvasInterface } from "../editorUI/canvas";
import FunctionInterface from "../editorUI/interface/function";
import ModeFunction from "../editorUI/interface/mode";
import { btnClear, btnRedo, btnSave, btnUndo, btnUpload } from "./menu";
export declare class btnCanvas implements FunctionInterface {
    Name: string;
    ImgName?: string | undefined;
    Tip?: string | (() => string) | undefined;
    private draw_func;
    constructor(func: CanvasInterface);
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
    private render_cvs;
    private render_ctx;
    private draw_func;
    private EventFired;
    private width;
    private height;
    constructor(width: number, height: number);
    private undo_stk_history;
    private redo_stk_history;
    private pushState;
    private finishDrawing;
    attachCanvas(container: HTMLDivElement): void;
    setFunction: (func: CanvasInterface) => void;
    resizeCanvas: (e?: UIEvent) => void;
    removeCanvas: () => void;
    render: () => void;
    open: () => void;
    undo: () => void;
    redo: () => void;
    save(): void;
    clear(): void;
    private scaleFactor;
    private scaleTip;
    private isCtlKeyDown;
    private isShiftDown;
    private scaleTo;
    private cvsMouseWheelHandler;
    private docKeydownHandler;
    private docKeyupHandler;
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
