import Konva from "konva";
import SidebarInterface from '../editorUI/interface/sidebar';
declare class LayerInfo {
    Snapshot: string;
    Name: string;
    ID: string;
}
export declare class LayerManager {
    private layerList;
    private defaultLayer;
    private cvs;
    private ctx;
    private id2zIndex;
    constructor(containerr: HTMLDivElement, width: number, height: number);
    private addLayer;
    addLayerAfter(): string;
    changeTo(id: string): void;
    get Canvas(): Konva.Stage;
    get Layer(): Layer;
    get LayerList(): LayerInfo[];
}
export declare class Layer {
    private _render;
    private _prev;
    private _id;
    private _name;
    constructor(id: string, name: string);
    get ID(): string;
    get Name(): string;
    get zIndex(): number;
    set zIndex(zIndex: number);
    content(): (import("konva/lib/Group").Group | import("konva/lib/Shape").Shape<import("konva/lib/Shape").ShapeConfig>)[];
    merge(layer: Layer): void;
    private _previewImage;
    private _isPreview;
    get Preview(): string;
    flush(): void;
    add(item: any): void;
    clear(): void;
    get render(): import("konva/lib/Group").Group;
    get prev(): import("konva/lib/Group").Group;
}
declare class LayerMgrSidebar implements SidebarInterface {
    constructor(visible?: boolean);
    Name: string;
    ImgName: string;
    Tip: string;
    Visible: boolean;
    Title: () => string;
    Body: () => Promise<import("snabbdom").VNode>;
}
export default LayerMgrSidebar;
