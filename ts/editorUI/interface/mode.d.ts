import { CanvasBase, NoOPCanvas } from "../canvas";
import FunctionInterface from "./function";
import SidebarInterface from "./sidebar";
export interface ModeFunctionBase {
    MenuToolbarLeft?: FunctionInterface[];
    MenuToolbarRight?: FunctionInterface[];
    LeftToolbarTop?: FunctionInterface[];
    LeftToolbarBottom?: FunctionInterface[];
    RightToolbarTop?: SidebarInterface[];
    RightToolbarBottom?: SidebarInterface[];
    StartMode?: () => void;
    EndMode?: () => void;
}
export interface SubModeFunction extends ModeFunctionBase {
    clearToolbar?: boolean;
}
export interface ModeFunction extends ModeFunctionBase {
    ModeSelectorText?: string;
    Tips?: string;
    Enable: boolean;
    CenterCanvas: CanvasBase;
}
export default ModeFunction;
export declare class modeNoop implements ModeFunction {
    ModeName: string;
    Enable: boolean;
    CenterCanvas: NoOPCanvas;
}
