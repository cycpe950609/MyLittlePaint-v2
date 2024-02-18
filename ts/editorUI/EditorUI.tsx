import FunctionInterface, { NoOPFunc } from './interface/function';
import Toolbar, { ToolbarComp, ToolbarPart } from './toolbar';
// import SidebarInterface from './interface/sidebar';
import ModeFunction from './interface/mode';
import { ModeInfo, editorUIActions, editorUIData, modeAdd, modeDisable, modeEnable, modeRemove, modeSetRoot, modeToggle } from './data';
import SidebarInterface from './interface/sidebar';
import Sidebar, { SidebarComp } from './sidebar';
import { CanvasBase, NoOPCanvas } from './canvas';
import StatusBar, { StatusBarComp } from './statusbar';
import './util/console';
import { VNode, classModule, eventListenersModule, init, propsModule, styleModule, toVNode } from 'snabbdom';
import { Unsubscribe } from "@reduxjs/toolkit";
import { Div } from './util/Element';
import { MenuboxComp } from './menubox';
import { ModeSelectorComp } from './modeSelector';
import { changeToMode } from './mode';
import { ErrorHandlerPage } from './errorPage';
import { DIV } from './util/HTMLElement';
import { useLocation } from './util/useHook';

declare global {
    interface Window {
        editorUI: EditorUI;
    }
}
class ModeManger {
    // private modeList: Map<string, ModeInfo> = new Map<string, ModeInfo>();
    private selectorBtn: Map<string, HTMLLabelElement> = new Map<
        string,
        HTMLLabelElement
    >();
    private func_mode = "noop";

    private funcNoop: FunctionInterface = new NoOPFunc(0);
    private func: FunctionInterface = this.funcNoop;
    private isModeChanged: boolean = false;

    constructor() { }

    currentMode(): string {
        return this.func_mode;
    }

    enable(modeName: string) {
        editorUIData.dispatch(modeEnable(modeName));
    }
    disable(modeName: string) {
        editorUIData.dispatch(modeDisable(modeName));
    }
    toggle(modeName: string) {
        editorUIData.dispatch(modeToggle(modeName));
    }

    add(modeName: string, modeFunc: ModeFunction, enabled?: boolean) {
        if (modeName in editorUIData.getState()["mode"].data) throw new Error("Mode " + modeName + " exist");
        if (!(modeName in editorUIData.getState()["mode"].data)) {
            let modeNameHash = `#/${modeName}`;

            editorUIData.dispatch(modeAdd({
                def: modeFunc,
                enable: enabled !== undefined ? enabled : modeFunc.Enable,
                modeName: modeName,
                btn: document.createElement("label")
            }));
            // this.modeList.set(name, mode);
            // console.log("[EUI] Mode is enable : ",(data.getState()['mode'][modeNameHash] as ModeInfo).enable )
            const modeInfo: ModeInfo = {
                def: modeFunc,
                enable: enabled !== undefined ? enabled : modeFunc.Enable,
                modeName: modeName,
            };
            if (editorUIData.getState().mode.root === "")
                editorUIData.dispatch(modeSetRoot(modeNameHash));
            // singleSpa.registerApplication({
            //     name: `mode_${modeName}`, // 子应用名
            //     app: () => import(/* webpackChunkName: "eui-mode-mount" */"./mode"), // 如何加载你的子应用
            //     // activeWhen: `index.html#/${name}`, // url 匹配规则，表示啥时候开始走这个子应用的生命周期
            //     activeWhen: (url: Location) => {
            //         console.log("[EUI] Url hash", url.hash, modeNameHash, modeNameHash in editorUIDataNG.getState()['mode'].data);
            //         return url.hash === `#/${modeName}` &&
            //             modeNameHash in editorUIDataNG.getState()['mode'].data &&
            //             (editorUIDataNG.getState()['mode'].data[modeNameHash] as ModeInfo).enable === true
            //     }, // url 匹配规则，表示啥时候开始走这个子应用的生命周期
            //     customProps: modeInfo
            // });

        }
        console.log("[EUI] Add mode " + modeName);
    }
    remove(name: string) {
        editorUIData.dispatch(modeRemove(name));
    }

    changeFunction(next_func: FunctionInterface) {
        if (this.func.EndFunction !== undefined) {
            this.func.EndFunction(window.editorUI.CenterCanvas);
            // this.mdfunc.CenterCanvas.render();
        }

        const ifChangFunc = next_func.StartFunction(window.editorUI.CenterCanvas);
        window.editorUI.CenterCanvas.render();
        if (ifChangFunc === true){ 
            this.func = next_func
        };
    }

