/**
 * Layout constants for terminal dashboard
 * Provides clear, maintainable height calculations
 */

// Component Heights
export const LAYOUT = {
  HEADER_HEIGHT: 1,
  METRICS_PANEL_HEIGHT: 8, // System + Network panels side-by-side
  FOOTER_HEIGHT: 1,
  MIN_VISIBLE_PROCESSES: 3,
  PADDING: 1,
} as const;

// Calculate reserved space (non-scrollable areas)
export const RESERVED_HEIGHT =
  LAYOUT.HEADER_HEIGHT +
  LAYOUT.METRICS_PANEL_HEIGHT +
  LAYOUT.FOOTER_HEIGHT +
  LAYOUT.PADDING * 2; // Top and bottom padding

/**
 * Calculate available height for process list
 * @param terminalHeight - Total terminal rows
 * @returns Number of rows available for process list
 */
export function calculateAvailableHeight(terminalHeight: number): number {
  return Math.max(terminalHeight - RESERVED_HEIGHT, LAYOUT.MIN_VISIBLE_PROCESSES);
}

/**
 * Calculate how many processes can be displayed
 * @param terminalHeight - Total terminal rows
 * @returns Number of processes that fit in viewport
 */
export function calculateMaxVisibleProcesses(terminalHeight: number): number {
  const availableHeight = calculateAvailableHeight(terminalHeight);
  // Each process takes 1 row, subtract 2 for border and title
  return Math.max(availableHeight - 2, LAYOUT.MIN_VISIBLE_PROCESSES);
}
