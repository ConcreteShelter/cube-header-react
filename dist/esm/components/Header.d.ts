import React from "react";
import { envVariables } from "../types";
export interface HeaderProps {
    cubeLogoPic: string;
    env: envVariables;
}
declare const Header: React.FC<HeaderProps>;
export default Header;
