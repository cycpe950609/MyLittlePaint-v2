import { DrawBase } from "../editorUI/canvas";

class BrushCVSFunc extends DrawBase {

    Name = 'Brush';
    HistoryName = 'brush';
    Tip = 'Brush';
    ImgName = 'brush';
    CursorName = 'brush';
    BrushColor = 'rgb(0,255,0)';
    BrushWidth = 10;
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
