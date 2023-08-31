# downloadByUrl

这个函数的作用是通过 URL 下载文件。根据浏览器类型（Chrome、Safari 或其他浏览器），函数会采用不同的方法来实现下载功能。

## 引入方式

### CJS

```javascript
const { downloadByUrl } = require("tool-assistant");
```

### ESM

```javascript
import { downloadByUrl } from "tool-assistant;
```

## 示例

```javascript
// 引入 downloadByUrl 函数
import { downloadByUrl } from "tool-assistant";

// 定义文件的 URL
const fileUrl = "https://www.example.com/files/document.pdf";

// 调用 downloadByUrl 函数进行下载
downloadByUrl({ url: fileUrl, fileName: "my-document.pdf" });
```
