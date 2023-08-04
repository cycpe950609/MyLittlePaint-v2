import { DrawBase } from "../editorUI/canvas";
import { PaintContext } from "./canvas";

class EraserCVSFunc extends DrawBase {
    Name = 'Eraser';
    HistoryName = 'eraser';
    Tip = 'Eraser';
    ImgName = 'eraser';
    CursorName = 'eraser';
    BrushWidth = 10;
    BrushColor = 'white';
    DrawFunction = (Ctx: PaintContext) =>
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