import { CanvasInterface } from "../editorUI/canvas";

class LineCVSFunc implements CanvasInterface {
    Name = 'Line';
    Tip = 'Line';
    ImgName = 'line';
    CursorName ='cross';
    BrushColor = 'rgb(0,255,0)';
    BrushWidth =10;
    private LastX = 0;
    private LastY = 0;
    private NextX = 0;
    private NextY = 0;
    private ifDrawing = false;
    private ifMouseMove = false;
    MouseDown = (e: MouseEvent) => {
        [this.LastX, this.LastY] = [e.offsetX, e.offsetY];
        [this.NextX, this.NextY] = [e.offsetX, e.offsetY];
        this.ifDrawing = true;
        this.ifMouseMove = false;
        this.CanFinishDrawing = false;
    };
    MouseMove = (e: MouseEvent) => {
        if(!this.ifDrawing) return;
    
        this.ifMouseMove = true;
        
        [this.NextX, this.NextY] = [e.offsetX, e.offsetY];
    };
    MouseUp = (e: MouseEvent) => {
        this.CanFinishDrawing = true;
        this.ifMouseMove = false;
        this.ifDrawing = false;
    };
    MouseOut = (e: MouseEvent) => {
        this.CanFinishDrawing = true;
        this.ifMouseMove = false;
        this.ifDrawing = false; 
        
    };
    CanFinishDrawing  = true;
    DrawFunction = (Ctx: CanvasRenderingContext2D) => 
    { 
        
        if(this.ifDrawing)
        {
            //console.log('Drawing...');
            Ctx.strokeStyle = this.BrushColor;
            Ctx.lineWidth = this.BrushWidth;
            Ctx.clearRect(0,0,Ctx.canvas.clientWidth,Ctx.canvas.clientHeight);
            Ctx.lineCap = 'round';
            Ctx.beginPath();
            Ctx.moveTo(this.LastX, this.LastY);
            Ctx.lineTo(this.NextX, this.NextY);
            Ctx.stroke();
        }

    };
    CompositeOperation = <GlobalCompositeOperation>"source-over"
    

};

export default LineCVSFunc;