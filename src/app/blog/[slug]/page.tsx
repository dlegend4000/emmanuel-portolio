import { notFound } from "next/navigation";
import Link from "next/link";
import Layout from "@/components/layout";
import { blogPosts } from "@/content/blog-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Layout>
      <article>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
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
              <li className="mr-2">
                <Link href="/blog" className="text-primary hover:text-gray-600 dark:hover:text-gray-300">
                  Blog
                </Link>
              </li>
              <li className="mr-2">
                <span className="text-gray-500 dark:text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-500 dark:text-gray-400">{post.title}</span>
              </li>
            </ul>
          </nav>
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            {post.title}
          </h1>
          <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
            <div className="flex items-center">
              <time
                dateTime={post.date}
                className="text-gray-500 dark:text-gray-400"
              >
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3">
            <div className="prose max-w-none pb-8 pt-10 dark:prose-dark">
              {/* Tags */}
              <div className="flex flex-wrap">
                {post.tags.map((tag) => (
                  <span key={tag} className="blog-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content */}
              <div className="mt-8 text-gray-500 dark:text-gray-400">
                {post.content?.split("\n").map((paragraph, index) => {
                  // Skip empty paragraphs from the content template literals
                  const trimmed = paragraph.trim();
                  if (!trimmed) return null;

                  // Generate a more unique key than just the index
                  const contentKey = `${post.slug}-p-${index}-${trimmed.substring(0, 10).replace(/\s+/g, '-')}`;

                  // Handle bullet points
                  if (trimmed.startsWith("-")) {
                    return (
                      <li key={contentKey} className="mt-2">
                        {trimmed.substring(1).trim()}
                      </li>
                    );
                  }

                  return (
                    <p key={contentKey} className="mt-4">
                      {trimmed}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
