"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./theme-toggle";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [path, setPath] = useState<string>("");
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);

  useEffect(() => {
    // Get the path without leading slash for display
    const pathWithoutSlash = pathname === "/" ? "" : pathname.slice(1);
    setPath(pathWithoutSlash);

    // Create cursor blinking effect
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, [pathname]);

  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label="Emmanuel's Blog">
          <div className="text-primary flex items-center justify-between text-xl font-semibold dark:text-primary">
            ~/
            {path}
            <span className={`ml-1 ${cursorVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}>
              |
            </span>
          </div>
        </Link>
      </div>
      <div className="flex items-center text-base leading-5">
        <nav className="hidden sm:block">
          <ul className="flex items-center">
            <li className="mr-2">
              <Link
                href="/"
                className={`link-underline rounded py-1 px-2 text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:py-2 sm:px-3`}
              >
                Home
              </Link>
            </li>
            <li className="mr-2">
              <Link
                href="/blog"
                className={`link-underline rounded py-1 px-2 text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:py-2 sm:px-3`}
              >
                Blog
              </Link>
            </li>
            <li className="mr-2">
              <Link
                href="/projects"
                className={`link-underline rounded py-1 px-2 text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:py-2 sm:px-3`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`link-underline rounded py-1 px-2 text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:py-2 sm:px-3`}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>

        <ThemeToggle />

        <div className="relative z-10 inline-block text-left ml-2">
          <button
            className="ml-2 cursor-pointer rounded-full bg-zinc-300 ring-zinc-400 transition-all hover:bg-violet-400 hover:ring-1 dark:bg-zinc-700 dark:ring-violet-700 dark:hover:bg-violet-600"
            aria-label="Toggle List Menu"
            type="button"
          >
            <div className="flex h-8 w-8 items-center justify-center p-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
