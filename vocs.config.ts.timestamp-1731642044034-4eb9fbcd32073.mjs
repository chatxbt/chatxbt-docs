var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// vocs.config.ts
import "file:///Users/joseph/Work/Inova3/chatxbt-docs/node_modules/dotenv/config.js";
import path from "path";
import { defineConfig } from "file:///Users/joseph/Work/Inova3/chatxbt-docs/node_modules/vocs/_lib/index.js";
import rehypeKatex from "file:///Users/joseph/Work/Inova3/chatxbt-docs/node_modules/rehype-katex/index.js";
import rehypeStringify from "file:///Users/joseph/Work/Inova3/chatxbt-docs/node_modules/rehype-stringify/index.js";
import remarkMath from "file:///Users/joseph/Work/Inova3/chatxbt-docs/node_modules/remark-math/index.js";
import remarkParse from "file:///Users/joseph/Work/Inova3/chatxbt-docs/node_modules/remark-parse/index.js";
import remarkRehype from "file:///Users/joseph/Work/Inova3/chatxbt-docs/node_modules/remark-rehype/index.js";
import { VitePluginRadar } from "file:///Users/joseph/Work/Inova3/chatxbt-docs/node_modules/vite-plugin-radar/dist/index.js";
import generateSitemap from "file:///Users/joseph/Work/Inova3/chatxbt-docs/node_modules/sitemap-ts/dist/index.mjs";
import { glob } from "file:///Users/joseph/Work/Inova3/chatxbt-docs/node_modules/glob/dist/esm/index.js";
function Sitemap(options = {}) {
  return {
    name: "vite-plugin-sitemap",
    async closeBundle() {
      const paths = (await glob("./**/*.mdx", { ignore: "node_modules/**" })).map((f) => {
        f = path.normalize(f).replace(path.join("pages", "index.mdx"), "").replace(/\.mdx$/, "").replace(/^pages\//, "");
        return f;
      });
      options.dynamicRoutes = paths;
      generateSitemap(options);
    },
    transformIndexHtml() {
      return [
        {
          tag: "link",
          injectTo: "head",
          attrs: {
            rel: "sitemap",
            type: "application/xml",
            title: "Sitemap",
            href: "/sitemap.xml"
          }
        }
      ];
    }
  };
}
var vocs_config_default = defineConfig({
  title: "Chatxbt Protocol",
  description: "ChatXBT protocol enables you to interact with any DeFi protocol or chain and execute commands by chat. Buy, sell, lend, borrow, stake, bridge, research a crypto by sending a chat.",
  ogImageUrl: "https://vocs.dev/api/og?logo=%logo&title=%title&description=%description",
  // logoUrl: "/logo-alt.png",
  iconUrl: "/favicon.ico",
  // rootDir: "./",
  socials: [
    {
      icon: "github",
      link: "https://github.com/chatxbt"
    },
    {
      icon: "x",
      link: "https://twitter.com/chatxbt_ai"
    },
    {
      icon: "telegram",
      link: "https://t.me/chatxbt"
    }
  ],
  vite: {
    server: {
      fs: {
        allow: [".."]
      }
    },
    plugins: [
      VitePluginRadar({
        // Google Analytics tag injection
        analytics: {
          id: process.env.GA_ID
        }
      }),
      Sitemap({
        hostname: "https://docs.chatxbt.com"
      })
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"]
          }
        }
      },
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    },
    base: "/"
  },
  markdown: {
    remarkPlugins: [remarkParse, remarkMath, remarkRehype],
    rehypePlugins: [
      rehypeKatex,
      rehypeStringify,
      __require("file:///Users/joseph/Work/Inova3/chatxbt-docs/node_modules/rehype-slug/index.js"),
      __require("file:///Users/joseph/Work/Inova3/chatxbt-docs/node_modules/rehype-autolink-headings/index.js")
    ]
  },
  sidebar: [
    {
      text: "Overview",
      link: "/"
    },
    {
      text: "Protocol",
      collapsed: true,
      items: [
        {
          text: "Introduction",
          link: "/introduction/intro"
        },
        {
          text: "Intersection AI and DeFi",
          link: "/introduction/intersection-defi"
        },
        {
          text: "How the protocol works",
          link: "/introduction/system"
        },
        {
          text: "Application of ChatXBT",
          link: "/introduction/application-of-chatxbt"
        },
        {
          text: "Fair Access",
          link: "/introduction/fair-access"
        }
      ]
    },
    {
      text: "Usage",
      collapsed: true,
      items: [
        {
          text: "Interacting with a protocol",
          link: "/usage/interacting-with-a-protocol"
        },
        {
          text: "Setting your default protocols",
          link: "/usage/setting-your-default-protocols"
        }
      ]
    },
    {
      text: "Developer Guide",
      collapsed: true,
      items: [
        {
          text: "Add your protocol",
          link: "/developer-docs/add-your-protocol"
        },
        {
          text: "Integrating your DeFi protocol",
          link: "/developer-docs/defi-protocol-integration-guide"
        }
      ]
    },
    {
      text: "ChatFI Token",
      collapsed: true,
      items: [
        {
          text: "Tokenomics",
          link: "/chatfi-token/tokenomics-and-pricing"
        },
        {
          text: "Team and Careers",
          link: "/chatfi-token/team-and-careers"
        }
      ]
    }
  ]
});
export {
  vocs_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvam9zZXBoL1dvcmsvSW5vdmEzL2NoYXR4YnQtZG9jc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2pvc2VwaC9Xb3JrL0lub3ZhMy9jaGF0eGJ0LWRvY3Mvdm9jcy5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2pvc2VwaC9Xb3JrL0lub3ZhMy9jaGF0eGJ0LWRvY3Mvdm9jcy5jb25maWcudHNcIjtpbXBvcnQgXCJkb3RlbnYvY29uZmlnXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZvY3NcIjtcbmltcG9ydCByZWh5cGVLYXRleCBmcm9tIFwicmVoeXBlLWthdGV4XCI7XG5pbXBvcnQgcmVoeXBlU3RyaW5naWZ5IGZyb20gXCJyZWh5cGUtc3RyaW5naWZ5XCI7XG5pbXBvcnQgcmVtYXJrTWF0aCBmcm9tIFwicmVtYXJrLW1hdGhcIjtcbmltcG9ydCByZW1hcmtQYXJzZSBmcm9tIFwicmVtYXJrLXBhcnNlXCI7XG5pbXBvcnQgcmVtYXJrUmVoeXBlIGZyb20gXCJyZW1hcmstcmVoeXBlXCI7XG5pbXBvcnQgeyBWaXRlUGx1Z2luUmFkYXIgfSBmcm9tIFwidml0ZS1wbHVnaW4tcmFkYXJcIjtcbmltcG9ydCBnZW5lcmF0ZVNpdGVtYXAsIHsgVXNlck9wdGlvbnMgfSBmcm9tIFwic2l0ZW1hcC10c1wiO1xuaW1wb3J0IHsgZ2xvYiB9IGZyb20gXCJnbG9iXCI7XG5cbmZ1bmN0aW9uIFNpdGVtYXAob3B0aW9uczogVXNlck9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IFwidml0ZS1wbHVnaW4tc2l0ZW1hcFwiLFxuICAgIGFzeW5jIGNsb3NlQnVuZGxlKCkge1xuICAgICAgY29uc3QgcGF0aHMgPSAoXG4gICAgICAgIGF3YWl0IGdsb2IoXCIuLyoqLyoubWR4XCIsIHsgaWdub3JlOiBcIm5vZGVfbW9kdWxlcy8qKlwiIH0pXG4gICAgICApLm1hcCgoZikgPT4ge1xuICAgICAgICBmID0gcGF0aFxuICAgICAgICAgIC5ub3JtYWxpemUoZilcbiAgICAgICAgICAucmVwbGFjZShwYXRoLmpvaW4oXCJwYWdlc1wiLCBcImluZGV4Lm1keFwiKSwgXCJcIilcbiAgICAgICAgICAucmVwbGFjZSgvXFwubWR4JC8sIFwiXCIpXG4gICAgICAgICAgLnJlcGxhY2UoL15wYWdlc1xcLy8sIFwiXCIpO1xuICAgICAgICByZXR1cm4gZjtcbiAgICAgIH0pO1xuICAgICAgb3B0aW9ucy5keW5hbWljUm91dGVzID0gcGF0aHM7XG4gICAgICBnZW5lcmF0ZVNpdGVtYXAob3B0aW9ucyk7XG4gICAgfSxcbiAgICB0cmFuc2Zvcm1JbmRleEh0bWwoKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgdGFnOiBcImxpbmtcIixcbiAgICAgICAgICBpbmplY3RUbzogXCJoZWFkXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHJlbDogXCJzaXRlbWFwXCIsXG4gICAgICAgICAgICB0eXBlOiBcImFwcGxpY2F0aW9uL3htbFwiLFxuICAgICAgICAgICAgdGl0bGU6IFwiU2l0ZW1hcFwiLFxuICAgICAgICAgICAgaHJlZjogXCIvc2l0ZW1hcC54bWxcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICB0aXRsZTogXCJDaGF0eGJ0IFByb3RvY29sXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiQ2hhdFhCVCBwcm90b2NvbCBlbmFibGVzIHlvdSB0byBpbnRlcmFjdCB3aXRoIGFueSBEZUZpIHByb3RvY29sIG9yIGNoYWluIGFuZCBleGVjdXRlIGNvbW1hbmRzIGJ5IGNoYXQuIEJ1eSwgc2VsbCwgbGVuZCwgYm9ycm93LCBzdGFrZSwgYnJpZGdlLCByZXNlYXJjaCBhIGNyeXB0byBieSBzZW5kaW5nIGEgY2hhdC5cIixcbiAgb2dJbWFnZVVybDpcbiAgICBcImh0dHBzOi8vdm9jcy5kZXYvYXBpL29nP2xvZ289JWxvZ28mdGl0bGU9JXRpdGxlJmRlc2NyaXB0aW9uPSVkZXNjcmlwdGlvblwiLFxuICAvLyBsb2dvVXJsOiBcIi9sb2dvLWFsdC5wbmdcIixcbiAgaWNvblVybDogXCIvZmF2aWNvbi5pY29cIixcbiAgLy8gcm9vdERpcjogXCIuL1wiLFxuICBzb2NpYWxzOiBbXG4gICAge1xuICAgICAgaWNvbjogXCJnaXRodWJcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2NoYXR4YnRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IFwieFwiLFxuICAgICAgbGluazogXCJodHRwczovL3R3aXR0ZXIuY29tL2NoYXR4YnRfYWlcIixcbiAgICB9LFxuXG4gICAge1xuICAgICAgaWNvbjogXCJ0ZWxlZ3JhbVwiLFxuICAgICAgbGluazogXCJodHRwczovL3QubWUvY2hhdHhidFwiLFxuICAgIH0sXG4gIF0sXG4gIHZpdGU6IHtcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIGZzOiB7XG4gICAgICAgIGFsbG93OiBbXCIuLlwiXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICBWaXRlUGx1Z2luUmFkYXIoe1xuICAgICAgICAvLyBHb29nbGUgQW5hbHl0aWNzIHRhZyBpbmplY3Rpb25cbiAgICAgICAgYW5hbHl0aWNzOiB7XG4gICAgICAgICAgaWQ6IHByb2Nlc3MuZW52LkdBX0lEISxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgU2l0ZW1hcCh7XG4gICAgICAgIGhvc3RuYW1lOiBcImh0dHBzOi8vZG9jcy5jaGF0eGJ0LmNvbVwiLFxuICAgICAgfSkgYXMgYW55LFxuICAgIF0sXG4gICAgYnVpbGQ6IHtcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgbWFudWFsQ2h1bmtzOiB7XG4gICAgICAgICAgICB2ZW5kb3I6IFtcInJlYWN0XCIsIFwicmVhY3QtZG9tXCJdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgbWluaWZ5OiBcInRlcnNlclwiLFxuICAgICAgdGVyc2VyT3B0aW9uczoge1xuICAgICAgICBjb21wcmVzczoge1xuICAgICAgICAgIGRyb3BfY29uc29sZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBiYXNlOiBcIi9cIixcbiAgfSxcbiAgbWFya2Rvd246IHtcbiAgICByZW1hcmtQbHVnaW5zOiBbcmVtYXJrUGFyc2UsIHJlbWFya01hdGgsIHJlbWFya1JlaHlwZV0sXG4gICAgcmVoeXBlUGx1Z2luczogW1xuICAgICAgcmVoeXBlS2F0ZXgsXG4gICAgICByZWh5cGVTdHJpbmdpZnksXG4gICAgICByZXF1aXJlKFwicmVoeXBlLXNsdWdcIiksXG4gICAgICByZXF1aXJlKFwicmVoeXBlLWF1dG9saW5rLWhlYWRpbmdzXCIpLFxuICAgIF0sXG4gIH0sXG4gIHNpZGViYXI6IFtcbiAgICB7XG4gICAgICB0ZXh0OiBcIk92ZXJ2aWV3XCIsXG4gICAgICBsaW5rOiBcIi9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiUHJvdG9jb2xcIixcbiAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkludHJvZHVjdGlvblwiLFxuICAgICAgICAgIGxpbms6IFwiL2ludHJvZHVjdGlvbi9pbnRyb1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJJbnRlcnNlY3Rpb24gQUkgYW5kIERlRmlcIixcbiAgICAgICAgICBsaW5rOiBcIi9pbnRyb2R1Y3Rpb24vaW50ZXJzZWN0aW9uLWRlZmlcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiSG93IHRoZSBwcm90b2NvbCB3b3Jrc1wiLFxuICAgICAgICAgIGxpbms6IFwiL2ludHJvZHVjdGlvbi9zeXN0ZW1cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiQXBwbGljYXRpb24gb2YgQ2hhdFhCVFwiLFxuICAgICAgICAgIGxpbms6IFwiL2ludHJvZHVjdGlvbi9hcHBsaWNhdGlvbi1vZi1jaGF0eGJ0XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkZhaXIgQWNjZXNzXCIsXG4gICAgICAgICAgbGluazogXCIvaW50cm9kdWN0aW9uL2ZhaXItYWNjZXNzXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG5cbiAgICB7XG4gICAgICB0ZXh0OiBcIlVzYWdlXCIsXG4gICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJJbnRlcmFjdGluZyB3aXRoIGEgcHJvdG9jb2xcIixcbiAgICAgICAgICBsaW5rOiBcIi91c2FnZS9pbnRlcmFjdGluZy13aXRoLWEtcHJvdG9jb2xcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiU2V0dGluZyB5b3VyIGRlZmF1bHQgcHJvdG9jb2xzXCIsXG4gICAgICAgICAgbGluazogXCIvdXNhZ2Uvc2V0dGluZy15b3VyLWRlZmF1bHQtcHJvdG9jb2xzXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG5cbiAgICB7XG4gICAgICB0ZXh0OiBcIkRldmVsb3BlciBHdWlkZVwiLFxuICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiQWRkIHlvdXIgcHJvdG9jb2xcIixcbiAgICAgICAgICBsaW5rOiBcIi9kZXZlbG9wZXItZG9jcy9hZGQteW91ci1wcm90b2NvbFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJJbnRlZ3JhdGluZyB5b3VyIERlRmkgcHJvdG9jb2xcIixcbiAgICAgICAgICBsaW5rOiBcIi9kZXZlbG9wZXItZG9jcy9kZWZpLXByb3RvY29sLWludGVncmF0aW9uLWd1aWRlXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG5cbiAgICB7XG4gICAgICB0ZXh0OiBcIkNoYXRGSSBUb2tlblwiLFxuICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiVG9rZW5vbWljc1wiLFxuICAgICAgICAgIGxpbms6IFwiL2NoYXRmaS10b2tlbi90b2tlbm9taWNzLWFuZC1wcmljaW5nXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlRlYW0gYW5kIENhcmVlcnNcIixcbiAgICAgICAgICBsaW5rOiBcIi9jaGF0ZmktdG9rZW4vdGVhbS1hbmQtY2FyZWVyc1wiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7QUFBb1MsT0FBTztBQUMzUyxPQUFPLFVBQVU7QUFDakIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxxQkFBcUI7QUFDNUIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxrQkFBa0I7QUFDekIsU0FBUyx1QkFBdUI7QUFDaEMsT0FBTyxxQkFBc0M7QUFDN0MsU0FBUyxZQUFZO0FBRXJCLFNBQVMsUUFBUSxVQUF1QixDQUFDLEdBQUc7QUFDMUMsU0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElB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
