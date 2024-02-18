import { StateType } from "../data";
export declare const useConsumer: (namespace: string) => any;
export type setValueFunctionType = (value: StateType) => void;
export declare const useProvider: (namespace: string, initData: StateType) => [any, setValueFunctionType];
export declare const useState: (StateType: any) => [StateType, (StateType: any) => void];
export declare const useLocation: () => [Location, (string: any) => void];
