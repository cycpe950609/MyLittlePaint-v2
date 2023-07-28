import { CanvasInterface } from "../editorUI/canvas";
declare class EraserCVSFunc implements CanvasInterface {
    Name: string;
    Tip: string;
    ImgName: string;
    CursorName: string;
    BrushWidth: number;
    BrushColor: string;
    private LastX;
    private LastY;
    private NextX;
    private NextY;
    private ifDrawing;
    private ifMouseMove;
    MouseDown: (e: MouseEvent) => void;
    MouseMove: (e: MouseEvent) => void;
    MouseUp: (e: MouseEvent) => void;
    MouseOut: (e: MouseEvent) => void;
    CanFinishDrawing: boolean;
    DrawFunction: (Ctx: CanvasRenderingContext2D) => void;
    CompositeOperation: GlobalCompositeOperation;
}
export default EraserCVSFunc;
