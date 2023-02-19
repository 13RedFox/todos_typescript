export interface FolderType {
  id: string;
  title: string;
  color: string;
  tasks: TaskType[];
}

export interface TaskType {
  id: string;
  title: string;
  isComplete: boolean;
}
