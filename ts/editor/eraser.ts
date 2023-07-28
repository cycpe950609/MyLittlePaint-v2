import { CanvasInterface } from "../editorUI/canvas";

class EraserCVSFunc implements CanvasInterface {
    Name = 'Eraser';
    Tip = 'Eraser';
    ImgName = 'eraser';
    CursorName = 'eraser';
    BrushWidth = 10;
    BrushColor = 'white';
    private LastX = 0;
    private LastY = 0;
    private NextX = 0;
    private NextY = 0;
    private ifDrawing = false;
    private ifMouseMove = false;
    MouseDown = (e: MouseEvent) =>{
        [this.LastX, this.LastY] = [e.offsetX, e.offsetY];
        [this.NextX, this.NextY] = [e.offsetX, e.offsetY];
        this.ifDrawing = true;
        this.ifMouseMove = false;
        this.CanFinishDrawing = false;
    };
    MouseMove = (e: MouseEvent) =>{
        if(!this.ifDrawing) return;
    
        this.ifMouseMove = true;
        
        [this.NextX, this.NextY] = [e.offsetX, e.offsetY];
    };
    MouseUp = (e: MouseEvent) =>{
        this.CanFinishDrawing = true;
        this.ifMouseMove = false;
        this.ifDrawing = false;
    };
    MouseOut = (e: MouseEvent) =>{
        this.CanFinishDrawing = true;
        this.ifMouseMove = false;
        this.ifDrawing = false; 
        
    };
    CanFinishDrawing = true;
    DrawFunction = (Ctx: CanvasRenderingContext2D) =>
    { 
        if(this.ifDrawing)
        {
            let OffsetX = this.NextX;
            let OffsetY = this.NextY;
            //console.log('Test');
            Ctx.strokeStyle = this.BrushColor;//Should same as background
            Ctx.lineWidth = this.BrushWidth;
            Ctx.lineJoin = 'round';
            Ctx.lineCap = 'round';
            Ctx.beginPath();
            Ctx.moveTo(this.LastX, this.LastY);
            Ctx.lineTo(OffsetX, OffsetY);

            [this.LastX, this.LastY] = [OffsetX, OffsetY];
            
            Ctx.stroke();
        }
    };
    CompositeOperation = <GlobalCompositeOperation>"destination-out"

};

export default EraserCVSFunc;