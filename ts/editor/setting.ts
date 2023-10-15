import { h, VNode } from "snabbdom";
import { CanvasInterfaceSettings, CanvasSettingEntry, CanvasSettingType } from "../editorUI/canvas";
// import EditorUI from "../editorUI/EditorUI";
import SidebarInterface from "../editorUI/interface/sidebar";
import { HDIV, HLABEL, HSPAN, HTABLE, HTD, HTR } from "../editorUI/util/HHTMLElement";
import { EditorCanvas } from "./modeEditor";

const HHorizonRanger = (min: number, max: number, defValue: number, changeHandler: any) => {
    return HDIV("w-full flex flex-row",[
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

const HToggleSwitch = (value: boolean, changeHandler: any) => {
    // <label class="switch">
    //     <input type="checkbox">
    //     <span class="slider"></span>
    // </label>
    return HLABEL("switch",[
        h('input',{props: { type: "checkbox", checked: value}, on: {change: changeHandler}}),
        HSPAN("slider","")
    ])
};

class SettingPageSidebar implements SidebarInterface {
    Name: string = "SettingsPage"; // Tips of ToolButton
    ImgName?: string = "property";
    Tip?: string = "Settings"; // Tip showed on StatusBar
    HistoryName?: string; // Undefined if dont want to store in redo/undo hostory
    Visible: boolean = false;
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
                    settingList.push(
                        HTR("w-full",[
                            HTD(setting.label),
                            HTD(HHorizonRanger(setting.info[0],setting.info[1],setting.value,(ev: Event)=>{
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
                            }))
                        ])
                    );
                    break;
                case CanvasSettingType.Color:
                    settingList.push(
                        HTR("w-full",[
                            HTD(setting.label),
                            HTD(h("input",{
                                props: {
                                    type: "color",
                                    value: setting.value,
                                }, 
                                on: { change : (ev: Event) => { 
                                    let newSet: CanvasInterfaceSettings = {
                                        Settings: new Map<string,CanvasSettingEntry<any>>([
                                            [settingName, {
                                                type: setting.type,
                                                label:setting.label,
                                                info: setting.info,
                                                value: (ev.target as HTMLInputElement).value
                                            }]
                                        ])
                                    };
                                    (window.editorUI.CenterCanvas as EditorCanvas).settings = newSet;
                                } }
                            }))
                        ])
                    );
                    break;
                case CanvasSettingType.Boolean:
                    settingList.push(
                        HTR("w-full",[
                            HTD(setting.label),
                            HTD(
                                HToggleSwitch(setting.value,(ev: Event) => {
                                    console.log("[DEB] Boolean : ",(ev.target as HTMLInputElement).value)
                                    let newSet: CanvasInterfaceSettings = {
                                        Settings: new Map<string,CanvasSettingEntry<any>>([
                                            [settingName, {
                                                type: setting.type,
                                                label:setting.label,
                                                info: setting.info,
                                                value: (ev.target as HTMLInputElement).checked
                                            }]
                                        ])
                                    };
                                    (window.editorUI.CenterCanvas as EditorCanvas).settings = newSet;
                                })
                            )
                        ])
                    );
                    break;
                default:
                    settingList.push(HDIV("w-full",`Unsupported Setting Type ${setting.type}`));
                    break;
            }
        })

        return HTABLE("w-full b-none align-right", [
            HTR("layers-header", [
                HTD('Property'),
                HTD('Value'),
            ])
        ],settingList);
    };
}
export default SettingPageSidebar;