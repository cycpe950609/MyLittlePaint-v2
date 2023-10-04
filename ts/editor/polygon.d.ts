import Konva from "konva";
import { DrawBase } from "../editorUI/canvas";
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
    DrawFunction: (Ctx: Konva.Layer, width: number, height: number) => void;
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
    DrawFunction: (Ctx: Konva.Layer, width: number, height: number, angle: number) => void;
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
    DrawFunction: (Ctx: Konva.Layer, width: number, height: number, angle: number) => void;
    CompositeOperation: GlobalCompositeOperation;
}
