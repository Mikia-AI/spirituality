import "dotenv/config";
import { createClient } from "contentful";
import { writeFileSync } from "fs";
import { resolve } from "path";

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  console.warn(
    "⚠ CONTENTFUL_SPACE_ID or CONTENTFUL_ACCESS_TOKEN not set. Using fallback JSON data."
  );
  process.exit(0);
}

const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

const dataDir = resolve(import.meta.dirname, "../src/data");

// Extract plain text from Contentful Rich Text document
function richTextToPlain(field: any): string {
  if (typeof field === "string") return field;
  if (field?.nodeType === "document") {
    return field.content
      .map((block: any) =>
        block.content
          ?.map((node: any) => node.value ?? "")
          .join("") ?? ""
      )
      .join("\n")
      .trim();
  }
  return String(field ?? "");
}

async function fetchServices() {
  const entries = await client.getEntries({
    content_type: "service",
    order: ["fields.order"],
  });

  return entries.items.map((item: any) => ({
    title: String(item.fields.title ?? ""),
    description: richTextToPlain(item.fields.description),
    duration: `${item.fields.duration} min`,
    price: `${item.fields.price} kr.`,
    icon: String(item.fields.icon ?? "✦"),
    image: item.fields.image
      ? `https:${item.fields.image.fields.file.url}`
      : null,
    order: item.fields.order ?? 0,
  }));
}

async function fetchTestimonials() {
  const entries = await client.getEntries({
    content_type: "testimonial",
    order: ["fields.order"],
  });

  return entries.items.map((item: any) => ({
    text: richTextToPlain(item.fields.text),
    name: String(item.fields.name ?? ""),
    location: String(item.fields.location ?? ""),
    order: item.fields.order ?? 0,
  }));
}

async function main() {
  console.log("Fetching content from Contentful...");

  const [services, testimonials] = await Promise.all([
    fetchServices(),
    fetchTestimonials(),
  ]);

  writeFileSync(
    resolve(dataDir, "services.json"),
    JSON.stringify(services, null, 2)
  );
  console.log(`✓ Wrote ${services.length} services`);

  writeFileSync(
    resolve(dataDir, "testimonials.json"),
    JSON.stringify(testimonials, null, 2)
  );
  console.log(`✓ Wrote ${testimonials.length} testimonials`);
}

main().catch((err) => {
  console.error("Failed to fetch content from Contentful:", err.message);
  process.exit(1);
});
