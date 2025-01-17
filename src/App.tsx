import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Container from "@components/container";
import FormToAddTask from "@components/form-to-add-task";
import TaskList from "@components/task-list";

export interface TaskListProps {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

function App() {
  const tasksData = JSON.parse(localStorage.getItem("tasks") || "[]");
  const [tasks, setTasks] = useState<TaskListProps[]>(tasksData);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
    <Container>
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
    </Container>
  );
}

export default App;
