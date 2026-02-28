"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle dark mode"
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="expand-btn"
      style={{ padding: "0 0.4rem", fontSize: "0.8rem" }}
    >
      {isDark ? "○" : "●"}
    </button>
  );
}
