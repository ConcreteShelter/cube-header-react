import { useState } from "react";
//import {useKeycloak} from "@react-keycloak/web";
//import {RootState} from "../../types";
import { Link } from "react-router-dom";
import React from "react";
const Header = ({ cubeLogoPic, envVariables, mainLogoEndpoint, redirectPortalUrl }) => {
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
    return (React.createElement(React.Fragment, null,
        React.createElement("header", { className: "bg-black text-white shadow-md rounded px-4 flex items-center" },
            React.createElement("div", { className: "flex items-center justify-center lg:justify-start" },
                React.createElement("img", { src: cubeLogoPic, alt: "Go to Cube Portal", onClick: redirectCubePortal, style: {
                        width: "40px",
                        height: "40px",
                        cursor: "pointer",
                    } })),
            React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 w-full items-center" },
                React.createElement("div", { className: "flex justify-start" }),
                React.createElement("div", { className: "flex justify-center p-3" },
                    React.createElement(Link, { className: "flex justify-center items-center", to: "/" },
                        React.createElement("img", { src: `${envVariables.VITE_BASE_SVG}/${mainLogoEndpoint}`, alt: "Logo", className: "h-[60px]" })))))));
};
export default Header;
//# sourceMappingURL=Header.js.map