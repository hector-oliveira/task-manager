import { LucideProps } from "lucide-react";
import React from "react";
import { InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

function Input({ icon, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <section
      className={`flex items-center pl-2 gap-2 border border-slate-300 outline-slate-400 rounded-md ring-1 ring-slate-300 ${
        isFocused ? "ring-blue-500 border border-blue-500" : ""
      }`}
    >
      {icon && React.createElement(icon)}
      <input
        {...rest}
        className="flex-1 outline-none p-3 bg-slate-200"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </section>
  );
}

export default Input;
