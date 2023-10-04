import Konva from "konva";
import { DrawBase } from "../editorUI/canvas";
declare class BrushCVSFunc extends DrawBase {
    Name: string;
    HistoryName: string;
    Tip: string;
    ImgName: string;
    CursorName: string;
    BrushColor: string;
    BrushWidth: number;
    DrawFunction: (Ctx: Konva.Layer, width: number, height: number) => void;
    CompositeOperation: GlobalCompositeOperation;
}
export default BrushCVSFunc;