    changeTo(modeName: string) {
        console.log("[MOD] Before change mode to " + modeName);
        if (this.func_mode === modeName) return;

        let modeNameHash = `#/${modeName}`;
        // console.log(modeNameHash in data.getState()["mode"].data && data.getState()["mode"].data[modeNameHash].enable !== true)
        if (
            modeNameHash in editorUIData.getState()["mode"].data &&
            editorUIData.getState()["mode"].data[modeNameHash].enable !== true
        )
            return;
        console.log(`[MOD] Change mode to ${modeName} 2`);
        changeToMode(modeNameHash);
        this.isModeChanged = true;
        console.log("[DEB]", modeName, editorUIData.getState().mode.data)
        // singleSpa.navigateToUrl(`#/${modeName}`)
        console.log("[MOD] Change mode to " + modeName);
        const [loc, setLoc] = useLocation();
        setLoc(modeNameHash);
    }

    public get ModeChanged() { // Can only be called once at render time
        let rtv = this.isModeChanged;
        this.isModeChanged = false;
        return rtv;
    }
}

class Menubar {
    public Left: ToolbarPart<FunctionInterface>;
    public Right: ToolbarPart<FunctionInterface>;

    constructor() {
        this.Left = new ToolbarPart<FunctionInterface>("menubar_left_");
        this.Right = new ToolbarPart<FunctionInterface>("menubar_right_");
    }

    removeButton(id: string) {
        if (!this.Left.removeButton(id))
            this.Right.removeButton(id);
    }

    clear() {
        this.Left.clear();
        this.Right.clear();
    }

    size() {
        return this.Right.size() + this.Left.size();
    }
    hasChildren() {
        const rightHasChildren = this.Right.hasChildren();
        const leftHasChildren = this.Left.hasChildren();
        // console.log("Bottom : ",bottomHasChildren , "Top : " ,topHasChildren);
        return rightHasChildren || leftHasChildren;
    }
}

class EditorUI {
    public Toolbar: Toolbar<FunctionInterface>;
    public Sidebar: Toolbar<SidebarInterface>;
    public Menubar: Menubar;
    public Mode: ModeManger;
    public Statusbar: StatusBar;
    // public Permanent: PermanentManager;
    private noop_cvs: CanvasBase = new NoOPCanvas();
    private cvs: CanvasBase = this.noop_cvs;
    public get CenterCanvas(): CanvasBase {
        return this.cvs;
    }
    public set CenterCanvas(cvs: CanvasBase | undefined) {
        this.cvs = cvs !== undefined ? cvs : this.noop_cvs;
    }

    private container: HTMLDivElement;
    private lastVNode: VNode;
    private unsubscribe: Unsubscribe;

    private renderVNode = init([
        // Init patch function with chosen modules
        classModule, // makes it easy to toggle classes
        propsModule, // for setting properties on DOM elements
        styleModule, // handles styling on elements with support for animations
        eventListenersModule, // attaches event listeners
    ],
        undefined,
        {
            experimental: {
                fragments: true
            }
        }
    );

