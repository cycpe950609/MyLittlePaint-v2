import { Unsubscribe } from "@reduxjs/toolkit";
import { CanvasBase } from "./canvas";
import { ToolbarStateType, data, editorUIActions } from "./data";
import EditorUI from "./EditorUI";
import FunctionInterface from "./interface/function";
import SidebarInterface from "./interface/sidebar";
import { DIV, SPAN } from "./util/HTMLElement";

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
        console.log("New Sidebar :",listName,uuid)
        this.listName = listName;
        this.interfaceUUID = uuid;

        this.Name = sidebar.Name;
        this.ImgName = sidebar.ImgName;
        this.Tip = sidebar.Tip;
    }

    showSidebar() {
        let curSideInterface = data.getState()[this.listName][this.interfaceUUID];
        if(curSideInterface.Visible === true) return;
        curSideInterface.Visible = true;
        data.dispatch(editorUIActions[this.listName].update({id:this.interfaceUUID,new_func:curSideInterface}))
    }

    hiddenSidebar() {
        console.log("hiddenSidebar :",this.listName,this.interfaceUUID)
        let curSideInterface = data.getState()[this.listName][this.interfaceUUID];
        if(curSideInterface.Visible === false) return;
        curSideInterface.Visible = false;
        data.dispatch(editorUIActions[this.listName].update({id:this.interfaceUUID,new_func:curSideInterface}))
    }

    toggleSidebar() {
        let curSideInterface = data.getState()[this.listName][this.interfaceUUID];
        let isShowSidebar = !curSideInterface.Visible;
        if (isShowSidebar === true) this.showSidebar();
        else this.hiddenSidebar();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    StartFunction(/*cvs: CanvasBase*/) {
        console.log(`Start Function ${this.Name}`);
        this.toggleSidebar();
        return false;
    }
}

export default Sidebar;

let unsubscribe: Unsubscribe;
export const bootstrap = async () => {
    console.log("[EUI] modeSelector bootstrapping");
}
let windowCache: {[key:string]:HTMLDivElement} = {};
let renderWindow = (uuid:string) => {
    if(uuid in windowCache) return windowCache[uuid];
    let sidebar = DIV("property-bar", [
        DIV("pd_title", 
            SPAN("pb_Property_title", "Title~")),
        DIV("pb_Property_bdy")
    ]);

    let setTitle = (title: string) => {
        const sp = sidebar.querySelector(".pd_title > span");
        if (sp === null) throw new Error("SIDEBAR_INTERNAL_ERROR");
        (<HTMLSpanElement>sp).innerText = title;
    }

    let setSidebarBody = (body: DocumentFragment | HTMLElement) => {
        // console.log(body);
        const dv = sidebar.querySelector(".pb_Property_bdy");
        if (dv === null) throw new Error("SIDEBAR_INTERNAL_ERROR");
        (<HTMLDivElement>dv).innerHTML = "";
        (<HTMLDivElement>dv).appendChild(body);
    }
    let sidebarImple = undefined;
    if(uuid in data.getState()['sidebar_top_'])
        sidebarImple = data.getState()['sidebar_top_'][uuid];
    else if(uuid in data.getState()['sidebar_top_perm'])
        sidebarImple = data.getState()['sidebar_top_perm'][uuid];
        else if(uuid in data.getState()['sidebar_bottom_'])
        sidebarImple = data.getState()['sidebar_bottom_'][uuid];
    else if(uuid in data.getState()['sidebar_bottom_perm'])
        sidebarImple = data.getState()['sidebar_bottom_perm'][uuid];
    if(sidebarImple === undefined) throw new Error("INTERNAL_ERROR: SidebarInterface is not found");
    
    setTitle(sidebarImple.Title());
    // setSidebarBody(this.sidebarImple.Body(this.editorUI().CenterCanvas.Canvas));
    setSidebarBody(sidebarImple.Body());
    windowCache[uuid] = sidebar;
    sidebar.style.pointerEvents = 'all';
    return sidebar
}
const renderSidebarPart = (partList: ToolbarStateType<SidebarInterface>) => {
    return DIV("w-fit h-fit",
        Object.keys(partList).map((key:string) => {
            if(partList[key].Visible === false){
                if(key in windowCache)
                    delete windowCache[key];
                return document.createElement("div");
            }
            
            return renderWindow(key);
        })
    );
}
const render = () => {
    let cnt = document.getElementById("editorui-sidebar-windows");
    if(cnt === null) throw new Error(`INTERNAL_ERROR: Container of Sidebar-Window not found`);
    let dataTop         = data.getState()[`sidebar_top_`];
    let dataTopPerm     = data.getState()[`sidebar_top_perm`];
    let dataBottom      = data.getState()[`sidebar_bottom_`];
    let dataBottomPerm  = data.getState()[`sidebar_bottom_perm`];
    let sidebar = DIV("sidebar",[
        renderSidebarPart(dataTop         ),
        renderSidebarPart(dataTopPerm     ),
        renderSidebarPart(dataBottom      ),
        renderSidebarPart(dataBottomPerm  ),
    ])
    sidebar.id = "editorui-sidebar-windows"
    // <div class="sidebar" id="editorui-sidebar-windows">
    cnt.parentNode?.replaceChild(sidebar,cnt);

}
export const mount = async () => {
    unsubscribe = data.subscribe(() =>
    {
        console.log("[EUI] Sidebar-Window updated");
        render();
    });
    render();
    console.log("[EUI] Sidebar-Window mounted");
}
export const unmount = async () => {unsubscribe();};