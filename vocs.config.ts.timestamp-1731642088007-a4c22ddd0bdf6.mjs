var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// vocs.config.ts
import "file:///Users/joseph/Work/Inova3/chatxbt-docs/node_modules/dotenv/config.js";
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
        f = f.replace("/index.mdx", "");
        f = f.replace(".mdx", "");
        f = f.replace("pages", "");
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvam9zZXBoL1dvcmsvSW5vdmEzL2NoYXR4YnQtZG9jc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2pvc2VwaC9Xb3JrL0lub3ZhMy9jaGF0eGJ0LWRvY3Mvdm9jcy5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2pvc2VwaC9Xb3JrL0lub3ZhMy9jaGF0eGJ0LWRvY3Mvdm9jcy5jb25maWcudHNcIjtpbXBvcnQgXCJkb3RlbnYvY29uZmlnXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidm9jc1wiO1xuaW1wb3J0IHJlaHlwZUthdGV4IGZyb20gXCJyZWh5cGUta2F0ZXhcIjtcbmltcG9ydCByZWh5cGVTdHJpbmdpZnkgZnJvbSBcInJlaHlwZS1zdHJpbmdpZnlcIjtcbmltcG9ydCByZW1hcmtNYXRoIGZyb20gXCJyZW1hcmstbWF0aFwiO1xuaW1wb3J0IHJlbWFya1BhcnNlIGZyb20gXCJyZW1hcmstcGFyc2VcIjtcbmltcG9ydCByZW1hcmtSZWh5cGUgZnJvbSBcInJlbWFyay1yZWh5cGVcIjtcbmltcG9ydCB7IFZpdGVQbHVnaW5SYWRhciB9IGZyb20gXCJ2aXRlLXBsdWdpbi1yYWRhclwiO1xuaW1wb3J0IGdlbmVyYXRlU2l0ZW1hcCwgeyBVc2VyT3B0aW9ucyB9IGZyb20gXCJzaXRlbWFwLXRzXCI7XG5pbXBvcnQgeyBnbG9iIH0gZnJvbSBcImdsb2JcIjtcblxuZnVuY3Rpb24gU2l0ZW1hcChvcHRpb25zOiBVc2VyT3B0aW9ucyA9IHt9KSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogXCJ2aXRlLXBsdWdpbi1zaXRlbWFwXCIsXG4gICAgYXN5bmMgY2xvc2VCdW5kbGUoKSB7XG4gICAgICBjb25zdCBwYXRocyA9IChcbiAgICAgICAgYXdhaXQgZ2xvYihcIi4vKiovKi5tZHhcIiwgeyBpZ25vcmU6IFwibm9kZV9tb2R1bGVzLyoqXCIgfSlcbiAgICAgICkubWFwKChmKSA9PiB7XG4gICAgICAgIGYgPSBmLnJlcGxhY2UoXCIvaW5kZXgubWR4XCIsIFwiXCIpO1xuICAgICAgICBmID0gZi5yZXBsYWNlKFwiLm1keFwiLCBcIlwiKTtcbiAgICAgICAgZiA9IGYucmVwbGFjZShcInBhZ2VzXCIsIFwiXCIpO1xuXG4gICAgICAgIHJldHVybiBmO1xuICAgICAgfSk7XG4gICAgICBvcHRpb25zLmR5bmFtaWNSb3V0ZXMgPSBwYXRocztcbiAgICAgIGdlbmVyYXRlU2l0ZW1hcChvcHRpb25zKTtcbiAgICB9LFxuICAgIHRyYW5zZm9ybUluZGV4SHRtbCgpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0YWc6IFwibGlua1wiLFxuICAgICAgICAgIGluamVjdFRvOiBcImhlYWRcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgcmVsOiBcInNpdGVtYXBcIixcbiAgICAgICAgICAgIHR5cGU6IFwiYXBwbGljYXRpb24veG1sXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJTaXRlbWFwXCIsXG4gICAgICAgICAgICBocmVmOiBcIi9zaXRlbWFwLnhtbFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHRpdGxlOiBcIkNoYXR4YnQgUHJvdG9jb2xcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJDaGF0WEJUIHByb3RvY29sIGVuYWJsZXMgeW91IHRvIGludGVyYWN0IHdpdGggYW55IERlRmkgcHJvdG9jb2wgb3IgY2hhaW4gYW5kIGV4ZWN1dGUgY29tbWFuZHMgYnkgY2hhdC4gQnV5LCBzZWxsLCBsZW5kLCBib3Jyb3csIHN0YWtlLCBicmlkZ2UsIHJlc2VhcmNoIGEgY3J5cHRvIGJ5IHNlbmRpbmcgYSBjaGF0LlwiLFxuICBvZ0ltYWdlVXJsOlxuICAgIFwiaHR0cHM6Ly92b2NzLmRldi9hcGkvb2c/bG9nbz0lbG9nbyZ0aXRsZT0ldGl0bGUmZGVzY3JpcHRpb249JWRlc2NyaXB0aW9uXCIsXG4gIC8vIGxvZ29Vcmw6IFwiL2xvZ28tYWx0LnBuZ1wiLFxuICBpY29uVXJsOiBcIi9mYXZpY29uLmljb1wiLFxuICAvLyByb290RGlyOiBcIi4vXCIsXG4gIHNvY2lhbHM6IFtcbiAgICB7XG4gICAgICBpY29uOiBcImdpdGh1YlwiLFxuICAgICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vY2hhdHhidFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogXCJ4XCIsXG4gICAgICBsaW5rOiBcImh0dHBzOi8vdHdpdHRlci5jb20vY2hhdHhidF9haVwiLFxuICAgIH0sXG5cbiAgICB7XG4gICAgICBpY29uOiBcInRlbGVncmFtXCIsXG4gICAgICBsaW5rOiBcImh0dHBzOi8vdC5tZS9jaGF0eGJ0XCIsXG4gICAgfSxcbiAgXSxcbiAgdml0ZToge1xuICAgIHNlcnZlcjoge1xuICAgICAgZnM6IHtcbiAgICAgICAgYWxsb3c6IFtcIi4uXCJdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIFZpdGVQbHVnaW5SYWRhcih7XG4gICAgICAgIC8vIEdvb2dsZSBBbmFseXRpY3MgdGFnIGluamVjdGlvblxuICAgICAgICBhbmFseXRpY3M6IHtcbiAgICAgICAgICBpZDogcHJvY2Vzcy5lbnYuR0FfSUQhLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBTaXRlbWFwKHtcbiAgICAgICAgaG9zdG5hbWU6IFwiaHR0cHM6Ly9kb2NzLmNoYXR4YnQuY29tXCIsXG4gICAgICB9KSBhcyBhbnksXG4gICAgXSxcbiAgICBidWlsZDoge1xuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICBtYW51YWxDaHVua3M6IHtcbiAgICAgICAgICAgIHZlbmRvcjogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBtaW5pZnk6IFwidGVyc2VyXCIsXG4gICAgICB0ZXJzZXJPcHRpb25zOiB7XG4gICAgICAgIGNvbXByZXNzOiB7XG4gICAgICAgICAgZHJvcF9jb25zb2xlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJhc2U6IFwiL1wiLFxuICB9LFxuICBtYXJrZG93bjoge1xuICAgIHJlbWFya1BsdWdpbnM6IFtyZW1hcmtQYXJzZSwgcmVtYXJrTWF0aCwgcmVtYXJrUmVoeXBlXSxcbiAgICByZWh5cGVQbHVnaW5zOiBbXG4gICAgICByZWh5cGVLYXRleCxcbiAgICAgIHJlaHlwZVN0cmluZ2lmeSxcbiAgICAgIHJlcXVpcmUoXCJyZWh5cGUtc2x1Z1wiKSxcbiAgICAgIHJlcXVpcmUoXCJyZWh5cGUtYXV0b2xpbmstaGVhZGluZ3NcIiksXG4gICAgXSxcbiAgfSxcbiAgc2lkZWJhcjogW1xuICAgIHtcbiAgICAgIHRleHQ6IFwiT3ZlcnZpZXdcIixcbiAgICAgIGxpbms6IFwiL1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJQcm90b2NvbFwiLFxuICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiSW50cm9kdWN0aW9uXCIsXG4gICAgICAgICAgbGluazogXCIvaW50cm9kdWN0aW9uL2ludHJvXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkludGVyc2VjdGlvbiBBSSBhbmQgRGVGaVwiLFxuICAgICAgICAgIGxpbms6IFwiL2ludHJvZHVjdGlvbi9pbnRlcnNlY3Rpb24tZGVmaVwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJIb3cgdGhlIHByb3RvY29sIHdvcmtzXCIsXG4gICAgICAgICAgbGluazogXCIvaW50cm9kdWN0aW9uL3N5c3RlbVwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJBcHBsaWNhdGlvbiBvZiBDaGF0WEJUXCIsXG4gICAgICAgICAgbGluazogXCIvaW50cm9kdWN0aW9uL2FwcGxpY2F0aW9uLW9mLWNoYXR4YnRcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiRmFpciBBY2Nlc3NcIixcbiAgICAgICAgICBsaW5rOiBcIi9pbnRyb2R1Y3Rpb24vZmFpci1hY2Nlc3NcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcblxuICAgIHtcbiAgICAgIHRleHQ6IFwiVXNhZ2VcIixcbiAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkludGVyYWN0aW5nIHdpdGggYSBwcm90b2NvbFwiLFxuICAgICAgICAgIGxpbms6IFwiL3VzYWdlL2ludGVyYWN0aW5nLXdpdGgtYS1wcm90b2NvbFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJTZXR0aW5nIHlvdXIgZGVmYXVsdCBwcm90b2NvbHNcIixcbiAgICAgICAgICBsaW5rOiBcIi91c2FnZS9zZXR0aW5nLXlvdXItZGVmYXVsdC1wcm90b2NvbHNcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcblxuICAgIHtcbiAgICAgIHRleHQ6IFwiRGV2ZWxvcGVyIEd1aWRlXCIsXG4gICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJBZGQgeW91ciBwcm90b2NvbFwiLFxuICAgICAgICAgIGxpbms6IFwiL2RldmVsb3Blci1kb2NzL2FkZC15b3VyLXByb3RvY29sXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkludGVncmF0aW5nIHlvdXIgRGVGaSBwcm90b2NvbFwiLFxuICAgICAgICAgIGxpbms6IFwiL2RldmVsb3Blci1kb2NzL2RlZmktcHJvdG9jb2wtaW50ZWdyYXRpb24tZ3VpZGVcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcblxuICAgIHtcbiAgICAgIHRleHQ6IFwiQ2hhdEZJIFRva2VuXCIsXG4gICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJUb2tlbm9taWNzXCIsXG4gICAgICAgICAgbGluazogXCIvY2hhdGZpLXRva2VuL3Rva2Vub21pY3MtYW5kLXByaWNpbmdcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiVGVhbSBhbmQgQ2FyZWVyc1wiLFxuICAgICAgICAgIGxpbms6IFwiL2NoYXRmaS10b2tlbi90ZWFtLWFuZC1jYXJlZXJzXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7OztBQUFvUyxPQUFPO0FBQzNTLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8scUJBQXFCO0FBQzVCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sa0JBQWtCO0FBQ3pCLFNBQVMsdUJBQXVCO0FBQ2hDLE9BQU8scUJBQXNDO0FBQzdDLFNBQVMsWUFBWTtBQUVyQixTQUFTLFFBQVEsVUFBdUIsQ0FBQyxHQUFHO0FBQzFDLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLE1BQU0sY0FBYztBQUNsQixZQUFNLFNBQ0osTUFBTSxLQUFLLGNBQWMsRUFBRSxRQUFRLGtCQUFrQixDQUFDLEdBQ3RELElBQUksQ0FBQyxNQUFNO0FBQ1gsWUFBSSxF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
