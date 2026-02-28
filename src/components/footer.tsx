import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-section w-full pb-12 pt-8 mt-16">
      <div className="max-w-2xl mx-auto px-8">
        <div className="text-center flex flex-col gap-1">
          <p className="text-sm" style={{ color: "var(--gray-500)" }}>
            You can find me on
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
            className="text-sm italic font-sentient pt-6"
            style={{ color: "var(--gray-500)" }}
          >
            © 2026, Emmanuel Karibiye
          </p>
        </div>
      </div>
    </footer>
  );
}
