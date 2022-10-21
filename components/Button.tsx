import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`w-full text-sm text-white text-center py-3 rounded-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
