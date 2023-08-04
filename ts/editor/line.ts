import { DrawBase } from "../editorUI/canvas";
import { PaintContext } from "./canvas";

class LineCVSFunc extends DrawBase{
    Name = 'Line';
    HistoryName = 'line';
    Tip = 'Line';
    ImgName = 'line';
    CursorName ='crosshair';
    BrushColor = 'rgb(0,255,0)';
    BrushWidth = 10;
    DrawFunction = (Ctx: PaintContext,width: number, height: number) => 
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