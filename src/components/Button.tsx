import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`bg-slate-400 text-white text-left p-2 rounded-md hover:bg-slate-500 ${rest.className}`}
    >
      {children}
    </button>
  );
}

export default Button;
