# 2026 年度纪事 · 开发指南

## 图片处理流程

当用户提供图片时，按以下步骤处理：

### 1. 转换图片为 WebP

```bash
cd images/文件夹名
node -e "const sharp=require('sharp');sharp('原图.jpg').resize(600).webp({quality:85}).toFile('文件名.webp').then(info=>console.log(JSON.stringify(info)));"
```

- 宽度统一 600px，高度自动等比缩放
- 质量 85
- 多张图片命名：`640.webp`, `640-1.webp`, `640-2.webp` 等

### 2. 更新 data.js

找到对应日期的事件，更新 `images` 数组：

```js
images: ['images/文件夹名/640.webp', 'images/文件夹名/640-1.webp']
```

### 3. 文件夹命名规范

- 按日期命名：`images/20260903/`, `images/20260906/`, `images/20260910/` 等
- 无记录日子的图片：`images/unrecorded_day/`

## 事件数据结构

```js
{
  date: '2026-09-10',           // 日期，格式 YYYY-MM-DD
  title: '标题',                 // 一句话标题
  text: '正文内容',              // 可省略，支持 \n 换行
  images: ['images/xxx.webp']   // 可省略，建议最多 4-5 张
}
```

## 常用命令

- 本地测试：直接在浏览器打开 `index.html`
- 部署：`git push` 到 main 分支，GitHub Pages 自动更新
