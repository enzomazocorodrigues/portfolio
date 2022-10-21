import { clsx } from "clsx";

interface HeadingProps {
  children: string;
  className?: string;
  small?: boolean;
}

export function Heading({ children, className, small }: HeadingProps) {
  const Component = small ? "h1" : "h2";
  return (
    <Component
      className={clsx(`text-white ${className}`, {
        "text-2xl font-bold": !small,
        "text-base font-semibold": small,
      })}
    >
      {children}
    </Component>
  );
}
