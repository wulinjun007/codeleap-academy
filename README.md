# 码跃学院 CodeLeap Academy（设计演示站）

参考达内教育（tedu.cn）的**功能结构**，使用**豆包（Doubao）Web 设计语言**构建的 IT 职业教育官网演示站。

> ⚠️ 本站为设计演示：课程、数据、讲师、校区、电话与备案号均为示例内容，表单为 demo 模式（不提交、不伪造成功）。

## 功能结构（对齐 tedu.cn）

| tedu.cn 功能 | 本站对应 |
|---|---|
| 胶囊导航 + 咨询热线 | 胶囊悬浮导航（黑@.5+blur）+ 400 热线 + 免费 CTA |
| 暗色 Hero 转化 | H1 两行动词开头 + 蓝渐变胶囊 CTA + 数据条 + 学习平台样机 |
| 热门就业课程（开班/卖点/大纲/费用入口） | 3 张交替特性大卡（卖点标签/量化指标/快捷链接/近期开班） |
| 17 门课程矩阵 | 课程网格（7 方向 17 门，方向/时长/班型标签） |
| 认证课程六宫格 | 华为/红帽/CKA/CDA/Adobe/全媒体 6 认证卡 |
| 免费视频资源 | 视频列表（集数+学习人数） |
| 专家讲师 | 8 位讲师卡 + 公开课预告表 |
| 大厂合作/就业背书 | 就业去向分布条 + 就业服务/校企/课程同步三卡 |
| 全国校区 40+ 城 | 城市云 + 分区校区卡（地址/电话演示占位） |
| 达内动态（SEO 资讯） | 新闻列表（开班公告/校企合作/就业报告/学费说明） |
| SEO 咨询转化 | consult.html 表单（1 对 1 测评/资料领取，demo 模式） |

## 设计语言（豆包 Reconstruction Sheet 严格复刻）

- 墨色 `#1c1f23`；品牌蓝只以渐变出现 `linear-gradient(115deg,#0c42c0,#0677f9)`；暗底 `#0b0e1a` + 径向蓝辉光
- 特性大卡：48px 圆角 + 暖白→冷白渐变 `linear-gradient(285deg,#f8f3ee,#fff 50%,#ebf0f6)` + `0 20px 30px rgba(74,90,110,.12)`
- 圆角：媒体 14px / 大卡 48px / 按钮导航胶囊 999px
- 字阶：hero 64px/w400/1.5 · H2 40px/700 居中 · 卡标题 24-26px/600 · 正文 14px/1.43 · 法务 12px
- 间距：页边距 72px（<800px→24px）· Section 上 100 下 60 · gap 16 / 卡内文图 60
- 断点：800 / 1120 / 1440；内容最大宽 1120px
- 悬浮胶囊导航：黑@.5 + blur(20px) + 白字 14px + 1px rgba(255,255,255,.12) 描边

来源：`workspace/design-system-extraction-2026-10/sites/01-doubao/design-system.md`（§20 Reconstruction Sheet）

## 页面

- `index.html` 首页（全功能）
- `courses.html` 课程中心（4 学科大纲表 + 开班计划表）
- `teachers.html` 师资（8 讲师 + 公开课预告）
- `campuses.html` 全国校区（6 大区 40 城）
- `news.html` 新闻动态（6 条）
- `consult.html` 咨询报名（demo 表单 + FAQ）

## 本地预览

```bash
python3 -m http.server 8080
# http://localhost:8080
```

## 部署

GitHub `main` 分支 + Netlify（站点名 `codeleap-academy`）。更新流程：改文件 → push → Netlify 自动部署。
