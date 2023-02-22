import { uid } from 'uid';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { FolderType } from '../types/folder.type';

interface useTodosProps {
  folders: FolderType[];
  addFolder: (title: string, color: string) => void;
  deleteFolder: (id: string) => void;
  addTask: (title: string, id: string | undefined) => void;
  toggleTaskComplete: (folderId: string | undefined, taskId: string) => void;
  removeTask: (id: string | undefined, taskId: string) => void;
}

export const useTodos = create<useTodosProps>()(
  devtools(
    persist(
      (set, get) => ({
        folders: [],
        addFolder: (title, color) => {
          const newFolder = { title, color, id: uid(), tasks: [] };
          set({ folders: [...get().folders, newFolder] });
        },
        deleteFolder: (id) => {
          set({ folders: get().folders.filter((folder) => folder.id !== id) });
        },
        addTask: (title, id) => {
          const newTask = { id: uid(), title, isComplete: false };
          set({
            folders: get().folders.filter((folder) =>
              id === folder.id ? folder.tasks.push(newTask) : folder,
            ),
          });
        },
        toggleTaskComplete: (folderId, taskId) => {
          set({
            folders: get().folders.filter((folder) => {
              if (folder.id !== folderId) {
                return folder;
              }
              folder.tasks = folder.tasks.map((task) =>
                task.id === taskId ? { ...task, isComplete: !task.isComplete } : task,
              );
              return folder;
            }),
          });
        },
        removeTask: (id) => {
          set({
            folders: get().folders.filter((folder) =>
              folder.id === id ? folder.tasks.filter((task) => task.id !== id) : folder,
            ),
          });
        },
      }),
      { name: 'todos-storage' },
    ),
  ),
);
