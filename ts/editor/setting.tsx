import { VNode } from "snabbdom";
import type Snabbdom from '@herp-inc/snabbdom-jsx';
import { CanvasInterfaceSettings, CanvasSettingEntry, CanvasSettingType } from "../editorUI/canvas";
// import EditorUI from "../editorUI/EditorUI";
import SidebarInterface from "../editorUI/interface/sidebar";
import { EditorCanvas } from "./modeEditor";

export type HorizonRangerPropType = {
    min: number;
    max: number;
    defValue: number;
    changeHandler: any;
}
const HorizonRanger: Snabbdom.Component<HorizonRangerPropType> = (props: HorizonRangerPropType) => {
    return <div id={"divcnt" as any} className="w-full flex flex-row">
        <input id={"inprgr" as any} type="range" min={props.min} max={props.max} value={props.defValue.toString()} onchange={props.changeHandler} />
    </div>
}

export type ToggleSwitchPropType = {
    value: boolean;
    changeHandler: any;
}
const ToggleSwitch: Snabbdom.Component<ToggleSwitchPropType> = (props: ToggleSwitchPropType) => {
    return <label id={"lblcnt" as any} className="switch">
        <input id={"divcnt" as any} type="checkbox" checked={props.value} onchange={props.changeHandler} />
        <span id={"spcnt" as any} className="slider"></span>
    </label>
};

class SettingPageSidebar implements SidebarInterface {
    Name: string = "SettingsPage"; // Tips of ToolButton
    ImgName?: string = "property";
    Tip?: string = "Settings"; // Tip showed on StatusBar
    HistoryName?: string; // Undefined if dont want to store in redo/undo hostory
    Visible: boolean = false;
    Title: () => string = () => {
        let name = (window.editorUI.CenterCanvas as EditorCanvas).settings.Name;
        if (name === undefined) return 'Settings';
        return `Settings of ${name}`;
    };
    Body: () => VNode = () => {
        let setting = (window.editorUI.CenterCanvas as EditorCanvas).settings;
        console.log(`[DEB] Setting of ${setting.Name}`, setting.Settings);
        if (setting.Name === undefined || setting.Settings == undefined)
            return <div id={"divcnt" as any} className="w-full">
                Empty Setting Page
            </div>
        let settingList: VNode[] = [];
        setting.Settings.forEach((setting, settingName: string) => {
            switch (setting.type) {
                case CanvasSettingType.Number:
                    if (setting.info === undefined || (setting.info as number[]).length !== 2) throw new Error("INTERNAL_ERROR: Setting info has wrong type");
                    settingList.push(
                        <tr id={"trcnt" as any} className="w-full">
                            <td id={"tdcnt" as any}>{setting.label}</td>
                            <td id={"tdcnt" as any}>
                                <HorizonRanger
                                    min={setting.info[0]}
                                    max={setting.info[1]}
                                    defValue={setting.value}
                                    changeHandler={(ev: Event) => {
                                        let newSet: CanvasInterfaceSettings = {
                                            Settings: new Map<string, CanvasSettingEntry<any>>([
                                                [settingName, {
                                                    type: setting.type,
                                                    label: setting.label,
                                                    info: setting.info,
                                                    value: parseInt((ev.target as HTMLInputElement).value)
                                                }]
                                            ])
                                        };
                                        (window.editorUI.CenterCanvas as EditorCanvas).settings = newSet;
                                    }
                                    } />
                            </td>
                        </tr>
                    );
                    break;
                case CanvasSettingType.Color:
                    settingList.push(
                        <tr id={"trcnt" as any} className="w-full">
                            <td id={"tdcnt" as any}>{setting.label}</td>
                            <td id={"tdcnt" as any}>
                                <input id={"inprgr" as any}
                                    type="color"
                                    value={setting.value}
                                    onchange={
                                        (ev: Event) => {
                                            let newSet: CanvasInterfaceSettings = {
                                                Settings: new Map<string, CanvasSettingEntry<any>>([
                                                    [settingName, {
                                                        type: setting.type,
                                                        label: setting.label,
                                                        info: setting.info,
                                                        value: (ev.target as HTMLInputElement).value
                                                    }]
                                                ])
                                            };
                                            (window.editorUI.CenterCanvas as EditorCanvas).settings = newSet;
                                        }
                                    }
                                />
                            </td>
                        </tr>
                    );
                    break;
                case CanvasSettingType.Boolean:
                    settingList.push(
                        <tr id={"trcnt" as any} className="w-full">
                            <td id={"tdcnt" as any}>{setting.label}</td>
                            <td id={"tdcnt" as any}>
                                <ToggleSwitch
                                    value={setting.value}
                                    changeHandler={
                                        (ev: Event) => {
                                            console.log("[DEB] Boolean : ", (ev.target as HTMLInputElement).value)
                                            let newSet: CanvasInterfaceSettings = {
                                                Settings: new Map<string, CanvasSettingEntry<any>>([
                                                    [settingName, {
                                                        type: setting.type,
                                                        label: setting.label,
                                                        info: setting.info,
                                                        value: (ev.target as HTMLInputElement).checked
                                                    }]
                                                ])
                                            };
                                            (window.editorUI.CenterCanvas as EditorCanvas).settings = newSet;
                                        }
                                    }
                                />
                            </td>
                        </tr>
                    );
                    break;
                default:
                    settingList.push(<div id={"divcnt" as any} className="w-full">`Unsupported Setting Type ${setting.type}`</div>);
                    break;
            }
        })

        return <table id={"tbcnt" as any} className="w-full b-none align-right">
            <tr id={"trcnt" as any} className="layers-header">
                <td id={"tdcnt" as any}>Property</td>
                <td id={"tdcnt" as any}>Value</td>
            </tr>
            {settingList}
        </table>
    };
}
export default SettingPageSidebar;