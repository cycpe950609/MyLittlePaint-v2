import { ToolbarStateType, editorUIData, editorUIActions } from "./data";
import FunctionInterface from "./interface/function";
import SidebarInterface from "./interface/sidebar";
import {
    VNode,
} from "snabbdom";
import { Div, Span } from "./util/Element";
import Snabbdom from "@herp-inc/snabbdom-jsx";

class Sidebar implements FunctionInterface {
    Name: string;
    ImgName?: string;
    Tip?: string;

    private listName: string;
    private interfaceUUID: string;

    constructor(
        listName: string,
        uuid: string,
        sidebar: SidebarInterface
    ) {
        this.listName = listName;
        this.interfaceUUID = uuid;

        this.Name = sidebar.Name;
        this.ImgName = sidebar.ImgName;
        this.Tip = sidebar.Tip;
    }

    showSidebar() {
        let curSideInterface = editorUIData.getState()[this.listName].data[this.interfaceUUID];
        if (curSideInterface.Visible === true) return;
        curSideInterface.Visible = true;
        editorUIData.dispatch(editorUIActions[this.listName].update({ id: this.interfaceUUID, new_func: curSideInterface }))
    }

    hiddenSidebar() {
        let curSideInterface = editorUIData.getState()[this.listName].data[this.interfaceUUID];
        if (curSideInterface.Visible === false) return;
        curSideInterface.Visible = false;
        editorUIData.dispatch(editorUIActions[this.listName].update({ id: this.interfaceUUID, new_func: curSideInterface }))
    }

    toggleSidebar() {
        let curSideInterface = editorUIData.getState()[this.listName].data[this.interfaceUUID];
        let isShowSidebar = !curSideInterface.Visible;
        if (isShowSidebar === true) this.showSidebar();
        else this.hiddenSidebar();
        console.log("[EUI] Toggle sidebar");
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    StartFunction(/*cvs: CanvasBase*/) {
        this.toggleSidebar();
    }
}

export default Sidebar;

let renderWindow = (uuid: string, windowName: string):VNode => {

    let sidebarImple = undefined;
    if (uuid in editorUIData.getState()['sidebar_top_'].data)
        sidebarImple = editorUIData.getState()['sidebar_top_'].data[uuid];
    else if (uuid in editorUIData.getState()['sidebar_top_perm'].data)
        sidebarImple = editorUIData.getState()['sidebar_top_perm'].data[uuid];
    else if (uuid in editorUIData.getState()['sidebar_bottom_'].data)
        sidebarImple = editorUIData.getState()['sidebar_bottom_'].data[uuid];
    else if (uuid in editorUIData.getState()['sidebar_bottom_perm'].data)
        sidebarImple = editorUIData.getState()['sidebar_bottom_perm'].data[uuid];
    if (sidebarImple === undefined) throw new Error("INTERNAL_ERROR: SidebarInterface is not found");

    console.log("[EUI] renderWindow", sidebarImple.Body());

    let sidebar = <Div className="property-bar"
        $style={{ pointerEvents: "all" }}
    >
        <Div className="pd_title">
            <Span className="pb_Property_close">
                {sidebarImple.Title()}
            </Span>
        </Div>
        <Div className="pb_Property_bdy">
            {sidebarImple.Body()}
        </Div>
    </Div>

    return sidebar
}
const renderSidebarPart = (partList: ToolbarStateType<SidebarInterface>): VNode => {
    return <Div className="w-fit h-fit">
        {
            Object.keys(partList).map((key: string) => {
                if (partList[key].Visible === false) {
                    return <Div />;
                }

                return renderWindow(key, partList[key].Name);
            })
        }
    </Div>
}


export const SidebarComp: Snabbdom.Component<{}> = () => {
    
    let dataTop = editorUIData.getState()[`sidebar_top_`].data;
    let dataTopPerm = editorUIData.getState()[`sidebar_top_perm`].data;
    let dataBottom = editorUIData.getState()[`sidebar_bottom_`].data;
    let dataBottomPerm = editorUIData.getState()[`sidebar_bottom_perm`].data;

    // <div class="sidebar" id="editorui-sidebar-windows">
    let visiableCount = (partList: ToolbarStateType<SidebarInterface>) => {
        let count = 0;
        Object.keys(partList).forEach((key) => {
            count += partList[key].Visible ? 1 : 0;
        })
        return count;
    }
    let windowCount = visiableCount(dataTop) +
        visiableCount(dataBottom) +
        visiableCount(dataTopPerm) +
        visiableCount(dataBottomPerm);

    let sidebar = <Div Id="editorui-sidebar-windows" className="sidebar"
        $style={{ pointerEvents: windowCount > 0 ? "all" : "none" }}>
        {renderSidebarPart(dataTop)}
        {renderSidebarPart(dataTopPerm)}
        {renderSidebarPart(dataBottom)}
        {renderSidebarPart(dataBottomPerm)}
    </Div>

    // console.log("[DEB]", sidebar)
    window.editorUI.CenterCanvas.isUpdate = false;

    return sidebar;
}
