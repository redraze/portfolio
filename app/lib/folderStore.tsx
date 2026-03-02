import { create } from 'zustand';
import { folders } from './fileStructure';

interface FolderStoreType {
  folderState: { [x: string]: boolean },
  toggleFolder: (foldername: string) => void,
  setFolderState: (update: { [x: string]: boolean }) => void,
  closeAllFolders: () => void,
};

const initalFolderState = folders.reduce(
  (prev, { foldername }) => (
    { 
      ...prev, 
      [foldername]: false 
    }
  ),
  {}
);

export const useFolderStore = create<FolderStoreType>((set) => ({
  folderState: initalFolderState,

  toggleFolder: (foldername) => set(
    ({ folderState }) => ({
      folderState: {
        ...folderState, 
        [foldername]: !folderState[foldername] 
      }
    })
  ),

  setFolderState: (update) => set({ folderState: update }),

  closeAllFolders: () => set({ folderState: initalFolderState }),
}));
