import { useState } from "react";

interface FormToAddTaskProps {
  onAdd: (title: string, description: string) => void;
}

function FormToAddTask({ onAdd }: FormToAddTaskProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleForm() {
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
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow ring-1 ring-slate-300 flex flex-col">
      <input
        type="text"
        name=""
        id=""
        placeholder="Adicionar Tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md ring-1 ring-slate-300"
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md ring-1 ring-slate-300"
      />
      <button
        onClick={() => handleForm()}
        className="bg-slate-500 p-2 rounded-md text-white hover:bg-slate-600"
      >
        Adicionar
      </button>
    </div>
  );
}

export default FormToAddTask;
