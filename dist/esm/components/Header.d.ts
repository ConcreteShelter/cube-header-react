import React from "react";
import { envVariables } from "../types";
export interface HeaderProps {
    cubeLogoPic: string;
    envVariables: envVariables;
    mainLogoEndpoint: string;
    redirectPortalUrl: string;
}
declare const Header: React.FC<HeaderProps>;
export default Header;
