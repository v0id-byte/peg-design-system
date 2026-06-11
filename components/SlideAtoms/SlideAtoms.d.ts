/**
 * Chip — pill-shaped badge for key/value metadata (e.g. country · date).
 * StatPair — large numeric stat with a supporting label line below.
 * Use these as inline building blocks within slide frames.
 */

/** Pill badge with optional value label */
export interface ChipProps {
  /** Primary label (ink), e.g. 'Hong Kong' */
  label: string;
  /** Secondary value (mute), e.g. '· Aug 2025' */
  value?: string;
}

/** Hero number + descriptor */
export interface StatPairProps {
  /** Formatted number string, e.g. '$306B' or '84%' */
  number: string;
  /** Two-line supporting label */
  label: string;
  /** Number colour. Default: 'ink' */
  color?: 'ink' | 'jade' | 'alert';
}
