import Layout from "@/components/layout";
import Image from "next/image";

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Me and Myself",
      date: "April 17, 2025",
      dateTime: "2025-04-11T00:00:00.000Z",
      slug: "Me-And-Myelf",
      summary: "A reflection of where I am at and where I am going.",
      tags: [
        { name: "reflection", href: "/tags/reflection" },
        { name: "performance", href: "/tags/performance" },
      ],
    },
    
  ];

  return (
    <Layout>
      <div className="mx-auto max-w-6xl divide-y divide-gray-400">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">All Posts</h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              placeholder="Search articles"
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary focus:ring-primary dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <div className="absolute right-3 top-3">
              <Image
                src="https://ext.same-assets.com/2885283772/2538904567.svg"
                alt="search"
                width={20}
                height={20}
                className="h-5 w-5 text-gray-400 dark:text-gray-300"
              />
            </div>
          </div>
        </div>

        <ul>
          {blogPosts.map((post) => (
            <a
              key={post.slug}
              className="group flex bg-transparent bg-opacity-20 px-2 transition duration-100 hover:scale-105 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
              href={`/blog/${post.slug}`}
            >
              <li className="py-6">
                <article className="space-y-2 bg-transparent bg-opacity-20 p-2 transition duration-200 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-3">
                  <dl>
                    <dd className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={post.dateTime}>{post.date}</time>
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-4">
                    <div className="space-y-1">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <a className="text-gray-900 transition duration-500 ease-in-out hover:text-primary dark:text-gray-100 dark:hover:text-primary" href={`/blog/${post.slug}`}>
                            {post.title}
                          </a>
                        </h2>
                      </div>
                      <div className="flex flex-wrap">
                        {post.tags.map((tag) => (
                          <a
                            key={tag.name}
                            className="mt-2 mr-3 rounded-lg border border-primary py-1 px-3 text-sm font-medium uppercase text-primary transition duration-500 ease-in-out hover:bg-primary hover:text-gray-100 dark:hover:text-gray-900"
                            href={tag.href}
                          >
                            {tag.name}
                          </a>
                        ))}
                      </div>
                      <div className="prose max-w-none pt-5 text-gray-500 dark:text-gray-400">{post.summary}</div>
                    </div>
                  </div>
                </article>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
