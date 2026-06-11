/**
 * Horizontal left-to-right flow diagram with arrow connectors.
 * Use to show money / data / value chains across a full slide width.
 */
export interface FlowBandProps {
  /** Ordered list of node labels, e.g. ["Your $", "US Treasuries", "Interest"]. */
  nodes: string[];
  /** Zero-based indices of nodes to render in jade accent. */
  accentIndices?: number[];
}
