import { CanvasBase } from "../editorUI/canvas";
import FunctionInterface from "../editorUI/interface/function";
export declare class btnUpload implements FunctionInterface {
    Name: string;
    ImgName: string;
    Tip: string;
    constructor();
    StartFunction: (cvs: CanvasBase) => void;
}
export declare class btnUndo implements FunctionInterface {
    Name: string;
    ImgName: string;
    Tip: string;
    constructor();
    StartFunction: (cvs: CanvasBase) => void;
}
export declare class btnRedo implements FunctionInterface {
    Name: string;
    ImgName: string;
    Tip: string;
    constructor();
    StartFunction: (cvs: CanvasBase) => void;
}
export declare class btnClear implements FunctionInterface {
    Name: string;
    ImgName: string;
    Tip: string;
    constructor();
    StartFunction: (cvs: CanvasBase) => void;
}
export declare class btnSave implements FunctionInterface {
    Name: string;
    ImgName: string;
    Tip: string;
    constructor();
    StartFunction: (cvs: CanvasBase) => void;
}
export declare class btnToggleTouch implements FunctionInterface {
    Name: string;
    ImgName: string;
    Tip: string;
    constructor();
    StartFunction: (cvs: CanvasBase) => void;
}
export declare class btnResetScale implements FunctionInterface {
    Name: string;
    ImgName: string;
    Tip: string;
    constructor();
    StartFunction: (cvs: CanvasBase) => void;
}
export declare class btnResetRotate implements FunctionInterface {
    Name: string;
    ImgName: string;
    Tip: string;
    constructor();
    StartFunction: (cvs: CanvasBase) => void;
}
