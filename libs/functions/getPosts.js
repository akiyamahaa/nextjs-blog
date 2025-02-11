import { convertBlogData } from "../utils/formatData";
import allPosts from "@/data/posts.json";

export const fetchBlogs = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?populate=thumbnail&populate=category`,
      {
        // cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const { data } = await res.json();
    console.log("🚀 ~ fetchBlogs ~ data:", data);
    return [...allPosts, ...data.map(convertBlogData)];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};
