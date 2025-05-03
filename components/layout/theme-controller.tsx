"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

export function ThemeController({ children, ...props }: ThemeProviderProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <NextThemesProvider
      forcedTheme={isHomePage ? "dark" : undefined}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
