export default {
  title: "ToolAssistant",
  description: "一个好用的工具库",
  base:"/",
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "ToolAssistant",
    // Navbar Link
    nav: [
      { text: "npm", link: "https://www.npmjs.com/package/tool-assistant" },
      { text: "文档", link: "/guide" },
      {
        text: "仓库",
        items: [
          { text: "gitee", link: "https://www.npmjs.com/package/tool-assistant" },
          { text: "github", link: "https://www.npmjs.com/package/tool-assistant" },
        ],
      },
    ],

    // Sidebar
    sidebar: [
      {
        text: "Color-颜色",
        collapsible: true,
        items: [
          { text: "isHexColor", link: "/isHexColor" },
          { text: "rgbToHex", link: "/rgbToHex" },
          { text: "hexToRGB", link: "/hexToRGB" },
        ],
      },
      {
        text: "Data-数据",
        collapsible: false,
        items: [
          { text: "convertToTreeData", link: "/convertToTreeData" },
          { text: "convertToFlatData", link: "/convertToFlatData" },
          { text: "findNode", link: "/findNode" },
          { text: "findDifferentElements", link: "/findDifferentElements" },
          { text: "findCommonElements", link: "/findCommonElements" },
          { text: "findDifferentObjectsProperty", link: "/findDifferentObjectsProperty" },
          { text: "findCommonObjectsProperty", link: "/findCommonObjectsProperty" },
          { text: "removeDuplicatesFromObjectsArray", link: "/removeDuplicatesFromObjectsArray" },
          { text: "removeDuplicates", link: "/removeDuplicates" },
        ],
      },
      {
        text: "Date-日期",
        collapsible: true,
        items: [
          { text: "formatToDateTime", link: "/formatToDateTime" },
          { text: "formatToDate", link: "/formatToDate" },
          { text: "convertToTimestamp", link: "/convertToTimestamp" },
          { text: "parseDate", link: "/parseDate" },
          { text: "parseCustomFormat", link: "/parseCustomFormat" },
        ],
      },
      {
        text: "File-文件",
        collapsible: true,
        items: [
          { text: "dataURLtoBlob", link: "/dataURLtoBlob" },
          { text: "urlToBase64", link: "/urlToBase64" },
        ],
      },
      {
        text: "JSON",
        collapsible: true,
      },
      {
        text: "Log-控制台",
        collapsible: true,
        items: [
          { text: "warn", link: "/warn" },
          { text: "error", link: "/error" },
        ],
      },
      {
        text: "Type-类型",
        collapsible: true,
        items: [
          { text: "is", link: "/is" },
          { text: "isDef", link: "/isDef" },
          { text: "isUnDef", link: "/isUnDef" },
          { text: "isObject", link: "/isObject" },
          { text: "isEmpty", link: "/isEmpty" },
          { text: "isDate", link: "/isDate" },
          { text: "isNull" },
          { text: "isNullAndUnDef" },
          { text: "isNullOrUnDef" },
          { text: "isNumber" },
          { text: "isPromise"},
          { text: "isString"},
          { text: "isFunction"},
          { text: "isBoolean"},
          { text: "isRegExp"},
          { text: "isArray"},
          { text: "isMap"},
          { text: "isWindow"},
          { text: "isElement"},
        ],
      },
      {
        text: "UUID-流水号",
        collapsible: true,
        items: [
          { text: "buildUUID", link: "/buildUUID" },
          { text: "buildSomeUUID", link: "/buildSomeUUID" },
          { text: "buildShortUUID", link: "/buildShortUUID" },
          { text: "buildSomeShortUUID", link: "/buildSomeShortUUID" },
        ],
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present ToolAssistant",
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
  },
};
