import Layout from "@/components/layout";
import Link from "next/link";

const pressArticles = [
  {
    title: "Think global from day one – Dundalk duo return from Silicon Valley with bold plans for AI venture",
    publication: "Irish Independent",
    date: "November 21, 2025",
    url: "https://m.independent.ie/business/technology/think-global-from-day-one-dundalk-duo-return-from-silicon-valley-with-bold-plans-for-ai-venture/a1212712129.html#",
    excerpt: "DCU graduates Emmanuel Karibiye and Adelin Diac say trades firms are crying out for help managing constant calls — and believe their new AI assistant can transform the industry.",
  },
  {
    title: "Meet the DCU Graduates Revolutionising Customer Calls with CallCrewAI",
    publication: "DCU:Innovate",
    date: "2025",
    url: "https://dcuinnovate.com/updates/meet-the-dcu-graduates-revolutionising-customer-calls-with-callcrewai",
    excerpt: "When Adelin Diac and Emmanuel Karibiye crossed paths at DCU, they quickly recognised a shared passion for technology, problem-solving, and building things that make a tangible difference.",
  },
];

export default function PressPage() {
  return (
    <Layout>
      <div className="mx-auto max-w-6xl divide-y divide-gray-400">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <nav>
            <ul className="flex flex-wrap text-sm">
              <li className="mr-2">
                <Link href="/" className="text-primary hover:text-gray-600 dark:hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li className="mr-2">
                <span className="text-gray-500 dark:text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-500 dark:text-gray-400">Press Coverage</span>
              </li>
            </ul>
          </nav>
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Press Coverage
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            Articles and features about my work and projects
          </p>
        </div>

        <div className="container py-12">
          <div className="space-y-8">
            {pressArticles.map((article, index) => (
              <article
                key={index}
                className="transform overflow-hidden rounded-md border-2 border-solid border-gray-200 bg-transparent bg-opacity-20 transition duration-500 hover:scale-[1.02] hover:rounded-md hover:border-primary hover:bg-gray-300 dark:border-gray-700 dark:hover:border-primary dark:hover:bg-gray-800"
              >
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold text-primary">{article.publication}</span>
                    <span>•</span>
                    <time>{article.date}</time>
                  </div>
                  <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition duration-500 ease-in-out hover:text-primary"
                    >
                      {article.title}
                    </a>
                  </h2>
                  <p className="prose mb-4 max-w-none text-gray-600 dark:text-gray-300">
                    {article.excerpt}
                  </p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    Read Article
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

