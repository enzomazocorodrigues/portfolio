import { clsx } from "clsx";

interface TextProps {
  children: string;
  small?: boolean;
  className?: string;
}

export function Text({ children, className, small }: TextProps) {
  //   return <span className="text-white font-medium text-sm">{children}</span>;
  return (
    <span
      className={clsx(`text-white ${className}`, {
        "text-sm": !small,
        "text-xs": small,
      })}
    >
      {children}
    </span>
  );
}
