"use client";

import { useState } from "react";
import Link from "next/link";
import Layout from "@/components/layout";
import { blogPosts } from "@/content/blog-data";
import type { BlogPost } from "@/content/blog-data";

export default function BlogPage() {
  const [searchValue, setSearchValue] = useState("");

  const filteredBlogPosts = blogPosts.filter((post) => {
    const searchContent = post.title + post.summary + post.tags.join(" ") + (post.content ?? "");
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  const sortedBlogPosts = [...filteredBlogPosts].sort(
    (a: BlogPost, b: BlogPost) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Layout>
      <div className="pt-6 pb-16">
        {/* Page heading */}
        <div className="pb-8">
          <h1
            className="text-2xl font-semibold font-sentient italic"
            style={{ color: "var(--gray-900)" }}
          >
            Writing
          </h1>
          <p className="text-sm pt-1" style={{ color: "var(--gray-500)" }}>
            Thoughts on building, technology, and whatever else is on my mind.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-8 max-w-sm">
          <input
            aria-label="Search articles"
            type="text"
            placeholder="Search articles…"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full rounded-md px-4 py-2 text-sm outline-none transition-colors"
            style={{
              background: "var(--gray-50)",
              border: "1px solid var(--gray-200)",
              color: "var(--gray-800)",
            }}
          />
          <svg
            className="absolute right-3 top-2.5 h-4 w-4"
            style={{ color: "var(--gray-500)" }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Post list */}
        {!sortedBlogPosts.length && (
          <p className="py-4 text-sm" style={{ color: "var(--gray-500)" }}>
            No posts found.
          </p>
        )}

        <ul>
          {sortedBlogPosts.map((post: BlogPost) => (
            <li
              key={post.slug}
              className="py-7"
              style={{ borderBottom: "1px solid var(--gray-100)" }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="block group"
                style={{ textDecoration: "none" }}
              >
                {/* Date */}
                <time
                  dateTime={post.date}
                  className="text-xs"
                  style={{ color: "var(--gray-500)" }}
                >
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>

                {/* Title */}
                <h2
                  className="mt-1 text-lg font-semibold leading-snug"
                  style={{ color: "var(--gray-900)" }}
                >
                  <span
                    className="group-hover:underline"
                    style={{ textUnderlineOffset: "3px" }}
                  >
                    {post.title}
                  </span>
                </h2>

                {/* Summary */}
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: "var(--gray-600)" }}
                >
                  {post.summary}
                </p>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
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
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
