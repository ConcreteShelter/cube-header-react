import { Dispatch } from "@reduxjs/toolkit";
import { envVariables, UserDTO } from "../types";
export declare const getUser: (userId: string, token: string, dispatch: Dispatch, envVariables: envVariables) => Promise<UserDTO>;
