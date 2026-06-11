/**
 * PegLine — the system's signature horizontal rule with optional jade dot and label.
 * Use on key slides to visualise a price peg, threshold, or baseline.
 *
 * @startingPoint section="Components" subtitle="Signature peg-line rule" viewport="700x80"
 */
export interface PegLineProps {
  /** Label shown above the right end. Default: '$1.00' */
  label?: string;
  /** Reduced-opacity variant (22% ink) — used as background reference */
  faint?: boolean;
  /** Show the jade endpoint dot. Default: true */
  showDot?: boolean;
  /** Show the label text. Default: true */
  showLabel?: boolean;
}
