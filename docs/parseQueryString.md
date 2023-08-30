# parseQueryString

url参数转对象

## 示例

```javascript
// 引入 parseQueryString 函数
import { parseQueryString } from 'tool-assistant'; 

// 示例 URL
var url = 'https://example.com/?key1=value1&key2=value2&key3=value3&key1=value4';
// 调用方法解析查询字符串
var result = parseQueryString(url);
console.log(result);
// {
//   key1: ['value1', 'value4'],
//   key2: 'value2',
//   key3: 'value3'
// }


var url = 'https://example.com/?user[name]=John&user[age]=30&user[address][street]=Main+Street&user[address][city]=New+York';
var result = parseQueryString(url);
console.log(result);
// {
//   user: {
//     name: 'John',
//     age: '30',
//     address: {
//       street: 'Main Street',
//       city: 'New York'
//     }
//   }
// }


var url = 'https://example.com/?colors[]=red&colors[]=green&colors[]=blue';
var result = parseQueryString(url);
console.log(result);
// {
//   colors: ['red', 'green', 'blue']
// }

```
