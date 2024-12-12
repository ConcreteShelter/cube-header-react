import { useState } from "react";
//import {useKeycloak} from "@react-keycloak/web";
//import {RootState} from "../../types";
import { Link } from "react-router-dom";
import React from "react";
const Header = ({ nomeProva }) => {
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
    // const redirectCubePortal = () => {
    //     const env = import.meta.env;
    //     window.location.href = env.VITE_REDIRECT_PORTAL;
    // };
    return (React.createElement(React.Fragment, null,
        React.createElement("header", { className: "bg-black text-white shadow-md rounded px-4 flex items-center" },
            React.createElement("div", { className: "flex items-center justify-center lg:justify-start" }),
            React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 w-full items-center" },
                React.createElement("div", { className: "flex justify-start" }),
                React.createElement("div", { className: "flex justify-center p-3" },
                    React.createElement(Link, { className: "flex justify-center items-center", to: "/" })),
                React.createElement("div", { className: "flex items-center justify-center lg:justify-end" },
                    React.createElement("p", null, "ciaone"))))));
};
export default Header;
//# sourceMappingURL=Header.js.map