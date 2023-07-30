import { DrawBase } from "../editorUI/canvas";
declare class EraserCVSFunc extends DrawBase {
    Name: string;
    HistoryName: string;
    Tip: string;
    ImgName: string;
    CursorName: string;
    BrushWidth: number;
    BrushColor: string;
    DrawFunction: (Ctx: CanvasRenderingContext2D) => void;
    CompositeOperation: GlobalCompositeOperation;
}
export default EraserCVSFunc;
