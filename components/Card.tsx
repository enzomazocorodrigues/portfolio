import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <article
      className={`px-3 py-4 bg-slate-700 border border-slate-500 rounded-md ${className}`}
    >
      {children}
    </article>
  );
}
