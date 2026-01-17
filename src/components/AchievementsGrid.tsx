"use client";

import React from "react";
import { Trophy, TrendingUp, Globe, Mic, Rocket, GraduationCap } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

const achievements = [
  {
    title: "Hackathon Winner",
    details: "Won prizes from Elevenlabs, Jp Morgan, NDRC and more",
    icon: Trophy,
    area: "md:[grid-area:1/1/2/4] lg:[grid-area:1/1/2/3]",
  },
  {
    title: "$100M+ Impact",
    details: "At JP Morgan I made a data integrity application that is now being used by clients.",
    icon: TrendingUp,
    area: "md:[grid-area:1/4/2/7] lg:[grid-area:1/3/2/4]",
  },
  {
    title: "Open Source Contributor",
    details: "Contributed to an open-source project during MLH global hack week.",
    icon: Globe,
    area: "md:[grid-area:2/1/3/4] lg:[grid-area:2/1/3/2]",
  },
  {
    title: "Tech Speaker",
    details: "Pitched at numerous hackathons (Google, Jp Morgan and Huawei etc).",
    icon: Mic,
    area: "md:[grid-area:2/4/3/7] lg:[grid-area:2/2/3/3]",
  },
  {
    title: "Startup Founder",
    details: "Co-founded CallCrewAI, The Autopilot for trades and field service teams",
    icon: Rocket,
    area: "md:[grid-area:3/1/4/4] lg:[grid-area:2/3/3/4]",
  },
  {
    title: "Mentorship",
    details: "At university I mentored 10+ students as a mentor and I was also a class rep for 2 years",
    icon: GraduationCap,
    area: "md:[grid-area:3/4/4/7] lg:[grid-area:3/1/4/4]",
  },
];

interface GridItemProps {
  area: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const GridItem = ({ area, icon: Icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              <Icon className="h-4 w-4" />
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default function AchievementsGrid() {
  return (
    <div className="my-12">
      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-6 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-3 lg:gap-4">
        {achievements.map((ach, idx) => (
          <GridItem
            key={idx}
            area={ach.area}
            icon={ach.icon}
            title={ach.title}
            description={ach.details}
          />
        ))}
      </ul>
    </div>
  );
} 