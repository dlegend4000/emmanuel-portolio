"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  // Close menu when path changes (navigating)
  useEffect(() => {
    if (previousPathname.current !== pathname) {
      setIsOpen(false);
      previousPathname.current = pathname;
    }
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") {
      return true;
    }
    if (path !== "/" && pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  return (
    <div className="relative z-50 inline-block text-left ml-2">
      <button
        className="ml-2 cursor-pointer rounded-full bg-zinc-300 ring-zinc-400 transition-all hover:bg-violet-400 hover:ring-1 dark:bg-zinc-700 dark:ring-violet-700 dark:hover:bg-violet-600"
        aria-label="Toggle List Menu"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex h-8 w-8 items-center justify-center p-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
            <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Link
              href="/"
              className={`block px-4 py-2 text-sm ${isActive('/') ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}
              role="menuitem"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className={`block px-4 py-2 text-sm ${isActive('/blog') ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}
              role="menuitem"
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className={`block px-4 py-2 text-sm ${isActive('/projects') ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}
              role="menuitem"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={`block px-4 py-2 text-sm ${isActive('/about') ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}
              role="menuitem"
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`block px-4 py-2 text-sm ${isActive('/contact') ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}
              role="menuitem"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
