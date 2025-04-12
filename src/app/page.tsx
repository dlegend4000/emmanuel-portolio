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

          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 grid-rows-3 gap-8 py-12">
              <div className="my-2 grid items-start gap-8">
                <div className="group relative">
                  <Link href="/projects">
                    <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                      <span className="flex items-center space-x-5">
                        <Image src="https://ext.same-assets.com/3801736898/2320907649.svg" alt="" width={20} height={25} className="w-5 h-6" />
                        <span className="pr-6 text-gray-900 dark:text-gray-100">What I built</span>
                      </span>
                      <span className="pl-6 text-amber-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">Projects&nbsp;→</span>
                    </span>
                  </Link>
                </div>
              </div>

              <div className="my-2 grid items-start gap-8">
                <div className="group relative">
                  <Link href="/about">
                    <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                      <span className="flex items-center space-x-5">
                        <Image src="https://ext.same-assets.com/3801736898/1998606599.svg" alt="" width={26} height={26} className="w-6.5 h-6.5" />
                        <span className="pr-6 text-gray-900 dark:text-gray-100">About Me</span>
                      </span>
                      <span className="pl-6 text-indigo-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">Page&nbsp;→</span>
                    </span>
                  </Link>
                </div>
              </div>

              <div className="my-2 grid items-start gap-8">
                <div className="group relative">
                  <a className="special-underline-new no-underline hover:text-gray-100 dark:hover:text-gray-100" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@henryli904">
                    <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                      <span className="flex items-center space-x-5">
                        <Image src="https://ext.same-assets.com/3801736898/1367661487.svg" alt="" width={26} height={26} className="w-6.5 h-6.5" />
                        <span className="pr-6 text-gray-900 dark:text-gray-100">Videos&nbsp;&nbsp;&nbsp;</span>
                      </span>
                      <span className="pl-6 text-primary transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">Youtube&nbsp;→</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="flex pb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl">Latest</h2>
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
