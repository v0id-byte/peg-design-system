/**
 * Stacked list of bold-term + muted-definition rows.
 * Used for financial properties, feature lists, rule sets.
 */
export interface AttrListProps {
  items: Array<{
    /** Bold term label. */
    term: string;
    /** Optional muted definition appended with " — ". */
    definition?: string;
    /** Render the term in jade accent. */
    accent?: boolean;
  }>;
}
