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
  htmlRoot: "./resources/index.html", // Your html root file(s)
  output: "", // The html output folder
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
