# urlToBase64

将给定的图片 URL 转换为对应的 base64 字符串

## 示例

```javascript
// 引入 urlToBase64 函数
import { urlToBase64 } from './your-module'; // 替换为待测试函数所在的模块路径

// 要转换为 base64 的图片 URL
const url = 'https://example.com/image.jpg'; // 替换为实际的图片 URL

// 可选：指定转换后的图片类型
const mimeType = 'image/jpeg';

// 将图片 URL 转换为 base64
urlToBase64(url, mimeType)
  .then(base64String => {
    // 打印转换后的 base64 字符串
    console.log(base64String);
  })
  .catch(error => {
    // 转换失败时的错误处理
    console.error('转换失败:', error);
  });

```
