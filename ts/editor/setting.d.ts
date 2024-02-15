import { VNode } from "snabbdom";
import SidebarInterface from "../editorUI/interface/sidebar";
export type HorizonRangerPropType = {
    min: number;
    max: number;
    defValue: number;
    changeHandler: any;
};
export type ToggleSwitchPropType = {
    value: boolean;
    changeHandler: any;
};
declare class SettingPageSidebar implements SidebarInterface {
    Name: string;
    ImgName?: string;
    Tip?: string;
    HistoryName?: string;
    Visible: boolean;
    Title: () => string;
    Body: () => VNode;
}
export default SettingPageSidebar;
