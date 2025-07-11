"use client";
import React from "react";

const highlights = [
  {
    title: "Co-founded CallCrewAI",
    description: "Co-founded CallCrewAi (formerly Tradesmate) and won the NDRC Founders Weekend Hackathon with the idea.",
  },
  {
    title: "Meta X MLH Fellowship",
    description: "Selected as a Production Engineer Fellow at Meta X MLH. Less than 2.5% acceptance rate.",
  },
  {
    title: "2nd Place - JP Morgan Hackathon",
    description: "Achieved 2nd place in the JP Morgan Hackathon, competing with Jp Morgan staff teams.",
  },
  {
    title: "JP Morgan Software Engineering Internship",
    description: "Received a Software Engineering Internship offer from JP Morgan.",
  },
  {
    title: "Amazon Fleet Remediation Engineering Internship Offer",
    description: "Received an Engineering Internship offer from Amazon for their Fleet Remediation team.",
  },
];

export default function Highlights() {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 mb-6">Highlights</h2>
      <ul className="relative flex flex-col pl-8">
        {/* Vertical line */}
        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700" />
        {highlights.map((item, idx) => (
          <li key={idx} className="relative flex items-start mb-8 last:mb-0">
            {/* Dot */}
            <span className="absolute -left-5 mt-2 w-3 h-3 rounded-full bg-primary border-2 border-white dark:border-gray-900 z-10" />
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
} 