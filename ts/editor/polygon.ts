import { DrawBase } from "../editorUI/canvas";

export class CircleCVSFunc extends DrawBase
{
    Name = 'Circle';
    HistoryName = 'polygon-circle';
    ImgName = 'circle';
    Tip = 'Circle'
    CursorName ='crosshair';
    BorderBrush = 'rgb(255,0,0)';
    BorderWidth = 4;
    ContentColor = 'rgb(0,0,255)';
    CanFilled = false;
    DrawFunction = (Ctx: CanvasRenderingContext2D,width: number, height: number) =>
    { 
        if(this.ifDrawing)
        {
            Ctx.clearRect(0, 0, width, height);
            Ctx.strokeStyle = this.BorderBrush;
            Ctx.lineWidth = this.BorderWidth;
            Ctx.beginPath();

            //Get radius
            let dx = this.NextX - this.LastX;
            let dy = this.NextY - this.LastY;
            let dst = Math.sqrt(dx * dx + dy * dy);

            Ctx.arc(this.LastX, this.LastY, dst, 0, 2*Math.PI);
            if(this.CanFilled)
            {
                Ctx.fillStyle = this.ContentColor;
                Ctx.fill();
            }
            Ctx.stroke();
        }
    };
    CompositeOperation = <GlobalCompositeOperation>"source-over"
}

/* Triangle */
export class TriangleCVSFunc extends DrawBase
{
    Name = 'Triangle';
    HistoryName = 'polygon-triangle';
    ImgName = 'triangle';
    Tip = 'Triangle'
    CursorName ='crosshair';
    BorderBrush = 'rgb(255,0,0)';
    BorderWidth = 4;
    ContentColor = 'rgb(255,0,255)';
    CanFilled=false;
    DrawFunction = (Ctx: CanvasRenderingContext2D,width: number, height: number,angle: number) =>
    { 
        if(this.ifDrawing)
        {

            Ctx.clearRect(0, 0, width, height);
            Ctx.strokeStyle = this.BorderBrush;
            Ctx.lineWidth = this.BorderWidth;
            Ctx.beginPath();

            //Get radius
            let radian = (-angle) * Math.PI/180;
            let newDelta = this.rotatedDelta(radian);
            let new_dx = newDelta[0];
            let new_dy = newDelta[1];
            // let new_dy = dx*Math.sin(-radian) + dy*Math.cos(radian);
            Ctx.moveTo(...this.rotatedPoint(this.LastX+new_dx,this.LastY+new_dy,radian));
            Ctx.lineTo(...this.rotatedPoint(this.LastX,this.LastY+new_dy,radian));
            Ctx.lineTo(...this.rotatedPoint((this.LastX + this.LastX+new_dx)/2,this.LastY,radian));
            Ctx.lineTo(...this.rotatedPoint(this.LastX+new_dx,this.LastY+new_dy,radian));
            // Ctx.closePath();
            if(this.CanFilled)
            {
                Ctx.fillStyle = this.ContentColor;
                Ctx.fill();
            }
            Ctx.stroke();
        }        
    };
    CompositeOperation = <GlobalCompositeOperation>"source-over"
}



export class RectangleCVSFunc extends DrawBase
{
    Name = 'Rectangle';
    HistoryName = 'polygon-rectangle';
    ImgName = 'rectangle';
    Tip = 'Rectangle'
    CursorName='crosshair';
    BorderBrush= 'rgb(255,0,0)';
    BorderWidth= 4;
    ContentColor= 'rgb(0,0,255)';
    CanFilled=false;
    DrawFunction = (Ctx: CanvasRenderingContext2D,width: number, height: number, angle: number) =>
    { 
        if(this.ifDrawing)
        {
            Ctx.clearRect(0, 0, width , height);
            Ctx.strokeStyle = this.BorderBrush;
            Ctx.lineWidth = this.BorderWidth;
            Ctx.beginPath();

            let radian = (-angle) * Math.PI/180;
            let newDelta = this.rotatedDelta(radian);
            let new_dx = newDelta[0];
            let new_dy = newDelta[1];
            
            Ctx.moveTo(...this.rotatedPoint(this.LastX,this.LastY,radian));
            Ctx.lineTo(...this.rotatedPoint(this.LastX + new_dx,this.LastY,radian));
            Ctx.lineTo(...this.rotatedPoint(this.LastX + new_dx,this.LastY + new_dy,radian));
            Ctx.lineTo(...this.rotatedPoint(this.LastX,this.LastY + new_dy,radian));
            Ctx.lineTo(...this.rotatedPoint(this.LastX,this.LastY,radian));

            Ctx.closePath();
            if(this.CanFilled)
            {
                Ctx.fillStyle = this.ContentColor;
                Ctx.fill();
            }
            Ctx.stroke();
        }
    };
    CompositeOperation= <GlobalCompositeOperation>"source-over"
}