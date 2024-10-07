import { InputHTMLAttributes } from "react";

function Input({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...rest}
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md ring-1 ring-slate-300"
    />
  );
}

export default Input;
