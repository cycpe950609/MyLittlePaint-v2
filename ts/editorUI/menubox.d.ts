import Snabbdom from "@herp-inc/snabbdom-jsx";
export type MenubarPropsType = {
    side: string;
};
export declare const bootstrap: (props: MenubarPropsType) => Promise<void>;
export type MenuboxPropsType = {
    side: string;
};
export declare const MenuboxComp: Snabbdom.Component<MenubarPropsType>;
