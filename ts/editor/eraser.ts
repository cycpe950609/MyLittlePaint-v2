import Konva from "konva";
import { LineConfig } from "konva/lib/shapes/Line";
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
    DrawFunction = (Ctx: Konva.Layer) =>
    { 
        if(this.ifDrawing)
        {
            //console.log('Drawing...');

            let lastLine = new Konva.Line({
                stroke: this.BrushColor,
                strokeWidth: this.BrushWidth,
                // round cap for smoother lines
                lineCap: 'round',
                lineJoin: 'round',
                globalCompositeOperation: this.CompositeOperation,
                // add point twice, so we have some drawings even on a simple click
                points: [this.LastX, this.LastY, this.NextX, this.NextY],
                } as LineConfig);
            Ctx.add(lastLine);
        }
        
        [this.LastX, this.LastY] = [this.NextX, this.NextY];
    };
    CompositeOperation = <GlobalCompositeOperation>"destination-out"
};

export default EraserCVSFunc;