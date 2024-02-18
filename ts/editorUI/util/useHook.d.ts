import { StateType } from "../data";
export declare const useConsumer: (selector: string) => void;
export declare const useProvider: (selector: string) => ((newState: any) => void)[];
export declare const useState: (StateType: any) => [StateType, (StateType: any) => void];
export declare const useLocation: () => [Location, (string: any) => void];
