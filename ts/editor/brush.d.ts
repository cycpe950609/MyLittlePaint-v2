import { DrawBase } from "../editorUI/canvas";
import { PaintContext } from "./canvas";
declare class BrushCVSFunc extends DrawBase {
    Name: string;
    HistoryName: string;
    Tip: string;
    ImgName: string;
    CursorName: string;
    BrushColor: string;
    BrushWidth: number;
    DrawFunction: (Ctx: PaintContext, width: number, height: number) => void;
    CompositeOperation: GlobalCompositeOperation;
}
export default BrushCVSFunc;
