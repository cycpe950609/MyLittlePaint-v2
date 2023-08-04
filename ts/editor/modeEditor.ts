import {
    CanvasBase,
    CanvasInterface,
    NoOPCVSFunc,
    PaintEvent
} from "../editorUI/canvas";
import Dialog from "../editorUI/dialog";
import ModeFunction from "../editorUI/interface/mode";
import {
    BUTTON,
    CANVAS,
    DIV,
    LABEL,
    SPAN,
    TEXT
} from "../editorUI/util/HTMLElement";
import BrushCVSFunc from "./brush";
import EraserCVSFunc from "./eraser";
import LineCVSFunc from "./line";
import { CircleCVSFunc, RectangleCVSFunc, TriangleCVSFunc } from "./polygon";
import {
    btnClear,
    btnRedo,
    btnResetRotate,
    btnResetScale,
    btnSave,
    btnToggleTouch,
    btnUndo,
    btnUpload
} from "./menu";
import { TipComponent } from "../editorUI/statusbar";
import interact from "interactjs";
import FunctionInterface from "../editorUI/interface/function";
import Interact from "@interactjs/types/index";

export class btnCanvas implements FunctionInterface {
    Name: string;
    ImgName?: string | undefined;
    Tip?: string | (() => string) | undefined;

    private draw_func: CanvasInterface;
    constructor(func: CanvasInterface) {
        this.Name = func.Name;
        this.ImgName = func.ImgName;
        this.Tip = func.Tip;
        this.draw_func = func;
    }

    StartFunction: (cvs: CanvasBase) => boolean = (cvs: CanvasBase) => {
        cvs.setFunction(this.draw_func);
        return true;
    };
}

declare global {
    interface Touch {
        touchType: string;
    }
}

export class EditorCanvas implements CanvasBase {
    name = "EditorCanvas";

    private scrollDiv: HTMLDivElement = DIV(
        "w-full h-full overflowX-scroll overflowY-scroll relative disable-touch"
    );
    private scaleElement: HTMLDivElement = DIV("absolute w-fit h-fit transform-center")
    private backgroundDiv: HTMLDivElement = DIV("absolute disable-mouse");
    private cvs!: HTMLCanvasElement;
    private ctx!: CanvasRenderingContext2D;
    private prev_cvs!: HTMLCanvasElement;
    private prev_ctx!: CanvasRenderingContext2D;
    private render_cvs!: HTMLCanvasElement;
    private render_ctx!: CanvasRenderingContext2D;
    private draw_func: CanvasInterface = new NoOPCVSFunc();
    private EventFired: boolean = false;
    private isPointOut?: PaintEvent = undefined;

    private width: number;
    private height: number;

