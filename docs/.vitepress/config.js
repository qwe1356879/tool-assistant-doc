export default {
  title: "ToolAssistant",
  description: "一个好用且实用的工具库",
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
          { text: "gitee", link: "https://gitee.com/fffyt/helper-fun" },
          { text: "github", link: "https://github.com/qwe1356879/tool-assistant-doc" },
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
          { text: "rgbaToHex", link: "/rgbaToHex" },
          { text: "hexToRGB", link: "/hexToRGB" },
          { text: "hexToRGBA", link: "/hexToRGBA" },
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
          { text: "findObjectsByProperty", link: "/findObjectsByProperty" },
          { text: "getParamFromUrl", link: "/getParamFromUrl" },
          { text: "removeFromArrayByKey", link: "/removeFromArrayByKey" },
          { text: "removeFromArray", link: "/removeFromArray" },
          { text: "sortByFields", link: "/sortByFields" },
          { text: "sortByField", link: "/sortByField" },
          { text: "fuzzySearch", link: "/fuzzySearch" },
          { text: "replaceAll", link: "/replaceAll" },
        ],
      },
      {
        text: "Number-数值运算",
        collapsible: true,
        items: [
          { text: "operation", link: "/operation" },
        ],
      },
      {
        text: "Promise",
        collapsible: true,
        items: [
          { text: "promisify", link: "/promisify" },
        ],
      },
      {
        text: "Style-样式",
        collapsible: true,
        items: [
          { text: "calculateAutoStyle", link: "/calculateAutoStyle" },
          { text: "getDeviceInfo", link: "/getDeviceInfo" },
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
          { text: "downloadByOnlineUrl", link: "/downloadByOnlineUrl" },
          { text: "downloadByBase64", link: "/downloadByBase64" },
          { text: "downloadByData", link: "/downloadByData" },
          { text: "downloadByUrl", link: "/downloadByUrl" },
          { text: "exportFile", link: "/exportFile" },
        ],
      },
      {
        text: "JSON",
        collapsible: true,
      },
      {
        text: "Tool-常用工具",
        collapsible: true,
        items: [
          { text: "warn", link: "/warn" },
          { text: "error", link: "/error" },
          { text: "debounce", link: "/debounce" },
          { text: "throttle", link: "/throttle" },
          { text: "buildUUID", link: "/buildUUID" },
          { text: "buildSomeUUID", link: "/buildSomeUUID" },
          { text: "buildShortUUID", link: "/buildShortUUID" },
          { text: "buildSomeShortUUID", link: "/buildSomeShortUUID" },
          { text: "getRandomNumbers", link: "/getRandomNumbers" },
          { text: "generateRandomString", link: "/generateRandomString" },
          { text: "generateRandomFormatData", link: "/generateRandomFormatData" },
          { text: "paginate", link: "/paginate" },
        ],
      },
      {
        text: "Script-脚本",
        collapsible: true,
        items: [
          // { text: "autoCommitAndPush", link: "/autoCommitAndPush" },
          // { text: "error", link: "/error" },
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
          { text: "isNull", link: "/isNull" },
          { text: "isNullAndUnDef",link: "/isNullAndUnDef" },
          { text: "isNullOrUnDef" ,link:"/isNullOrUnDef"},
          { text: "isNumber" ,link:"/isNumber"},
          { text: "isPromise",link:"/isPromise"},
          { text: "isString",link:"/isString"},
          { text: "isFunction",link:"/isFunction"},
          { text: "isBoolean",link:"/isBoolean"},
          { text: "isRegExp",link:"/isRegExp"},
          { text: "isArray",link:"/isArray"},
          { text: "isMap",link:"/isMap"},
          { text: "isWindow",link:"/isWindow"},
          { text: "isElement",link:"/isElement"},
          { text: "isUrl",link:"/isUrl"},
        ],
      },
    ],
    pagination: {
      prevText: '上一页',
      nextText: '下一页'
    },
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
