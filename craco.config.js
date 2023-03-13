const { resolve } = require("node:path");

module.exports = {
  webpack: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
};
