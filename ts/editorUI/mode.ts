import { Unsubscribe } from "@reduxjs/toolkit";
import { ModeInfo, editorUIData } from "./data";
// import { DIV, LABEL } from "./util/HTMLElement";
import { NoOPFunc } from "./interface/function";
// import { NoOPCanvas } from "./canvas";

export const changeToMode = (modeName: string) => {

    let mode = editorUIData.getState().mode.data[modeName];
    if (mode.def.StartMode !== undefined) {
        mode.def.StartMode();
    }

    if (mode.def.StartMode !== undefined) {
        mode.def.StartMode();
    }

    window.editorUIng.CenterCanvas = mode.def.CenterCanvas;// Move before toolbar so we can get correct CenterCanvas when load the toolbar
    // let cnt = document.getElementById("canvas_group");
    // if(cnt === null) throw new Error("INTERAL_ERROR: Container of CenterCanvas is not found");
    // mode.def.CenterCanvas.attachCanvas(cnt as HTMLDivElement);
    // console.log("[EUI] CenterCanvas",window.editorUIng.CenterCanvas)
    console.log("[MOD] mode.def",mode)

    window.editorUIng.Menubar.clear();
    window.editorUIng.Menubar.Left.addButtonList(mode.def.MenuToolbarLeft);
    window.editorUIng.Menubar.Right.addButtonList(mode.def.MenuToolbarRight);

    window.editorUIng.Toolbar.clear();
    console.log("[TBR] LeftToolbarTop",mode.def.LeftToolbarTop)
    console.log("[TBR] LeftToolbarBottom",mode.def.LeftToolbarBottom)
    window.editorUIng.Toolbar.Top.addButtonList(mode.def.LeftToolbarTop);
    window.editorUIng.Toolbar.Bottom.addButtonList(mode.def.LeftToolbarBottom);

    window.editorUIng.Sidebar.clear();
    window.editorUIng.Sidebar.Top.addButtonList(mode.def.RightToolbarTop);
    window.editorUIng.Sidebar.Bottom.addButtonList(mode.def.RightToolbarBottom);
    
    let funcNoop = new NoOPFunc(0);
    window.editorUIng.Mode.changeFunction(funcNoop);

    console.log(`[EUI] Mode ${mode.modeName} mounted`);
}
