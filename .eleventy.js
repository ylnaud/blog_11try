module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "code",
      output: "docs", 
      includes: "_includes" 
    }
  };
};
