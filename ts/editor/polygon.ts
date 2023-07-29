import { DrawBase } from "../editorUI/canvas";

export class CircleCVSFunc extends DrawBase
{
    Name = 'Circle';
    CursorName ='cross';
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
    CursorName ='cross';
    BorderBrush = 'rgb(255,0,0)';
    BorderWidth = 4;
    ContentColor = 'rgb(255,0,255)';
    CanFilled=false;
    DrawFunction = (Ctx: CanvasRenderingContext2D,width: number, height: number) =>
    { 
        console.log('Test');
        if(this.ifDrawing)
        {
            Ctx.clearRect(0, 0, width, height);
            Ctx.strokeStyle = this.BorderBrush;
            Ctx.lineWidth = this.BorderWidth;
            Ctx.beginPath();

            //Get radius
            Ctx.moveTo(this.NextX,this.NextY);
            Ctx.lineTo(this.LastX,this.NextY);
            Ctx.lineTo((this.LastX + this.NextX)/2,this.LastY);
            Ctx.lineTo(this.NextX,this.NextY);



            //Ctx.arc(this.LastX, this.LastY, dst, 0, 2*Math.PI);
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
    CursorName='cross';
    BorderBrush= 'rgb(255,0,0)';
    BorderWidth= 4;
    ContentColor= 'rgb(0,0,255)';
    CanFilled=false;
    DrawFunction = (Ctx: CanvasRenderingContext2D,width: number, height: number) =>
    { 
        if(this.ifDrawing)
        {
            let OffsetX = this.NextX;
            let OffsetY = this.NextY;
            
            
            Ctx.clearRect(0, 0, width , height);
            Ctx.strokeStyle = this.BorderBrush;
            Ctx.lineWidth = this.BorderWidth;
            Ctx.beginPath();

            //Get radius
            let dx = OffsetX - this.LastX;
            let dy = OffsetY - this.LastY;


            Ctx.rect(this.LastX,this.LastY,dx,dy);
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