# Stablecoins Deck — Design Book
*An Apple-keynote-style visual system. Hand this to Claude Design as the brief.*

> **核心一句话:** 每张幻灯片只讲**一件事**,观众 3 秒抓到重点;屏幕是讲者的背景板,不是文档。字少、留白多、对比强,一张图或一个大数字撑起整页。

---

## 1. Design philosophy (the rules everything obeys)

1. **One idea per slide.** If a slide needs two ideas, it's two slides.
2. **The slide supports the speaker — it is not the speech.** Full sentences live in the *script*, not on screen. On-screen text target: **≤ 15 words**.
3. **Negative space is the design.** Aim for **50%+ of each slide empty**. When in doubt, delete.
4. **Spend boldness in one place.** One accent, one focal element per slide. Everything else stays quiet.
5. **Make the number / image the hero.** A big figure (e.g. `$306B`) or one clean diagram beats a paragraph.

---

## 2. Token system

### Color (use these exact values)
| Name | Hex | Use |
|---|---|---|
| **Paper** | `#FAFAF8` | default light background (warm off-white, more refined than pure white) |
| **Ink** | `#16181D` | primary text on Paper |
| **Night** | `#0B0B0C` | background for "moment" slides (a big number or single line) |
| **Jade** | `#00A878` | THE accent — money & stability. One highlight per slide, max. |
| **Alert** | `#E5484D` | **only** on the risk/depeg slide (Slide 9) |
| **Mute** | `#8A8A8E` | captions, source lines, secondary text |

> Discipline: a slide uses **Paper+Ink+Jade**, *or* **Night+Paper(text)+Jade**. Never more than one accent. Alert appears on exactly one slide.

### Typography
- **Display / headlines:** SF Pro Display (Apple's own). Free fallback: **Inter** or Helvetica Neue. Weights: Semibold / Bold.
- **Body / supporting:** SF Pro Text / Inter Regular.
- **Numerals:** same family, Semibold, tabular figures for any data.
- **Case:** **sentence case** everywhere (Apple does *not* Title-Case). Only the wordmark "Stablecoins" can be an exception.
- **Type scale (16:9, for reference):**
  | Role | Size | Notes |
  |---|---|---|
  | Hero number | 120–200 pt | the `$306B` / big-figure slides |
  | Headline | 44–60 pt | one line, ideally |
  | Subhead | 28–32 pt | |
  | Supporting point | 20–24 pt | max 3 per content slide |
  | Caption / source | 14–16 pt | Mute color, bottom-left |
- Line height: ~1.15 for headlines, ~1.4 for body. Tighten letter-spacing slightly on big display text.

### Layout
- **16:9.** Outer margins **≥ 8%** on every side — nothing touches the edges.
- One alignment per slide: **left-aligned** for content slides, **centered** for "moment" slides. Don't mix.
- Persistent footer: tiny **source line** bottom-left (Mute), **slide number** bottom-right (Mute). That's the only thing that repeats.
- Flat design only: **no drop shadows, no gradients, no 3-D, no clip-art, no stock-photo collages.**

### Signature element — the **"$1.00 peg line"**
A single hairline (1px, Ink or Jade) running horizontally, labeled `$1.00`. It's the deck's identity:
- On the **title** slide it sits under the wordmark — calm, perfectly level.
- On the **risk** slide (9) the same line visibly **breaks / dips below** `$1.00`, with the UST and USDC depegs as points falling under it. The peg you've seen stay flat all deck *finally breaks* — instant visual storytelling, no words needed.
- Optional faint reuse on slides 4 and 6 as a baseline. Use sparingly so the break in Slide 9 lands.

---

## 3. Slide templates (reusable layouts)

- **T1 · Title** — huge wordmark + the level `$1.00` peg line + Mute subtitle + small names/course at the very bottom.
- **T2 · Moment** — Night background, one centered line *or* one giant Jade number, nothing else. (Use for the hook, the `$306B`, the "big why," the closing question.)
- **T3 · Content** — headline top-left; **≤ 3** supporting lines (≤ 6 words each) stacked below with generous spacing; right ~40% left empty or holding one simple icon/diagram.
- **T4 · Flow diagram** — one horizontal flow of 3–4 nodes with arrows (e.g. `Your $ → USDT → US Treasuries → interest`); Jade only on the single most important arrow/node.
- **T5 · Myth vs Reality** (Slide 8) — top: the myth in Mute with a **strikethrough**; below: the reality in Ink with one Jade keyword. A clean two-tier split.
- **T6 · Reference** (Slide 11) — recap line large; references in a small, tidy Mute list (academics need them visible; keep them quiet and aligned).

---

## 4. Per-slide visual treatment (the one focal thing on each)

| # | Template | Hero / focal element |
|---|---|---|
| 1 | T1 | Wordmark **Stablecoins** + level `$1.00` peg line |
| 2 | T2 | One line: **"2025: the year everyone rushed in."** + a quiet single row of region labels |
| 3 | T3 | `1 USDT = $1.00` as the focal equation; `84%` / `$306B` as two small stats |
| 4 | T4 | Mint/redeem flow: `$1 ⇄ 1 token`, faint peg line as baseline |
| 5 | T3/T4 | Flow `Your $ → US Treasuries → 💰 interest`; the word **interest** in Jade |
| 6 | T2 | Big statement slide — the cause→effect chain centered; one Jade phrase: **"new demand for US debt"** |
| 7 | T3 | Three dated chips: `US · Jul 2025` / `HK · Aug 2025` / `EU · MiCA`; one line on the mainland-vs-HK split |
| 8 | T5 | Three upside lines on top; the struck-through myth → Jade **"public, traceable, freezable"** |
| 9 | T2 + signature | **The peg line breaks** — UST and USDC plotted falling below `$1.00`; **Alert red** used here and *only* here |
| 10 | T2 | The closing question centered: **"Companies or central banks?"** |
| 11 | T6 | One-sentence recap + quiet reference list |

---

## 5. Charts & icons (if used)
- **Charts:** no gridlines, no chart borders, no legend boxes. Label the line/bar **directly**. One series in Jade, everything else Mute. Biggest data slide is Slide 9 (the depeg) — let it be the only "real" chart.
- **Icons:** simple single-weight line icons, consistent stroke, Ink or Mute. One per slide max. No filled/colorful icon sets.
- **Flags/regions (Slides 2 & 7):** prefer small **text labels** ("US", "HK", "EU") over a crowd of flag emojis — cleaner and more Apple. If using flags, keep them tiny and in one tidy row.

---

## 6. Motion (keep it almost invisible)
- Transitions: simple **cut or fade**. No spins, wipes, or bounces.
- Builds: reveal supporting points **one at a time** so the audience reads with you.
- The single "earned" animation: on **Slide 9**, animate the peg line **breaking / dropping** as you say it. That one moment is the whole deck's payoff — don't spend motion anywhere else.

---

## 7. Do / Don't (quick checklist)
**Do** — one idea per slide · ≤15 words on screen · one accent · align to a grid · let a number or image be the hero · sentence case · huge margins.

**Don't** — bullet walls · full sentences on slides (those are in the script) · more than one accent color · gradients/shadows/3-D · default PowerPoint themes · cramming every flag/logo · numbered `01/02/03` markers unless it's a real sequence.

> **Chanel test before finishing each slide:** look at it and remove one thing. If the core idea still lands, the removal was right.
