import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  title?: string;
  className?: string;
  /** Optional accent variant — default uses text-tertiary border/text */
  variant?: "default" | "accent";
}

/**
 * Badge — spec §3 "Premier Partner", "Top 3%"
 * Pill shape, 1px border, 12px text.
 */
export default function Badge({
  children,
  title,
  className = "",
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={`badge badge-${variant}${className ? " " + className : ""}`}
      title={title}
    >
      {children}
    </span>
  );
}
