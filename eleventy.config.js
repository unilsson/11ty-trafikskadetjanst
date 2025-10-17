export default function(eleventyConfig) {
  // Copy images straight to the output folder
  eleventyConfig.addPassthroughCopy("src/images");

    // Copy circulator-images straight to the output folder
  eleventyConfig.addPassthroughCopy("src/circulator-images");

  // Copy css to the output folder
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addWatchTarget("src/css");

    // Copy css to the output folder
  eleventyConfig.addPassthroughCopy("src/javascript");
  eleventyConfig.addWatchTarget("src/javascript");

  // (optional) live-reload when images change
  eleventyConfig.addWatchTarget("src/images");

  return {
    dir: {
      input: "src",
      output: "_site",
    }
  };
}
