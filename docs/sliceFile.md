# sliceFile

将文件和块大小作为输入，并根据给定块大小返回文件块数组。

## 引入方式

<!-- ### CJS

```javascript
const { sliceFile } = require("tool-assistant");
``` -->

### ESM

```javascript
import { sliceFile } from "tool-assistant;
```

## 示例

```javascript
import { sliceFile } from "tool-assistant";

const file = document.getElementById("file-input").files[0]; // 获取要切片的文件
const chunkSize = 1024 * 1024; // 每个切片的大小，这里设为1MB

const chunks = sliceFile(file, chunkSize);
console.log(chunks); // 打印切片数组
```

## 多线程切片

因为文件切片可能会很占用主线程资源，所以如果是较大文件，建议使用多线程切片进行文件切片上传，边切片边上传，下面举一个示例，可自行根据自己的需求进行修改

### 主线程方法

```javascript
// 主线程代码
function sliceFileWithWorker(file, chunkSize, numWorkers) {
  return new Promise((resolve, reject) => {
    const workerTasks = [];
    let chunks = [];
    let processedChunks = 0;

    // 创建文件切片任务
    function createWorkerTask(workerIndex, chunk) {
      const worker = new Worker("worker.js");
      worker.onmessage = function (event) {
        processedChunks++;
        chunks.push(event.data);

        if (processedChunks === numWorkers) {
          resolve(chunks);
        }
      };
      worker.postMessage({ chunk, workerIndex });
      workerTasks.push(worker);
    }

    // 切片文件并创建对应数量的 worker 任务
    let offset = 0;
    for (let i = 0; i < numWorkers; i++) {
      const end = Math.min(offset + chunkSize, file.size);
      const chunk = file.slice(offset, end);
      createWorkerTask(i, chunk);
      offset += chunkSize;
    }

    // 终止所有 worker 任务
    function terminateWorkers() {
      workerTasks.forEach((worker) => worker.terminate());
      reject("切片任务被终止");
    }

    // 监听取消事件
    if (typeof onCancel === "function") {
      onCancel(() => {
        terminateWorkers();
      });
    }
  });
}
```

### 子线程方法

```javascript
// Web Worker 文件切片任务 (worker.js)
self.onmessage = function (event) {
  const { chunk, workerIndex } = event.data;
  // 处理切片任务
  // ...

  // 模拟耗时操作，这里假设是将切片加倍
  const doubledChunk = doubleChunk(chunk);

  self.postMessage(doubledChunk); // 将处理后的切片发送给主线程
};
```

### 调用示例

```javascript
// 示例用法
const file = document.getElementById("file-input").files[0];
const chunkSize = 1024 * 1024;
const numWorkers = 4;

sliceFileWithWorker(file, chunkSize, numWorkers)
  .then((chunks) => {
    console.log(chunks); // 打印切片数组
    // 将切片发送到服务器或进行其他逻辑处理
  })
  .catch((error) => {
    console.error(error);
  });
```
