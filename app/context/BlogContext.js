"use client";

import { convertBlogData } from "@/libs/utils/formatData";
import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import listPosts from "../../data/posts.json";

// Define the blog data structure based on your Strapi response

// Create the BlogContext
const BlogContext = createContext(undefined);

// Create BlogProvider to wrap around the app
export const BlogProvider = ({ children }) => {
  const [allPosts, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?populate=thumbnail&populate=category`
        );
        const data = await res.json();
        setBlogs([
          ...listPosts,
          ...data.data.map((obj) => convertBlogData(obj)),
        ]);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ allPosts, loading }}>
      {children}
    </BlogContext.Provider>
  );
};

// Custom hook to use BlogContext
export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
};

// Export BlogContext in case you need it elsewhere
export default BlogContext;
