# Release Report · 码跃学院 CodeLeap Academy

**上线时间**：2026-10-02 · **版本**：v1.0 首发版

## 站点

| 项 | 值 |
|---|---|
| 正式地址 | https://codeleap-academy.netlify.app |
| GitHub | https://github.com/wulinjun007/codeleap-academy（main 分支） |
| Netlify Site ID | ef89a01b-d72e-48aa-80f1-a5b985792582 |
| Admin | https://app.netlify.com/projects/codeleap-academy |
| 源码 | workspace/codeleap-academy/ |
| 首发 Deploy | 6abf021f3336499dd592cb2e |

## 定位

参考达内教育（tedu.cn）**功能结构** × 豆包（Doubao）Web **设计语言**的 IT 职业教育演示站。
设计参数严格取自 `design-system-extraction-2026-10/sites/01-doubao/design-system.md` §20 Reconstruction Sheet。

## 页面（6 页，纯静态，零外部依赖）

- `index.html`：胶囊导航 / 暗 hero（64px 两行标题+渐变 CTA+学习平台样机）/ 数据条 / 热门课程 3 大卡（卖点+量化+开班行）/ 17 门课程网格 / 6 认证 / 免费视频 / 8 讲师 / 就业去向分布 / 40 城 chips / 新闻 / FAQ / 暗收尾 / 法务 footer
- `courses.html`：4 学科大纲表（阶段/内容/周期/胜任岗位）+ 16 行开班计划表
- `teachers.html`：8 讲师 + 公开课预告表
- `campuses.html`：6 大区 40 城校区卡
- `news.html`：6 条动态
- `consult.html`：demo 表单（校验+演示提示，不伪造提交）+ FAQ

## 设计系统（豆包 DNA 落地）

墨色 #1c1f23 · CTA 渐变 `115deg #0c42c0→#0677f9` + 辉光 · 暗底 #0b0e1a + 径向蓝辉光 · 大卡 48px 圆角 + 暖白→冷白渐变面 · 媒体 14px · 胶囊导航黑@.5+blur(20px) · 字阶 64/40/24-26/14/12 · 页边距 72(<800→24) · Section 100/60 · 断点 800/1120/1440 · 最大宽 1120

## 验证结果

- ✅ 桌面 1440 / 移动 390 双端 6 页全页截图，横向溢出全部 0px
- ✅ 公网 6 页 + 2 静态资源全部 200；Pretty URL（/courses 无后缀）正常
- ✅ 移动菜单、FAQ 手风琴、表单校验功能正常
- ✅ 线上渲染截图与本地一致

## 排障记录（本次踩坑）

1. **netlify-cli 27.8.0 `netlify api --data` 不发 body**（createSite/updateSite 传 name 无效、随机子域名）→ 用 CLI 内部 `getAPIToken()`（`@netlify/dev-utils`）取 token 后 curl 直调 PATCH 解决；顺带 updateSite body 参数名按 swagger 是 `site`（`in:body`）。
2. **新站点默认 `sso_login=true`（访客保护）→ 全站 401** → PATCH `{"sso_login":false}` 关闭（与 space-folding/math-teacher 记忆坑一致，2026-10 复验仍有效）。
3. 测试 body 透传时误设 `dev_mode:true` 也会锁站，已复原。
4. 无头 Chromium 嵌套 backdrop-filter 合成异常（抽屉透底）→ 子面板改全不透明底色规避。
5. grid 两列布局用 `minmax(0,·)` 防表格 min-width 撑爆列（teachers.html 曾有内联 grid-template 覆盖断点的自伤，已移除）。

## 内容声明

课程、数据（92% 邀约率等）、讲师、校区、电话 400-000-0000、备案号均为**演示样例**，页面已多处标注；表单 demo 模式不提交不存储。
