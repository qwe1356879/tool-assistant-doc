# autoCommitAndPush

自动推送代码到指定分支脚本(需要在package.json中配置script),参数为(提交信息，分支名称)

## 示例

```json
{
  "name": "your-project",
  "version": "1.0.0",
  "scripts": {
    "commit-and-push": "node -e \"require('tool-assistant').autoCommitAndPush('Auto commit', 'main')\""
  },
  "dependencies": {
    "your-package-name": "^1.0.0"
  }
}

```
