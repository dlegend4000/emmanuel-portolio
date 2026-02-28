"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { blogPosts } from "@/content/blog-data";
import CoverflowGallery from "@/components/CoverflowGallery";
import ThemeToggle from "@/components/theme-toggle";


function useCurrentTime() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: "Europe/Dublin",
      };
      setTime(
        now.toLocaleTimeString("en-US", options).toLowerCase().replace(" ", "\u00a0")
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return time;
}

export default function Home() {
  const [expanded, setExpanded] = useState(false);
  const currentTime = useCurrentTime();
  const latestPosts = blogPosts.slice(0, 3);

  const formatPostDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return {
      year: String(d.getFullYear()),
      short: `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}`,
    };
  };

  return (
    <>
      <main className="site-surface">
        <div className="flex flex-col items-center min-h-screen">
          <div className="pt-12 sm:pt-24 pb-24 sm:pb-32 max-w-2xl px-8 w-full">

            {/* Header / Breadcrumb + Nav */}
            <nav aria-label="Navigation" className="flex items-center justify-between flex-wrap gap-y-2">
              <div className="flex flex-row items-center gap-1.5 whitespace-nowrap">
                <Link
                  href="/"
                  className="font-sentient italic text-sm font-medium text-gray-900 shrink-0 no-underline"
                  style={{ color: "var(--gray-900)" }}
                >
                  Emmanuel Karibiye
                </Link>
                <span className="text-sm shrink-0" style={{ color: "var(--gray-500)" }}>—</span>
                <span
                  className="text-sm italic font-sentient"
                  style={{ color: "var(--gray-600)" }}
                >
                  Founder &amp; Builder
                </span>
              </div>
              <ThemeToggle />
            </nav>

            {/* Bio Section */}
            <div className="max-w-xl mx-auto pt-10">
              <p
                className="text-sm leading-relaxed pt-2"
                style={{ color: "var(--gray-600)" }}
              >
                I'm interested in art, software, and what's possible at the edge of technology and human experience.
              </p>
              <p
                className="text-sm leading-relaxed pt-2"
                style={{ color: "var(--gray-600)" }}
              >
                Currently co-founding{" "}
                <a
                  href="https://www.callcrew-ai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-link"
                >
                  CallCrewAI
                </a>
                , the autopilot for trades and field service teams. I care about clarity, real use, and building things that hold up.
              </p>
              <p
                className="text-sm leading-relaxed pt-2"
                style={{ color: "var(--gray-600)" }}
              >
                See my{" "}
                <Link href="/projects" className="pill-link">
                  projects
                </Link>
                . Read the{" "}
                <Link href="/blog" className="pill-link">
                  blog
                </Link>
                . Or reach me through{" "}
                <Link href="/contact" className="pill-link">
                  email
                </Link>
                .
              </p>

              {/* Expandable content */}
              <div className="pt-5">
                <button
                  type="button"
                  onClick={() => setExpanded(!expanded)}
                  className="expand-btn"
                  aria-expanded={expanded}
                >
                  •••
                </button>
                {expanded && (
                  <p
                    className="mt-3 text-sm leading-relaxed rounded-xl animate-in fade-in slide-in-from-top-2 duration-300"
                    style={{
                      color: "var(--gray-600)",
                      background: "var(--gray-100)",
                      padding: "0.75rem 1rem",
                    }}
                  >
                    Hackeurope Grand Winner, more wins include (ElevenLabs, JP Morgan, NDRC etc.), Meta Fellow, Web Summit Scholar. See the full{" "}
                    <Link href="/about" className="pill-link">about</Link>
                    , my{" "}
                    <Link href="/projects" className="pill-link">projects</Link>
                    , the{" "}
                    <Link href="/blog" className="pill-link">blog</Link>
                    , or{" "}
                    <Link href="/press" className="pill-link">press</Link>
                    .
                  </p>
                )}
              </div>

              {/* Coverflow Gallery — Moments */}
              <CoverflowGallery />

              {/* Writing / Archive */}
              <p
                className="text-sm leading-relaxed pt-10 italic font-sentient"
                style={{ color: "var(--gray-600)" }}
              >
                Writing
              </p>
              <section className="pt-4">
                <ul>
                  {latestPosts.map((post) => {
                    const { year, short } = formatPostDate(post.date);
                    return (
                      <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`} className="archive-item group">
                          <span
                            className="tabular-nums"
                            style={{ color: "var(--gray-500)", fontVariantNumeric: "tabular-nums" }}
                          >
                            {year}
                          </span>
                          <span className="archive-title min-w-0">{post.title}</span>
                          <span
                            className="text-sm tabular-nums text-right"
                            style={{ color: "var(--gray-500)", fontVariantNumeric: "tabular-nums" }}
                          >
                            {short}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>

              <div className="pt-4 flex justify-end">
                <Link
                  href="/blog"
                  className="text-sm italic font-sentient transition-colors"
                  style={{ color: "var(--gray-500)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--gray-900)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--gray-500)")
                  }
                >
                  All writing →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer-section w-full pb-16 pt-4 sm:pt-24 sm:pb-32">
        <div className="mx-auto w-full max-w-2xl px-8">
          <div className="text-center flex flex-col gap-1">
            <p className="text-sm leading-relaxed pt-2" style={{ color: "var(--gray-500)" }}>
              Right now I'm in Dublin, Ireland, where it's{" "}
              <time className="font-sentient italic">
                {currentTime || "12:00\u00a0p.m."}
              </time>
            </p>
            <p className="text-sm" style={{ color: "var(--gray-500)" }}>
              You can also find me on
              <a
                href="https://github.com/dlegend4000"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/emmanuelkaribiye/"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              or
              <Link href="/contact" className="footer-link">
                Email
              </Link>
              me directly.
            </p>
            <p
              className="text-sm italic font-sentient pt-12"
              style={{ color: "var(--gray-500)" }}
            >
              © 2026, Emmanuel Karibiye
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
