import React from "react";
import { envVariables } from "../types";
export interface HeaderContainerProps {
    cubeLogoPic: string;
    envVariables: envVariables;
    mainLogoEndpoint: string;
    redirectPortalUrl: string;
}
declare const HeaderWithAuthProvider: React.FC<HeaderContainerProps>;
export default HeaderWithAuthProvider;
