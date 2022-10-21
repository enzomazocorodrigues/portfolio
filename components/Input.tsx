import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={`bg-slate-700 w-full rounded-md outline-none px-4 py-3 border border-slate-500 text-white text-sm [--webkit-opacity:1] [-webkit-text-fill-color: white] ${className}`}
      {...props}
    />
  );
}
