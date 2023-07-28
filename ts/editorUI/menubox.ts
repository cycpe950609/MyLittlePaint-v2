import { Unsubscribe } from "@reduxjs/toolkit";
import { ToolbarStateType, data } from "./data";
import { DIV } from "./util/HTMLElement";
import createFunctionInterfaceButton from "./util/createFunctionInterfaceButton";

// Menubar application form single-spa

let unsubscribe: {[key:string]:Unsubscribe} = {};

export type MenubarPropsType = {
    side: string;
}
export const bootstrap = async (props: MenubarPropsType) => {
    console.log("[EUI] Toolbar bootstrapping");
}
const renderMenuPart = (partList: ToolbarStateType<any>) => {
    return DIV("meanu-perm",
        Object.keys(partList).map((key:string) => {
            return createFunctionInterfaceButton(partList[key]);
        })
    );
}

const render = (side: string) => {
    let name = `editorui-menubar-${side}`;
    let cnt = document.getElementById(name);
    if(cnt === null) throw new Error(`INTERNAL_ERROR: Container of menubar ${side} part not found`);
    
    let dataMode    = data.getState()[`menubar_${side}_`];
    let dataPerm    = data.getState()[`menubar_${side}_perm`];
    cnt.innerHTML = ""
    if(
        Object.keys(dataMode).length +
        Object.keys(dataPerm).length
        === 0
    )
    {
        let newCNt = document.createElement("div");
        newCNt.id = name;
        cnt.parentNode?.replaceChild(newCNt,cnt);
        return;
    }
    // <div class="menu-box" style="display: flex;">
    //      <div class="menu-perm">
    //          <div class="toolbar-item" style="background-image: url(&quot;img/eraser.png&quot;);"><span
    //                  class="tooltip-text">Eraser</span></div>
    //      </div>
    //      <div class="menu-perm"></div>
    // </div>
    let toolbar = DIV("menu-box",[
        renderMenuPart(dataPerm),
        renderMenuPart(dataMode),
    ]);
    toolbar.id = name;
    cnt.parentNode?.replaceChild(toolbar,cnt);
}
export const mount = async (props: MenubarPropsType) => {
    console.log(props);
    unsubscribe[props.side] = data.subscribe(() =>
    {
        console.log("[EUI] data updated");
        render(props.side);
    });
    render(props.side);
    console.log(`[EUI] Menubar ${props.side} mounted`);
}
export const unmount = async (props: MenubarPropsType) => {unsubscribe[props.side]();};