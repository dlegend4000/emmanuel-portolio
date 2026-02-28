import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";

const experience = [
  {
    role: "Co-founder & CTO",
    company: "CallCrewAI",
    url: "https://www.callcrew-ai.com/",
    period: "August 2025 — Present",
    bullets: [
      "Architecting and executing technical strategy for an AI-powered platform serving trades, facilities, and field-service businesses.",
      "Leading full-stack development, infrastructure scaling, and AI/ML integration to deliver 24/7 automated solutions.",
      "Driving product roadmap and technical decisions to scale from MVP to production with active paying customers.",
    ],
  },
  {
    role: "Production Engineer Fellow",
    company: "Meta × MLH",
    url: "https://fellowship.mlh.io/",
    period: "June 2025 — Present",
    bullets: [
      "Production engineering projects under the guidance of Meta engineers and mentors.",
      "Less than 2.5% acceptance rate.",
    ],
  },
  {
    role: "Software Engineering Intern — Data Integrity",
    company: "JP Morgan Chase & Co.",
    url: "https://www.jpmorganchase.com",
    period: "June 2024 — August 2024",
    bullets: [
      "Built a back-end application using Java Spring Boot, Terraform, Docker, and AWS to perform data validation and quality checks.",
      "Developed a REST API using Spring Boot and MySQL to store validation data.",
      "Resolved complex data quality bugs affecting 80M+ clients worldwide.",
    ],
  },
  {
    role: "Data Analyst Intern — Applications",
    company: "Wuxi Biologics",
    url: "https://wuxibiologics.com",
    period: "January 2023 — September 2023",
    bullets: [
      "Performed data analytics and visualisations on large datasets.",
      "Automated dashboard creation using R, Python, SQL, and Tableau to improve team efficiency.",
      "Resolved database issues on Microsoft SQL involving 50k+ rows.",
    ],
  },
  {
    role: "Mechanical Engineering Intern — Design",
    company: "Silent Aire",
    url: "https://www.silent-aire.com",
    period: "July 2022 — September 2022",
    bullets: [
      "Carried out pressure and leak analysis on doors and designed solutions to boost efficiency.",
      "Designed plans and dimensions for HVAC systems in data centres.",
      "Documented standard operating procedures for hyperscale ventilation systems.",
    ],
  },
];

export default function AboutPage() {
  return (
    <Layout>
      <div className="pt-6 pb-16">
        {/* Page heading */}
        <div className="pb-8">
          <h1
            className="text-2xl font-semibold font-sentient italic"
            style={{ color: "var(--gray-900)" }}
          >
            About
          </h1>
        </div>

        {/* Bio section */}
        <div className="flex flex-col sm:flex-row gap-8 pb-10" style={{ borderBottom: "1px solid var(--gray-100)" }}>
          {/* Avatar */}
          <div className="shrink-0 flex flex-col items-center sm:items-start gap-3">
            <Image
              alt="Emmanuel Karibiye"
              src="/me.jpg"
              width={120}
              height={120}
              className="rounded-full object-cover"
              style={{ width: 120, height: 120 }}
            />
            <div>
              <p className="text-sm font-medium" style={{ color: "var(--gray-900)" }}>
                Emmanuel Karibiye
              </p>
              <p className="text-xs" style={{ color: "var(--gray-500)" }}>
                Co-founder &amp; CTO, CallCrewAI
              </p>
              <p className="text-xs" style={{ color: "var(--gray-500)" }}>
                Dublin, Ireland
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/emmanuel-karibiye-509b9a1b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="pill-link text-xs"
            >
              Say hi →
            </a>
          </div>

          {/* Bio text */}
          <div className="flex flex-col gap-4 text-sm leading-relaxed" style={{ color: "var(--gray-600)" }}>
            <p>
              I'm a Software Engineer based in Dublin, Ireland. Currently co-founding{" "}
              <a
                href="https://www.callcrew-ai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-link"
              >
                CallCrewAI
              </a>
              , where we're building AI solutions to transform how trades, facilities, and field-service firms operate.
            </p>
            <p>
              I'm passionate about artificial intelligence, LLMs, full-stack development, reinforcement learning, and UI/UX design. I enjoy exploring how technology intersects with creativity and real-world problems.
            </p>
            <p>
              Outside of work I'm into fashion, music, and sports. I play piano and guitar, and I never miss a chance to get out on the football pitch.
            </p>
            <p>
              If you'd like to work together, reach me through my{" "}
              <Link href="/contact" className="pill-link">
                contacts
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Experience section */}
        <div className="pt-10">
          <p
            className="text-sm italic font-sentient pb-6"
            style={{ color: "var(--gray-600)" }}
          >
            Experience
          </p>

          <ul>
            {experience.map((job, i) => (
              <li
                key={i}
                className="py-7"
                style={{ borderBottom: "1px solid var(--gray-100)" }}
              >
                {/* Role + company */}
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <p className="text-sm font-medium" style={{ color: "var(--gray-900)" }}>
                      {job.role}
                    </p>
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm"
                      style={{ color: "hsl(var(--primary))", textDecoration: "none" }}
                    >
                      {job.company}
                    </a>
                  </div>
                  <span
                    className="text-xs tabular-nums shrink-0 pt-0.5"
                    style={{ color: "var(--gray-500)" }}
                  >
                    {job.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="mt-3 flex flex-col gap-1.5">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-2 text-sm" style={{ color: "var(--gray-600)" }}>
                      <span className="mt-0.5 shrink-0" style={{ color: "var(--gray-400)" }}>‣</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
