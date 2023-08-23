# downloadByOnlineUrl

这个函数的作用是下载一个在线URL资源。

## 示例

```javascript
// 引入 downloadByOnlineUrl 函数
import { downloadByOnlineUrl } from 'tool-assistant';

// 定义在线URL资源
const url = 'https://www.example.com/image.png';
const filename = 'image.png';

// 调用 downloadByOnlineUrl 函数进行下载
downloadByOnlineUrl(url, filename, 'image/png', false);

```
