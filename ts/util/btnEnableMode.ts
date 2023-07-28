import { CanvasBase } from "../editorUI/canvas";
import FunctionInterface from "../editorUI/interface/function";
import { frontendUI } from "../main";

class btnToggleMode implements FunctionInterface {
    Name = "Toggle Mode";
    Tip = "";
    private toggleModeName: string;

    constructor(modeName: string) {
        this.Tip = "Toggle Mode " + modeName;
        this.toggleModeName = modeName;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    StartFunction(cvs: CanvasBase) {
        frontendUI.Mode.toggle(this.toggleModeName);
        return false as boolean;
    }
}

export default btnToggleMode;
