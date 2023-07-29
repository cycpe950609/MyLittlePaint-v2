import { DrawBase } from "../editorUI/canvas";

class LineCVSFunc extends DrawBase{
    Name = 'Line';
    Tip = 'Line';
    ImgName = 'line';
    CursorName ='cross';
    BrushColor = 'rgb(0,255,0)';
    BrushWidth = 10;
    DrawFunction = (Ctx: CanvasRenderingContext2D,width: number, height: number) => 
    { 
        
        if(this.ifDrawing)
        {
            //console.log('Drawing...');
            Ctx.strokeStyle = this.BrushColor;
            Ctx.lineWidth = this.BrushWidth;
            Ctx.clearRect(0,0,width,height);
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