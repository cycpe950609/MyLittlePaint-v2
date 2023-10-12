import Konva from "konva";
import { CircleConfig } from "konva/lib/shapes/Circle";
import { PathConfig } from "konva/lib/shapes/Path";
import { CanvasInterfaceSettings, CanvasSettingEntry, CanvasSettingType, DrawBase } from "../editorUI/canvas";
import { editorUIActions, editorUIData } from "../editorUI/data";
import Mexp from "math-expression-evaluator";

export class PolygonBase extends DrawBase {
    CursorName ='crosshair';
    BorderBrush = 'rgb(255,0,0)';
    BorderWidth = 5;
    ContentColor = 'rgb(0,0,255)';
    CanFilled = false;
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

export class CircleCVSFunc extends PolygonBase
{
    Name = 'Circle';
    HistoryName = 'polygon-circle';
    ImgName = 'circle';
    Tip = 'Circle';
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
}

/* Path base polygon */
export class PathDraw extends PolygonBase {
    Path = "";

    private isVar(entry: string): boolean {
        if(entry[0] === "$" && entry[1] === "{" && entry[entry.length-1] === "}")
            return true;
        return false;
    }
    private validPath = () => {
        let splittedPath = this.Path.split(" ");
        let len = splittedPath.length;
        if(len <= 4)// at least "M ptX ptY Z"
            throw new Error("INERNAL_ERROR: Path is too short");
        if( !(splittedPath[0] === "m"  || splittedPath[0] === "M") )
            throw new Error("INERNAL_ERROR: Path should start with M/m");
        if( !(splittedPath[len-1] === "z"  || splittedPath[len-1] === "Z") )
            throw new Error("INERNAL_ERROR: Path should end with Z/z");
        if( (!this.isVar(splittedPath[1])) || (!this.isVar(splittedPath[2])) )
            throw new Error("INTERNAL_ERROR: Start point is wrong");
        let idx = 3
        while( idx <= len - 2) {
            if(splittedPath[idx] === "L" || splittedPath[idx] === 'l') { // Line to
                if( (!this.isVar(splittedPath[idx+1])) || (!this.isVar(splittedPath[idx+2])) )
                    throw new Error("INTERNAL_ERROR: LineTo point is wrong");
                idx += 3;
                continue;
            }
        }
    }

    DrawFunction = (Ctx: Konva.Group,width: number, height: number, angle: number) => {
        let shape = Ctx.find(`.prev-${this.Name}`)
        let polygon = undefined;
        if(shape.length > 0){
            polygon = shape[0]
        }
        else {
            polygon = new Konva.Path({
                name: `prev-${this.Name}`
            } as PathConfig);
            Ctx.add(polygon)
        }

        this.validPath();

        if(this.ifDrawing)
        {
            let radian = (-angle) * Math.PI/180;
            let newDelta = this.rotatedDelta(radian);
            let new_dx = newDelta[0];
            let new_dy = newDelta[1];

            let operationParser = (operator: string,var1Str: string,var2Str: string) : string => {
                let varname1 = var1Str.slice(2, var1Str.length-1);
                let varname2 = var2Str.slice(2, var2Str.length-1);
                let ptX = null, ptY = null;

                let oper2value = (varname: string) => {
                    const mexp = new Mexp();
                    let tokens = [
                        { type: 1/* tokenTypes.NUMBER */, value: 0,        token: "startX",    show: "startX", precedence: 0 /* preced[tokenTypes.NUMBER]*/ },
                        { type: 1/* tokenTypes.NUMBER */, value: 0,        token: "startY",    show: "startY", precedence: 0 /* preced[tokenTypes.NUMBER]*/ },
                        { type: 1/* tokenTypes.NUMBER */, value: new_dx,   token: "endX",      show: "endX",   precedence: 0 /* preced[tokenTypes.NUMBER]*/ },
                        { type: 1/* tokenTypes.NUMBER */, value: new_dy,   token: "endY",      show: "endY",   precedence: 0 /* preced[tokenTypes.NUMBER]*/ },
                    ];
                    let lexed = mexp.lex(varname,tokens);
                    let postfixed = mexp.toPostfix(lexed);
                    return mexp.postfixEval(postfixed,{});
                }

                ptX = oper2value(varname1)
                ptY = oper2value(varname2)
                let newPt   = this.rotatedPoint(ptX,ptY,radian);
                
                return `${operator} ${newPt[0]} ${newPt[1]} `;
            }

            let drawPath = "";
            let splittedPath = this.Path.split(" ");
            let idx = 0
            while(idx <= splittedPath.length-1)
            {
                switch (splittedPath[idx]) {
                    case "m":case "M":
                        drawPath += operationParser("M", splittedPath[idx+1], splittedPath[idx+2]);
                        idx += 3
                        break;
                    case "l":case "L":
                        drawPath += operationParser("L", splittedPath[idx+1], splittedPath[idx+2]);
                        idx += 3
                        break;
                    case "z":case "Z":
                        drawPath += "Z"
                        idx += 1;
                        break;
                    default:
                        break;
                }
            }

            polygon.setAttr('x',this.LastX);
            polygon.setAttr('y',this.LastY);
            polygon.setAttr('data', drawPath);
            polygon.setAttr("fill", this.CanFilled ?  this.ContentColor : 'transparent');
            polygon.setAttr("stroke", this.BorderBrush)
            polygon.setAttr("strokeWidth", this.BorderWidth)
        }    
    }
}
    
export class TriangleCVSFunc extends PathDraw
{
    Name = 'Triangle';
    HistoryName = 'polygon-triangle';
    ImgName = 'triangle';
    Tip = 'Triangle';
    Path = "M ${endX} ${endY} L ${startX} ${endY} L ${endX/2} ${startY} Z";
}

export class RectangleCVSFunc extends PathDraw
{
    Name = 'Rectangle';
    HistoryName = 'polygon-rectangle';
    ImgName = 'rectangle';
    Tip = 'Rectangle'
    Path = "M ${startX} ${startY} L ${endX} ${startY} L ${endX} ${endY} L ${startX} ${endY} Z";
}