import { convertBlogData } from "../utils/formatData";
import allPosts from "@/data/posts.json";

export const fetchBlogs = async () => {
  try {
    let page = 1;
    let allData = [];
    let hasMore = true;

    while (hasMore) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?populate=thumbnail&populate=category&pagination[page]=${page}&pagination[pageSize]=25`
        // { cache: "no-store" }
      );

      if (!res.ok) throw new Error("Failed to fetch blogs");

      const { data, meta } = await res.json();
      allData = [...allData, ...data];

      if (page >= meta.pagination.pageCount) {
        hasMore = false;
      } else {
        page++;
      }
    }

    return [...allPosts, ...allData.map(convertBlogData)];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};
