import { CaseReducerActions, SliceCaseReducers } from "@reduxjs/toolkit";
import ModeFunction from "./interface/mode";
export type ModeInfo = {
    modeName: string;
    enable: boolean;
    def: ModeFunction;
    btn?: HTMLElement;
};
export type StateType = string | number | boolean | null | undefined | Array<string | number | boolean | null | undefined> | any;
export type DataBinderType = {
    key: string;
    val: StateType;
};
export type DataBinderDataType = {
    isCreated: boolean;
    val: StateType;
};
export declare const modeDisable: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<string, "modeManager/disable">, modeEnable: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<string, "modeManager/enable">, modeToggle: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<string, "modeManager/toggle">, modeAdd: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<ModeInfo, "modeManager/add">, modeRemove: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<string, "modeManager/remove">, modeSetRoot: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<string, "modeManager/setRoot">;
export type ToolbarStateType<ButtonInfoType> = {
    [key: string]: ButtonInfoType;
};
export type StatusTipInfo = {
    tip: string;
    showed: boolean;
};
export type StatusBarStateType = ToolbarStateType<StatusTipInfo>;
export declare const editorUIActions: {
    [key: string]: CaseReducerActions<SliceCaseReducers<any>, string>;
};
export declare const editorUIData: import("@reduxjs/toolkit").EnhancedStore<{
    mode: {
        root: string;
        action: string;
        data: {};
        curMode: string;
        lastMode: string;
    };
    menubar_left_: {
        action: string;
        data: any;
    };
    menubar_left_perm: {
        action: string;
        data: any;
    };
    menubar_right_: {
        action: string;
        data: any;
    };
    menubar_right_perm: {
        action: string;
        data: any;
    };
    toolbar_top_: {
        action: string;
        data: any;
    };
    toolbar_top_perm: {
        action: string;
        data: any;
    };
    toolbar_bottom_: {
        action: string;
        data: any;
    };
    toolbar_bottom_perm: {
        action: string;
        data: any;
    };
    sidebar_top_: {
        action: string;
        data: any;
    };
    sidebar_top_perm: {
        action: string;
        data: any;
    };
    sidebar_bottom_: {
        action: string;
        data: any;
    };
    sidebar_bottom_perm: {
        action: string;
        data: any;
    };
    sidebar_window: {
        action: string;
        data: any;
    };
    statusbar_left_: {
        action: string;
        data: any;
    };
    statusbar_right_: {
        action: string;
        data: any;
    };
    state: {
        action: string;
        useStateCount: number;
        firstInit: boolean;
        data: any[];
    };
    binder: {
        action: string;
        useStateCount: number;
        firstInit: boolean;
        data: {
            [key: string]: DataBinderDataType;
        };
    };
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        mode: {
            root: string;
            action: string;
            data: {};
            curMode: string;
            lastMode: string;
        };
        menubar_left_: {
            action: string;
            data: any;
        };
        menubar_left_perm: {
            action: string;
            data: any;
        };
        menubar_right_: {
            action: string;
            data: any;
        };
        menubar_right_perm: {
            action: string;
            data: any;
        };
        toolbar_top_: {
            action: string;
            data: any;
        };
        toolbar_top_perm: {
            action: string;
            data: any;
        };
        toolbar_bottom_: {
            action: string;
            data: any;
        };
        toolbar_bottom_perm: {
            action: string;
            data: any;
        };
        sidebar_top_: {
            action: string;
            data: any;
        };
        sidebar_top_perm: {
            action: string;
            data: any;
        };
        sidebar_bottom_: {
            action: string;
            data: any;
        };
        sidebar_bottom_perm: {
            action: string;
            data: any;
        };
        sidebar_window: {
            action: string;
            data: any;
        };
        statusbar_left_: {
            action: string;
            data: any;
        };
        statusbar_right_: {
            action: string;
            data: any;
        };
        state: {
            action: string;
            useStateCount: number;
            firstInit: boolean;
            data: any[];
        };
        binder: {
            action: string;
            useStateCount: number;
            firstInit: boolean;
            data: {
                [key: string]: DataBinderDataType;
            };
        };
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
