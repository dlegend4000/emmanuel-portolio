import Layout from "@/components/layout";

const projects = [
  {
    title: "Music at the Speed of Thought",
    description:
      "Advancing research in music models and eliminating the need for a producer by using your voice to modify songs in real time. Pushes the boundaries of AI-powered music production, allowing artists to shape their sound through natural voice commands.",
    tags: ["AI", "Music", "Voice AI", "Real-time Processing", "Machine Learning"],
    github: "https://github.com/dlegend4000/gomar33",
    external: "https://gomar33-cc75d.web.app/",
  },
  {
    title: "World's First Irish-Speaking AI",
    description:
      "Pioneered GlórAI, the world's first Irish-speaking voicebot for language learning. Reached the finals of TechIreland's National AI Challenge, advancing NLP for underrepresented languages and preserving cultural heritage through AI.",
    tags: ["AI", "NLP", "Voice AI", "Irish Language", "Education"],
    github: null,
    external:
      "https://www.linkedin.com/posts/emma-murphy-38789115b_nationalaichallenge-ai-innovation-ugcPost-7374488313086365696-VvFc",
  },
  {
    title: "Release Day",
    description:
      "A direct artist-fan marketplace revolutionising music distribution. Artists monetise viral moments instantly with 85% revenue share, while fans get early access to exclusive tracks before streaming. Building stronger artist-fan relationships through direct transactions.",
    tags: ["Music", "Marketplace", "E-commerce", "Web App", "Artist Platform"],
    github: null,
    external: "https://www.releaseday.info/",
  },
  {
    title: "QuickSat — LEO Marketplace",
    description:
      "Commercialisation of Low Earth Orbit. A marketplace where you can rent resources from satellites with real-time tracking and machine learning for predicted downtime.",
    tags: ["Next.js", "TypeScript", "Firebase", "Express.js", "Machine Learning"],
    github: "https://github.com/dlegend4000/nasa-space-apps-hackathon",
    external: "https://quick-sat.web.app/",
  },
  {
    title: "Cloud Computing Research",
    description:
      "Software portion of a broader mission exploring the feasibility of using industrial computers in IIoT through cloud computing, using Procaaso — a platform created by SCRI-IS.",
    tags: ["Python", "Procaaso", "IoT", "Cloud"],
    github: "https://github.com/dlegend4000/Cloud-computing-research",
    external: null,
  },
  {
    title: "First Priority Travel",
    description:
      "A streamlined travel booking platform designed to simplify travel to Nigeria with private and expedited check-in services. Reduces wait times and enhances travel convenience through a seamless booking experience.",
    tags: ["React", "TypeScript", "Vercel", "Travel", "E-commerce"],
    github: "https://github.com/dlegend4000/first-priority-travel-app",
    external: "https://first-priority-travel-app.vercel.app/",
  },
  {
    title: "Movie Recommender",
    description:
      "An intelligent recommendation system using cosine similarity and collaborative filtering to analyse user preferences and movie features. Delivers personalised movie suggestions through third-party APIs.",
    tags: ["Machine Learning", "Python", "Streamlit", "Collaborative Filtering"],
    github: "https://github.com/dlegend4000/movie-recommendations",
    external: "https://qd4apx9xgmxk4xfw7mbn2y.streamlit.app/",
  },
  {
    title: "Personal Portfolio",
    description:
      "The repo for this website — built with Next.js, TypeScript, and Tailwind, deployed on Vercel.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    github: "https://github.com/dlegend4000/emmanuel-portolio",
    external: null,
  },
];

export default function ProjectsPage() {
  return (
    <Layout>
      <div className="pt-6 pb-16">
        {/* Page heading */}
        <div className="pb-8">
          <h1
            className="text-2xl font-semibold font-sentient italic"
            style={{ color: "var(--gray-900)" }}
          >
            Projects
          </h1>
          <p className="text-sm pt-1" style={{ color: "var(--gray-500)" }}>
            Things I've built, shipped, and experimented with.
          </p>
        </div>

        {/* Project list */}
        <ul>
          {projects.map((project) => (
            <li
              key={project.title}
              className="py-7"
              style={{ borderBottom: "1px solid var(--gray-100)" }}
            >
              {/* Title + links row */}
              <div className="flex items-start justify-between gap-4">
                <h2
                  className="text-lg font-semibold leading-snug"
                  style={{ color: "var(--gray-900)" }}
                >
                  {project.title}
                </h2>

                <div className="flex items-center gap-2 shrink-0 pt-0.5">
                  {project.external && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pill-link"
                      aria-label={`${project.title} — live site`}
                    >
                      ↗ Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pill-link"
                      aria-label={`${project.title} — GitHub`}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: "var(--gray-600)" }}
              >
                {project.description}
              </p>

              {/* Tags */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-sm uppercase tracking-wide"
                    style={{
                      background: "var(--gray-50)",
                      color: "var(--gray-600)",
                      border: "1px solid var(--gray-200)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
