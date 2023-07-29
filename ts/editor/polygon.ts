import { CanvasInterface } from "../editorUI/canvas";

export class CircleCVSFunc implements CanvasInterface
{
    Name = 'Circle';
    CursorName ='cross';
    BorderBrush = 'rgb(255,0,0)';
    BorderWidth = 4;
    ContentColor = 'rgb(0,0,255)';
    CanFilled = false;
    private LastX = 0;
    private LastY = 0;
    private NextX = 0;
    private NextY = 0;
    private ifDrawing = false;
    private ifMouseMove = false;
    MouseDown = (e: MouseEvent,scaleFactor: number) => {
        [this.LastX, this.LastY] = [e.offsetX/scaleFactor, e.offsetY/scaleFactor];
        [this.NextX, this.NextY] = [e.offsetX/scaleFactor, e.offsetY/scaleFactor];
        this.ifDrawing = true;
        this.ifMouseMove = false;
        this.CanFinishDrawing = false;
    };
    MouseMove = (e: MouseEvent,scaleFactor: number) => {
        if(!this.ifDrawing) return;
    
        this.ifMouseMove = true;
        
        [this.NextX, this.NextY] = [e.offsetX/scaleFactor, e.offsetY/scaleFactor];
    };
    MouseUp = (e: MouseEvent,scaleFactor: number) => {
        this.CanFinishDrawing = true;
        this.ifMouseMove = false;
        this.ifDrawing = false;
    };
    MouseOut = (e: MouseEvent,scaleFactor: number) => {
        this.CanFinishDrawing = true;
        this.ifMouseMove = false;
        this.ifDrawing = false; 
    };
    CanFinishDrawing = true;
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
export class TriangleCVSFunc implements CanvasInterface
{
    Name = 'Triangle';
    CursorName ='cross';
    BorderBrush = 'rgb(255,0,0)';
    BorderWidth = 4;
    ContentColor = 'rgb(255,0,255)';
    CanFilled=false;
    private LastX = 0;
    private LastY = 0;
    private NextX = 0;
    private NextY = 0;
    private ifDrawing = false;
    private ifMouseMove = false;
    MouseDown = (e: MouseEvent,scaleFactor: number) => {
        [this.LastX, this.LastY] = [e.offsetX/scaleFactor, e.offsetY/scaleFactor];
        [this.NextX, this.NextY] = [e.offsetX/scaleFactor, e.offsetY/scaleFactor];
        this.ifDrawing = true;
        this.ifMouseMove = false;
        this.CanFinishDrawing = false;
    };
    MouseMove = (e: MouseEvent,scaleFactor: number) => {
        if(!this.ifDrawing) return;
    
        this.ifMouseMove = true;
        
        [this.NextX, this.NextY] = [e.offsetX/scaleFactor, e.offsetY/scaleFactor];
    };
    MouseUp = (e: MouseEvent,scaleFactor: number) => {
        this.CanFinishDrawing = true;
        this.ifMouseMove = false;
        this.ifDrawing = false;
    };
    MouseOut = (e: MouseEvent,scaleFactor: number) => {
        this.CanFinishDrawing = true;
        this.ifMouseMove = false;
        this.ifDrawing = false; 
    };
    CanFinishDrawing = true;
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



export class RectangleCVSFunc implements CanvasInterface
{
    Name = 'Rectangle';
    CursorName='cross';
    BorderBrush= 'rgb(255,0,0)';
    BorderWidth= 4;
    ContentColor= 'rgb(0,0,255)';
    CanFilled=false;    
    private LastX=0;
    private LastY=0;
    private NextX=0;
    private NextY=0;
    private ifDrawing= false;
    private ifMouseMove= false;
    MouseDown = (e: MouseEvent,scaleFactor: number) => {
        [this.LastX, this.LastY] = [e.offsetX/scaleFactor, e.offsetY/scaleFactor];
        [this.NextX, this.NextY] = [e.offsetX/scaleFactor, e.offsetY/scaleFactor];
        this.ifDrawing = true;
        this.ifMouseMove = false;
        this.CanFinishDrawing = false;
    };
    MouseMove = (e: MouseEvent,scaleFactor: number) => {
        if(!this.ifDrawing) return;
    
        this.ifMouseMove = true;
        
        [this.NextX, this.NextY] = [e.offsetX/scaleFactor, e.offsetY/scaleFactor];
    };
    MouseUp = (e: MouseEvent,scaleFactor: number) => {
        this.CanFinishDrawing = true;
        this.ifMouseMove = false;
        this.ifDrawing = false;
    };
    MouseOut = (e: MouseEvent,scaleFactor: number) => {
        this.CanFinishDrawing = true;
        this.ifMouseMove = false;
        this.ifDrawing = false; 
    };
    CanFinishDrawing = true;
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