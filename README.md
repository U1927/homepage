# U1927 Homepage

一个无框架、无构建步骤的个人主页，可直接部署到 GitHub Pages。

## 修改内容

页面的文字、链接和项目统一放在 `content.js`。通常只需要编辑这个文件：

- `profile`：名称、头像、GitHub 链接
- `hero`：首屏标题与简介
- `about`：个人介绍与工作原则

布局和视觉样式位于 `styles.css`，交互逻辑位于 `app.js`。

## 本地预览

直接打开 `index.html` 即可。也可以启动任意静态文件服务器：

```bash
npx serve .
```

## GitHub Pages

在仓库的 **Settings → Pages** 中，将部署来源设为 **Deploy from a branch**，选择 `main` 分支和 `/ (root)` 目录。

仓库根目录已包含 `.nojekyll`，GitHub Pages 会直接发布静态文件。
