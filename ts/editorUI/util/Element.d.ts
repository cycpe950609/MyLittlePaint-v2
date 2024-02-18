import type Snabbdom from '@herp-inc/snabbdom-jsx';
import { JSX } from '@herp-inc/snabbdom-jsx/jsx-runtime';
export type DivPropsType = Omit<JSX.IntrinsicElements["div"], 'id'> & {
    Id?: string;
};
export declare const Div: Snabbdom.Component<DivPropsType>;
export type InputPropsType = Omit<JSX.IntrinsicElements["input"], 'id'> & {
    Id?: string;
};
export declare const Input: Snabbdom.Component<InputPropsType>;
export type LabelPropsType = Omit<JSX.IntrinsicElements["label"], 'id'> & {
    Id?: string;
};
export declare const Label: Snabbdom.Component<LabelPropsType>;
export type SpanPropsType = Omit<JSX.IntrinsicElements["span"], 'id'> & {
    Id?: string;
};
export declare const Span: Snabbdom.Component<SpanPropsType>;
export type TablePropsType = Omit<JSX.IntrinsicElements["table"], 'id'> & {
    Id?: string;
};
export declare const Table: Snabbdom.Component<TablePropsType>;
export type TrPropsType = Omit<JSX.IntrinsicElements["tr"], 'id'> & {
    Id?: string;
};
export declare const Tr: Snabbdom.Component<TrPropsType>;
export type TdPropsType = Omit<JSX.IntrinsicElements["td"], 'id'> & {
    Id?: string;
};
export declare const Td: Snabbdom.Component<TdPropsType>;
export type ImgPropsType = Omit<JSX.IntrinsicElements["img"], 'id'> & {
    Id?: string;
};
export declare const Img: Snabbdom.Component<ImgPropsType>;
export type CanvasPropsType = Omit<JSX.IntrinsicElements["canvas"], 'id'> & {
    Id?: string;
};
export declare const Canvas: Snabbdom.Component<CanvasPropsType>;
