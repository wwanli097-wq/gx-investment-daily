# GX Investment 全球政策与投资影响日报

这是一个纯静态、可免费托管的日报网站。日报由 Codex 定时任务生成，生成后写入最新数据、按日期归档，并同步到 GitHub Pages。

## 页面

- `index.html`：固定分享首页，展示最新日报和最近 5 日
- `history.html`：历史记录列表
- `report.html?date=YYYY-MM-DD`：单日详情页
- `reports/latest.json`：当前最新日报数据
- `reports/history.json`：最近 5 日索引
- `reports/YYYY-MM-DD.json`：按日期保存的日报正文

## GitHub Pages 发布

1. 在 GitHub 新建公开仓库，例如 `gx-investment-daily`。
2. 将本目录中的文件上传到仓库根目录。
3. 在仓库的 Settings → Pages 中选择 `Deploy from a branch`、`main` 分支和 `/ (root)`。
4. 保存后，GitHub 会生成 `https://用户名.github.io/gx-investment-daily/`。

自动流程由 Codex 的每日 09:30（北京时间）任务负责：09:30 触发后先检索全球政策并完成日报，再更新最新文件、日期归档和历史索引，最后提交到 GitHub 的 `main` 分支并验证公开页面。GitHub Pages 会继续使用同一个固定链接，公开历史列表保留最近 5 日；每次发布都会等待生成、提交和页面验证全部完成。

如果某次任务无法完成 GitHub 发布，任务必须明确报告“已生成但未发布”，不能把本地生成误报成网页已更新。
