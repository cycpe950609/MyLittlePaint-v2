import { DrawBase } from "../editorUI/canvas";
import { PaintContext } from "./canvas";
declare class EraserCVSFunc extends DrawBase {
    Name: string;
    HistoryName: string;
    Tip: string;
    ImgName: string;
    CursorName: string;
    BrushWidth: number;
    BrushColor: string;
    DrawFunction: (Ctx: PaintContext) => void;
    CompositeOperation: GlobalCompositeOperation;
}
export default EraserCVSFunc;
