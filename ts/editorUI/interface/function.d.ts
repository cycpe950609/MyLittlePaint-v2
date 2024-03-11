import { CanvasBase } from "../canvas";
import { SubModeFunction } from "./mode";
export declare enum PropertyType {
    String = "string",
    Integer = "integer",
    Float = "float",
    Color = "color",
    StringList = "stringlist",
    IntegerList = "integerlist",
    FloatList = "floatlist",
    ColorList = "colorlist"
}
export type PropertyItem = {
    ID: string;
    Label: string;
    Type: PropertyType;
    Info: string;
    Value: string | number | string[] | number[];
};
export type NextFunctionState = {
    isChangeTo: boolean;
    finishSubMode?: boolean;
    subMode?: SubModeFunction;
};
export interface FunctionInterface {
    Name: string;
    ImgName?: string;
    Tip?: string | (() => string);
    HistoryName?: string;
    StartFunction: (cvs: CanvasBase) => void | Promise<void> | NextFunctionState | Promise<NextFunctionState>;
    EndFunction?: (cvs: CanvasBase) => void;
}
export default FunctionInterface;
export declare class NoOPFunc implements FunctionInterface {
    constructor(idx: number);
    Name: string;
    ImgName: string;
    Tip: string;
    StartFunction(cvs: CanvasBase): void;
    MouseDown: (e: UIEvent) => void;
}