    public isUpdate: boolean = false;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.scaleTip = window.editorUI.Statusbar.addTip("", true);
        this.refreshScaleTip(0,1);
    }
    update?: ((time: number) => void) | undefined;
    private undo_stk_history = new Array();
    private redo_stk_history = new Array();
    private pushState() {
        if (this.redo_stk_history.length > 0)
            this.undo_stk_history.push(this.redo_stk_history.pop());
        this.redo_stk_history = [];
        this.redo_stk_history.push(this.render_cvs.toDataURL());
        // console.log(
        //     "pushState",
        //     this.undo_stk_history.length,
        //     this.redo_stk_history.length
        // );
    }

    private finishDrawing() {
        // console.log("Finish Drawing ...");
        this.render_ctx.globalCompositeOperation =
            this.draw_func.CompositeOperation;
        this.render_ctx.drawImage(this.prev_cvs, 0, 0, this.width, this.height);
        this.prev_ctx.clearRect(0, 0, this.width, this.height);
        this.EventFired = false;
        this.isDrawing = false;
        this.ctx.globalCompositeOperation = "source-over";
        this.isPointOut = undefined;
        //Add Redo Undo stack
        if (this.draw_func.HistoryName !== undefined) this.pushState();
    }
    private initCanvas = () => {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.prev_ctx.clearRect(0, 0, this.width, this.height);
        this.render_ctx.clearRect(0, 0, this.width, this.height);
        this.undo_stk_history = new Array();
        this.redo_stk_history = new Array();
        this.pushState();
    };
    private angleScale = {
        angle: 0,
        scale: 1
    };
    private dragMoveListener = (event: Interact.GestureEvent, target: HTMLElement,angleScale: {angle:number, scale:number}) => {
        // console.log("[DEB] dragMoveListener : ",event)
        // keep the dragged position in the data-x/data-y attributes
        var x = (parseFloat(target.getAttribute("data-x") || "0") || 0) + event.dx;
        var y = (parseFloat(target.getAttribute("data-y") || "0") || 0) + event.dy;

        // translate the element
        let currentAngle = this.normalizeRotate((event.angle || 0) + angleScale.angle);
        let currentScale = (event.scale || 1) * angleScale.scale;

        this.transformTo(target,x , y, currentAngle, currentScale);
        // update the posiion attributes
        target.setAttribute("data-x", x.toString());
        target.setAttribute("data-y", y.toString());

        this.refreshScaleTip(currentAngle,currentScale);
    }
    private isDrawing: boolean = false;
    attachCanvas(container: HTMLDivElement) {
        this.cvs = CANVAS("absolute disable-mouse");
        this.ctx = this.cvs.getContext("2d") as CanvasRenderingContext2D;
        this.cvs.width = this.width;
        this.cvs.height = this.height;

        this.backgroundDiv.style.width = `${this.width}px`;
        this.backgroundDiv.style.height = `${this.height}px`;
        this.backgroundDiv.style.backgroundColor = "white";

        this.prev_cvs = CANVAS("absolute disable-touch");
        this.prev_ctx = this.prev_cvs.getContext(
            "2d"
        ) as CanvasRenderingContext2D;
        this.prev_cvs.width = this.width;
        this.prev_cvs.height = this.height;

        this.render_cvs = CANVAS("absolute disable-mouse");
        this.render_ctx = this.render_cvs.getContext(
            "2d"
        ) as CanvasRenderingContext2D;
        this.render_cvs.width = this.width;
        this.render_cvs.height = this.height;

        let interactCVS = interact(this.prev_cvs, {
            styleCursor: false
        });

        let gestureStart = (e: Interact.GestureEvent) => {
            console.log(`[DEB] isDrawing GestureStart ${isDrawing}`)
            if(isDrawing) return;
            console.log(
                `[EUI] Gesture start scale:${e.scale}, angle: ${e.angle}`
            );
            e.preventDefault();
            e.stopPropagation();
            angleScale.angle -= e.angle;
            scaleElement.classList.remove("reset");
        }
        let gestureMove = (e: Interact.GestureEvent) => {
            console.log(`[DEB] isDrawing GestureMove ${isDrawing}`)
            if(isDrawing) return;
            console.log(
                `[EUI] Gesture move scale:${e.ds}, angle: ${e.da}`
            );
            // let cvs = window.editorUI.CenterCanvas as EditorCanvas
            // cvs.scaleTo(cvs.scaleFactor+e.ds/2)

            let currentAngle = e.angle + angleScale.angle;
            let currentScale = e.scale * angleScale.scale;
            // scaleElement.style.transform =
            //     "rotate(" + currentAngle + "deg)" +
            //     "scale(" + currentScale + ")";
            dragMoveListener(e,scaleElement,angleScale);
            e.preventDefault();
            e.stopPropagation();
        }
        let gestureEnd = (e: Interact.GestureEvent) => {
            if(isDrawing) return;
            console.log(
                `[EUI] Gesture end scale:${e.scale}, angle: ${e.angle}`
            );
            angleScale.angle = angleScale.angle + e.angle;
            angleScale.scale = angleScale.scale * e.scale;
            e.preventDefault();
            e.stopPropagation();
        }
        let dragMove = (e: Interact.GestureEvent) => { 
            if(!isDrawing && this.isPointOut === undefined)
                dragMoveListener(e,scaleElement,angleScale) 
        }
        let pointOut = (e: Interact.PointerEvent) => {
            let ev: PaintEvent ={
                X: e.offsetX,
                Y: e.offsetY,
                type: e.pointerType as PaintEvent["type"] || "",
                pressure: e.pressure
            };
            if (this.draw_func.PointerMove !== undefined) {
                this.draw_func.PointerMove(ev);
            }
            this.isDrawing = false;
            this.isPointOut = ev;
            return;
        }

        var scaleElement = this.scaleElement;
        var angleScale = this.angleScale;
        var dragMoveListener = this.dragMoveListener;
        var isDrawing = this.isDrawing;
        interactCVS
        .gesturable({
            listeners: {
                start : gestureStart,
                move : gestureMove,
                end : gestureEnd
            }
        })
        .draggable({
            listeners: { 
                move: dragMove
            }
        })
        .on("down", (e: Interact.PointerEvent) => {
            // We MUST need the following line, so that we wont trigger pointleave accidently (WHY?)
            this.isPointOut = undefined;
            if (
                e.pointerType === "touch" &&
                (window.editorUI.CenterCanvas as EditorCanvas)
                    .canDrawWithTouch === false
            ) {
                // console.log("pointerdown");
                this.prev_cvs.style.touchAction = "auto";
                isDrawing = false;
                return;
            }
            this.prev_cvs.style.touchAction = "none";
            e.preventDefault();
            e.stopPropagation();
            let mouseEvent: PaintEvent = {
                X: e.offsetX,
                Y: e.offsetY,
                type: "mouse",
                pressure: 1.0
            };
            if (this.draw_func.PointerDown !== undefined) {
                this.EventFired = true;
                this.draw_func.PointerDown(mouseEvent);
                requestAnimationFrame(this.render);
            }
            isDrawing = true;
            // console.log(`Mouse Down`);
        })
        .on("move", (e: Interact.PointerEvent) => {
            // console.log("pointermove");
            if (
                e.pointerType === "touch" &&
                (window.editorUI.CenterCanvas as EditorCanvas)
                    .canDrawWithTouch === false
            )
            {
                return 
            }
            e.preventDefault();
            e.stopPropagation();
            if( e.offsetX < 0 || e.offsetX > this.width ||
                e.offsetY < 0 || e.offsetY > this.height
            )
            { 
                // pointleave wont triggered when we draw with finger, so we need call it manually
                pointOut(e);
            }
            let mouseEvent: PaintEvent = {
                X: e.offsetX,
                Y: e.offsetY,
                type: "mouse",
                pressure: 1.0
            };
            if (this.draw_func.PointerMove !== undefined) {
                // console.log('Mouse Move');
                this.draw_func.PointerMove(mouseEvent);
            }
        })
        .on("up", (e: Interact.PointerEvent) => {
            // console.log("pointerup");
            if (
                e.pointerType === "touch" &&
                (window.editorUI.CenterCanvas as EditorCanvas)
                    .canDrawWithTouch === false
            ) {
                // console.log("pointerup");
                this.prev_cvs.style.touchAction = "none";
                return;
            }
            this.prev_cvs.style.touchAction = "none";
            e.preventDefault();
            e.stopPropagation();
            let mouseEvent: PaintEvent = {
                X: e.offsetX,
                Y: e.offsetY,
                type: "mouse",
                pressure: 1.0
            };
            if (this.draw_func.PointerUp !== undefined) {
                // console.log("Mouse Up");
                this.draw_func.PointerUp(mouseEvent);
            }
            isDrawing = false;

        })
        .on('pointerleave', pointOut);
        
        interact(this.scrollDiv, {
            styleCursor: false
        })
        .gesturable({
            listeners: {
                start : gestureStart,
                move : gestureMove,
                end : gestureEnd
            }
        })
        .draggable({
            listeners: { 
                move: dragMove
            }
        })
        .on("down", (e: Interact.PointerEvent) => {
            isDrawing = false;
            this.isPointOut = undefined;
        })
        .on("up", (e: Interact.PointerEvent) => {
            if(e.pointerType === "touch"){
                isDrawing = false;
                this.isPointOut = undefined;
            }
        })

        window.addEventListener("wheel", this.cvsMouseWheelHandler, {
            passive: false
        });

        window.addEventListener("keydown", this.docKeydownHandler);
        window.addEventListener("keyup", this.docKeyupHandler);

        this.scaleElement.appendChild(this.backgroundDiv);
        this.scaleElement.appendChild(this.cvs);
        this.scaleElement.appendChild(this.prev_cvs);
        this.scrollDiv.appendChild(this.scaleElement);
        container.appendChild(this.scrollDiv);

        this.initCanvas();
    }

    public enableDrag() {
        this.prev_cvs.style.touchAction = "auto";
    }
    public disableDrag() {
        this.prev_cvs.style.touchAction = "none";
    }

    public setFunction(func: CanvasInterface) {
        console.log("setFunction", func);
        this.draw_func = func;
        const browerCursor = [
            "alias",
            "all-scroll",
            "auto",
            "cell",
            "col-resize",
            "context-menu",
            "copy",
            "crosshair",
            "default",
            "e-resize",
            "ew-resize",
            "grab",
            "grabbing",
            "help",
            "move",
            "n-resize",
            "ne-resize",
            "nesw-resize",
            "ns-resize",
            "nw-resize",
            "nwse-resize",
            "no-drop",
            "none",
            "not-allowed",
            "pointer",
            "progress",
            "row-resize",
            "s-resize",
            "se-resize",
            "sw-resize",
            "text",
            "w-resize",
            "wait",
            "zoom-in",
            "zoom-out"
        ];

        if (func.CursorName === undefined) return;
        if (browerCursor.includes(func.CursorName)) {
            console.log(`CursorName ${func.CursorName} in list`);
            this.prev_cvs.style.cursor = func.CursorName;
        } else {
            console.log(`CursorName ${func.CursorName} not in list`);
            this.prev_cvs.style.cursor =
                "url(img/cursor/" + func.CursorName + ".cur), auto";
        }
    }
    resizeCanvas = (e?: UIEvent) => {};
    removeCanvas = () => {};

    render = () => {
        if (this.EventFired) {
            this.draw_func.DrawFunction(this.prev_ctx, this.width, this.height);
            if(this.isPointOut !== undefined){
                if (this.draw_func.PointerOut !== undefined) {
                    this.draw_func.PointerOut(this.isPointOut);
                    this.isPointOut = undefined;
                    requestAnimationFrame(this.render);
                }
                this.draw_func.DrawFunction(this.prev_ctx, this.width, this.height);
                this.isPointOut = undefined;
            }
            if (this.draw_func.CanFinishDrawing) this.finishDrawing();
            requestAnimationFrame(this.render);
        }
        this.isPointOut = undefined;
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.drawImage(this.render_cvs, 0, 0, this.width, this.height);
    };

    private drawWithTouch = false;
    public get canDrawWithTouch() {
        return this.drawWithTouch;
    }
    public toggleTouch = () => {
        this.drawWithTouch = !this.drawWithTouch;
    };

    public open = () => {
        let upload = document.createElement("input");
        upload.setAttribute("type", "file");
        upload.setAttribute("accept", "image/*");
        upload.onchange = (event: Event) => {
            const element = event.currentTarget as HTMLInputElement;
            let fileList: FileList | null = element.files;
            if (fileList === null) {
                dia.close();
                return;
            }

            let img = new Image();

            img.onload = () => {
                this.ctx.clearRect(0, 0, this.width, this.height);
                this.prev_ctx.clearRect(0, 0, this.width, this.height);

                console.log(img.width);
                console.log(img.height);

                this.cvs.width = img.width;
                this.cvs.height = img.height;
                this.ctx.drawImage(img, 0, 0, img.width, img.height);

                this.prev_cvs.width = img.width;
                this.prev_cvs.height = img.height;

                this.backgroundDiv.style.width = `${img.width}px`;
                this.backgroundDiv.style.height = `${img.height}px`;

                this.width = img.width;
                this.height = img.height;

                URL.revokeObjectURL(src);
                dia.close();
            };

            let src = URL.createObjectURL(fileList[0]);
            img.src = src;
        };
        let dia = new Dialog("Upload A Image", upload);
        dia.show();
    };
    public undo = () => {
        if (this.undo_stk_history.length > 0) {
            console.log(
                "Undo",
                this.undo_stk_history.length,
                this.redo_stk_history.length
            );
            let undo_img = this.undo_stk_history.pop();
            this.redo_stk_history.push(undo_img);
            let img = new Image();
            img.src = undo_img;
            img.onload = () => {
                this.render_ctx.clearRect(0, 0, this.width, this.height);
                this.render_ctx.drawImage(img, 0, 0);
                this.render();
            };
        }
    };
    public redo = () => {
        if (this.redo_stk_history.length > 1) {
            console.log(
                "Redo",
                this.undo_stk_history.length,
                this.redo_stk_history.length
            );
            let redo_img = this.redo_stk_history.pop();
            this.undo_stk_history.push(redo_img);
            let img = new Image();
            img.src = this.redo_stk_history[this.redo_stk_history.length - 1];
            img.onload = () => {
                this.render_ctx.clearRect(0, 0, this.width, this.height);
                this.render_ctx.drawImage(img, 0, 0);
                this.render();
            };
        }
    };
    public save() {
        let dia = new Dialog(
            "Enter the name of image",
            DIV("w-fit flex flex-row", [
                TEXT("txt"),
                SPAN("whitespace", "  .png "),
                BUTTON("ok_btn", "OK")
            ])
        );
        dia.show();
    }
    public clear() {
        let btnCancel = BUTTON("w-full mx-2rem", "Cancel");
        btnCancel.onclick = () => {
            dia.close();
        };
        let btnOK = BUTTON("w-full mx-2rem", "OK");
        btnOK.onclick = () => {
            console.log(`Clear ${this.width}, ${this.height}`, this.ctx);
            this.initCanvas();
            dia.close();
        };
        let dia = new Dialog(
            "Do you want to clear the canvas ?",
            DIV("w-full flex flex-row", [btnCancel, btnOK])
        );
        dia.show();
    }
    /* Scaling of Canvas */
    public get scaleFactor() { return this.angleScale.scale; }
    private scaleTip: TipComponent;
    private normalizeRotate = (rotate: number) => {
        let angle = rotate % 360;
        if(angle > 0)
            return angle > 180 ? -360 + angle: angle;
        return angle < -180 ? 360 + angle : angle;
    }
    private refreshScaleTip = (angle: number,scale: number) => {
        this.scaleTip.updateTip(
            "Rotate : " + (angle).toFixed(0) + "°, " +
            "Scale : " + (scale * 100).toFixed(0) + "%"
        );
    }
    private isCtlKeyDown: boolean = false;
    private isShiftDown: boolean = false;
    private isAltDown: boolean = false;
    private transformTo = (target: HTMLElement,x:number,y:number,angle:number,scale:number) => {
        target.style.transformOrigin = `${this.width/2}px ${this.height/2}px`
        target.style.transform =    "translate(" + x + "px, " + y + "px)" +
                                    "rotate(" + angle + "deg)" +
                                    "scale(" + scale + ")";
    }
    public scaleTo = (scale: number) => {
        let new_scale = scale;
        if (new_scale >= 4) new_scale = 4;
        if (new_scale <= 0.1) new_scale = 0.1;
        // keep the dragged position in the data-x/data-y attributes
        let x = parseFloat(this.scaleElement.getAttribute("data-x") || "0")
        let y = parseFloat(this.scaleElement.getAttribute("data-y") || "0")
        this.angleScale.scale = new_scale;
        this.refreshScaleTip(this.angleScale.angle,this.angleScale.scale);
        console.log("Next scale factor = " + this.angleScale.scale);

        this.transformTo(this.scaleElement,x,y,this.angleScale.angle,this.angleScale.scale)
    };
    public rotateTo = (rotate: number) => {
        let new_rotate = this.normalizeRotate(rotate);
        // keep the dragged position in the data-x/data-y attributes
        let x = parseFloat(this.scaleElement.getAttribute("data-x") || "0")
        let y = parseFloat(this.scaleElement.getAttribute("data-y") || "0")
        this.angleScale.angle = new_rotate;
        this.refreshScaleTip(this.angleScale.angle,this.angleScale.scale);
        console.log("Next rotate factor = " + this.angleScale.scale);

        this.transformTo(this.scaleElement,x,y,this.angleScale.angle,this.angleScale.scale)
    };

    public moveTo = (moveX: number,moveY: number) => {
        // keep the dragged position in the data-x/data-y attributes
        this.transformTo(this.scaleElement,moveX,moveY,this.angleScale.angle,this.angleScale.scale)
        this.scaleElement.setAttribute("data-x", moveX.toString());
        this.scaleElement.setAttribute("data-y", moveY.toString());
    };
    private cvsMouseWheelHandler = (ev: WheelEvent) => {
        
        if (this.isCtlKeyDown && !this.isShiftDown && !this.isAltDown) {// Zoom in/out
            ev.preventDefault();
            if (ev.deltaY < 0) {
                // ZOOM IN
                this.scaleTo(this.scaleFactor + 0.1);
            } else if (ev.deltaY > 0) {
                // zoom out
                this.scaleTo(this.scaleFactor - 0.1);
            }
            this.render();
            return;
        }
        if (!this.isCtlKeyDown && !this.isShiftDown && !this.isAltDown) { // Shift Up/Down
            ev.preventDefault();
            let x = parseFloat(this.scaleElement.getAttribute("data-x") || "0")
            let y = parseFloat(this.scaleElement.getAttribute("data-y") || "0")
            if (ev.deltaY < 0) {
                y = y - 30
            } else if (ev.deltaY > 0) {
                y = y + 30
            }
            this.transformTo(this.scaleElement,x,y,this.angleScale.angle,this.angleScale.scale);
            this.scaleElement.setAttribute("data-x", x.toString());
            this.scaleElement.setAttribute("data-y", y.toString());
            this.render();
            return;
        }
        if (!this.isCtlKeyDown && this.isShiftDown && !this.isAltDown) {// Shift Left/Right
            ev.preventDefault();
            let x = parseFloat(this.scaleElement.getAttribute("data-x") || "0")
            let y = parseFloat(this.scaleElement.getAttribute("data-y") || "0")
            if (ev.deltaY < 0) {
                x = x + 30
            } else if (ev.deltaY > 0) {
                x = x - 30
            }
            this.transformTo(this.scaleElement,x,y,this.angleScale.angle,this.angleScale.scale);
            this.scaleElement.setAttribute("data-x", x.toString());
            this.scaleElement.setAttribute("data-y", y.toString());
            this.render();
            return;
        }
        if (!this.isCtlKeyDown && !this.isShiftDown && this.isAltDown) { // Rotate Left/Right
            ev.preventDefault();
            if (ev.deltaY < 0) {
                // ZOOM IN
                this.rotateTo(this.angleScale.angle + 2);
            } else if (ev.deltaY > 0) {
                // zoom out
                this.rotateTo(this.angleScale.angle - 2);
            }
            this.render();
            return;
        }
    };
    private docKeydownHandler = (ev: KeyboardEvent) => {
        // console.log("docKeydown", ev.key);
        if (ev.key === "Control") this.isCtlKeyDown = true;
        if (ev.key === "Shift") this.isShiftDown = true;
        if (ev.key === "Alt") this.isAltDown = true;
        if (ev.key === "+" && this.isCtlKeyDown && !this.isShiftDown && !this.isAltDown)
            this.scaleTo(this.scaleFactor + 0.1);
        if (ev.key === "-" && this.isCtlKeyDown && !this.isShiftDown && !this.isAltDown)
            this.scaleTo(this.scaleFactor - 0.1);
        if (ev.key === "0" && this.isCtlKeyDown && !this.isShiftDown && !this.isAltDown)
            this.scaleTo(1.0);
        if (ev.key === "z" && this.isCtlKeyDown && !this.isShiftDown && !this.isAltDown)
            this.undo();
        if (ev.key === "y" && this.isCtlKeyDown && !this.isShiftDown && !this.isAltDown)
            this.redo();
        ev.preventDefault();
    };
    private docKeyupHandler = (ev: KeyboardEvent) => {
        // console.log("docKeyup", ev.key);
        if (ev.key === "Control") this.isCtlKeyDown = false;
        if (ev.key === "Shift") this.isShiftDown = false;
        if (ev.key === "Alt") this.isAltDown = false;
        ev.preventDefault();
    };
}

class modeEditor implements ModeFunction {
    Enable = true;

    CenterCanvas = new EditorCanvas(1920, 1080);

    MenuToolbarLeft = [
        new btnUpload(),
        new btnUndo(),
        new btnRedo(),
        new btnClear(),
        new btnCanvas(new EraserCVSFunc())
    ];

    MenuToolbarRight = [
        new btnResetScale(), 
        new btnResetRotate(), 
        new btnToggleTouch(), 
        new btnSave()
    ];

    LeftToolbarTop = [
        new btnCanvas(new BrushCVSFunc()),
        new btnCanvas(new LineCVSFunc()),
        new btnCanvas(new CircleCVSFunc()),
        new btnCanvas(new TriangleCVSFunc()),
        new btnCanvas(new RectangleCVSFunc())
    ];

    StartMode() {}
    EndMode() {}
}

export default modeEditor;
