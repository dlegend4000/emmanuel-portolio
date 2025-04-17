"use client";

import { useState } from "react";
import Link from "next/link";
import Layout from "@/components/layout";
import { Input } from "@/components/ui/input"; 
import { blogPosts } from "@/content/blog-data";
import type { BlogPost } from "@/content/blog-data"; 

export default function BlogPage() {
  const [searchValue, setSearchValue] = useState("");

  // Filter blog posts based on search
  const filteredBlogPosts = blogPosts.filter((post) => {
    const searchContent = post.title + post.summary + post.tags.join(" ");
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <Layout>
      <div className="mx-auto max-w-6xl divide-y divide-gray-400">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            All Posts
          </h1>
          <div className="relative max-w-lg">
            <Input
              aria-label="Search articles"
              type="text"
              placeholder="Search articles"
              onChange={(e) => setSearchValue(e.target.value)}
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary focus:ring-primary dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-primary"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
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
        </div>

        <ul>
          {!filteredBlogPosts.length && (
            <p className="py-4 text-center">No posts found.</p>
          )}

          {filteredBlogPosts.map((post: BlogPost) => (
            <li key={post.slug} className="py-6">
              <Link href={`/blog/${post.slug}`} className="post-container">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-3">
                  <dl>
                    <dd className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-4">
                    <div className="space-y-1">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <span className="text-gray-900 transition duration-500 ease-in-out hover:text-primary dark:text-gray-100 dark:hover:text-primary">
                            {post.title}
                          </span>
                        </h2>
                      </div>
                      <div className="flex flex-wrap">
                        {post.tags.map((tag) => (
                          <span key={tag} className="blog-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="prose max-w-none pt-5 text-gray-500 dark:text-gray-400">
                        {post.summary}
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
