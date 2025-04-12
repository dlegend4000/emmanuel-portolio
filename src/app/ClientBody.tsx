"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
    setMounted(true);
  }, []);

  // Effect to set theme based on user preference
  useEffect(() => {
    const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkModePreference.matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [setTheme]);

  if (!mounted) {
    return (
      <body className="antialiased">
        {children}
      </body>
    );
  }

  return (
    <body className="antialiased bg-background text-foreground dark:bg-background-color dark:text-white" suppressHydrationWarning>
      {children}
    </body>
  );
}
