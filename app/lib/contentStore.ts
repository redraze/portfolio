import { create } from 'zustand';
import type { FileType } from './fileStructure';

interface ContentState {
  content: FileType | null,
  setContent: (newContent: FileType) => void,
  clearContent: () => void,
};

/**
 * Store for tracking which file is currently opened.
 */
export const useContentStore = create<ContentState>((set) => ({
  content: null,
  setContent: (newContent) => set({ content: newContent }),
  clearContent: () => set({ content: null }),
}));
