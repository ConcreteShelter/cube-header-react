/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SEPARATOR: string;
  readonly VITE_BASE_URL: string;
  readonly VITE_BASE_PORT: string;
  readonly VITE_BASE_PORT_REA: string;
  readonly VITE_BASE_PORT_PORTAL: string;
  readonly VITE_REDIRECT_URI: string;
  readonly VITE_BASE_NAME: string;
  readonly VITE_BASE_SVG: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}