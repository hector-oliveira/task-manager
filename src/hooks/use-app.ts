import { useState } from "react";

export interface TaskListProps {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

export const tasksList: TaskListProps[] = [
  {
    id: 1,
    title: "Tarefa 1",
    description: "Descrição da tarefa 1",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Tarefa 2",
    description: "Descrição da tarefa 2",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Tarefa 3",
    description: "Descrição da tarefa 3",
    isCompleted: false,
  },
];

export function useApp() {
  const [tasks, setTasks] = useState<TaskListProps[]>(tasksList);

  function onTaskStatusChange(taskId: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return { tasks, onTaskStatusChange };
}
