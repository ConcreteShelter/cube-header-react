var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// src/AuthProvider.tsx (in the library)
import React, { useEffect } from "react";
import { ReactKeycloakProvider, useKeycloak } from "@react-keycloak/web";
import keycloakConfig from "../config/Keycloak"; // Your Keycloak configuration
import Header from "./Header";
import { useDispatch } from "react-redux";
import { getUser } from "../api/userService";
const HeaderWithAuthProvider = (props) => {
    var _a;
    const dispatch = useDispatch();
    const { keycloak } = useKeycloak();
    useEffect(() => {
        const fetchUser = () => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = keycloak === null || keycloak === void 0 ? void 0 : keycloak.tokenParsed) === null || _a === void 0 ? void 0 : _a.sub;
                if ((keycloak === null || keycloak === void 0 ? void 0 : keycloak.authenticated) && keycloak.token && userId) {
                    yield getUser(userId, keycloak.token, dispatch, props.envVariables);
                    //await getFunctionalityPermissionsList(dispatch, userId);
                }
            }
            catch (error) {
                console.error(error);
            }
            finally {
                //setIsLoadedData(true);
            }
        });
        fetchUser();
    }, [
        dispatch,
        keycloak,
        keycloak === null || keycloak === void 0 ? void 0 : keycloak.authenticated,
        keycloak.token,
        (_a = keycloak === null || keycloak === void 0 ? void 0 : keycloak.tokenParsed) === null || _a === void 0 ? void 0 : _a.sub,
    ]);
    return (React.createElement(ReactKeycloakProvider, { authClient: keycloakConfig, initOptions: { onLoad: "login-required" } },
        React.createElement(Header, { cubeLogoPic: props.cubeLogoPic, envVariables: props.envVariables, mainLogoEndpoint: props.mainLogoEndpoint, redirectPortalUrl: props.redirectPortalUrl })));
};
export default HeaderWithAuthProvider;
//# sourceMappingURL=HeaderWithAuthProvider.js.map