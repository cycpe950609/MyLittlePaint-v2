import FunctionInterface from "./interface/function";
import Snabbdom from "@herp-inc/snabbdom-jsx";
export interface ToolbarInterface {
    hide: () => void;
    show: () => void;
    size: () => number;
    hasChildren: () => boolean;
}
export type createFuncType<ButtonInfoType> = (listName: string, name: string, arg0: ButtonInfoType) => FunctionInterface;
export declare class ToolbarPart<ButtonInfoType> {
    private name;
    constructor(name: string);
    clear(): void;
    addButtonList(funcList?: ButtonInfoType[]): string[];
    addButton(func: ButtonInfoType): string;
    removeButton(id: string): boolean;
    size(): number;
    hasChildren(): boolean;
}
declare class Toolbar<ButtonInfoType> {
    Top: ToolbarPart<ButtonInfoType>;
    Bottom: ToolbarPart<ButtonInfoType>;
    constructor(prefix: string, postfix: string, createFunc: createFuncType<ButtonInfoType>);
    removeButton(id: string): void;
    clear(): void;
    size(): number;
    hasChildren(): boolean;
}
export default Toolbar;
export type ToolbarPropsType = {
    type: string;
};
export type ToolbarCompPropsType = {
    type: string;
};
export declare const ToolbarComp: Snabbdom.Component<ToolbarCompPropsType>;
