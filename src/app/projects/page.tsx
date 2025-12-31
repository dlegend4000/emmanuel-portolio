import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Music at the Speed of Thought",
      description: "Advancing research in music models and eliminating the need for a producer by using your voice to modify songs in real time. This project pushes the boundaries of AI-powered music production, allowing artists to shape their sound through natural voice commands.",
      tags: ["AI", "Music", "Machine Learning", "Real-time Processing", "Voice AI"],
      github: "https://github.com/dlegend4000/gomar33",
      external: "https://gomar33-cc75d.web.app/",
      folder: "https://ext.same-assets.com/1060946726/493340101.svg", // Updated to consistent image
    },
    {
      title: "Worlds First Irish Speaking AI",
      description: "Pioneered GlórAI, the world's first Irish-speaking voicebot for language learning. Reached the finals of TechIreland's National AI Challenge, advancing NLP for underrepresented languages and preserving cultural heritage through AI.",
      tags: ["AI", "NLP", "Voice AI", "Irish Language", "Education"],
      github: null,
      external: "https://www.linkedin.com/posts/emma-murphy-38789115b_nationalaichallenge-ai-innovation-ugcPost-7374488313086365696-VvFc?utm_source=share&utm_medium=member_desktop&rcm=ACoAADHU01kBP4J0gHejIpelbB572LGrBxS2eTw",
      folder: "https://ext.same-assets.com/1060946726/493340101.svg", // Updated to consistent image
    },
    {
      title: "Release Day",
      description: "A direct artist-fan marketplace revolutionizing music distribution. Artists monetize viral moments instantly with 85% revenue share, while fans get early access to exclusive tracks before they hit streaming. Building stronger artist-fan relationships through direct transactions.",
      tags: ["Music", "Marketplace", "E-commerce", "Web App", "Artist Platform"],
      github: null,
      external: "https://www.releaseday.info/",
      folder: "https://ext.same-assets.com/1060946726/493340101.svg", // Updated to consistent image
    },
    {
      title: "QuickSat - LEO Marketplace",
      description: "Commercialization of Low Earth Orbit (LEO). A marketplace platform where you can rent resources from satellites with real-time tracking and machine learning elements for predicted downtime.",
      tags: ["Next.js", "TypeScript", "Firebase", "Express.js", "Machine Learning"],
      github: "https://github.com/dlegend4000/nasa-space-apps-hackathon",
      external: "https://quick-sat.web.app/",
      folder: "https://ext.same-assets.com/1060946726/493340101.svg", // Updated to consistent image
    },
    {
      title: "Cloud computing Research",
      description: "This project is primarily for the software portion of a larger mission to explore the feasibiity of using industrial computers in industrial internet of things through cloud computing using procaaso, a platform created by scri-is",
      tags: ["Python", "Procaaso", "Poetry"],
      github: "https://github.com/dlegend4000/Cloud-computing-research",
      external: null,
      folder: "https://ext.same-assets.com/1060946726/493340101.svg", // Updated to consistent image
    },
    {
      title: "Personal Portfolio",
      description: "This is the repo for my personal website and portfolio!",
      tags: ["next.js", "Typescript", "Vercel"],
      github: "https://github.com/dlegend4000/emmanuel-portolio",
      external: null,
      folder: "https://ext.same-assets.com/1060946726/493340101.svg", // Updated to consistent image
    },
    {
      title: "First Priority Travel",
      description: "A streamlined travel booking platform designed to simplify travel to Nigeria with private and expedited check-in services. Built with modern web technologies to provide a seamless booking experience, reducing wait times and enhancing travel convenience for passengers.",
      tags: ["React", "Typescript", "Vercel", "Travel", "E-commerce"],
      github: "https://github.com/dlegend4000/first-priority-travel-app",
      external: "https://first-priority-travel-app.vercel.app/",
      folder: "https://ext.same-assets.com/1060946726/493340101.svg", // Updated to consistent image
    },
   
    {
      title: "Movie recommender web app",
      description: "An intelligent recommendation system using cosine similarity and collaborative filtering algorithms to analyze user preferences and movie features. Leverages machine learning techniques including vectorization and similarity metrics to deliver personalized movie suggestions through third-party APIs.",
      tags: ["Machine Learning", "Python", "Streamlit", "Cosine Similarity", "Collaborative Filtering"],
      github: "https://github.com/dlegend4000/movie-recommendations",
      external: "https://qd4apx9xgmxk4xfw7mbn2y.streamlit.app/",
      folder: "https://ext.same-assets.com/1060946726/493340101.svg", // Updated to consistent image
    },
    
  ];

  return (
    <Layout>
      <div className="mx-auto max-w-6xl divide-y divide-gray-400">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            A list of projects I have been working on or built
          </p>
        </div>

        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projects.map((project) => (
              <div key={project.title} className="md p-4 md:w-1/2" style={{ maxWidth: "544px" }}>
                <div className="h-full transform overflow-hidden rounded-md border-2 border-solid border-gray-200 bg-transparent bg-opacity-20 transition duration-500 hover:scale-105 hover:rounded-md hover:border-primary hover:bg-gray-300 dark:border-gray-700 dark:hover:border-primary dark:hover:bg-gray-800">
                  <div className="p-6">
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row justify-between">
                        {project.external && (
                          <div className="mx-1.5">
                            <a
                              className="text-sm text-gray-500 transition duration-200 hover:rotate-180 hover:text-gray-600"
                              target="_blank"
                              rel="noopener noreferrer"
                              href={project.external}
                            >
                              <span className="sr-only">external</span>
                              <Image
                                src="https://ext.same-assets.com/1060946726/2346525150.svg"
                                alt="external link"
                                width={24}
                                height={24}
                              />
                            </a>
                          </div>
                        )}
                        {project.github && (
                          <div className="mx-1.5">
                            <a
                              className="text-sm text-gray-500 transition duration-200 hover:rotate-180 hover:text-gray-600"
                              target="_blank"
                              rel="noopener noreferrer"
                              href={project.github}
                            >
                              <span className="sr-only">github</span>
                              <Image
                                src="https://ext.same-assets.com/1060946726/493340101.svg"
                                alt="github"
                                width={24}
                                height={24}
                              />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                    <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">{project.title}</h2>
                    <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row justify-between">
                      <div className="text-sm text-gray-400">
                        {project.tags.join(" • ")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
