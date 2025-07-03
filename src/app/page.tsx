"use client";
import Layout from "@/components/layout";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/content/blog-data";
import AchievementsGrid from "@/components/AchievementsGrid";
import Highlights from "@/components/Highlights";
import React, { useEffect, useState } from "react";

export default function Home() {
    // Get the latest 3 blog posts
    const latestPosts = blogPosts.slice(0, 3);

    // Typewriter animation for multiple phrases
    const phrases = [
        "Emmanuel",
        "Founder & Builder",
        "Software Engineer"
    ];
    const [typed, setTyped] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(120);

    useEffect(() => {
        let typingTimeout: NodeJS.Timeout;
        const currentPhrase = phrases[phraseIndex];

        if (!isDeleting && typed.length < currentPhrase.length) {
            typingTimeout = setTimeout(() => {
                setTyped(currentPhrase.substring(0, typed.length + 1));
                setTypingSpeed(120);
            }, typingSpeed);
        } else if (!isDeleting && typed.length === currentPhrase.length) {
            typingTimeout = setTimeout(() => setIsDeleting(true), 1200);
        } else if (isDeleting && typed.length > 0) {
            typingTimeout = setTimeout(() => {
                setTyped(currentPhrase.substring(0, typed.length - 1));
                setTypingSpeed(60);
            }, typingSpeed);
        } else if (isDeleting && typed.length === 0) {
            setIsDeleting(false);
            setPhraseIndex((phraseIndex + 1) % phrases.length);
        }
        return () => clearTimeout(typingTimeout);
    }, [typed, isDeleting, phraseIndex, phrases]);

    return (
        <Layout>
            <div>
                <div className="mb-12 flex flex-col items-center gap-x-12 xl:flex-row">
                    <div className="pt-6">
                        {/* Dummy element to ensure Tailwind includes these classes: opacity-100 opacity-0 translate-y-0 translate-y-4 */}
                        <div className="hidden opacity-100 opacity-0 translate-y-0 translate-y-4"></div>
                        <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                            {phraseIndex === 0 ? (
                                <>
                                    Hi, I am{' '}
                                    <span className="text-primary border-r-2 border-primary">{typed}</span>
                                </>
                            ) : (
                                <span className="text-primary border-r-2 border-primary">{typed}</span>
                            )}
                        </h1>
                        <h2 className="prose pt-5 text-lg text-gray-600 dark:text-gray-300">
                            Welcome to my personal website and blog. I'm a Software Engineer with a passion for learning new things solving problems. Outside of work, I spend my time immersed in music, fashion, and traveling. I am constantly seeking new experiences and perspectives from around the world.
                        </h2>
                        <p className="pt-5 text-lg leading-7 text-slate-600 dark:text-slate-300 sm:block md:hidden lg:hidden">
                            You might just find something worthwhile.
                            <span> Thank you for visiting!</span>
                        </p>
                        <p className="hidden pt-10 text-lg leading-7 text-slate-600 dark:text-slate-300 md:block">
                            You might just find something worthwhile.
                            <span> Thank you for visiting!</span>
                        </p>
                    </div>

                    {/* Replacing button grid with profile picture */}
                    <div className="flex items-center justify-center py-12">
                        <div className="overflow-hidden shadow-lg rounded-full">
                            <Image
                                src="/me.jpg" // <- Update this path to your profile image
                                alt="Profile picture of Emmanuel"
                                width={960}
                                height={300}
                                className="object-cover w-[960px] h-[300px] rounded-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Achievements Section */}
                <AchievementsGrid />

                {/* Highlights Section */}
                <Highlights />

                {/* Latest Posts Section */}
                <h2 className="flex pb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl">
                    Latest
                </h2>

                <ul>
                    {latestPosts.map((post) => (
                        <li key={post.slug} className="py-6">
                            <Link href={`/blog/${post.slug}`}>
                                <article>
                                    <div className="blog-post-card xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                        <dl>
                                            <dt className="sr-only">Published on</dt>
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
                                                        <span
                                                            key={tag}
                                                            className="blog-tag"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="prose max-w-none pt-5 text-gray-500 dark:text-gray-400">
                                                    {post.summary}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-end pt-5 text-lg font-normal leading-6">
                    <a className="special-underline text-primary hover:text-gray-100 hover:no-underline dark:text-primary hover:dark:text-gray-100" aria-label="all posts" href="/blog">All Posts →</a>
                </div>
            </div>
        </Layout>
    );
}
