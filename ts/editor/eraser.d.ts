import Konva from "konva";
import { DrawBase } from "../editorUI/canvas";
declare class EraserCVSFunc extends DrawBase {
    Name: string;
    HistoryName: string;
    Tip: string;
    ImgName: string;
    CursorName: string;
    BrushWidth: number;
    BrushColor: string;
    DrawFunction: (Ctx: Konva.Group) => void;
    CompositeOperation: GlobalCompositeOperation;
}
export default EraserCVSFunc;
