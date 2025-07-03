import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.callcrew-ai.com/"; // <-- Replace with your real domain
  const pages = [
    "",
    "about",
    "blog",
    "projects",
    "contact",
  ];

  const urls = pages
    .map(
      (page) =>
        `<url><loc>${baseUrl}/${page}</loc></url>`
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>
  `;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
} 