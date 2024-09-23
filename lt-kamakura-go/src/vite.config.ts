import { defineConfig, HtmlTagDescriptor } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

const title = "kamakura.go #6 LT発表スライド";
const imagePath = "/images/gopher.png";
const description = "kamakura.goで初めてのLTで登壇した時のスライドです。";

const metaDatas = [
  // OG
  {
    property: "og:type",
    content: "website",
  },
  {
    property: "og:image",
    content: import.meta.url + imagePath,
  },
  {
    property: "og:title",
    content: title,
  },
  {
    property: "og:description",
    content: description,
  },
  {
    property: "og:locale",
    content: "ja_JP",
  },
  {
    property: "og:site_name",
    content: title,
  },
  {
    property: "og:image:width",
    content: "1200",
  },
  {
    property: "og:image:height",
    content: "600",
  },
  // Twitter
  {
    property: "twitter:card",
    content: "summary",
  },
  {
    property: "twitter:title",
    content: title,
  },
  {
    property: "twitter:description",
    content: description,
  },
  {
    property: "twitter:image",
    content: imagePath,
  },
  // ETC
  {
    property: "keywords",
    content: "プレゼン, スライド, Slidev, Go",
  },
];

const generateMetaTag = (
  meta: (typeof metaDatas)[number]
): HtmlTagDescriptor => ({
  injectTo: "head-prepend",
  tag: "meta",
  attrs: { ...meta },
});

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
      inject: {
        tags: metaDatas.map(generateMetaTag),
      },
    }),
  ],
});
