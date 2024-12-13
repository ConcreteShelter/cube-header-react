import { UserDTO } from "../types";
export interface UserDTOState {
    value: UserDTO | null;
}
export declare const userSlice: import("@reduxjs/toolkit").Slice<UserDTOState, {
    setUser: (state: import("immer").WritableDraft<UserDTOState>, action: {
        payload: any;
        type: string;
    }) => void;
    setUserIsAdmin: (state: import("immer").WritableDraft<UserDTOState>, action: {
        payload: any;
        type: string;
    }) => void;
}, "user", "user", import("@reduxjs/toolkit").SliceSelectors<UserDTOState>>;
export declare const setUser: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "user/setUser">, setUserIsAdmin: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "user/setUserIsAdmin">;
export declare const userReducer: import("redux").Reducer<UserDTOState>;
