# Ghost Driver Hub — 运营进度记录

> 最新更新：2026-09-03 · 站点：https://ghostdriver.net · 部署：Cloudflare（push 自动部署）

---

## 一、数据基线（GA4，2026-08-06 ~ 09-02）

| 指标 | 数值 | 备注 |
|---|---|---|
| 活跃用户 | 220 / 28 天 | 新用户 219，回访≈0 |
| 平均互动时长 | **17 秒** ⚠️ | 核心改进目标 |
| 跳出率 | 12.8% | 健康 |
| 流量来源（7天） | Organic 86(+72%) · Direct 41 · **AI Assistant 3** · Referral 1 | AI 渠道已出现 |
| 国家 | US 50(≈40%) > UK > AU > BE > CA > PH > DE | 英语圈为主，**不做多语言** |
| 热门页面 | tier-list 99 > 首页 77 > cars 68 > codes 52 > updates 39 | 车辆内容 > 码内容 |

**游戏侧数据**（Roblox API，自动刷新）：48.3M visits · ~10K CCU · 670K favorites · 98.2% 好评 · 396K 赞（→ 400K 里程碑临近）

---

## 二、已完成工作（2026-09-03，单日）

### 内容建设
- [x] **车辆数据库重建**：14 台车全参数（价格/极速/马力/驱动/0-60），游戏内真实名称（Voss RT8/Rangy Helly 等虚构品牌，弃用 Audi/BMW 社区俗称）— Gamepur + Sportskeeda 双源交叉验证
- [x] **Tier List 重排**：价值榜（S=Rangy Helly $120K / Voss RT8 $260K）+ 游戏官方 B/A/S 分级双轨；每车详情块（获取方式/分析/适合谁）
- [x] **Cars 页**：8 列全参数表 + 锚点深链 + 购车流程 + FAQ 重写
- [x] **Updates 页改版**：数据驱动更新日志（`src/data/updates.ts`）+ 周更节奏预测（周五 2PM ET，下次 ~9/5）+ 400K 赞码预警
- [x] **Cash/Beginner 加深**：补入创作者实测机制（连击倍率 200X+、8 分钟 $30K、日/周任务 $750、群组免费送车、撞车清分、漂移开关、等级门槛）
- [x] **Codes 页**：新增 "Cashed In? Spend It Right" 内链面板（→ Rangy Helly/tier-list/cash）

### 媒体素材（0 → 全站覆盖）
- [x] 5 张 Roblox 官方游戏截图 + 1 活动官方宣传图（webp 自托管 ~40KB/张，`public/media/`）
- [x] 3 个 YouTube 嵌入：首页 ImSincero 评测 / beginner CHALLS 教学 / cash 赚钱指南（nocookie+lazy）
- [x] VideoObject schema（首页）

### SEO 基建
- [x] 全站 FAQPage JSON-LD（tier-list/cars/cash/updates/首页，此前仅 codes 有）
- [x] ItemList schema（codes + cars）
- [x] **IndexNow 自动化**：`scripts/submit-indexnow.mjs` 接入 6 小时 workflow，已提交（200/202）
- [x] llms.txt 更新（更新节奏 + 速答 + 虚构品牌说明）
- [x] 全站 SEO 审计完成 → `Ship/ghostdriver-audit/`（**总分 90/100**，无 Critical/High）

### 外链/合作
- [x] JoJewyd 授权邮件已发（截图授权 ↔ updates 页视频位互换）→ 回联 493129720ljw@gmail.com
- [x] outreach-progress.md 新增创作者合作追踪表

---

## 三、待办事项

### 🔴 本周（9/5 更新日，周五 2PM ET）
| # | 事项 | 耗时 | 细节 |
|---|---|---|---|
| 1 | **游戏更新跟进** | 10min | `src/data/updates.ts` 加日志；检查新码（400K 赞临近）；抓新活动官方图（Roblox 活动页） |
| 2 | **新限量车验证** | — | 8/29 活动新车名（JoJewyd 称 McLaren，单源未证）→ 双源确认后加进 `cars.ts` |
| 3 | ImSincero Discord 私信 | 5min | 手动发（草稿在 outreach-progress.md 上方对话记录） |

### 🟡 本月
| # | 事项 | 细节 |
|---|---|---|
| 4 | ⏳ JoJewyd 回复跟进 | 留意 Gmail；拿到授权后截图补 cars/tier-list/updates |
| 5 | **ads.txt** | Adsterra 后台 + AdSense 获批后各复制一行 → `public/ads.txt`（缺它影响广告收入） |
| 6 | 监控 Adsterra 对 LCP 影响 | /codes/ 实验室 LCP 4.0s vs /tier-list/ 1.5s；月底权衡收入 vs 性能 |
| 7 | CHALLS 联系方式 | 暂无直达渠道（无邮箱/Discord），留意其视频简介更新 |
| 8 | Radio/Song ID codes 页（评估） | PGG 已验证该词需求；发前先证游戏内确有 radio 功能，不编造 |
| 9 | GSC + Bing Webmaster 复查 | 看 IndexNow 后收录变化；GSC 关键词数据指导下轮内容 |

### 🔵  backlog（流量起来再做）
- [ ] 车辆实截图（自创者授权 或 自己玩时截车行界面）→ 图片搜索流量
- [ ] buildMeta 长标题自动省略品牌后缀（/codes/ 66 字符）
- [ ] BreadcrumbList schema
- [ ] sitemap lastmod 按内容 mtime（现为构建时间，6h 全量变）
- [ ] 配置 GOOGLE_API_KEY → CrUX/GSC 现场数据（28 天后复查性能）
- [ ] 多语言：不做（US/UK/AU/CA/PH/DE 均为英语搜索习惯；非英语国进前 5 再议）

---

## 四、运营节奏（固化）

```
每 6 小时（自动）:  Roblox stats 刷新 → 重建部署 → IndexNow
每周五 2PM ET（手动 10min）:  游戏更新 → updates.ts + codes.ts + 活动图
每月初（手动 30min）:  GA 数据复盘（互动时长目标: 17s → 30s+）+ GSC 关键词 → 内容调整
```

**核心 KPI**：平均互动时长 17s → 30s+（靠车辆详情/视频/图库）；28 天活跃用户 220 → 500+

---

## 五、关键信源存档

| 用途 | 信源 |
|---|---|
| 车辆数据 | Gamepur（全参数表, 8/20）+ Sportskeeda（官方 B/A/S 分级） |
| 码验证 | IGN（实测）· beebom · PGG · tryhardguides · pcgamesn（分裂时标 unconfirmed） |
| 更新节奏 | Roblox 活动页（每周五 2PM ET）+ allthings.how 活动日历 |
| 机制细节 | CHALLS（经济系统）· ImSincero（评测/车款原型）· JoJewyd（更新情报最快） |
| 官方渠道 | discord.com/invite/ghostdriver · Tilted Vehicles 群组（社区 #90273342） |
