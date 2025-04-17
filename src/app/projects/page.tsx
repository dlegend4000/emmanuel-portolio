import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "This game is the repo for my personal website and portfolio!",
      tags: ["next.js", "Typescript", "Vercel"],
      github: "https://github.com/dlegend4000/emmanuel-portolio",
      external: null,
      folder: "https://ext.same-assets.com/1060946726/493340101.svg", // Updated to consistent image
    },
    {
      title: "Travel Web App",
      description: "This is a web app made for a service to book private and quick check-in into Nigeria.",
      tags: ["React", "Javascript", "Vercel"],
      github: "https://github.com/dlegend4000/first-priority-app",
      external: "https://first-priority-app.vercel.app/",
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
      title: "Movie recommender web app",
      description: "Using machine learning and third party APIs this project is designed to help you find suitable movie recommendations.",
      tags: ["Machine Learning", "Python", "Streamlit"],
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
                        <div className="mx-1.5">
                          <Image src={project.folder} alt="folder" width={24} height={24} />
                        </div>
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
