# generateRandomData

生成指定格式和数量的随机数据，并将数据作为结果返回

## 引入方式

<!-- ### CJS

```javascript
const { generateRandomData } = require("tool-assistant");
``` -->

### ESM

```javascript
import { generateRandomData } from "tool-assistant;
```

## 示例

```javascript
// 引入 generateRandomData 函数
import { generateRandomData } from "tool-assistant";

// 示例 1：生成一个随机对象
const format1 = {
  name: "string",
  age: "number",
  isActive: "boolean",
};

const randomData1 = generateRandomData(format1, 1);
console.log(randomData1);

// 示例 2：生成一个包含数组的随机对象
const format2 = {
  name: "string",
  hobbies: ["string"],
  friends: [
    {
      name: "string",
      age: "number",
    },
  ],
};

const randomData2 = generateRandomData(format2, 1);
console.log(randomData2);

// 示例 3：生成多个随机对象
const format3 = {
  title: "string",
  year: "number",
  actors: [
    {
      name: "string",
      age: "number",
    },
  ],
};

const randomData3 = generateRandomData(format3, 3);
console.log(randomData3);
```
