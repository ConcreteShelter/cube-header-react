export type UserState = {
  user: {
    value: UserDTO;
  };
};

export type UserDTO = {
  id?: string;
  name?: string;
  surname?: string;
  email?: string;
  enabled?: boolean;
  validate?: boolean;
  registrationDate?: string;
  rolesDTO?: Role[];
  propertiesDTO?: PropertiesDTO;
  applications: ApplicationDTO[];
  admin?: boolean;
};

export type Role = { key: string; value: string };

export type PropertiesDTO = {
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
