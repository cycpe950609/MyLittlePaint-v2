import { CanvasBase, CanvasInterface, CanvasInterfaceSettings } from "../editorUI/canvas";
import { ModeFunction, FunctionInterface } from "../editorUI";
import { btnClear, btnRedo, btnResetRotate, btnResetScale, btnSave, btnToggleTouch, btnUndo } from "./menu";
import LayerMgrSidebar, { LayerManager } from './layer';
import SettingPageSidebar from "./setting";
export declare class btnCanvas implements FunctionInterface {
    Name: string;
    ImgName?: string | undefined;
    Tip?: string | (() => string) | undefined;
    private loadModule;
    constructor(name: string, imgName: string, tip: string, loadModule: () => Promise<CanvasInterface>);
    private draw_func?;
    StartFunction: (cvs: CanvasBase) => Promise<boolean>;
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
    private cnt;
    private render_layer;
    LayerManager: LayerManager;
    private draw_func;
    private EventFired;
    private isPointOut?;
    private width;
    private height;
    isUpdate: boolean;
    constructor(width: number, height: number);
    update?: ((time: number) => void) | undefined;
    private historyMagr;
    undo: () => void;
    redo: () => void;
    private finishDrawing;
    private initCanvas;
    private angleScale;
    private dragMoveListener;
    private isDrawing;
    private isDrawRotate;
    private layerInfoList;
    private setLayerInfoList;
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
    get settings(): CanvasInterfaceSettings;
    set settings(setting: CanvasInterfaceSettings);
}
declare class modeEditor implements ModeFunction {
    Enable: boolean;
    CenterCanvas: EditorCanvas;
    MenuToolbarLeft: (btnUndo | btnRedo | btnClear | btnCanvas)[];
    MenuToolbarRight: (btnResetScale | btnResetRotate | btnToggleTouch | btnSave)[];
    LeftToolbarTop: btnCanvas[];
    RightToolbarTop: (LayerMgrSidebar | SettingPageSidebar)[];
    StartMode(): void;
    EndMode(): void;
}
export default modeEditor;
