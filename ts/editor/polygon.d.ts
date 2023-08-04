import { DrawBase } from "../editorUI/canvas";
import { PaintContext } from "./canvas";
export declare class CircleCVSFunc extends DrawBase {
    Name: string;
    HistoryName: string;
    ImgName: string;
    Tip: string;
    CursorName: string;
    BorderBrush: string;
    BorderWidth: number;
    ContentColor: string;
    CanFilled: boolean;
    DrawFunction: (Ctx: PaintContext, width: number, height: number) => void;
    CompositeOperation: GlobalCompositeOperation;
}
export declare class TriangleCVSFunc extends DrawBase {
    Name: string;
    HistoryName: string;
    ImgName: string;
    Tip: string;
    CursorName: string;
    BorderBrush: string;
    BorderWidth: number;
    ContentColor: string;
    CanFilled: boolean;
    DrawFunction: (Ctx: PaintContext, width: number, height: number, angle: number) => void;
    CompositeOperation: GlobalCompositeOperation;
}
export declare class RectangleCVSFunc extends DrawBase {
    Name: string;
    HistoryName: string;
    ImgName: string;
    Tip: string;
    CursorName: string;
    BorderBrush: string;
    BorderWidth: number;
    ContentColor: string;
    CanFilled: boolean;
    DrawFunction: (Ctx: PaintContext, width: number, height: number, angle: number) => void;
    CompositeOperation: GlobalCompositeOperation;
}
