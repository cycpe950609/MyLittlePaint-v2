import Konva from "konva";
import { Line, LineConfig } from "konva/lib/shapes/Line";
import { DrawBase } from "../editorUI/canvas";
import { PaintContext } from "./canvas";

class BrushCVSFunc extends DrawBase {

    Name = 'Brush';
    HistoryName = 'brush';
    Tip = 'Brush';
    ImgName = 'brush';
    CursorName = 'brush';
    BrushColor = 'rgb(0,255,0)';
    BrushWidth = 10;
    DrawFunction = (Ctx: Konva.Layer,width: number, height: number) =>
    { 
        let brush = Ctx.find('.prev-brush')
        let polygon = undefined;
        if(brush.length > 0){
            polygon = brush[0]
        }
        else {
            polygon = new Konva.Line({
                name: "prev-brush",
                stroke: this.BrushColor,
                strokeWidth: this.BrushWidth,
                // round cap for smoother lines
                lineCap: 'round',
                lineJoin: 'round',
                globalCompositeOperation: this.CompositeOperation,
                points: [this.LastX, this.LastY,this.LastX, this.LastY]
            } as LineConfig);
            Ctx.add(polygon)
        }
        
        if(this.ifDrawing)
        {
            //console.log('Drawing...');
            let newPoints = (<Line>polygon).points().concat([this.NextX, this.NextY]);
            (<Line>polygon).points(newPoints);
        }
        
        [this.LastX, this.LastY] = [this.NextX, this.NextY];
    };
    
    CompositeOperation  = <GlobalCompositeOperation>"source-over";
};

export default BrushCVSFunc;
