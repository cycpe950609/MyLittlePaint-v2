import Snabbdom from "@herp-inc/snabbdom-jsx";
export declare class TipComponent {
    private idx;
    private side;
    constructor(defaultTip: string, side: string, idx: number);
    updateTip(tip: string): void;
    hide(): void;
    show(): void;
}
declare class StatusBar {
    constructor();
    private defaultTip;
    private __createTipComponent__;
    addTip(defaultTip: string, atRight?: boolean): TipComponent;
    clear(): void;
}
export default StatusBar;
export type StatusbarPropsType = {
    side: string;
};
export declare const StatusBarComp: Snabbdom.Component<StatusbarPropsType>;
