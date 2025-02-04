export function convertBlogData(blog) {
  // Function to generate a slug from the title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
      .replace(/đ/g, "d") // Convert "đ" to "d"
      .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with "-"
      .replace(/^-+|-+$/g, ""); // Trim hyphens at the start/end
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
          : "/images/blog/post-01.jpg", // Default image if missing
      date: formatDate(blog.publishedAt),
      category: blog.category.name,
      categorySlug: generateSlug(blog.category.name),
      author: blog.author || "Phước Trí",
      authorSlug: generateSlug(blog.author || "phuoc-tri"),
      featured: blog.featured || false,
      trending: blog.trending || false,
      post_of_the_week: true,
      authorImage: "/images/author/its-you.webp",
      readingTime: "10 MIN TO READ",
    },
    content: blog.content,
  };
}
