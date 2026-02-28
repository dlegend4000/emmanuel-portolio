import Layout from "@/components/layout";

const links = [
  {
    label: "Email",
    href: "mailto:emmanuelkaribiye31@gmail.com",
    description: "emmanuelkaribiye31@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/emmanuel-karibiye-509b9a1b3/",
    description: "emmanuel-karibiye",
  },
  {
    label: "GitHub",
    href: "https://github.com/dlegend4000",
    description: "dlegend4000",
  },
];

export default function ContactPage() {
  return (
    <Layout>
      <div className="pt-6 pb-16">
        {/* Page heading */}
        <div className="pb-8">
          <h1
            className="text-2xl font-semibold font-sentient italic"
            style={{ color: "var(--gray-900)" }}
          >
            Contact
          </h1>
          <p className="text-sm pt-1" style={{ color: "var(--gray-500)" }}>
            Feel free to reach out through any of these.
          </p>
        </div>

        {/* Links */}
        <ul>
          {links.map((link) => (
            <li
              key={link.label}
              style={{ borderBottom: "1px solid var(--gray-100)" }}
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="archive-item group"
                style={{ textDecoration: "none" }}
              >
                <span
                  className="text-sm"
                  style={{ color: "var(--gray-500)" }}
                >
                  {link.label}
                </span>
                <span className="archive-title min-w-0">{link.description}</span>
                <span
                  className="text-sm text-right"
                  style={{ color: "var(--gray-400)" }}
                >
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
