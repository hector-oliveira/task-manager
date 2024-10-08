import { useState } from "react";
import Input from "./input";
import { ClipboardList, PencilIcon } from "lucide-react";

interface FormToAddTaskProps {
  onAdd: (title: string, description: string) => void;
}

function FormToAddTask({ onAdd }: FormToAddTaskProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleForm(event?: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert("Preencha todos os campos");
      setTitle("");
      setDescription("");
      return;
    }
    onAdd(title, description);
    setTitle("");
    setDescription("");
  }
  return (
    <form
      onSubmit={handleForm}
      className="space-y-4 p-6 bg-slate-200 rounded-md shadow ring-1 ring-slate-300 flex flex-col"
    >
      <Input
        type="text"
        placeholder="Adicione uma tarefa"
        value={title}
        icon={ClipboardList}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Faça uma descrição"
        icon={PencilIcon}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        type="submit"
        className="bg-slate-500 p-2 rounded-md text-white hover:bg-slate-600"
      >
        Adicionar
      </button>
    </form>
  );
}

export default FormToAddTask;
