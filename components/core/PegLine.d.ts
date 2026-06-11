/**
 * The signature $1.00 horizontal rule — the visual anchor of every slide.
 * A full-width 2px line with an optional jade dot on the right end and a
 * muted label floating above it.
 *
 * @startingPoint section="Components" subtitle="Peg line — slide visual anchor" viewport="700x80"
 */
export interface PegLineProps {
  /** Value label shown above the line. Default "$1.00". */
  label?: string;
  /** Render at 22% opacity — for slides where it's background decoration. */
  faint?: boolean;
  /** Show the jade dot on the right end. Default true. */
  showDot?: boolean;
  /** Show the text label. Default true. */
  showLabel?: boolean;
}
