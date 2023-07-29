import { CanvasBase, CanvasInterface } from "../editorUI/canvas";
import FunctionInterface, { PropertyItem } from "../editorUI/interface/function"
import { btnCanvas } from "./modeEditor";

class BrushCVSFunc implements CanvasInterface {

    Name = 'Brush';
    Tip = 'Brush';
    ImgName = 'brush';
    CursorName = 'brush';
    BrushColor = 'rgb(0,255,0)';
    BrushWidth = 10;
    private LastX : number = 0;
    private LastY : number = 0;
    private NextX : number = 0;
    private NextY : number = 0;
    private ifDrawing: boolean = false;
    private ifMouseMove: boolean = false;
    MouseDown = (e: MouseEvent,scaleFactor: number) =>{
        [this.LastX, this.LastY] = [e.offsetX/scaleFactor, e.offsetY/scaleFactor];
        [this.NextX, this.NextY] = [e.offsetX/scaleFactor, e.offsetY/scaleFactor];
        this.ifDrawing = true;
        this.ifMouseMove = false;
        this.CanFinishDrawing = false;
    };
    MouseMove = (e: MouseEvent,scaleFactor: number) => {
        if(!this.ifDrawing) return;
    
        this.ifMouseMove = true;
        
        [this.NextX, this.NextY] = [e.offsetX/scaleFactor, e.offsetY/scaleFactor];
    };
    MouseUp = (e: MouseEvent,scaleFactor: number) => {
        this.CanFinishDrawing = true;
        this.ifMouseMove = false;
        this.ifDrawing = false;
    };
    MouseOut = (e: MouseEvent,scaleFactor: number) => {
        this.CanFinishDrawing = true;
        this.ifMouseMove = false;
        this.ifDrawing = false; 
        
    };
    CanFinishDrawing = true;
    DrawFunction = (Ctx: CanvasRenderingContext2D,width: number, height: number) =>
    { 
        
        if(this.ifDrawing)
        {
            //console.log('Drawing...');
            Ctx.strokeStyle = this.BrushColor;
            Ctx.lineWidth = this.BrushWidth;
            Ctx.lineJoin = 'round';
            Ctx.lineCap = 'round';
            Ctx.beginPath();
            Ctx.moveTo(this.LastX, this.LastY);
            Ctx.lineTo(this.NextX, this.NextY);
            Ctx.stroke();
        }
        
        [this.LastX, this.LastY] = [this.NextX, this.NextY];
    };
    
    CompositeOperation  = <GlobalCompositeOperation>"source-over";
};

export default BrushCVSFunc;
