# dataURLtoBlob

将给定的 dataURL 格式的图片转换为 Blob 对象

## 示例

```javascript
// 引入 dataURLtoBlob 函数
import { dataURLtoBlob } from "tool-assistant";

// 要转换的 dataURL
const base64Buf = "data:image/png;base64,iVBORw0KGg..."; // 替换为实际的 dataURL

// 将 dataURL 转换为 Blob 对象
const blob = dataURLtoBlob(base64Buf);

// 打印转换后的 Blob 对象
console.log(blob);
```
