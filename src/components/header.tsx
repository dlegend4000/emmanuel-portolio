"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import MobileMenu from "./mobile-menu";

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

        <MobileMenu />

      </div>
    </header>
  );
}
