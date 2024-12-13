import { Dispatch } from "@reduxjs/toolkit";
import { setUser } from "../redux/userSlice";
import { envVariables, UserDTO } from "../types";

export const getUser = async (userId: string, token: string, dispatch: Dispatch, envVariables: envVariables): Promise<UserDTO> => {
    try {
        // Usa l'URL dell'API configurato tramite variabile d'ambiente
        const apiUrl = envVariables.VITE_BASE_URL + envVariables.VITE_SEPARATOR + envVariables.VITE_BASE_PORT_PORTAL;

        const response = await fetch(`${apiUrl}/user/${userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const userData: UserDTO = await response.json();
        dispatch(setUser(userData));
        return userData;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};