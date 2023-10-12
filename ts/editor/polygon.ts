import Konva from "konva";
import { ShapeConfig } from "konva/lib/Shape";
import { CircleConfig } from "konva/lib/shapes/Circle";
import { PathConfig } from "konva/lib/shapes/Path";
import { PaintContext } from "./canvas";
import { CanvasInterfaceSettings, CanvasSettingEntry, CanvasSettingType, DrawBase } from "../editorUI/canvas";
import { editorUIActions, editorUIData } from "../editorUI/data";
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
    DrawFunction = (Ctx: Konva.Group,width: number, height: number) =>
    { 

        let circle = Ctx.find('.prev-circle')
        let polygon = undefined;
        if(circle.length > 0){
            polygon = circle[0]
        }
        else {
            polygon = new Konva.Circle({
                name: "prev-circle"
            } as CircleConfig);
            Ctx.add(polygon)
        }


        if(this.ifDrawing)
        {
            // Ctx.destroyChildren();

            //Get radius
            let dx = this.NextX - this.LastX;
            let dy = this.NextY - this.LastY;
            let dst = Math.sqrt(dx * dx + dy * dy);

            polygon.setAttr('x',this.LastX)
            polygon.setAttr('y',this.LastY)
            polygon.setAttr('radius',dst)
            polygon.setAttr("fill", this.CanFilled ?  this.ContentColor : 'transparent')
            polygon.setAttr("stroke", this.BorderBrush)
            polygon.setAttr("strokeWidth", this.BorderWidth)
        }
    };
    CompositeOperation = <GlobalCompositeOperation>"source-over"
    get Settings () {
        let rtv: CanvasInterfaceSettings = {
            Name : "Circle",
            Settings : new Map<string, CanvasSettingEntry<any>>([
                ["BorderBrush" , {
                    type: CanvasSettingType.Color,
                    label: "Border Color",
                    value: this.BorderBrush
                }],
                ["BorderWidth", {
                    type: CanvasSettingType.Number,
                    label: "Border Width",
                    info: [1,64], // min,max
                    value: this.BorderWidth
                }]
            ])
        };
        return rtv;
    }
    set Settings (setting: CanvasInterfaceSettings) {
        if(setting.Settings === undefined)
            throw new Error("INTENAL_ERROR: Settings are missing");
        let refreshWindow = false;
        if(setting.Settings.get("BorderBrush") !== undefined) {
            this.BorderBrush = setting.Settings.get("BorderBrush")?.value;
            refreshWindow = true;
        }
        if(setting.Settings.get("BorderWidth") !== undefined) {
            this.BorderWidth = setting.Settings.get("BorderWidth")?.value;
            refreshWindow = true;
        }
        if(refreshWindow)
            editorUIData.dispatch(editorUIActions.sidebar_window.update({id: "SettingsPage", new_func: null}));
    }
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
    DrawFunction = (Ctx: Konva.Group,width: number, height: number,angle: number) =>
    { 
        let tri = Ctx.find('.prev-tri')
        let polygon = undefined;
        if(tri.length > 0){
            polygon = tri[0]
        }
        else {
            polygon = new Konva.Path({
                name: "prev-tri"
            } as PathConfig);
            Ctx.add(polygon)
        }

        if(this.ifDrawing)
        {
            let radian = (-angle) * Math.PI/180;
            let newDelta = this.rotatedDelta(radian);
            let new_dx = newDelta[0];
            let new_dy = newDelta[1];

            // let pt = this.rotatedPoint(this.LastX,this.LastY,radian);

            polygon.setAttr('x',this.LastX);
            polygon.setAttr('y',this.LastY);
            let start = this.rotatedPoint(new_dx,new_dy,radian);
            let pt2   = this.rotatedPoint(0,new_dy,radian);
            let pt3   = this.rotatedPoint((new_dx)/2,0,radian)
            polygon.setAttr('data', `M ${start[0]} ${start[1]} L ${pt2[0]} ${pt2[1]} L ${pt3[0]} ${pt3[1]} Z`);
            polygon.setAttr("fill", this.CanFilled ?  this.ContentColor : 'transparent');
            polygon.setAttr("stroke", this.BorderBrush)
            polygon.setAttr("strokeWidth", this.BorderWidth)
        }    
    };
    CompositeOperation = <GlobalCompositeOperation>"source-over"
    get Settings () {
        let rtv: CanvasInterfaceSettings = {
            Name : "Brush",
            Settings : new Map<string, CanvasSettingEntry<any>>([
                ["BorderBrush" , {
                    type: CanvasSettingType.Color,
                    label: "Brush Color",
                    value: this.BorderBrush
                }],
                ["BorderWidth", {
                    type: CanvasSettingType.Number,
                    label: "Brush Width",
                    info: [1,64], // min,max
                    value: this.BorderWidth
                }]
            ])
        };
        return rtv;
    }
    set Settings (setting: CanvasInterfaceSettings) {
        if(setting.Settings === undefined)
            throw new Error("INTENAL_ERROR: Settings are missing");
        let refreshWindow = false;
        if(setting.Settings.get("BorderBrush") !== undefined) {
            this.BorderBrush = setting.Settings.get("BorderBrush")?.value;
            refreshWindow = true;
        }
        if(setting.Settings.get("BorderWidth") !== undefined) {
            this.BorderWidth = setting.Settings.get("BorderWidth")?.value;
            refreshWindow = true;
        }
        if(refreshWindow)
            editorUIData.dispatch(editorUIActions.sidebar_window.update({id: "SettingsPage", new_func: null}));
    }
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
    DrawFunction = (Ctx: Konva.Group,width: number, height: number, angle: number) =>
    { 
        let rect = Ctx.find('.prev-rect')
        let polygon = undefined;
        if(rect.length > 0){
            polygon = rect[0]
        }
        else {
            polygon = new Konva.Path({
                name: "prev-rect"
            } as PathConfig);
            Ctx.add(polygon)
        }

        if(this.ifDrawing)
        {
            let radian = (-angle) * Math.PI/180;
            let newDelta = this.rotatedDelta(radian);
            let new_dx = newDelta[0];
            let new_dy = newDelta[1];

            polygon.setAttr('x',this.LastX);
            polygon.setAttr('y',this.LastY);
            let rt = this.rotatedPoint(new_dx,0,radian)
            let rb = this.rotatedPoint(new_dx,new_dy,radian)
            let lb = this.rotatedPoint(0,new_dy,radian)
            polygon.setAttr('data', `M 0 0 L ${rt[0]} ${rt[1]} L ${rb[0]} ${rb[1]} L ${lb[0]} ${lb[1]} Z`);
            polygon.setAttr("fill", this.CanFilled ?  this.ContentColor : 'transparent');
            polygon.setAttr("stroke", this.BorderBrush)
            polygon.setAttr("strokeWidth", this.BorderWidth)
        }
    };
    CompositeOperation= <GlobalCompositeOperation>"source-over"
    get Settings () {
        let rtv: CanvasInterfaceSettings = {
            Name : "Brush",
            Settings : new Map<string, CanvasSettingEntry<any>>([
                ["BorderBrush" , {
                    type: CanvasSettingType.Color,
                    label: "Brush Color",
                    value: this.BorderBrush
                }],
                ["BorderWidth", {
                    type: CanvasSettingType.Number,
                    label: "Brush Width",
                    info: [1,64], // min,max
                    value: this.BorderWidth
                }]
            ])
        };
        return rtv;
    }
    set Settings (setting: CanvasInterfaceSettings) {
        if(setting.Settings === undefined)
            throw new Error("INTENAL_ERROR: Settings are missing");
        let refreshWindow = false;
        if(setting.Settings.get("BorderBrush") !== undefined) {
            this.BorderBrush = setting.Settings.get("BorderBrush")?.value;
            refreshWindow = true;
        }
        if(setting.Settings.get("BorderWidth") !== undefined) {
            this.BorderWidth = setting.Settings.get("BorderWidth")?.value;
            refreshWindow = true;
        }
        if(refreshWindow)
            editorUIData.dispatch(editorUIActions.sidebar_window.update({id: "SettingsPage", new_func: null}));
    }
}