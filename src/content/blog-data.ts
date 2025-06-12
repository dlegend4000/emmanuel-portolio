export interface BlogPost {
    title: string;
    date: string;
    slug: string;
    tags: string[];
    summary: string;
    content?: string;
  }
  
  export const blogPosts: BlogPost[] = [
    {
      title: "Me and Myself",
      date: "2025-04-17",
      slug: "Me-And-Myself",
      tags: ["REFLECTION", "PERFORMANCE"],
      summary: "A reflection on where I am now and where I am going.",
      content: `
        It’s a quiet evening, the kind where thoughts run deeper than usual. The kind where “me” and “myself” sit across from each other and talk about the journey so far.
A few years ago, we chose the path of gears and gradients, of thermodynamics and tensile stress. Mechanical Engineering. A discipline grounded in logic, defined by motion. And though we walked it with pride, another rhythm played quietly in the background: the click of a keyboard, the soft hum of a terminal window, the satisfaction of solving problems not with spanners, but with syntax.
Now, as final year exams loom on the horizon like the last mountain in a long trek, there’s a strange calm. Not because the road was easy but because the next chapter feels true.
This summer, we begin again but not from scratch. From intention.
We’ll write code not to finish an assignment or solely to pass an interview, but to understand. To build. To break. To rebuild.

      `,
    },

    {
      title: "Milestones",
      date: "2025-05-07",
      slug: "Milestones",
      tags: ["REFLECTION", "PERFORMANCE"],
      summary: "One chapter ends and another begins.",
      content: `
          It’s another quiet evening. The kind where "me" and "myself" sit together again, but this time, the air feels lighter. The kind of evening where the past few years finally fit into a single, deep breath.

Today, the final expo came and went, a swirl of presentations, handshakes, and the electric buzz of possibility. Mechanical Engineering, once just a phrase on an application form, is now a part of who we are. Every late night, every stubborn equation, every design that refused to work until it did.. they led to this.

But in the background, another song is still playing: the rhythm of code, the hum of ideas wanting to be built. That quiet passion is no longer just a side note; it’s a part of the plan.

The future doesn’t look like a straight road. It looks more like open fields, waiting to be explored. Some paths will need to be paved from scratch. Some will need to be torn up and redrawn. And that’s the exciting part.

We’re not standing at the edge of something anymore. We’re stepping into it.

Not from fear.
Not from pressure.
From excitement.
From choice.

Tomorrow isn’t just another day.
It’s Day One.

      `,
    },

    {
      title: "Roots & Rhythm",
      date: "2025-06-10",
      slug: "roots-and-rhythm",
      tags: ["CREATIVITY", "TECHNOLOGY", "MUSIC"],
      summary: "Where code meets chord progressions.",
      content: `
          Some things don’t show up on a resume, like the late nights teaching myself to play instruments. One chord at a time, no teacher, just intuition and curiosity. Or learning to rap not because I had to, but because something about turning feelings into sound felt like freedom. I wasn’t chasing perfection, just connection. A few songs found their way out. Nothing viral, nothing polished. Just honest.

      Parallel to that was my other fascination: tech. Anyone who’s seen my feed knows it’s been there all along — the building, the breaking, the debugging, the joy of making something work that didn’t before. I’ve always believed that code and creativity aren’t opposites. They’re partners.

      And now, the two threads are finally meeting.

      Release Day isn’t live yet. The app is still under construction. But the vision? That’s very real. It’s about giving artists tools that feel like teammates. Solving the release-day chaos with something intelligent, intuitive, and artist-first. 

      I’m not launching a product just to launch. I’m building something I would’ve needed when I was uploading tracks without a plan. I’m building something for the artist who creates from love, not from label pressure — but still wants a way to do it right.

      This is just the beginning. A web app. A quiet rollout. Maybe even a few bugs (we’ll fix those). But it’s the start of something that blends what I know, what I love, and what I believe can help.

      The interface is digital.
      But the reason is deeply human.

      And that’s why this matters.

      Day One is coming.

      `,
    },
  
  ];
  
