import { CanvasBase, CanvasInterface, NoOPCVSFunc, PaintEvent } from "../editorUI/canvas";
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
    btnSave,
    btnToggleTouch,
    btnUndo,
    btnUpload
} from "./menu";
import { TipComponent } from "../editorUI/statusbar";
import interact from "interactjs";
import FunctionInterface from "../editorUI/interface/function";

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
        "w-full h-full overflowX-scroll overflowY-scroll relative"
    );
    private backgroundDiv: HTMLDivElement = DIV("absolute disable-mouse");
    private cvs!: HTMLCanvasElement;
    private ctx!: CanvasRenderingContext2D;
    private prev_cvs!: HTMLCanvasElement;
    private prev_ctx!: CanvasRenderingContext2D;
    private render_cvs!: HTMLCanvasElement;
    private render_ctx!: CanvasRenderingContext2D;
    private draw_func: CanvasInterface = new NoOPCVSFunc();
    private EventFired: boolean = false;

    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.scaleTip = window.editorUI.Statusbar.addTip("Scale : 100%", true);
    }
    private undo_stk_history = new Array();
    private redo_stk_history = new Array();
    private pushState() {
        if (this.redo_stk_history.length > 0)
            this.undo_stk_history.push(this.redo_stk_history.pop());
        this.redo_stk_history = [];
        this.redo_stk_history.push(this.render_cvs.toDataURL());
        console.log(
            "pushState",
            this.undo_stk_history.length,
            this.redo_stk_history.length
        );
    }

    private finishDrawing() {
        console.log("Finish Drawing ...");
        this.render_ctx.globalCompositeOperation =
            this.draw_func.CompositeOperation;
        this.render_ctx.drawImage(this.prev_cvs, 0, 0, this.width, this.height);
        this.prev_ctx.clearRect(0, 0, this.width, this.height);
        this.EventFired = false;
        this.ctx.globalCompositeOperation = "source-over";
        //Add Redo Undo stack
        this.pushState();
    }

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


        let interactCVS = interact(this.prev_cvs,{
            styleCursor: false,
        });
        interactCVS
        .gesturable({
            listeners: {
                start(e) {
                    console.log(`Gesture start scale:${e.scale}, angle: ${e.angle}`);
                    e.preventDefault();
                    e.stopPropagation();
                },
                move(e) {
                    console.log(`Gesture move scale:${e.ds}, angle: ${e.da}`);
                    let cvs = window.editorUI.CenterCanvas as EditorCanvas
                    cvs.scaleTo(cvs.scaleFactor+e.ds/2)
                    e.preventDefault();
                    e.stopPropagation();
                },
                end(e) {
                    console.log(`Gesture end scale:${e.scale}, angle: ${e.angle}`);
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
        })
        .on('down',(e: Interact.PointerEvent)=>{
            if(e.pointerType === "touch" && (window.editorUI.CenterCanvas as EditorCanvas).canDrawWithTouch === false) {
                console.log("pointerdown");
                this.prev_cvs.style.touchAction = "auto";
                return;
            };
            this.prev_cvs.style.touchAction = "none";
            e.preventDefault();
            e.stopPropagation();
            let mouseEvent: PaintEvent = {
                X: e.offsetX/this.scaleFactor,
                Y: e.offsetY/this.scaleFactor,
                type: "mouse",
                pressure: 1.0
            };
            if (this.draw_func.PointerDown !== undefined) {
                this.EventFired = true;
                this.draw_func.PointerDown(mouseEvent);
                requestAnimationFrame(this.render);
            }

            console.log(`Mouse Down`);
        })
        .on('move',(e: Interact.PointerEvent)=>{
            // console.log("pointermove");
            if(e.pointerType === "touch" && (window.editorUI.CenterCanvas as EditorCanvas).canDrawWithTouch === false) return;
            e.preventDefault();
            e.stopPropagation();
            let mouseEvent: PaintEvent = {
                X: e.offsetX/this.scaleFactor,
                Y: e.offsetY/this.scaleFactor,
                type: "mouse",
                pressure: 1.0
            };
            if (this.draw_func.PointerMove !== undefined) {
                // console.log('Mouse Move');
                this.draw_func.PointerMove(mouseEvent);
            }
        })
        .on('up',(e: Interact.PointerEvent)=>{
            // console.log("pointerup");
            if(e.pointerType === "touch" && (window.editorUI.CenterCanvas as EditorCanvas).canDrawWithTouch === false){
                console.log("pointerup");
                this.prev_cvs.style.touchAction = "none";
                return;
            };
            this.prev_cvs.style.touchAction = "none";
            e.preventDefault();
            e.stopPropagation();
            let mouseEvent: PaintEvent = {
                X: e.offsetX/this.scaleFactor,
                Y: e.offsetY/this.scaleFactor,
                type: "mouse",
                pressure: 1.0
            };
            if (this.draw_func.PointerUp !== undefined) {
                console.log("Mouse Up");
                this.draw_func.PointerUp(mouseEvent);
            }
        })
        
        window.addEventListener("wheel", this.cvsMouseWheelHandler, {
            passive: false
        });

        window.addEventListener("keydown", this.docKeydownHandler);
        window.addEventListener("keyup", this.docKeyupHandler);

        this.prev_cvs.addEventListener("mouseout", (e) => {
            if (this.draw_func.PointerOut !== undefined) {
                console.log("Mouse Out");
                let ev = new MouseEvent("mouseup", {
                    clientX: e.clientX / this.scaleFactor,
                    clientY: e.clientY / this.scaleFactor
                });
                // this.draw_func.PointerOut(e);
            }
        });

        this.scrollDiv.appendChild(this.backgroundDiv);
        this.scrollDiv.appendChild(this.cvs);
        this.scrollDiv.appendChild(this.prev_cvs);
        container.appendChild(this.scrollDiv);

        this.pushState();
    }

    public enableDrag() {
        this.prev_cvs.style.touchAction = "auto"
    }
    public disableDrag() {
        this.prev_cvs.style.touchAction = "none";
    }

    setFunction = (func: CanvasInterface) => {
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
    };
    resizeCanvas = (e?: UIEvent) => {};
    removeCanvas = () => {};

    render = () => {
        if (this.EventFired) {
            this.draw_func.DrawFunction(this.prev_ctx, this.width, this.height);
            if (this.draw_func.CanFinishDrawing) this.finishDrawing();
            requestAnimationFrame(this.render);
        }
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.drawImage(this.render_cvs, 0, 0, this.width, this.height);
    };

    private drawWithTouch = false;
    public get canDrawWithTouch() { return this.drawWithTouch; }
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
                this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
                this.prev_ctx.clearRect(
                    0,
                    0,
                    this.prev_cvs.width,
                    this.prev_cvs.height
                );

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
                this.render_ctx.clearRect(
                    0,
                    0,
                    this.cvs.width,
                    this.cvs.height
                );
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
                this.render_ctx.clearRect(
                    0,
                    0,
                    this.cvs.width,
                    this.cvs.height
                );
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
            this.ctx.clearRect(
                0,
                0,
                this.width / this.scaleFactor,
                this.height / this.scaleFactor
            );
            dia.close();
        };
        let dia = new Dialog(
            "Do you want to clear the canvas ?",
            DIV("w-full flex flex-row", [btnCancel, btnOK])
        );
        dia.show();
    }
    /* Scaling of Canvas */
    private scaleFactor: number = 1.0;
    private scaleTip: TipComponent;
    private isCtlKeyDown: boolean = false;
    private isShiftDown: boolean = false;
    public scaleTo = (scale: number) => {
        let new_scale = scale;
        if (new_scale >= 4) new_scale = 4;
        if (new_scale <= 0.1) new_scale = 0.1;
        this.scaleFactor = new_scale;
        this.scaleTip.updateTip(
            "Scale : " + (this.scaleFactor * 100).toFixed(0) + "%"
        );
        console.log("Next scale factor = " + this.scaleFactor);

        let tmpCtx = new Image();
        tmpCtx.onload = () => {
            this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
            this.ctx.canvas.width = this.width * this.scaleFactor;
            this.ctx.canvas.height = this.height * this.scaleFactor;
            this.ctx.scale(this.scaleFactor, this.scaleFactor);
            this.ctx.drawImage(tmpCtx, 0, 0, this.width, this.height);
            this.render();
        };
        tmpCtx.src = this.cvs.toDataURL();

        let tmpPrev = new Image();
        tmpPrev.onload = () => {
            this.prev_ctx.clearRect(
                0,
                0,
                this.prev_cvs.width,
                this.prev_cvs.height
            );
            this.prev_ctx.canvas.width = this.width * this.scaleFactor;
            this.prev_ctx.canvas.height = this.height * this.scaleFactor;
            this.prev_ctx.scale(this.scaleFactor, this.scaleFactor);
            this.prev_ctx.drawImage(tmpPrev, 0, 0, this.width, this.height);
        };
        tmpPrev.src = this.prev_cvs.toDataURL();

        this.backgroundDiv.style.width = `${this.width * this.scaleFactor}px`;
        this.backgroundDiv.style.height = `${this.height * this.scaleFactor}px`;
    };
    private cvsMouseWheelHandler = (ev: WheelEvent) => {
        if (this.isCtlKeyDown) {
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
    };
    private docKeydownHandler = (ev: KeyboardEvent) => {
        console.log("docKeydown", ev.key);
        if (ev.key === "Control") this.isCtlKeyDown = true;
        if (ev.key === "Shift") this.isShiftDown = true;
        if (ev.key === "+" && this.isCtlKeyDown && !this.isShiftDown)
            this.scaleTo(this.scaleFactor + 0.1);
        if (ev.key === "-" && this.isCtlKeyDown && !this.isShiftDown)
            this.scaleTo(this.scaleFactor - 0.1);
        ev.preventDefault();
    };
    private docKeyupHandler = (ev: KeyboardEvent) => {
        console.log("docKeyup", ev.key);
        if (ev.key === "Control") this.isCtlKeyDown = false;
        if (ev.key === "Shift") this.isShiftDown = false;
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

    MenuToolbarRight = [new btnToggleTouch(), new btnSave()];

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
