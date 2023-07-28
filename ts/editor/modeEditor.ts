import { Vector3, Mesh, BufferGeometry, Material } from "three";
import { CanvasBase, CanvasInterface, NoOPCVSFunc } from "../editorUI/canvas";
import Dialog from "../editorUI/dialog";
import FunctionInterface, { PropertyItem } from "../editorUI/interface/function";
import ModeFunction from "../editorUI/interface/mode";
import { BUTTON, CANVAS, DIV, LABEL, SPAN, TEXT } from "../editorUI/util/HTMLElement";
import { data, frontendUI } from "../main";
import Mode from "../mode";
import BrushCVSFunc from "./brush";
import EraserCVSFunc from "./eraser";
import LineCVSFunc from "./line";
import { CircleCVSFunc, RectangleCVSFunc, TriangleCVSFunc } from "./polygon";
import {btnClear, btnRedo, btnSave, btnUndo, btnUpload} from "./menu";
import Alert from "../editorUI/util/alert";

export class btnCanvas implements FunctionInterface {
    Name: string;
    ImgName?: string | undefined;
    Tip?: string | (() => string) | undefined;

    private draw_func : CanvasInterface;
    constructor(name: string, imgName: string, tip: string, func: CanvasInterface){
        this.Name = name;
        this.ImgName = imgName;
        this.Tip = tip;
        this.draw_func = func;
    }

    StartFunction: (cvs: CanvasBase) => boolean = (cvs: CanvasBase) => {
        cvs.setFunction(this.draw_func);
        return true;
    };
}

export class EditorCanvas implements CanvasBase {
    name = "EditorCanvas";

    private scrollDiv: HTMLDivElement = DIV(
        "w-full h-full overflowX-scroll overflowY-scroll relative"
    );
    private backgroundDiv: HTMLDivElement = DIV("absolute disable-mouse")
    private cvs!: HTMLCanvasElement;
    private ctx!: CanvasRenderingContext2D;
    private prev_cvs!: HTMLCanvasElement;
    private prev_ctx!: CanvasRenderingContext2D;
    private draw_func:CanvasInterface = new NoOPCVSFunc();
    private EventFired: boolean = false;

    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    FinishDrawing()
    {
        if(this.EventFired)//only mousedown and keydown can fire the event
        {
            //console.log('Finish Drawing ...');
            this.ctx.globalCompositeOperation = this.draw_func.CompositeOperation;
            this.ctx.drawImage(this.prev_cvs,0,0);
            this.prev_ctx.clearRect(0, 0, this.prev_cvs.width, this.prev_cvs.height);
            this.EventFired = false;
            this.ctx.globalCompositeOperation = "source-over";
        }
        
        //Add Redo Undo stack

    }

    attachCanvas(container: HTMLDivElement) {

        this.cvs = CANVAS("absolute disable-mouse");
        this.ctx = this.cvs.getContext("2d") as CanvasRenderingContext2D;
        this.cvs.width = this.width;
        this.cvs.height = this.height;

        this.backgroundDiv.style.width = `${this.width}px`;
        this.backgroundDiv.style.height = `${this.height}px`;
        this.backgroundDiv.style.backgroundColor = "white";

        this.prev_cvs = CANVAS("absolute cursor-cross");
        this.prev_ctx = this.prev_cvs.getContext(
            "2d"
        ) as CanvasRenderingContext2D;
        this.prev_cvs.width = this.width;
        this.prev_cvs.height = this.height;

        this.prev_cvs.addEventListener('mousedown', (e) => {
            if(this.draw_func.MouseDown !== undefined)
            {
                this.EventFired = true;
                //console.log('Mouse Down');
                this.draw_func.MouseDown(e);
                requestAnimationFrame(this.render);
            }
            
            console.log('Mouse Down');
        });
        
        this.prev_cvs.addEventListener('mousemove',  (e) => {
            if(this.draw_func.MouseMove !== undefined)
            {
                // console.log('Mouse Move');
                this.draw_func.MouseMove(e);
            }
        });	
        this.prev_cvs.addEventListener('mouseup',  (e) => {
            if(this.draw_func.MouseUp !== undefined)
            {
                console.log('Mouse Up');
                this.draw_func.MouseUp(e);
            }
        });
        this.prev_cvs.addEventListener('mouseout',  (e) => {
            if(this.draw_func.MouseOut !== undefined)
            {
                console.log('Mouse Out');
                this.draw_func.MouseOut(e);
            }
        });

        this.scrollDiv.appendChild(this.backgroundDiv);
        this.scrollDiv.appendChild(this.cvs);
        this.scrollDiv.appendChild(this.prev_cvs);
        container.appendChild(this.scrollDiv);
    }

