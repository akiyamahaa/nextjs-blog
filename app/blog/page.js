import Layout from "@/components/Layout";
import AllPosts from "@/components/posts/AllPosts";
import { fetchBlogs } from "@/libs/functions/getPosts";
import { Suspense } from "react";

export const metadata = {
  title: "Danh sách bài viết",
  description: "All of Tri's Blog Posts",
};

const AllBlog = async () => {
  const postsPerPage = 8;
  const allPosts = await fetchBlogs();
  return (
    <Suspense
      fallback={
        <div className="text-xl text-dark font-primary font-bold fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Loading...
        </div>
      }
    >
      <Layout>
        <AllPosts postsPerPage={postsPerPage} allPosts={allPosts} />
      </Layout>
    </Suspense>
  );
};

export default AllBlog;
