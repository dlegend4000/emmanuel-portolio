"use client";

import React from "react";

const achievements = [
  {
    title: "Hackathon Winner 🏆",
    details: "Won 1st place at the Elevenlabs hackathon 2025",
  },
  {
    title: "$100M+ Impact 📈",
    details: "At JP Morgan I made a data integrity application that is now being used by clients.",
  },
  {
    title: "Open Source Contributor 🌍",
    details: "Contributed to an open-source project during MLH global hack week.",
  },
  {
    title: "Tech Speaker 🎤",
    details: "Pitched at numerous hackathons (Google, Jp Morgan and Huawei etc).",
  },
  {
    title: "Startup Founder 🚀",
    details: "Co-founded CallCrewAI, The Autopilot for trades and field service teams",
  },
  {
    title: "Mentorship 💡",
    details: "At university I mentored 10+ students as a mentor and I was also a class rep for 2 years",
  },
];

export default function AchievementsGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
      {achievements.map((ach, idx) => (
        <div
          key={idx}
          className="relative rounded-lg shadow-md p-4 sm:p-6 cursor-pointer transition-transform transform hover:scale-105 border border-gray-200 dark:border-gray-700 group overflow-hidden min-h-[100px]"
        >
          <h3 className="text-lg font-semibold mb-2 break-words">{ach.title}</h3>
          <p className="absolute left-0 top-0 w-full h-full flex items-center justify-center bg-white/95 dark:bg-gray-900/95 text-gray-700 dark:text-gray-200 rounded-lg p-2 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 text-center break-words text-sm sm:text-base">
            {ach.details}
          </p>
        </div>
      ))}
    </div>
  );
} 