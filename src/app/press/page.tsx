import Layout from "@/components/layout";

const pressArticles = [
  {
    title: "Irish AI start-up targets missed calls and lost revenue in trades",
    publication: "The Irish Times",
    date: "March 19, 2026",
    url: "https://www.irishtimes.com/business/innovation/2026/03/19/irish-ai-start-up-targets-missed-calls-and-lost-revenue-in-trades/",
    excerpt:
      "CallCrewAI, an autonomous AI operating system founded by Adelin Diac and Emmanuel Karibiye, automates back-office operations for trades and field service companies by handling 24/7 customer calls, job booking, and quote follow-ups.",
  },
  {
    title:
      "Think global from day one – Dundalk duo return from Silicon Valley with bold plans for AI venture",
    publication: "Irish Independent",
    date: "November 21, 2025",
    url: "https://m.independent.ie/business/technology/think-global-from-day-one-dundalk-duo-return-from-silicon-valley-with-bold-plans-for-ai-venture/a1212712129.html#",
    excerpt:
      "DCU graduates Emmanuel Karibiye and Adelin Diac say trades firms are crying out for help managing constant calls — and believe their new AI assistant can transform the industry.",
  },
  {
    title: "Meet the DCU Graduates Revolutionising Customer Calls with CallCrewAI",
    publication: "DCU:Innovate",
    date: "2025",
    url: "https://dcuinnovate.com/updates/meet-the-dcu-graduates-revolutionising-customer-calls-with-callcrewai",
    excerpt:
      "When Adelin Diac and Emmanuel Karibiye crossed paths at DCU, they quickly recognised a shared passion for technology, problem-solving, and building things that make a tangible difference.",
  },
];

export default function PressPage() {
  return (
    <Layout>
      <div className="pt-6 pb-16">
        {/* Page heading */}
        <div className="pb-8">
          <h1
            className="text-2xl font-semibold font-sentient italic"
            style={{ color: "var(--gray-900)" }}
          >
            Press
          </h1>
          <p className="text-sm pt-1" style={{ color: "var(--gray-500)" }}>
            Articles and features about my work.
          </p>
        </div>

        {/* Articles */}
        <ul>
          {pressArticles.map((article, index) => (
            <li
              key={index}
              className="py-7"
              style={{ borderBottom: "1px solid var(--gray-100)" }}
            >
              {/* Publication + date */}
              <div className="flex items-center gap-2 text-xs" style={{ color: "var(--gray-500)" }}>
                <span className="font-medium" style={{ color: "var(--gray-700)" }}>
                  {article.publication}
                </span>
                <span style={{ color: "var(--gray-300)" }}>·</span>
                <time>{article.date}</time>
              </div>

              {/* Title */}
              <h2 className="mt-2 text-lg font-semibold leading-snug">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  style={{ color: "var(--gray-900)", textDecoration: "none" }}
                >
                  <span
                    className="group-hover:underline"
                    style={{ textUnderlineOffset: "3px" }}
                  >
                    {article.title}
                  </span>
                </a>
              </h2>

              {/* Excerpt */}
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: "var(--gray-600)" }}
              >
                {article.excerpt}
              </p>

              {/* Read link */}
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-link mt-3 inline-block"
              >
                Read article ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
