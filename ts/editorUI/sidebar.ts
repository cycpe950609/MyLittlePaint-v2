import { Unsubscribe } from "@reduxjs/toolkit";
// import { CanvasBase } from "./canvas";
import { ToolbarStateType, editorUIData, editorUIActions } from "./data";
// import EditorUI from "./EditorUI";
import FunctionInterface from "./interface/function";
import SidebarInterface from "./interface/sidebar";
// import { DIV, SPAN } from "./util/HTMLElement";
import {
    init,
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
    h,
    toVNode,
    VNode,
} from "snabbdom";
import { HDIV, HSPAN } from "./util/HHTMLElement";

const patchSidebar = init([
    // Init patch function with chosen modules
    classModule, // makes it easy to toggle classes
    propsModule, // for setting properties on DOM elements
    styleModule, // handles styling on elements with support for animations
    eventListenersModule, // attaches event listeners
]);

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
        if(curSideInterface.Visible === true) return;
        curSideInterface.Visible = true;
        editorUIData.dispatch(editorUIActions[this.listName].update({id:this.interfaceUUID,new_func:curSideInterface}))
    }

    hiddenSidebar() {
        let curSideInterface = editorUIData.getState()[this.listName].data[this.interfaceUUID];
        if(curSideInterface.Visible === false) return;
        curSideInterface.Visible = false;
        editorUIData.dispatch(editorUIActions[this.listName].update({id:this.interfaceUUID,new_func:curSideInterface}))
    }

    toggleSidebar() {
        let curSideInterface = editorUIData.getState()[this.listName].data[this.interfaceUUID];
        let isShowSidebar = !curSideInterface.Visible;
        if (isShowSidebar === true) this.showSidebar();
        else this.hiddenSidebar();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    StartFunction(/*cvs: CanvasBase*/) {
        this.toggleSidebar();
        return false;
    }
}

export default Sidebar;

let unsubscribe: Unsubscribe;
export const bootstrap = async () => {
    console.log("[EUI] modeSelector bootstrapping");
}
let windowCache: {[key:string]:VNode} = {};
let renderWindow = async (uuid:string, windowName: string): Promise<VNode> => {
    if(uuid in windowCache && 
        !window.editorUI.CenterCanvas.isUpdate && 
        !(editorUIData.getState()['sidebar_window'].action === `sidebar_window.${windowName}.update`) 
    ) 
        return windowCache[uuid];

    let sidebarImple = undefined;
    if(uuid in editorUIData.getState()['sidebar_top_'].data)
        sidebarImple = editorUIData.getState()['sidebar_top_'].data[uuid];
    else if(uuid in editorUIData.getState()['sidebar_top_perm'].data)
        sidebarImple = editorUIData.getState()['sidebar_top_perm'].data[uuid];
    else if(uuid in editorUIData.getState()['sidebar_bottom_'].data)
        sidebarImple = editorUIData.getState()['sidebar_bottom_'].data[uuid];
    else if(uuid in editorUIData.getState()['sidebar_bottom_perm'].data)
        sidebarImple = editorUIData.getState()['sidebar_bottom_perm'].data[uuid];
    if(sidebarImple === undefined) throw new Error("INTERNAL_ERROR: SidebarInterface is not found");
    
    let sidebar = h("div#divcnt.property-bar",
    { style : {pointerEvents: "all"} },
    [
        HDIV("pd_title", 
            HSPAN("pb_Property_title", sidebarImple.Title() )),
        HDIV("pb_Property_bdy", await Promise.resolve( sidebarImple.Body() ))
    ]);
    windowCache[windowName] = sidebar;
    return sidebar
}
const renderSidebarPart = async (partList: ToolbarStateType<SidebarInterface>) : Promise<VNode> => {
    return h("div#cnt.w-fit.h-fit",
        await Promise.all(Object.keys(partList).map(async (key:string) => {
            if(partList[key].Visible === false){
                if(key in windowCache)
                    delete windowCache[key];
                return h("div");
            }
            
            return await renderWindow(key, partList[key].Name);
        }))
    );
}

let cntSidebar:HTMLDivElement;
let lastSidebarVNode:VNode;

const render = async () => {
    if(cntSidebar == null) {
        let cnt = document.getElementById("editorui-sidebar-windows");
        if(cnt === null) throw new Error(`INTERNAL_ERROR: Container of Sidebar-Window not found`);
        cntSidebar = cnt as HTMLDivElement;
        lastSidebarVNode = toVNode(cntSidebar);
    }
    let dataTop         = editorUIData.getState()[`sidebar_top_`].data;
    let dataTopPerm     = editorUIData.getState()[`sidebar_top_perm`].data;
    let dataBottom      = editorUIData.getState()[`sidebar_bottom_`].data;
    let dataBottomPerm  = editorUIData.getState()[`sidebar_bottom_perm`].data;
    
    // <div class="sidebar" id="editorui-sidebar-windows">
    let visiableCount = (partList: ToolbarStateType<SidebarInterface>) => {
        let count = 0;
        Object.keys(partList).forEach((key) => {
            count += partList[key].Visible ? 1 : 0;
        })
        return count;
    }
    let windowCount =   visiableCount(dataTop) + 
                        visiableCount(dataBottom) + 
                        visiableCount(dataTopPerm) + 
                        visiableCount(dataBottomPerm);
    
    let sidebar = h("div#editorui-sidebar-windows.sidebar",
    {
        style : {pointerEvents: windowCount > 0 ? "all" : "none"}
    },
    [
        await renderSidebarPart(dataTop         ),
        await renderSidebarPart(dataTopPerm     ),
        await renderSidebarPart(dataBottom      ),
        await renderSidebarPart(dataBottomPerm  ),
        // h("div#empty-div.w-full.h-full", {style : {pointerEvents: "none"}})
    ])
    
    // console.log("[DEB]", sidebar)
    patchSidebar(lastSidebarVNode,sidebar);
    lastSidebarVNode = sidebar;
    window.editorUI.CenterCanvas.isUpdate = false;
}
export const mount = async () => {
    unsubscribe = editorUIData.subscribe(() =>
    {
        console.log("[EUI] Sidebar-Window updated");
        render();
    });
    render();
    console.log("[EUI] Sidebar-Window mounted");
}
export const unmount = async () => {unsubscribe();};