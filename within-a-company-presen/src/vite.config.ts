import { defineConfig, HtmlTagDescriptor } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

const title = "2023年株式会社レバレッジ全社プレゼン発表スライド";
const imagePath = "/images/slide-top.png";
const description =
  "2023年に株式会社レバレッジの全社会で行われたプレゼン大会で実際に発表した時のスライドです。";
const baseURL = "https://within-a-company-presen.vercel.app";

const metaDatas = [
  // OG
  {
    property: "og:type",
    content: "website",
  },
  {
    property: "og:image",
    content: baseURL + imagePath,
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
    content: "プレゼン, スライド, Slidev",
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
