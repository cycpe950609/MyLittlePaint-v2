import { DrawBase } from "../editorUI/canvas";
declare class LineCVSFunc extends DrawBase {
    Name: string;
    Tip: string;
    ImgName: string;
    CursorName: string;
    BrushColor: string;
    BrushWidth: number;
    DrawFunction: (Ctx: CanvasRenderingContext2D, width: number, height: number) => void;
    CompositeOperation: GlobalCompositeOperation;
}
export default LineCVSFunc;
