# getFileType

判断上传的文件类型

## 引入方式

<!-- ### CJS

```javascript
const { getExplore } = require("tool-assistant");
``` -->

### ESM

```javascript
import { getFileType } from "tool-assistant;
```

## 示例

```javascript
import { getFileType } from "tool-assistant";

const file = {
  name: 'example.shp' // 文件的完整文件名
};

const fileType = getFileType(file);
console.log(fileType); // 输出: shapefile

```
