# getOS

输出结果会根据当前设备的操作系统类型而有所不同，可能是 “ios”、“android”、“windowsPhone”、“MacOSX”、“windows” 或 “linux”。

## 引入方式

<!-- ### CJS

```javascript
const { getOS } = require("tool-assistant");
``` -->

### ESM

```javascript
import { getOS } from "tool-assistant;
```

## 示例

```javascript
import { getOS } from "tool-assistant";

var os = getOS();

console.log(os);
```
