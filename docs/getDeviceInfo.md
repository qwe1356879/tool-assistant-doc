# getDeviceInfo

函数“getDeviceInfo”返回一个对象，其中包含有关用户设备类型（台式机、平板电脑或移动设备）和屏幕尺寸的信息。

## 引入方式

<!-- ### CJS

```javascript
const { getDeviceInfo } = require("tool-assistant");
``` -->

### ESM

```javascript
import { getDeviceInfo } from "tool-assistant;
```

## 示例

```javascript
// 引入 getDeviceInfo 函数
import { getDeviceInfo } from "tool-assistant";

// 示例使用
const deviceInfo = getDeviceInfo();
console.log(deviceInfo.deviceType);
console.log(deviceInfo.screenWidth);
console.log(deviceInfo.screenHeight);
```
