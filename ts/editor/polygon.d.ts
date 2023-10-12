import Konva from "konva";
import { CanvasInterfaceSettings, DrawBase } from "../editorUI/canvas";
export declare class PolygonBase extends DrawBase {
    CursorName: string;
    BorderBrush: string;
    BorderWidth: number;
    ContentColor: string;
    CanFilled: boolean;
    get Settings(): CanvasInterfaceSettings;
    set Settings(setting: CanvasInterfaceSettings);
}
export declare class CircleCVSFunc extends PolygonBase {
    Name: string;
    HistoryName: string;
    ImgName: string;
    Tip: string;
    DrawFunction: (Ctx: Konva.Group, width: number, height: number) => void;
}
export declare class PathDraw extends PolygonBase {
    Path: string;
    private isVar;
    private validPath;
    DrawFunction: (Ctx: Konva.Group, width: number, height: number, angle: number) => void;
}
export declare class TriangleCVSFunc extends PathDraw {
    Name: string;
    HistoryName: string;
    ImgName: string;
    Tip: string;
    Path: string;
}
export declare class RectangleCVSFunc extends PathDraw {
    Name: string;
    HistoryName: string;
    ImgName: string;
    Tip: string;
    Path: string;
}
