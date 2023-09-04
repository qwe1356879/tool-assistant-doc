# fuzzySearch

模糊查询方法，可根据指定集合进行模糊查询或者单一参数进行模糊查询。

## 引入方式

<!-- ### CJS

```javascript
const { fuzzySearch } = require("tool-assistant");
``` -->

### ESM

```javascript
import { fuzzySearch } from "tool-assistant;
```

## 示例

```javascript
// 引入 fuzzySearch 函数
import { fuzzySearch } from "tool-assistant";

// 示例使用
const data = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
  { id: 4, name: "Daniel", email: "daniel@example.com" },
];

const query = "b";
const keys = ["name", "email"];

const searchResult = fuzzyMultiSearch(query, data, keys);

console.log(searchResult);

// 示例使用
const data = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
  { id: 4, name: "Daniel", email: "daniel@example.com" },
];

const query = "b";
const key = "name";

const searchResult = fuzzyMultiSearch(query, data, [key]);

console.log(searchResult);
```
