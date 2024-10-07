import { TaskListProps } from "../App";
import { renderTasks } from "@helpers/render-task-list";
import { useTaskList } from "@hooks/use-task-list";

export interface TaskListComponentProps {
  tasks: TaskListProps[];
  onUpdate: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

function TaskList({ tasks, onUpdate, onDelete }: TaskListComponentProps) {
  const { handleSeeTaskDetails } = useTaskList();
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow ring-1 ring-slate-300">
      {renderTasks({ handleSeeTaskDetails, onDelete, onUpdate, tasks })}
    </ul>
  );
}

export default TaskList;
