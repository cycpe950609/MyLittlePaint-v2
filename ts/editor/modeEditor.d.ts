import { CanvasBase, CanvasInterface } from "../editorUI/canvas";
import ModeFunction from "../editorUI/interface/mode";
import { btnClear, btnRedo, btnResetRotate, btnResetScale, btnSave, btnToggleTouch, btnUndo, btnUpload } from "./menu";
import FunctionInterface from "../editorUI/interface/function";
export declare class btnCanvas implements FunctionInterface {
    Name: string;
    ImgName?: string | undefined;
    Tip?: string | (() => string) | undefined;
    private draw_func;
    constructor(func: CanvasInterface);
    StartFunction: (cvs: CanvasBase) => boolean;
}
declare global {
    interface Touch {
        touchType: string;
    }
}
export declare class EditorCanvas implements CanvasBase {
    name: string;
    private scrollDiv;
    private scaleElement;
    private backgroundDiv;
    private cvs;
    private ctx;
    private prev_cvs;
    private prev_ctx;
    private render_cvs;
    private render_ctx;
    private draw_func;
    private EventFired;
    private isPointOut?;
    private width;
    private height;
    isUpdate: boolean;
    constructor(width: number, height: number);
    update?: ((time: number) => void) | undefined;
    private undo_stk_history;
    private redo_stk_history;
    private pushState;
    private finishDrawing;
    private initCanvas;
    private angleScale;
    private dragMoveListener;
    private isDrawing;
    private isDrawRotate;
    attachCanvas(container: HTMLDivElement): void;
    enableDrag(): void;
    disableDrag(): void;
    setFunction(func: CanvasInterface): void;
    resizeCanvas: (e?: UIEvent) => void;
    removeCanvas: () => void;
    render: () => void;
    private drawWithTouch;
    get canDrawWithTouch(): boolean;
    toggleTouch: () => void;
    open: () => void;
    undo: () => void;
    redo: () => void;
    save(): void;
    clear(): void;
    get scaleFactor(): number;
    private scaleTip;
    private normalizeRotate;
    private refreshScaleTip;
    private isCtlKeyDown;
    private isShiftDown;
    private isAltDown;
    private transformTo;
    scaleTo: (scale: number) => void;
    rotateTo: (rotate: number) => void;
    moveTo: (moveX: number, moveY: number) => void;
    private cvsMouseWheelHandler;
    private docKeydownHandler;
    private docKeyupHandler;
}
declare class modeEditor implements ModeFunction {
    Enable: boolean;
    CenterCanvas: EditorCanvas;
    MenuToolbarLeft: (btnCanvas | btnUpload | btnUndo | btnRedo | btnClear)[];
    MenuToolbarRight: (btnResetScale | btnResetRotate | btnToggleTouch | btnSave)[];
    LeftToolbarTop: btnCanvas[];
    StartMode(): void;
    EndMode(): void;
}
export default modeEditor;
