import { ChevronRight, TrashIcon } from "lucide-react";
import { TaskListProps } from "../App";
import { TaskListComponentProps } from "@components/task-list";
import Button from "@components/button";

interface RenderTaskList extends TaskListComponentProps {
  handleSeeTaskDetails: ({ title, description }: TaskListProps) => void;
}

function renderTasks({
  handleSeeTaskDetails,
  onUpdate,
  onDelete,
  tasks,
}: RenderTaskList) {
  return (
    <>
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <Button
            onClick={() => onUpdate(task.id)}
            className={`w-full hover:bg-slate-500 ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </Button>
          <Button onClick={() => handleSeeTaskDetails(task)}>
            <ChevronRight />
          </Button>
          <Button onClick={() => onDelete(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </>
  );
}

export { renderTasks };
