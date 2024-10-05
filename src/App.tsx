import { useState } from "react";
import FormToAddTask from "./components/form-to-add-task";
import TaskList from "./components/task-list";
import { v4 } from "uuid";

export interface TaskListProps {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskListProps[]>([]);

  function onTaskUpdate(taskId: string) {
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

  function onTaskDelete(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onTaskAdd(title: string, description: string) {
    const newTasks = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTasks]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl font-bold text-slate-100 text-center">
          Gerenciamento de Tarefas
        </h1>
        <FormToAddTask onAdd={onTaskAdd} />
        <TaskList
          tasks={tasks}
          onUpdate={onTaskUpdate}
          onDelete={onTaskDelete}
        />
      </div>
    </div>
  );
}

export default App;
