import Konva from "konva";
import { GroupConfig } from "konva/lib/Group";
import { KonvaEventListener } from "konva/lib/Node";
import { h, toVNode } from "snabbdom";
import { v4 as uuidv4 } from "uuid";
import SidebarInterface from '../editorUI/interface/sidebar'
import { HBUTTON, HDIV, HSPAN, HTABLE, HTD, HTR } from "../editorUI/util/HHTMLElement";
import { EditorCanvas } from "./modeEditor";

class LayerInfo {
    public Snapshot?: Konva.Image;
    public Name : string = "";
    public ID : string = "";
}

export class LayerManager {
    private layerList = new Map<string, Layer>();
    private defaultLayer: string;

    private cvs !: Konva.Stage;
    private ctx : Konva.Layer;

    constructor(containerr: HTMLDivElement,width: number,height: number) {
        this.cvs = new Konva.Stage({
            container: containerr,   // id of container <div>
            width:  width,
            height: height,
        } as Konva.StageConfig);
        this.ctx = new Konva.Layer(); 
        this.cvs.add(this.ctx);

        this.defaultLayer = this.addLayer();
    }

    private addLayer() {
        const newID = uuidv4() as string;
        let newLayer = new Layer(newID, `Layer ${this.layerList.size + 1}`)
        this.layerList.set(newID, newLayer);
        this.ctx.add(newLayer.prev);
        this.ctx.add(newLayer.render);
        return newID;
    }

    public addLayerAfter() {
        const id = this.addLayer();
        // TODO : Layers order
        return id;
    }

    public changeTo(id: string) {
        if(!this.layerList.has(id))
            throw new Error(`Layer ${id} not exist`);
        this.defaultLayer = id;
    }

    public get Canvas() : Konva.Stage {
        return this.cvs;
    }

    public get Layer() : Layer {
        let id = this.defaultLayer;
        if(!this.layerList.has(id))
            throw new Error(`Layer ${id} not exist`);
        return this.layerList.get(id) as Layer;
    }

    public get LayerList() : LayerInfo[] {
        let rtv : LayerInfo[] = [];
        this.layerList.forEach(layer => rtv.push({
            Name: layer.Name,
            ID: layer.ID,
        }));
        return rtv;
    }
};

export class Layer {
    private _render : Konva.Group;
    private _prev : Konva.Group;

    private _id: string;
    private _name: string;
    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this._render = new Konva.Group({
            name: `render_${id}`,
        } as GroupConfig);
        this._prev = new Konva.Group({
            name: `prev_${id}`,
        } as GroupConfig);

    }
    public get ID() {
        return this._id;
    }
    public get Name() {
        return this._name;
    }

    public content(){
        return this._render.children;
    }
    public merge(layer: Layer) {
        layer.content().forEach((item) => {
            this._render.add(item);
        })
    }
    public add(item: any) {
        this._render.add(item);
    }
    public clear() {
        this._render.destroyChildren();
    }

    public get render() {
        return this._render;
    }
    public get prev() {
        return this._prev;
    }
};


class LayerMgrSidebar implements SidebarInterface {
    constructor(visible = true) {
        this.Visible = visible;
    }
    Name = "LayerMgrSidebar";
    ImgName = "brush";
    Tip = "Layer Manager";
    Visible = true;
    Title = () => "Layer";
    Body = () => {
        if (this.Visible) {
            // let pointsList = (cvs as LabelCanvas).AllNodes;
            let layersList = (window.editorUI.CenterCanvas as EditorCanvas).LayerManager.LayerList;

            const createList = (classNames: string, idx: number, layer: LayerInfo) => {
                let btnEdit = HBUTTON("edit_btn mt-20px px-0", "Modify", (e: MouseEvent) => {
                    (window.editorUI.CenterCanvas as EditorCanvas).LayerManager.changeTo(layer.ID);
                });
            
                return HTR(classNames, [
                    HTD(`${idx}`.padStart(6)),
                    HTD('Preview'),
                    HTD(layer.Name),
                    HTD(btnEdit)
                ])
            }
            let edittedLayer = (window.editorUI.CenterCanvas as EditorCanvas).LayerManager.Layer.ID;
            let newTableBody = layersList.map((layer: LayerInfo, idx: number) => {
                if(layer.ID === edittedLayer)
                {
                    return createList("editted-layer",idx,layer);
                }
                else
                {
                    return createList("normal-layer",idx,layer);
                }
            })
            return HTABLE("w-full b-none align-right", [
                HTR("layers-header", [
                    HTD('Index'),
                    HTD('Preview'),
                    HTD('Name'),
                    HTD('Modify'),
                ])
            ],newTableBody);
        }
        return h("div");
    };
}

export default LayerMgrSidebar;