import { CanvasBase } from "./editorUI/canvas";
import Dialog from "./editorUI/dialog";
import EditorUI from "./editorUI/EditorUI";
import FunctionInterface from "./editorUI/interface/function";
export let frontendUI: EditorUI;//Remain for no build errors only
import data from "./storage";
export { data };

import addID2Object from "./ObjectID";
import Alert from "./editorUI/util/alert";
import axios from 'axios';
import modeEditor from "./editor/modeEditor";
import { enableMapSet } from 'immer'
enableMapSet()

addID2Object();

document.addEventListener("DOMContentLoaded", async () => {
    window.editorUI = new EditorUI();
    window.editorUI.Mode.add("editor", new modeEditor());
    window.editorUI.Mount("editorUI_container");
    window.editorUI.Mode.changeTo("editor");
});