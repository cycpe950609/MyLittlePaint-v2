export interface CanvasInterface {
    Name: string;
    Tip?: string;
    ImgName?:string;
    CursorName?:string;
    CanFinishDrawing: boolean;
    MouseDown?: (e: MouseEvent,scaleFactor: number) => void;
    MouseMove?: (e: MouseEvent,scaleFactor: number) => void;
    MouseUp?: (e: MouseEvent,scaleFactor: number) => void;
    MouseOut?: (e: MouseEvent,scaleFactor: number) => void;
    DrawFunction: (
        ctx: CanvasRenderingContext2D,
        width: number, 
        height: number
    ) => void;
    CompositeOperation: GlobalCompositeOperation;
}

export class DrawBase implements CanvasInterface {
    Name: string = "base";
    private _canfinishDrawing: boolean = true
    public get CanFinishDrawing(){ return this._canfinishDrawing; };

    protected LastX = 0;
    protected LastY = 0;
    protected NextX = 0;
    protected NextY = 0;
    protected ifDrawing = false;
    protected ifMouseMove = false;

    public MouseDown(e: MouseEvent, scaleFactor: number){
        [this.LastX, this.LastY] = [e.offsetX/scaleFactor, e.offsetY/scaleFactor];
        [this.NextX, this.NextY] = [e.offsetX/scaleFactor, e.offsetY/scaleFactor];
        this.ifDrawing = true;
        this.ifMouseMove = false;
        this._canfinishDrawing = false;
    };
    public MouseMove(e: MouseEvent, scaleFactor: number){
        if(!this.ifDrawing) return;
        this.ifMouseMove = true;
        [this.NextX, this.NextY] = [e.offsetX/scaleFactor, e.offsetY/scaleFactor];
    };
    public MouseUp(e: MouseEvent, scaleFactor: number){
        this._canfinishDrawing = true;
        this.ifMouseMove = false;
        this.ifDrawing = false;
    };
    public MouseOut(e: MouseEvent, scaleFactor: number){
        this._canfinishDrawing = true;
        this.ifMouseMove = false;
        this.ifDrawing = false; 
    };
    public DrawFunction(ctx: CanvasRenderingContext2D, width: number, height: number) {};
    public CompositeOperation: GlobalCompositeOperation = <GlobalCompositeOperation>"source-over";
};
export class NoOPCVSFunc extends DrawBase{};
export interface CanvasBase {
    name: string;
    attachCanvas: (container: HTMLDivElement) => void;
    setFunction: (func: CanvasInterface) => void;
    resizeCanvas: (e?: UIEvent) => void;
    removeCanvas: () => void;
    render: () => void;
    update?: (time: DOMHighResTimeStamp) => void; //Use in animateion
}

export class NoOPCanvas implements CanvasBase {
    update?: ((time: number) => void) | undefined;
    name = "NoOPCanvas";
    attachCanvas(container: HTMLDivElement) {
        // console.log("NoOPCanvas attachCanvas on ");
        // console.log(container);
    }
    setFunction(func: CanvasInterface){
        console.log("setFunction",func);
    }
    resizeCanvas(e?: UIEvent) {
        // console.log("Resize Canvas Event");
    }
    removeCanvas() {
        // console.log("NoOPCanvas removeCanvas");
    }
    render() {
        // console.log("NoOPCanvas render");
    }
}
