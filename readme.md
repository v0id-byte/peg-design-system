# Peg Design System — Minimal Slide & Presentation Framework

> 一套从「明天就要交」的经济学 presentation 里逼出来的设计系统。喜欢 Keynote 的动效质感，但手工做太慢——所以把整套视觉语言封装成了 Claude Skill，让 AI 直接生成同款幻灯片。支持导入 Claude Design。

> A minimal, type-led design system born from a deadline: loved Keynote's animation quality but handcrafting every slide took too long. Packaged the whole visual language as a Claude Skill so AI can generate matching slides directly. Compatible with Claude Design import.

**[English](#english) · [中文](#中文)**

---

## Preview

| Title slide | Types comparison |
|---|---|
| ![Title slide](docs/screenshots/01-title.png) | ![Types comparison](docs/screenshots/02-types.png) |

| Data comparison table | Mechanism slide |
|---|---|
| ![Data comparison table](docs/screenshots/03-comparison.png) | ![Mechanism slide](docs/screenshots/04-mechanism.png) |

![Depeg chart — pure SVG + CSS, no chart library](docs/screenshots/05-depeg-chart.png)

---

## English

### What is Peg?

Loved Keynote's animation quality but handcrafting every slide was too slow — an economics presentation was due the next day and there was no time. So the whole visual language got packaged into a Claude Skill (`SKILL.md`): AI generates matching slides on demand, same aesthetic, minutes not hours. Also importable directly into **Claude Design**.

**Peg** is the open-source design system extracted from that deadline project — a complete visual language with HTML/CSS/React implementation, no design tools required.

Key characteristics:
- **Minimal palette** — 6 tokens, one warm-white background, one jade accent
- **Type-led hierarchy** — Inter variable font, aggressively negative tracking, no decorative elements
- **Data-first** — tabular numerals, SVG 2px chart lines, count-up animations built in
- **Flat & fast** — no shadows, no gradients, no card chrome; content lives directly on paper
- **Accessible by default** — all animations respect `prefers-reduced-motion`; DOM always shows final state

---

### Use Cases

| Scenario | What to use |
|---|---|
| Build a slide deck in HTML | `slides/` templates + `slides/slide-base.css` |
| Prototype a data-heavy UI | `components/core/` React components |
| Adopt the design tokens only | `tokens/*.css` |
| Browse the design language | `guidelines/*.card.html` |

---

### Seven Slide Templates

| Template | Purpose |
|---|---|
| **Title** | Deck opener — wordmark + $1.00 peg line |
| **Headline** | One bold claim + supporting sentence |
| **Stats** | Two key figures with short descriptors |
| **Flow** | Left-to-right value or process chain |
| **Chips** | Labelled category grid with context |
| **Attr List** | Define something with 3–4 bold-term properties |
| **Moment** | Centred full-frame question or provocation |

---

### Five Core React Components

| Component | Purpose |
|---|---|
| `PegLine` | The signature $1.00 horizontal baseline |
| `FlowBand` | Arrow-chained flow diagram |
| `Chip` | Bordered pill for key/value metadata |
| `StatBlock` | Large formatted number + descriptor |
| `AttrList` | Stacked property definition rows |

---

### Design Tokens

```
tokens/
  colors.css      — 6 palette values + semantic aliases
  typography.css  — 7 type roles, tracking, weight
  spacing.css     — spacing scale + 1920×1080 canvas geometry
  effects.css     — line weights, radii, motion curves
  fonts.css       — Inter variable @font-face
```

---

### Colour Palette

| Token | Value | Role |
|---|---|---|
| `--color-paper` | `#FAFAF8` | Only background — warm, never cold |
| `--color-ink` | `#16181D` | Primary text and lines |
| `--color-night` | `#0B0B0C` | Stage chrome, outer letterbox |
| `--color-jade` | `#00A878` | Single accent — one use per slide |
| `--color-alert` | `#E5484D` | Danger only — losses, risk, collapse |
| `--color-mute` | `#8A8A8E` | Labels, footnotes, secondary text |

---

### Typography Scale

| Role | Size | Tracking | Weight |
|---|---|---|---|
| Wordmark | 248px | −0.04em | 700 |
| Hero | 300px | −0.04em | 700 |
| Headline | 92px | −0.03em | 600 |
| Subhead | 60px | −0.02em | 600 |
| Support | 44px | −0.01em | 400 |
| Caption | 28px | 0 | 400 |

---

### Quick Start

```html
<!-- Link the token chain -->
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="slides/slide-base.css">

<!-- Use a slide template -->
<div class="slide slide--headline">
  <div class="frame">
    <p class="label">SECTION LABEL</p>
    <h1 class="headline">A bold one-line claim.</h1>
    <p class="support">Supporting sentence that adds context.</p>
  </div>
</div>
```

---

### File Structure

```
styles.css              Entry point (@import chain)
tokens/                 CSS custom properties
components/core/        React components (.jsx + .d.ts + .prompt.md)
slides/                 7 HTML slide templates + base CSS
guidelines/             Visual documentation cards
assets/                 Inter variable font
```

---

### Design Principles

1. **One background.** Paper (`#FAFAF8`) only. No dark slides, no gradients.
2. **One accent.** Jade once per slide, maximum. Never decorative.
3. **Alert is earned.** `#E5484D` for genuine bad news only.
4. **No shadows.** No elevation. Content lands on paper.
5. **Final state first.** Screenshots and PDFs always show complete slides.
6. **Tabular numerals everywhere.** No column-width jitter.
7. **Negative tracking on display text.** Tight, not loose.

---

### License

MIT — use freely in commercial and personal projects.

---

---

## 中文

### Peg 是什么？

喜欢 Keynote 那种动效质感，但手工调每一张幻灯片实在太耗时——经济课 presentation 隔天就要交，来不及慢慢做了。于是把整套视觉语言封装成了一个 Claude Skill（`SKILL.md`），让 AI 直接按这套规范生成幻灯片，同款设计几分钟出稿。也可以直接导入 **Claude Design** 使用。

**Peg** 是从这次作业里提炼出来的开源设计系统，完整的视觉语言规范 + HTML/CSS/React 实现，不需要打开任何设计工具。

核心特点：
- **极简配色** — 6 个色彩 token，一种暖白背景，一种翠绿强调色
- **以字排版为核心** — Inter 可变字体，强负字间距，零装饰元素
- **数据优先** — 等宽数字、SVG 2px 图表线、内置数字滚动动画
- **扁平快速** — 无阴影、无渐变、无卡片边框；内容直接落在纸面上
- **默认可访问** — 所有动画尊重 `prefers-reduced-motion`；DOM 始终展示最终状态

---

### 适用场景

| 场景 | 使用内容 |
|---|---|
| 用 HTML 制作幻灯片 | `slides/` 模板 + `slides/slide-base.css` |
| 原型设计数据密集型 UI | `components/core/` React 组件 |
| 仅引入设计 token | `tokens/*.css` |
| 浏览设计语言规范 | `guidelines/*.card.html` |

---

### 七种幻灯片模板

| 模板 | 用途 |
|---|---|
| **Title（标题页）** | 封面——品牌字标 + $1.00 基准线 |
| **Headline（主张页）** | 一句粗体核心论点 + 补充说明 |
| **Stats（数据页）** | 两组关键数字 + 简短描述 |
| **Flow（流程页）** | 从左到右的价值/流程链 |
| **Chips（分类页）** | 带标签的分类网格 |
| **Attr List（属性页）** | 3–4 条粗体术语定义列表 |
| **Moment（转场页）** | 居中全屏问句或论点 |

---

### 五个核心 React 组件

| 组件 | 用途 |
|---|---|
| `PegLine` | 标志性 $1.00 水平基准线 |
| `FlowBand` | 带箭头的流程图 |
| `Chip` | 带边框的键值标签胶囊 |
| `StatBlock` | 大字号数字 + 描述文字 |
| `AttrList` | 堆叠式属性定义行 |

---

### 设计 Token

```
tokens/
  colors.css      — 6 个调色板值 + 语义别名
  typography.css  — 7 种文字角色、字间距、字重
  spacing.css     — 间距比例 + 1920×1080 画布几何
  effects.css     — 线宽、圆角半径、动效曲线
  fonts.css       — Inter 可变字体 @font-face
```

---

### 配色方案

| Token | 色值 | 用途 |
|---|---|---|
| `--color-paper` | `#FAFAF8` | 唯一背景色，暖白 |
| `--color-ink` | `#16181D` | 主文本与线条 |
| `--color-night` | `#0B0B0C` | 舞台边框、外侧信箱区 |
| `--color-jade` | `#00A878` | 单一强调色，每张幻灯片最多使用一次 |
| `--color-alert` | `#E5484D` | 仅用于危险/损失/风险场景 |
| `--color-mute` | `#8A8A8E` | 标签、注脚、次要文本 |

---

### 设计原则

1. **只有一种背景**：Paper (`#FAFAF8`)，无深色页、无渐变页。
2. **只有一种强调色**：Jade 每页最多出现一次，不用于装饰。
3. **Alert 色需要理由**：`#E5484D` 仅用于真实的坏消息。
4. **无阴影**：无高程层级，内容直接落在纸面。
5. **最终状态优先**：截图与 PDF 导出始终显示完整幻灯片。
6. **等宽数字无处不在**：防止列宽抖动。
7. **标题文字强负字间距**：紧凑而非松散。

---

### 快速开始

```html
<!-- 引入 token 链 -->
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="slides/slide-base.css">

<!-- 使用幻灯片模板 -->
<div class="slide slide--headline">
  <div class="frame">
    <p class="label">章节标签</p>
    <h1 class="headline">一句醒目的核心论点。</h1>
    <p class="support">补充一句上下文说明。</p>
  </div>
</div>
```

---

### 许可证

MIT — 可自由用于商业及个人项目。
