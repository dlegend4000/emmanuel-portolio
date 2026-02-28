import { notFound } from "next/navigation";
import Link from "next/link";
import Layout from "@/components/layout";
import { blogPosts } from "@/content/blog-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <Layout>
      <article className="pt-6 pb-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-1.5 text-sm flex-wrap">
            <li>
              <Link
                href="/"
                style={{ color: "var(--gray-500)", textDecoration: "none" }}
              >
                Home
              </Link>
            </li>
            <li style={{ color: "var(--gray-400)" }}>/</li>
            <li>
              <Link
                href="/blog"
                style={{ color: "var(--gray-500)", textDecoration: "none" }}
              >
                Writing
              </Link>
            </li>
            <li style={{ color: "var(--gray-400)" }}>/</li>
            <li
              className="truncate max-w-[200px]"
              style={{ color: "var(--gray-700)" }}
            >
              {post.title}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="pb-8" style={{ borderBottom: "1px solid var(--gray-100)" }}>
          <h1
            className="text-3xl font-semibold leading-snug font-sentient"
            style={{ color: "var(--gray-900)" }}
          >
            {post.title}
          </h1>

          <div className="mt-3 flex items-center gap-4 flex-wrap">
            <time
              dateTime={post.date}
              className="text-sm"
              style={{ color: "var(--gray-500)" }}
            >
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>

            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
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
          </div>
        </div>

        {/* Content */}
        <div className="mt-8 text-sm leading-7" style={{ color: "var(--gray-600)" }}>
          {post.content?.split("\n").map((paragraph, index) => {
            const trimmed = paragraph.trim();
            if (!trimmed) return null;

            const key = `${post.slug}-${index}`;

            if (trimmed.startsWith("-")) {
              return (
                <li key={key} className="ml-4 mt-2 list-disc">
                  {trimmed.substring(1).trim()}
                </li>
              );
            }

            return (
              <p key={key} className="mt-5">
                {trimmed}
              </p>
            );
          })}
        </div>

        {/* Back link */}
        <div className="mt-16 pt-6" style={{ borderTop: "1px solid var(--gray-100)" }}>
          <Link
            href="/blog"
            className="text-sm italic font-sentient"
            style={{ color: "var(--gray-500)", textDecoration: "none" }}
          >
            ← All writing
          </Link>
        </div>
      </article>
    </Layout>
  );
}
