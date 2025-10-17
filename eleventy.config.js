export default function(eleventyConfig) {
  // Copy images straight to the output folder
  eleventyConfig.addPassthroughCopy("src/images");

  // (optional) live-reload when images change
  eleventyConfig.addWatchTarget("src/images");

  return {
    dir: {
      input: "src",
      output: "_site",
    }
  };
}
