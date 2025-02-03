export function convertBlogData(blog) {
  // Function to generate a slug from the title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  // Function to format date
  const formatDate = (isoDate) => {
    return new Date(isoDate).toISOString().split("T")[0];
  };

  return {
    slug: generateSlug(blog.title),
    frontmatter: {
      published: blog.published || false,
      title: blog.title,
      description: blog.description,
      image:
        blog.thumbnail && blog.thumbnail.url
          ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${blog.thumbnail.url}`
          : "/images/blog/post-02.jpg", // Default image if missing
      date: formatDate(blog.publishedAt),
      category: blog.category,
      author: blog.author || "Anonymous",
      featured: blog.featured || false,
      trending: blog.trending || false,
      post_of_the_week: false,
      authorImage: "/images/author/default.jpg",
      readingTime: "03 MIN TO READ",
    },
    content: blog.content,
  };
}
