import Layout from "@/components/layout";
import Link from "next/link";

export default function ContactPage() {
  return (
    <Layout>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Contact
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Feel free to contact me through any of these platforms
          </p>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap gap-4">
            <a
              className="flex items-center rounded-lg border border-gray-200 p-6 transition-all hover:border-primary hover:bg-gray-100 dark:border-gray-800 dark:hover:border-primary dark:hover:bg-gray-800"
              href="https://github.com/dlegend4000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-xl font-semibold">GitHub</div>
            </a>
            <a
              className="flex items-center rounded-lg border border-gray-200 p-6 transition-all hover:border-primary hover:bg-gray-100 dark:border-gray-800 dark:hover:border-primary dark:hover:bg-gray-800"
              href="https://www.linkedin.com/in/emmanuel-karibiye-509b9a1b3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-xl font-semibold">LinkedIn</div>
            </a>
            <a
              className="flex items-center rounded-lg border border-gray-200 p-6 transition-all hover:border-primary hover:bg-gray-100 dark:border-gray-800 dark:hover:border-primary dark:hover:bg-gray-800"
              href="mailto:emmanuelkaribiye31@@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-xl font-semibold">Email</div>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