    setFunction = (func: CanvasInterface) => {
        console.log("setFunction", func);
        this.draw_func = func;
    };
    resizeCanvas = (e?: UIEvent) => {};
    removeCanvas = () => {};
    
    render = () => {
        if(this.EventFired){
            this.draw_func.DrawFunction(this.prev_ctx);
            if(this.draw_func.CanFinishDrawing)
                this.FinishDrawing();
            requestAnimationFrame(this.render)
        }
    };
    public open = () => {
        let upload = document.createElement('input');
        upload.setAttribute('type','file');
        upload.setAttribute('accept','image/*')
        upload.onchange = (event: Event) => {
            const element = event.currentTarget as HTMLInputElement;
            let fileList: FileList | null = element.files;
            if(fileList === null) {dia.close(); return;};
            
            let img = new Image();
            
            img.onload = () => {
                this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
                this.prev_ctx.clearRect(0, 0, this.prev_cvs.width, this.prev_cvs.height);

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
                dia.close()
            }

            let src = URL.createObjectURL(fileList[0]);
            img.src = src;
        }
        let dia = new Dialog("Upload A Image",upload);
        dia.show();
    };
    private stk_history = new Array();
    private his_step: number = 0
    public undo = () => {
        if(this.his_step > 0)
        {
            
            this.his_step--;
            let img = new Image();
            img.src = this.stk_history[this.his_step];
            img.onload = ()=>{
                this.ctx.clearRect(0,0,this.cvs.width,this.cvs.height);
                this.ctx.drawImage(img,0,0);  
            };
            
            console.log('Undo : ' + this.his_step);
        }
    }
    public redo = () => {
        if(this.his_step < this.stk_history.length-1)
        {
            console.log('Redo');
            this.his_step++;
            let img = new Image();
            img.src = this.stk_history[this.his_step];
            img.onload = ()=>{
                this.ctx.clearRect(0,0,this.cvs.width,this.cvs.height);
                this.ctx.drawImage(img,0,0);  
            };
        }
    }
    public save() {
        let dia = new Dialog('Enter the name of image',
        DIV("w-fit flex flex-row",[
            TEXT("txt"),
            SPAN("whitespace","  .png "),
            BUTTON("ok_btn","OK")
        ]))
        dia.show();
    }
    public clear() {
        let btnCancel = BUTTON("w-full mx-2rem","Cancel");
        btnCancel.onclick = () => {
            dia.close();
        }
        let btnOK = BUTTON("w-full mx-2rem","OK");
        btnOK.onclick = () => {
            this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
            dia.close();
        }
        let dia = new Dialog("Do you want to clear the canvas ?",
            DIV("w-full flex flex-row",[
                btnCancel,
                btnOK
            ])
        )
        dia.show();
    }
}

class modeEditor implements ModeFunction {
    Enable = true;

    CenterCanvas = new EditorCanvas(1920,1080);

    MenuToolbarLeft = [
        new btnUpload(),
        new btnUndo(),
        new btnRedo(),
        new btnClear(),
        new btnCanvas("Eraser","eraser","Eraser",new EraserCVSFunc())
    ]

    MenuToolbarRight = [
        new btnSave(),
    ]

    LeftToolbarTop = [
        new btnCanvas("Brush","brush","Brush",new BrushCVSFunc()),
        new btnCanvas("Line","line","Line",new LineCVSFunc()),
        new btnCanvas("Circle","circle","Circle",new CircleCVSFunc()),
        new btnCanvas("Triangle","triangle","Triangle",new TriangleCVSFunc()),
        new btnCanvas("Rectangle","rectangle","Rectangle",new RectangleCVSFunc())
    ]

    StartMode() {}
    EndMode() {}
}

export default modeEditor;
