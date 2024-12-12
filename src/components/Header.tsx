import { useState } from "react";
//import {useKeycloak} from "@react-keycloak/web";
//import {RootState} from "../../types";
import { Link } from "react-router-dom";
//import UserProfile from "./UserProfile";
//import FlagDropdown from "./FlagDropDown";
import { useSelector } from "react-redux";
import React from "react";
import { envVariables } from "../types";

export interface HeaderProps {
  cubeLogoPic: string;
  envVariables: envVariables;
  mainLogoEndpoint: string;
  redirectPortalUrl: string;
}

const Header: React.FC<HeaderProps> = ({ cubeLogoPic, envVariables, mainLogoEndpoint, redirectPortalUrl }) => {
  // Stato per gestire la visualizzazione del dropdown
  const [showDropdown, setShowDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  //const user = useSelector((state: RootState) => state.user.value);
  const user = {
    name: "nome",
    surname: "cognome",
  };

  //const {keycloak} = useKeycloak();

  // Calcola il nome completo dell'utente
  const fullName = user ? `${user.name || ""} ${user.surname || ""}` : "Utente";

  // Funzione per aprire/chiudere il dropdown delle bandiere
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setShowUserDropdown(false);
  };

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
    setShowDropdown(false);
  };

    const redirectCubePortal = () => {
        window.location.href = redirectPortalUrl;
    };

  return (
    <>
      <header className="bg-black text-white shadow-md rounded px-4 flex items-center">
        <div className="flex items-center justify-center lg:justify-start">
          <img
            src={cubeLogoPic}
            alt={"Go to Cube Portal"}
            onClick={redirectCubePortal}
            style={{
              width: "40px",
              height: "40px",
              cursor: "pointer",
            }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 w-full items-center">
          {/* Colonna sinistra (vuota) */}
          <div className="flex justify-start"></div>

          {/* Colonna centrale (logo) */}
          <div className="flex justify-center p-3">
            <Link className="flex justify-center items-center" to={"/"}>
              <img
                src={`${envVariables.VITE_BASE_SVG}/${mainLogoEndpoint}`}
                alt="Logo"
                className="h-[60px]"
              />
            </Link>
          </div>

          {/* Colonna destra (utente e selettore di lingua) */}
          {/* <div className="flex items-center justify-center lg:justify-end">
            {keycloak?.authenticated && (
              <UserProfile
                showUserDropdown={showUserDropdown}
                toggleUserDropdown={toggleUserDropdown}
                user={user}
                fullName={fullName}
              />
            )}
            <FlagDropdown
              showDropdown={showDropdown}
              toggleDropdown={toggleDropdown}
            />
          </div>
        </div> */}
        </div>
      </header>
    </>
  );
};

export default Header;
