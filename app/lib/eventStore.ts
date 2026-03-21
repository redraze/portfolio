import { create } from 'zustand';

interface EventState {
  hoverTarget: string | null,
  setHoverTarget: (newTarget: string | null) => void,
};

/**
 * Store for tracking mouse events.
 */
export const useEventStore = create<EventState>((set) => ({
  hoverTarget: null,
  setHoverTarget: (newTarget) => set({ hoverTarget: newTarget }),
}));
