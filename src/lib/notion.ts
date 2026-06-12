import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const DATABASE_ID = process.env.NOTION_DB_ID as string;

export async function getProjects() {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      property: "Status",
      select: { equals: "Published" },
    },
    sorts: [{ property: "Order", direction: "ascending" }],
  });
  return response.results;
}

export async function getFeaturedProjects() {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      and: [
        { property: "Status", select: { equals: "Published" } },
        { property: "Featured", checkbox: { equals: true } },
      ],
    },
    sorts: [{ property: "Order", direction: "ascending" }],
  });
  return response.results;
}

export async function getProjectBySlug(slug: string) {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      property: "Slug",
      rich_text: { equals: slug },
    },
  });
  return response.results[0] || null;
}

export async function getProjectsByCategory(category: string) {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      and: [
        { property: "Status", select: { equals: "Published" } },
        { property: "Category", select: { equals: category } },
      ],
    },
    sorts: [{ property: "Order", direction: "ascending" }],
  });
  return response.results;
}