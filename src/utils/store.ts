import { uid } from 'uid';
import { create } from 'zustand';
import { FolderType } from '../types/folder.type';

interface useTodosProps {
  folders: FolderType[];
  addFolder: (title: string, color: string) => void;
  addTask: (title: string, id: string | undefined) => void;
}

export const useTodos = create<useTodosProps>()((set, get) => ({
  folders: [],
  addFolder: (title, color) => {
    const newFolder = { title, color, id: uid(), tasks: [] };
    set({ folders: [...get().folders, newFolder] });
  },
  addTask: (title, id) => {
    const newTask = { id: uid(), title, isComplete: false };

    set({
      folders: get().folders.filter((folder) =>
        id === folder.id ? folder.tasks.push(newTask) : folder,
      ),
    });
  },
}));
