/**
 * FlowBand — horizontal left-to-right flow diagram with arrow connectors.
 * Use to show a money/data/process flow across a slide's full width.
 *
 * @startingPoint section="Components" subtitle="Arrow-connected flow diagram" viewport="700x100"
 */
export interface FlowBandProps {
  /** Ordered list of node labels, e.g. ['Your $', 'US Treasuries', 'Interest'] */
  nodes: string[];
  /** Zero-based index of the node to highlight in jade. Default: -1 (none) */
  accentIndex?: number;
}
