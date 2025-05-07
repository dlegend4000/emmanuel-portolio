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
  
  ];
  
