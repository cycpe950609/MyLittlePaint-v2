import FunctionInterface from "./interface/function";
import SidebarInterface from "./interface/sidebar";
import Snabbdom from "@herp-inc/snabbdom-jsx";
declare class Sidebar implements FunctionInterface {
    Name: string;
    ImgName?: string;
    Tip?: string;
    private listName;
    private interfaceUUID;
    constructor(listName: string, uuid: string, sidebar: SidebarInterface);
    showSidebar(): void;
    hiddenSidebar(): void;
    toggleSidebar(): void;
    StartFunction(): void;
}
export default Sidebar;
export declare const SidebarComp: Snabbdom.Component<{}>;
