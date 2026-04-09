import { create } from 'zustand';

interface EventState {
  hoverTarget: string | null,
  setHoverTarget: (newTarget: string | null) => void,
  gaming: boolean,
  setGaming: (bool: boolean) => void,
};

/**
 * Store for tracking mouse events.
 */
export const useEventStore = create<EventState>((set) => ({
  hoverTarget: null,
  setHoverTarget: (newTarget) => set({ hoverTarget: newTarget }),

  gaming: false,
  setGaming: (bool) => set({ gaming: bool }),
}));
