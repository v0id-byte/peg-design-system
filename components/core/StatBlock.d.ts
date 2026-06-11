/**
 * Large formatted figure with a small muted descriptor below.
 * Always uses tabular-nums. Place 2–3 in a flex row for stat panels.
 */
export interface StatBlockProps {
  /** Pre-formatted value string, e.g. "$306B" or "84%". */
  value: string;
  /** Short descriptor, 1–2 lines. */
  label: string;
  /** Render value in jade. Use for positive/growth metrics. */
  accent?: boolean;
  /** Render value in alert red. Use for losses or risks. */
  danger?: boolean;
}
