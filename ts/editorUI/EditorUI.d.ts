import FunctionInterface from './interface/function';
import Toolbar, { ToolbarPart } from './toolbar';
import ModeFunction from './interface/mode';
import SidebarInterface from './interface/sidebar';
import { CanvasBase } from './canvas';
import StatusBar from './statusbar';
import './util/console';
declare global {
    interface Window {
        editorUI: EditorUI;
    }
}
declare class ModeManger {
    private selectorBtn;
    private func_mode;
    private funcNoop;
    private func;
    private isModeChanged;
    constructor();
    currentMode(): string;
    enable(modeName: string): void;
    disable(modeName: string): void;
    toggle(modeName: string): void;
    add(modeName: string, modeFunc: ModeFunction, enabled?: boolean): void;
    remove(name: string): void;
    changeFunction(next_func: FunctionInterface): void;
    changeTo(modeName: string): void;
    get ModeChanged(): boolean;
}
declare class Menubar {
    Left: ToolbarPart<FunctionInterface>;
    Right: ToolbarPart<FunctionInterface>;
    constructor();
    removeButton(id: string): void;
    clear(): void;
    size(): number;
    hasChildren(): boolean;
}
declare class EditorUI {
    Toolbar: Toolbar<FunctionInterface>;
    Sidebar: Toolbar<SidebarInterface>;
    Menubar: Menubar;
    Mode: ModeManger;
    Statusbar: StatusBar;
    private noop_cvs;
    private cvs;
    get CenterCanvas(): CanvasBase;
    set CenterCanvas(cvs: CanvasBase | undefined);
    private container;
    private lastVNode;
    private unsubscribe;
    private renderVNode;
    constructor();
    private time_to_rerender;
    private should_rerender;
    private canvas_container_vnode;
    private render;
    private timeToRerender;
    forceRerender(): void;
    Mount(container: string | HTMLDivElement): void;
}
export default EditorUI;
