import { CanvasBase } from "../editorUI/canvas";
import FunctionInterface from "../editorUI/interface/function";
declare class btnSave implements FunctionInterface {
    Name: string;
    ImgName: string;
    Tip: string;
    constructor();
    StartFunction: (cvs: CanvasBase) => boolean;
}
export default btnSave;
