# getRandomNumbers

生成指定个数、指定范围的随级整数，小数(小数可以指定保留几位)

## 引入方式

<!-- ### CJS

```javascript
const { getRandomNumbers } = require("tool-assistant");
``` -->

### ESM

```javascript
import { getRandomNumbers } from "tool-assistant;
```

## 示例

```javascript
// 引入 getRandomNumbers 函数
import { getRandomNumbers } from "tool-assistant";

// 生成五个范围在 1 到 10 之间的随机整数
const randomIntegers = getRandomNumbers(1, 10, 5);
console.log(randomIntegers);

// 生成三个范围在 1.5 到 5.5 之间保留两位小数的随机数
const randomFloats = getRandomNumbers(1.5, 5.5, 3, 2);
console.log(randomFloats);
```
