import Layout from "@/components/layout";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div>
        <div className="mb-12 flex flex-col items-center gap-x-12 xl:flex-row">
          <div className="pt-6">
            <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Hi, I am <span className="text-primary">Emmanuel</span>
            </h1>
            <h2 className="prose pt-5 text-lg text-gray-600 dark:text-gray-300">
              Welcome to My personal website and blog. I am a Software Engineer who is passionate about building things with amazing people. In my free time, I work on a variety of things, including Game Jams, Chess Engines, and other ad hoc projects.
            </h2>
            <p className="pt-5 text-lg leading-7 text-slate-600 dark:text-slate-300 sm:block md:hidden lg:hidden">
              I hope you find something interesting here.
              <span> Thank you for visiting!</span>
            </p>
            <p className="hidden pt-10 text-lg leading-7 text-slate-600 dark:text-slate-300 md:block">
              I hope you find something interesting here.
              <span> Thank you for visiting!</span>
            </p>
          </div>

          {/* Replacing button grid with profile picture */}
          <div className="flex items-center justify-center py-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/me.jpg" // <- Update this path to your profile image
                alt="Profile picture of Emmanuel"
                width={700}
                height={300}
                className="rounded-lg object-cover w-[700px] h-[300px]"
              />
            </div>
          </div>
        </div>

        <h2 className="flex pb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl">Latest</h2>

        {/* Blog section remains unchanged */}
        <ul>
          <a className="group flex bg-transparent bg-opacity-20 px-2 transition duration-100 hover:scale-105 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800" href="/blog/Flow-And-Self">
            <li className="py-6">
              <article>
                <div className="space-y-2 bg-transparent bg-opacity-20 p-2 transition duration-200 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime="2025-04-11T00:00:00.000Z">April 11, 2025</time>
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-4">
                    <div className="space-y-1">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <a className="text-gray-900 transition duration-500 ease-in-out hover:text-primary dark:text-gray-100 dark:hover:text-primary" href="/blog/Flow-And-Self">Flow and Self</a>
                        </h2>
                      </div>
                      <div className="flex flex-wrap">
                        <a className="mt-2 mr-3 rounded-lg border border-primary py-1 px-3 text-sm font-medium uppercase text-primary transition duration-500 ease-in-out hover:bg-primary hover:text-gray-100 dark:hover:text-gray-900" href="/tags/reflection">reflection</a>
                        <a className="mt-2 mr-3 rounded-lg border border-primary py-1 px-3 text-sm font-medium uppercase text-primary transition duration-500 ease-in-out hover:bg-primary hover:text-gray-100 dark:hover:text-gray-900" href="/tags/performance">performance</a>
                      </div>
                      <div className="prose max-w-none pt-5 text-gray-500 dark:text-gray-400">A reflection on the flow state and the self.</div>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          </a>
        </ul>
        <div className="flex justify-end pt-5 text-lg font-normal leading-6">
          <a className="special-underline text-primary hover:text-gray-100 hover:no-underline dark:text-primary hover:dark:text-gray-100" aria-label="all posts" href="/blog">All Posts →</a>
        </div>
      </div>
    </Layout>
  );
}
