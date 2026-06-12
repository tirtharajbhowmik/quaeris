import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  headingId?: string;
  headline: ReactNode;
  subcopy?: string;
  center?: boolean;
  dark?: boolean;
  /** Extra inline style on the subcopy <p> */
  subcopyStyle?: React.CSSProperties;
}

export default function SectionHeader({
  eyebrow,
  headingId,
  headline,
  subcopy,
  center = false,
  dark = false,
  subcopyStyle,
}: SectionHeaderProps) {
  const wrapperClass = [
    "section-header",
    center ? "center" : "",
    dark ? "section-header-dark" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClass}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 id={headingId} className="display-lg">
        {headline}
      </h2>
      {subcopy && (
        <p className="body-lg subcopy" style={subcopyStyle}>
          {subcopy}
        </p>
      )}
    </div>
  );
}
