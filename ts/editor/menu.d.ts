import { CanvasBase } from "../editorUI/canvas";
import FunctionInterface from "../editorUI/interface/function";
export declare class btnUpload implements FunctionInterface {
    Name: string;
    ImgName: string;
    Tip: string;
    constructor();
    StartFunction: (cvs: CanvasBase) => boolean;
}
export declare class btnUndo implements FunctionInterface {
    Name: string;
    ImgName: string;
    Tip: string;
    constructor();
    StartFunction: (cvs: CanvasBase) => boolean;
}
export declare class btnRedo implements FunctionInterface {
    Name: string;
    ImgName: string;
    Tip: string;
    constructor();
    StartFunction: (cvs: CanvasBase) => boolean;
}
export declare class btnClear implements FunctionInterface {
    Name: string;
    ImgName: string;
    Tip: string;
    constructor();
    StartFunction: (cvs: CanvasBase) => boolean;
}
export declare class btnSave implements FunctionInterface {
    Name: string;
    ImgName: string;
    Tip: string;
    constructor();
    StartFunction: (cvs: CanvasBase) => boolean;
}
