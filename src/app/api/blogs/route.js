import { getBlogsBatch } from "@/slices/Blogs/lib/blogs";

export async function GET(request) {
  const page = Number.parseInt(
    request.nextUrl.searchParams.get("page") || "1",
    10,
  );
  const category = request.nextUrl.searchParams.get("category") || undefined;

  const batch = await getBlogsBatch(
    Number.isNaN(page) || page < 1 ? 1 : page,
    category,
  );

  return Response.json(batch);
}
