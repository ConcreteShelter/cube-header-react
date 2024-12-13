import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: null
};
// Crea un nuovo slice chiamato 'adminRole' utilizzando `createSlice`
export const userSlice = createSlice({
    name: 'user', // Nome del slice, utilizzato per identificare il reducer e le azioni
    initialState, // Stato iniziale del slice
    reducers: {
        // Azione per impostare i dati dell'analisi
        setUser: (state, action) => {
            state.value = action.payload; // Aggiorna l'intero userDTO
        },
        setUserIsAdmin: (state, action) => {
            state.value.admin = action.payload; // Imposta il campo isAdmin del primo userDTO
        },
    }
});
// Esporta le azioni `setAdminRole` e `resetAdminRole` per utilizzarle nei componenti
export const { setUser: setUser, setUserIsAdmin: setUserIsAdmin } = userSlice.actions;
// Esporta il reducer del slice, che sarà usato per configurare lo store Redux
export const userReducer = userSlice.reducer;
//# sourceMappingURL=userSlice.js.map