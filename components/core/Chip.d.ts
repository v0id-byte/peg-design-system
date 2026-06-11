/**
 * Bordered pill for key/value metadata — jurisdiction, date, status.
 * Use in rows (flex gap) on slides with 3–5 items max.
 */
export interface ChipProps {
  /** Primary label — bold ink. */
  label: string;
  /** Optional secondary value — muted, preceded by "·". */
  value?: string;
  /** Size variant. Default "md". */
  size?: 'sm' | 'md' | 'lg';
}
