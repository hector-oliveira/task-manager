import { ChevronRight } from "lucide-react";
import { TaskListProps } from "../App";

interface TaskListComponentProps {
  tasks: TaskListProps[];
  callFunction: (taskId: number) => void;
}
function TaskList({ tasks, callFunction }: TaskListComponentProps) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow ring-1 ring-slate-300">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => callFunction(task.id)}
            className={`bg-slate-400 text-white text-left p-2 rounded-md w-full ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button className="bg-slate-400 p-2 rounded-md text-white">
            <ChevronRight />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
