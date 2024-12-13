var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { setUser } from "../redux/userSlice";
export const getUser = (userId, token, dispatch, envVariables) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Usa l'URL dell'API configurato tramite variabile d'ambiente
        const apiUrl = envVariables.VITE_BASE_URL + envVariables.VITE_SEPARATOR + envVariables.VITE_BASE_PORT_PORTAL;
        const response = yield fetch(`${apiUrl}/user/${userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const userData = yield response.json();
        dispatch(setUser(userData));
        return userData;
    }
    catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
});
//# sourceMappingURL=userService.js.map