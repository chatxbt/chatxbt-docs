import "dotenv/config";
import { defineConfig } from "vocs";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { VitePluginRadar } from "vite-plugin-radar";

export default defineConfig({
  title: "Chatxbt Protocol",
  description:
    "ChatXBT protocol enables you to interact with any DeFi protocol or chain and execute commands by chat. Buy, sell, lend, borrow, stake, bridge, research a crypto by sending a chat.",
  ogImageUrl:
    "https://vocs.dev/api/og?logo=%logo&title=%title&description=%description",
  // logoUrl: "/logo-alt.png",
  iconUrl: "/favicon.ico",
  socials: [
    {
      icon: "github",
      link: "https://github.com/chatxbt",
    },
    {
      icon: "x",
      link: "https://twitter.com/chatxbt_ai",
    },

    {
      icon: "telegram",
      link: "https://t.me/chatxbt",
    },
  ],
  vite: {
    server: {
      fs: {
        allow: [".."],
      },
    },
    plugins: [
      VitePluginRadar({
        // Google Analytics tag injection
        analytics: {
          id: process.env.GA_ID!,
        },
      }),
    ],
  },
  // rootDir: ".",
  markdown: {
    remarkPlugins: [
      remarkParse,
      remarkMath,
      remarkRehype,
      rehypeKatex,
      rehypeStringify,
    ],
  },
  sidebar: [
    {
      text: "Overview",
      link: "/",
    },
    {
      text: "Protocol",
      collapsed: true,
      items: [
        {
          text: "Introduction",
          link: "/introduction/overview",
        },
        {
          text: "Intersection AI and DeFi",
          link: "/introduction/intersection-defi",
        },
        {
          text: "How the protocol works",
          link: "/introduction/system",
        },
        {
          text: "Application of ChatXBT",
          link: "/introduction/application-of-chatxbt",
        },
        {
          text: "Fair Access",
          link: "/introduction/fair-access",
        },
      ],
    },

    {
      text: "Usage",
      collapsed: true,
      items: [
        {
          text: "Interacting with a protocol",
          link: "/usage/interacting-with-a-protocol",
        },
        {
          text: "Setting your default protocols",
          link: "/usage/setting-your-default-protocols",
        },
      ],
    },

    {
      text: "Developer Docs",
      collapsed: true,
      items: [
        {
          text: "Add your protocol",
          link: "/developer-docs/add-your-protocol",
        },
        {
          text: "Integrating your DeFi protocol",
          link: "/developer-docs/defi-protocol-integration-guide",
        },
      ],
    },

    {
      text: "ChatFI Token",
      collapsed: true,
      items: [
        {
          text: "Tokenomics",
          link: "/chatfi-token/tokenomics-and-pricing",
        },
        {
          text: "Team and Careers",
          link: "/chatfi-token/team-and-careers",
        },
      ],
    },
  ],
});
