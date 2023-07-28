import { CanvasInterface } from "../editorUI/canvas";
declare class BrushCVSFunc implements CanvasInterface {
    Name: string;
    Tip: string;
    ImgName: string;
    CursorName: string;
    BrushColor: string;
    BrushWidth: number;
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
export default BrushCVSFunc;
