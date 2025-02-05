const isPublishedThisWeek = (publishedAt) => {
  const now = new Date();
  const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay())); // Start of the week (Sunday)
  startOfWeek.setHours(0, 0, 0, 0); // Reset time to midnight

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6); // End of the week (Saturday)
  endOfWeek.setHours(23, 59, 59, 999); // End of the day

  const publishedDate = new Date(publishedAt);
  return publishedDate >= startOfWeek && publishedDate <= endOfWeek;
};

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
      post_of_the_week: isPublishedThisWeek(blog.publishedAt),
      authorImage: "/images/author/its-you.webp",
      readingTime: "10 MIN TO READ",
    },
    content: blog.content,
  };
}
