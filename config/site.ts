import type { LocalePrefixMode } from 'next-intl/routing';


// Removed invalid imports from 'next-intl'
export const siteConfig = {
  name: "BadtzUI - UI Components for React JS",
  url: "https://badtz-ui.com",
  ogImage: "https://badtz-ui.com/opengraph-image.jpg",
  description:
    "An expanding collection of 70+ free UI components. Production-grade animations with Framer Motion. Daily updates. Open source. React, Tailwind, TypeScript & JavaScript.",
  links: {
    twitter: "https://x.com/badtz_ui",
  },
};


const localePrefix: LocalePrefixMode = 'as-needed';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'Nextjs Starter',
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix,
};

const supportedLocales = {
  en: enUS,
  fr: frFR,
};
export const localizationResources = {
  supportedLocales,
  defaultLocale: AppConfig.defaultLocale,
  localePrefix: AppConfig.localePrefix,
};