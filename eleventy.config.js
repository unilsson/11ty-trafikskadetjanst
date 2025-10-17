export default function(eleventyConfig) {
  // Copy images straight to the output folder
  eleventyConfig.addPassthroughCopy("src/images");

  // Copy css to the output folder
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addWatchTarget("src/css");

  // (optional) live-reload when images change
  eleventyConfig.addWatchTarget("src/images");

  return {
    dir: {
      input: "src",
      output: "_site",
    }
  };
}
