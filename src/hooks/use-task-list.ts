import { useNavigate } from "react-router-dom";
import { TaskListProps } from "../App";

export function useTaskList() {
  const navigate = useNavigate();

  function handleSeeTaskDetails({ title, description }: TaskListProps) {
    const queryParams = new URLSearchParams();
    queryParams.set("title", title);
    queryParams.set("description", description);
    navigate(`details?${queryParams.toString()}`);
  }

  return { handleSeeTaskDetails };
}
