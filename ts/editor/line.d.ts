import Konva from "konva";
import { CanvasInterfaceSettings, DrawBase } from "../editorUI/canvas";
declare class LineCVSFunc extends DrawBase {
    Name: string;
    HistoryName: string;
    Tip: string;
    ImgName: string;
    CursorName: string;
    BrushColor: string;
    BrushWidth: number;
    DrawFunction: (Ctx: Konva.Group, width: number, height: number) => void;
    CompositeOperation: GlobalCompositeOperation;
    get Settings(): CanvasInterfaceSettings;
    set Settings(setting: CanvasInterfaceSettings);
}
export default LineCVSFunc;
