# removeDuplicatesFromObjectsArray

将多个数组中的对象合并，并移除重复的对象，返回一个只包含唯一对象的数组。

## 示例

```javascript
// 引入 removeDuplicatesFromObjectsArray 函数
import removeDuplicatesFromObjectsArray from 'tool-assistant'; 

// 定义示例数组
const array1 = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Mary' }];
const array2 = [{ id: 2, name: 'Jane' }, { id: 3, name: 'Mary' }, { id: 4, name: 'David' }];
const array3 = [{ id: 3, name: 'Mary' }, { id: 4, name: 'David' }, { id: 5, name: 'Sarah' }];

// 移除重复对象
const uniqueObjects = removeDuplicatesFromObjectsArray(array1, array2, array3);

// 打印唯一对象
console.log(uniqueObjects);


```
