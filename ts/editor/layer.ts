import Konva from "konva";
import { GroupConfig } from "konva/lib/Group";
import { toVNode } from "snabbdom";
import { v4 as uuidv4 } from "uuid";
import SidebarInterface from '../editorUI/interface/sidebar'

export class LayerManager {
    private layerList = new Map<string, Layer>();
    private defaultLayer: string;

    constructor() {
        this.defaultLayer = this.addLayer();
    }

    private addLayer() {
        const newID = uuidv4() as string;
        this.layerList.set(newID, new Layer(newID));
        return newID;
    }

    public addLayerAfter() {
        const id = this.addLayer();
        // TODO : Layers order
        return id;
    }
    private getLayer(id: string) {
        if(!this.layerList.has(id))
            throw new Error(`Layer ${id} not exist`);
        return this.layerList.get(id) as Layer;
    }
    
    public changeTo(id: string) {
        if(!this.layerList.has(id))
            throw new Error(`Layer ${id} not exist`);
        this.defaultLayer = id;
    }
    public get Layer() : Layer {
        return this.getLayer(this.defaultLayer);
    }
};

export class Layer {
    private _render : Konva.Group;
    private _prev : Konva.Group;

    private _id: string;
    constructor(id: string) {
        this._id = id;
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
        const sp = document.createElement("span");
        sp.innerText = "Layer";
        return toVNode(sp);
    };
}

export default LayerMgrSidebar;