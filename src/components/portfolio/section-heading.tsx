interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }>
      <p className="mb-3 sm:mb-4 label-mono">{label}</p>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-[1.15] display-heading">
        {title}
      </h2>
      {description && (
        <p className="mt-3 sm:mt-4 text-base leading-relaxed prose-portfolio">
          {description}
        </p>
      )}
    </div>
  );
}
