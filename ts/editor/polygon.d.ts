import Konva from "konva";
import { CanvasInterfaceSettings, DrawBase } from "../editorUI/canvas";
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
    DrawFunction: (Ctx: Konva.Group, width: number, height: number) => void;
    CompositeOperation: GlobalCompositeOperation;
    get Settings(): CanvasInterfaceSettings;
    set Settings(setting: CanvasInterfaceSettings);
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
    DrawFunction: (Ctx: Konva.Group, width: number, height: number, angle: number) => void;
    CompositeOperation: GlobalCompositeOperation;
    get Settings(): CanvasInterfaceSettings;
    set Settings(setting: CanvasInterfaceSettings);
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
    DrawFunction: (Ctx: Konva.Group, width: number, height: number, angle: number) => void;
    CompositeOperation: GlobalCompositeOperation;
    get Settings(): CanvasInterfaceSettings;
    set Settings(setting: CanvasInterfaceSettings);
}
