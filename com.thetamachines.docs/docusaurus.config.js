const config = {
  title: "Theta Docs",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.thetamachines.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often "/<projectName>/"
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren"t using GitHub pages, you don"t need these.
  organizationName: "theta-machines", // Usually your GitHub org/user name.
  projectName: "theta-docs", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don"t use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // GitHub repo URL
          editUrl:
            "https://github.com/theta-machines/theta-docs/blob/main/com.thetamachines.docs",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig: {
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "Theta Docs",
        logo: {
          alt: "Theta Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "hardwareSidebar",
            position: "left",
            label: "Hardware",
          },
          {
            type: "docSidebar",
            sidebarId: "softwareSidebar",
            position: "left",
            label: "Software",
          },
          {
            type: "docSidebar",
            sidebarId: "firmwareSidebar",
            position: "left",
            label: "RTL / Firmware",
          },
          {
            type: "docSidebar",
            sidebarId: "architectureSidebar",
            position: "left",
            label: "Architecture",
          },
          {
            href: "https://www.thetamachines.com",
            label: "Theta Machines",
            position: "right",
          },
          {
            href: "https://github.com/theta-machines",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub Repo",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `© 2021-${new Date().getFullYear()}, Theta Machines LLC.<br/>
        Built with <a href="https://docusaurus.io/" target="_blank">Docusaurus</a>`,
      },
      prism: {
        // A list of themes can be found here:
        // https://github.com/FormidableLabs/prism-react-renderer/tree/master/packages/prism-react-renderer/src/themes
        theme: require("prism-react-renderer/themes/github"),
        darkTheme: require("prism-react-renderer/themes/vsDark"),

        // Add Verilog and VHDL syntax highlighting
        additionalLanguages: ["verilog", "vhdl"],
      },
    },
};

module.exports = config;
