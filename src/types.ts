export interface envVariables {
    readonly VITE_SEPARATOR: string;
    readonly VITE_BASE_URL: string;
    readonly VITE_BASE_PORT: string;
    readonly VITE_BASE_PORT_REA: string;
    readonly VITE_BASE_PORT_PORTAL: string;
    readonly VITE_REDIRECT_URI: string;
    readonly VITE_BASE_NAME: string;
    readonly VITE_BASE_SVG: string;
}

export type UserDTO = {
    id?: string;
    name?: string;
    surname?: string;
    email?: string;
    enabled?: boolean;
    validate?: boolean;
    registrationDate?: string;
    rolesDTO?: Role[];
    propertiesDTO?: propertiesDTO;
    applications: ApplicationDTO[];
    admin?: boolean;
};

export type Role = { key: string; value: string };

export type propertiesDTO = {
    id?: string;
    profilePicture: string;
    defaultLanguage: string;
    status: string;
};

export type ApplicationDTO = {
    id: number;
    name: string;
    code: string;
};

export type HeaderAuthState = {
    user: {
        value: UserDTO;
    }
}