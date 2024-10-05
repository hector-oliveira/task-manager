import { useState } from "react";
import FormToAddTask from "./components/form-to-add-task";
import TaskList from "./components/task-list";

export interface TaskListProps {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

const tasksList: TaskListProps[] = [
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

function App() {
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
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl font-bold bg-slate-100 text-center">
          Gerenciamento de Tarefas
        </h1>
        <FormToAddTask />
        <TaskList tasks={tasks} callFunction={onTaskStatusChange} />
      </div>
    </div>
  );
}

export default App;
