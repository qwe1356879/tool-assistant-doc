# getUserLocation

通过浏览器获取用户当前地理位置坐标

## 引入方式

<!-- ### CJS

```javascript
const { getRandomNumbers } = require("tool-assistant");
``` -->

### ESM

```javascript
import { getUserLocation } from "tool-assistant;
```

## 示例

```javascript
// 引入 getUserLocation 函数
import { getUserLocation } from "tool-assistant";

getUserLocation(function(position) {
  if (position) {
    console.log('纬度：', position.latitude);
    console.log('经度：', position.longitude);
  } else {
    console.log('无法获取用户位置');
  }
});

// 纬度： 41.753703
// 经度： 86.155896
```
