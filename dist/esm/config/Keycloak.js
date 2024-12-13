// Importa la libreria Keycloak dal modulo 'keycloak-js'
import Keycloak from 'keycloak-js';
// Configura una nuova istanza di Keycloak con i parametri specificati
const keycloak = new Keycloak({
    // URL del server Keycloak
    url: 'https://docmon.pccube.com:8043',
    // Nome del realm in cui l'applicazione è registrata
    realm: 'cube-portal',
    // ID del client per l'applicazione registrata in Keycloak
    clientId: 'cube-portal-client',
});
// Esporta l'istanza configurata di Keycloak in modo che possa essere utilizzata in altre parti dell'applicazione
export default keycloak;
//# sourceMappingURL=Keycloak.js.map