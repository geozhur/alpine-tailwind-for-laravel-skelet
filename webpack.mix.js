const mix = require("laravel-mix");
require("mix-html-builder");
let assetDir = "";

mix
  .setPublicPath("public/")
  .js("resources/js/app.js", "public/js")
  .postCss("resources/css/app.css", "public/css", [
    require("autoprefixer"),
    require("tailwindcss"),
  ]);

mix.html({
  htmlRoot: "./resources/*.html", // Your html root file(s)
  output: "", // The html output folder
  partialRoot: "./resources/partials", // default partial path
  layoutRoot: "./resources/layouts", // default partial path
  minify: {
    removeComments: true,
  },
});

mix.options({
  fileLoaderDirs: {
    images: "img",
    fonts: "fonts",
  },
});
