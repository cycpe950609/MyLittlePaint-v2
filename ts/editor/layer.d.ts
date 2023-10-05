import SidebarInterface from '../editorUI/interface/sidebar';
export declare class LayerManager {
    private layerList;
    private defaultLayer;
    constructor();
    private addLayer;
    addLayerAfter(): string;
    private getLayer;
    changeTo(id: string): void;
    get Layer(): Layer;
}
export declare class Layer {
    private _render;
    private _prev;
    private _id;
    constructor(id: string);
    get ID(): string;
    content(): (import("konva/lib/Group").Group | import("konva/lib/Shape").Shape<import("konva/lib/Shape").ShapeConfig>)[];
    merge(layer: Layer): void;
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
    Body: () => import("snabbdom").VNode;
}
export default LayerMgrSidebar;