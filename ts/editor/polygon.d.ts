import { CanvasInterface } from "../editorUI/canvas";
export declare class CircleCVSFunc implements CanvasInterface {
    Name: string;
    CursorName: string;
    BorderBrush: string;
    BorderWidth: number;
    ContentColor: string;
    CanFilled: boolean;
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
export declare class TriangleCVSFunc implements CanvasInterface {
    Name: string;
    CursorName: string;
    BorderBrush: string;
    BorderWidth: number;
    ContentColor: string;
    CanFilled: boolean;
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
export declare class RectangleCVSFunc implements CanvasInterface {
    Name: string;
    CursorName: string;
    BorderBrush: string;
    BorderWidth: number;
    ContentColor: string;
    CanFilled: boolean;
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
