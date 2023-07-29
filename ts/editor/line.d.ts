import { CanvasInterface } from "../editorUI/canvas";
declare class LineCVSFunc implements CanvasInterface {
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
    MouseDown: (e: MouseEvent, scaleFactor: number) => void;
    MouseMove: (e: MouseEvent, scaleFactor: number) => void;
    MouseUp: (e: MouseEvent, scaleFactor: number) => void;
    MouseOut: (e: MouseEvent, scaleFactor: number) => void;
    CanFinishDrawing: boolean;
    DrawFunction: (Ctx: CanvasRenderingContext2D, width: number, height: number) => void;
    CompositeOperation: GlobalCompositeOperation;
}
export default LineCVSFunc;
