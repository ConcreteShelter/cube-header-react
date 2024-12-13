// src/AuthProvider.tsx (in the library)
import React, { ReactNode, useEffect } from "react";
import { ReactKeycloakProvider, useKeycloak } from "@react-keycloak/web";
import keycloakConfig from "../config/Keycloak"; // Your Keycloak configuration
import Header from "./Header";
import { envVariables, HeaderAuthState } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../api/userService";

export interface HeaderContainerProps {
  cubeLogoPic: string;
  envVariables: envVariables;
  mainLogoEndpoint: string;
  redirectPortalUrl: string;
}

const HeaderWithAuthProvider: React.FC<HeaderContainerProps> = (props) => {
  const dispatch = useDispatch();
  const { keycloak } = useKeycloak();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = keycloak?.tokenParsed?.sub;
        if (keycloak?.authenticated && keycloak.token && userId) {
          await getUser(userId, keycloak.token, dispatch, props.envVariables);
          //await getFunctionalityPermissionsList(dispatch, userId);
        }
      } catch (error) {
        console.error(error);
      } finally {
        //setIsLoadedData(true);
      }
    };
    fetchUser();
  }, [
    dispatch,
    keycloak,
    keycloak?.authenticated,
    keycloak.token,
    keycloak?.tokenParsed?.sub,
  ]);

  return (
    <ReactKeycloakProvider
      authClient={keycloakConfig}
      initOptions={{ onLoad: "login-required" }}
    >
      <Header
        cubeLogoPic={props.cubeLogoPic}
        envVariables={props.envVariables}
        mainLogoEndpoint={props.mainLogoEndpoint}
        redirectPortalUrl={props.redirectPortalUrl}
      ></Header>
    </ReactKeycloakProvider>
  );
};

export default HeaderWithAuthProvider;
