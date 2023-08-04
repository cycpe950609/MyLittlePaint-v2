export type PaintEvent = {
    X: number;
    Y: number;
    type: "touch" | "mouse" | "pen";
    pressure: number;
}

export interface CanvasInterface {
    Name: string;
    HistoryName?: string;// undefined if dont want to push into history stack
    Tip?: string;
    ImgName?:string;
    CursorName?:string;
    CanFinishDrawing: boolean;
    PointerDown?:   (e: PaintEvent) => void;
    PointerMove?:   (e: PaintEvent) => void;
    PointerUp?:     (e: PaintEvent) => void;
    PointerOut?:    (e: PaintEvent) => void;
    DrawFunction: (
        ctx: CanvasRenderingContext2D,
        width: number, 
        height: number,
        rotate: number,
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

    public PointerDown(e: PaintEvent){
        [this.LastX, this.LastY] = [e.X, e.Y];
        [this.NextX, this.NextY] = [e.X, e.Y];
        this.ifDrawing = true;
        this.ifMouseMove = false;
        this._canfinishDrawing = false;
    };
    public PointerMove(e: PaintEvent){
        if(!this.ifDrawing) return;
        this.ifMouseMove = true;
        [this.NextX, this.NextY] = [e.X, e.Y];
    };
    public PointerUp(e: PaintEvent){
        this._canfinishDrawing = true;
        this.ifMouseMove = false;
        this.ifDrawing = false;
    };
    public PointerOut(e: PaintEvent){
        this._canfinishDrawing = true;
        this.ifMouseMove = false;
        this.ifDrawing = false; 
    };
    protected rotatedDelta(radian: number): [number, number] {
        let OffsetX = this.NextX;
        let OffsetY = this.NextY;
        let dx = OffsetX - this.LastX;
        let dy = OffsetY - this.LastY;
        let new_dx = dx*Math.cos(radian) - dy*Math.sin(-radian);
        let new_dy = dx*Math.sin(-radian) + dy*Math.cos(radian);
        return [new_dx,new_dy];
    }
    protected rotatedPoint(x: number, y: number,radian: number):[number, number]{
        let originX = x - this.LastX;
        let originY = y - this.LastY;
        let newX = originX*Math.cos(radian) - originY*Math.sin(radian);
        let newY = originX*Math.sin(radian) + originY*Math.cos(radian);
        return [newX + this.LastX, newY + this.LastY];
    }
    public DrawFunction(ctx: CanvasRenderingContext2D, width: number, height: number,rotate: number) {};
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
    isUpdate: boolean;
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
    isUpdate: boolean = false;
}
