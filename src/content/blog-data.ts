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
  
  ];
  