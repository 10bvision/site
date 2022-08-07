// TODO: export this into a npm package and use it in the app.
export const locales = ["en", "fr", "ar"] as const;
export type Locale = typeof locales[number];

export const defaultLocale = locales[0];

export const RTL_LOCALES: readonly Locale[] = ["ar"] as const;
