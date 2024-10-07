import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import Container from "@components/container";

function TaskDetails() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <Container>
      <div className="w-[500px] space-y-4">
        <div className="flex items-center mb-5">
          <button onClick={() => navigate(-1)} className="text-slate-100">
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl font-bold text-slate-100 flex-1 text-center">
            Detalhes da Tarefas
          </h1>
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-2xl font-bold text-slate-600">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </Container>
  );
}

export default TaskDetails;
