module.exports = {
    filter: {
      myFilter: function (token) {
        return token.attributes.category === "color";
      }
    },
  
    source: ["tokens/**/*.json"],
  
    platforms: {
      css: {
        transformGroup: `css`,
        buildPath: `build/`,
        files: [
          {
            destination: `color.css`,
            format: `css/variables`,
            filter: `myFilter`
          },
          {
            destination: `size.css`,
            format: `css/variables`,
            filter: function (token) {
              return token.attributes.category === `size`;
            }
          }
        ]
      }
    }
  };
  