import Konva from "konva";
import { LineConfig } from "konva/lib/shapes/Line";
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
    DrawFunction = (Ctx: Konva.Group,width: number, height: number) => 
    { 

        let circle = Ctx.find('.prev-line')
        let polygon = undefined;
        if(circle.length > 0){
            polygon = circle[0]
        }
        else {
            polygon = new Konva.Line({
                name: "prev-line"
            } as LineConfig);
            Ctx.add(polygon)
        }


        if(this.ifDrawing)
        {
            polygon.setAttr("stroke",  this.BrushColor);
            polygon.setAttr("strokeWidth",  5);
            // round cap for smoother lines
            polygon.setAttr("lineCap",  'round');
            polygon.setAttr("lineJoin",  'round');
            polygon.setAttr("globalCompositeOperation",  this.CompositeOperation);
            // add point twice, so we have some drawings even on a simple click
            polygon.setAttr("points",  [this.LastX, this.LastY, this.NextX, this.NextY]);
        }

    };
    CompositeOperation = <GlobalCompositeOperation>"source-over"
};

export default LineCVSFunc;