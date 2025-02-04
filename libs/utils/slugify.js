export const slugify = (input) => {
  if (!input) return ""; // Handle empty input
  return input.trim().replace(/ /g, "-").toLowerCase();
};
