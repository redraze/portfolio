import { create } from 'zustand';
import type { ReactNode } from 'react';

interface EventState {
  tooltip: ReactNode | null,
  setTooltip: (newTarget: ReactNode) => void,
  clearTooltip: () => void,
};

/**
 * Store for tracking mouse events.
 */
export const useTooltipStore = create<EventState>((set) => ({
    tooltip: null,
    setTooltip: (newTooltip) => set({ tooltip: newTooltip }),
    clearTooltip: () => set({ tooltip: null }),
}));
