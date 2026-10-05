# GX Investment 全球能源与投资机会日报

这是一个纯静态、可免费托管的日报网站首版。

## 页面

- `index.html`：固定分享首页，展示最新日报和最近 5 日
- `history.html`：历史记录列表
- `report.html?date=YYYY-MM-DD`：单日详情页

## GitHub Pages 发布

1. 在 GitHub 新建公开仓库，例如 `gx-investment-daily`。
2. 将本目录中的文件上传到仓库根目录。
3. 在仓库的 Settings → Pages 中选择 `Deploy from a branch`、`main` 分支和 `/ (root)`。
4. 保存后，GitHub 会生成 `https://用户名.github.io/gx-investment-daily/`。

正式自动化时，每天写入一条新数据并重新发布；公开历史列表只保留最近 5 日，发布第 6 日时移除最早一天。