    constructor() {
        this.Toolbar = new Toolbar<FunctionInterface>("toolbar", "", (listName: string, key: string, func: FunctionInterface) => func);
        this.Sidebar = new Toolbar<SidebarInterface>("sidebar", "", (listName: string, key: string, func: SidebarInterface) => { console.log("[EUI] Create sidebar funcInterface"); return new Sidebar(listName, key, func) });
        this.Statusbar = new StatusBar();
        this.Menubar = new Menubar();
        this.Mode = new ModeManger();
    }
    private time_to_rerender: boolean = true;
    private should_rerender: boolean = false;
    private canvas_container_vnode = toVNode(DIV("canvas_group"));
    private render() {
        if (!this.time_to_rerender)
            return;
        if (!this.should_rerender)
            return;
        this.should_rerender = false;
        this.time_to_rerender = false;
        console.log("[EUI] Render");

        // let stateAction = editorUIData.getState().state.action;
        // console.log("[HOK] State action", stateAction);
        // switch (stateAction) {
        //     // case "state.usestate":
        //     //     console.log("[HOK] editorUI.useState")
        //     //     return;
        //     case "state.patchstates":
        //         console.log("[HOK] editorUI.patchstates")
        //         // break;
        //         return;
        //     case "state.resetcount":
        //         console.log("[HOK] editorUI.resetcount")
        //         break;
        //     case "state.setstate":
        //         console.log("[HOK] editorUI.setstate")
        //         return;
        //     // case "state.init":
        //     // break;
        //     default:
        //         break;
        // }
        // let dataAction = editorUIData.getState().binder.action;
        // switch (dataAction) {
        //     case "data.create.binder":
        //         console.log("[HOK] editorUI.patchstates")
        //         // break;
        //         return;
        //     case "data.reset.binder":
        //         console.log("[HOK] editorUI.resetcount")
        //         break;
        //     case "state.setstate":
        //         console.log("[HOK] editorUI.setstate")
        //         return;
        //     // case "state.init":
        //     // break;
        //     default:
        //         break;
        // }

        console.log("[DEB] Render");

        let isToolbarLeftActive: boolean = true;
        let isToolbarRightActive: boolean = true;
        let isSidebarWindowActive: boolean = true;
        let isStatusbarLeftActive: boolean = true;
        let isStatusbarRightActive: boolean = true;
        let isMenubarLeftActive: boolean = true;
        let isMenubarRightActive: boolean = true;
        let isModeSelectorActive: boolean = true;

        let url = window.location;
        let isNotExistPath = !(url.hash in editorUIData.getState()["mode"].data);
        let isDisableMode = (url.hash in editorUIData.getState()["mode"].data && editorUIData.getState()["mode"].data[url.hash].enable === false)
        let isErrorHandlerPageActive: boolean = isNotExistPath || isDisableMode;

        // let canvas_group = <Div Id="canvas_group" className="canvas_group"></Div>
        if (this.Mode.ModeChanged) {
            window.editorUI.CenterCanvas.attachCanvas(this.canvas_container_vnode.elm as HTMLDivElement)
        }
        else {
            window.editorUI.CenterCanvas.render()
        }
        let editorUI = <>
            <Div>
                {this.canvas_container_vnode}
                {
                    isToolbarLeftActive &&
                    <Div className="toolbar-vertical-cnt toolbar-vertical-cnt-left">
                        <ToolbarComp type='toolbar' />
                    </Div>
                }
                {
                    isToolbarRightActive &&
                    <Div className="toolbar-vertical-cnt toolbar-vertical-cnt-right">
                        <ToolbarComp type='sidebar' />
                    </Div>
                }
                {
                    isSidebarWindowActive &&
                    <SidebarComp />
                }
                <Div className="status-bar-cnt">
                    {
                        isStatusbarLeftActive &&
                        <StatusBarComp side="left" />
                    }
                    <Div Id="editorui-statusbar-middle"></Div>
                    {
                        isStatusbarRightActive &&
                        <StatusBarComp side="right" />
                    }
                </Div>
                <Div className="menu">
                    {
                        isMenubarLeftActive &&
                        <Div className="menu-left-part">
                            <MenuboxComp side='left' />
                        </Div>
                    }
                    {
                        isModeSelectorActive &&
                        <Div className="menu-middle-part">
                            <ModeSelectorComp />
                        </Div>
                    }
                    {
                        isMenubarRightActive &&
                        <Div className="menu-right-part">
                            <MenuboxComp side='right' />
                        </Div>
                    }
                </Div>
            </Div>
        </>
        let newVNode = isErrorHandlerPageActive ? <ErrorHandlerPage /> : editorUI
        this.renderVNode(this.lastVNode, newVNode);
        this.lastVNode = newVNode;
    }

    private timeToRerender = () => {
        this.time_to_rerender = true;
        this.render();
        window.requestAnimationFrame(this.timeToRerender);
    }
    public forceRerender() {
        this.should_rerender = true;
        this.time_to_rerender = true;
        this.render();
    }

    public Mount(container: string | HTMLDivElement) {
        this.container = document.createElement('div');
        if (typeof container === 'string') {
            let tmp = document.getElementById(container);
            if (tmp === null) throw new Error("INTERNAL_ERROR: Cannt found container");
            this.container = tmp as HTMLDivElement;
        }
        else {
            this.container = container;
        }
        this.lastVNode = toVNode(this.container);
        this.unsubscribe = editorUIData.subscribe(() => {
            let stateAction = editorUIData.getState().state.action;
            let dataAction = editorUIData.getState().binder.action;
            if (
                stateAction !== "state.usestate" ||
                dataAction !== "data.use.data"
            ) {
                console.log("[EUI] Should Render ", stateAction, dataAction);
                this.should_rerender = true;
            }
            
            this.render();
        })
        window.requestAnimationFrame(this.timeToRerender)
        this.render();
        console.log("[EUI] EditorUI Mounted");
    }
}

export default EditorUI;