/// <reference types="astro/client" />

// https://docs.astro.build/en/guides/environment-variables/#intellisense-for-typescript
interface ImportMetaEnv {
	readonly SITE: string;
	readonly MUX_TOKEN_ID: string;
	readonly MUX_TOKEN_SECRET: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
