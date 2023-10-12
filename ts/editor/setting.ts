import { h, VNode } from "snabbdom";
import { CanvasInterfaceSettings, CanvasSettingEntry, CanvasSettingType } from "../editorUI/canvas";
import EditorUI from "../editorUI/EditorUI";
import SidebarInterface from "../editorUI/interface/sidebar";
import { HDIV, HSPAN } from "../editorUI/util/HHTMLElement";
import { EditorCanvas } from "./modeEditor";

const HHorizonRanger = (label: string, min: number, max: number, defValue: number, changeHandler: any) => {
    return HDIV("w-full flex flex-row",[
        HSPAN("w-fit", label),
        h('input',{props: {
            type: "range",
            min: min,
            max: max,
            value: defValue,
            step: 1,
        }, on: {change: changeHandler}}),
        HSPAN("w-fit", defValue.toFixed(0).toString())
    ])
}

class SettingPageSidebar implements SidebarInterface {
    Name: string = "SettingsPage"; // Tips of ToolButton
    ImgName?: string = "brush";
    Tip?: string = "Settings"; // Tip showed on StatusBar
    HistoryName?: string; // Undefined if dont want to store in redo/undo hostory
    Visible: boolean = true;
    Title: () => string = () => {
        let name = (window.editorUI.CenterCanvas as EditorCanvas).settings.Name;
        if(name === undefined) return 'Settings';
        return `Settings of ${name}`;
    };
    Body: ()=> VNode = () => {
        let setting = (window.editorUI.CenterCanvas as EditorCanvas).settings;
        console.log(`[DEB] Setting of ${setting.Name}`, setting.Settings);
        if(setting.Name === undefined || setting.Settings == undefined)
            return HDIV("w-full","Empty Setting Page");
        let settingList: VNode[] = [];
        setting.Settings.forEach((setting, settingName: string) => {
            switch (setting.type) {
                case CanvasSettingType.Number:
                    if(setting.info === undefined || (setting.info as number[]).length !== 2) throw new Error("INTERNAL_ERROR: Setting info has wrong type");
                    settingList.push(HHorizonRanger(setting.label,setting.info[0],setting.info[1],setting.value,(ev: Event)=>{
                        let newSet: CanvasInterfaceSettings = {
                            Settings: new Map<string,CanvasSettingEntry<any>>([
                                [settingName, {
                                    type: setting.type,
                                    label:setting.label,
                                    info: setting.info,
                                    value: parseInt((ev.target as HTMLInputElement).value)
                                }]
                            ])
                        };
                        (window.editorUI.CenterCanvas as EditorCanvas).settings = newSet;
                    }));
                    break;
                default:
                    settingList.push(HDIV("w-full",`Unsupported Setting Type ${setting.type}`));
                    break;
            }
        })
        return HDIV("w-full", settingList);
    };
}
export default SettingPageSidebar;