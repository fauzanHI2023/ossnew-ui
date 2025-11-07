interface SectionTitleProps {
  title: string;
  align?: "left" | "center";
}

export function SectionTitle({ title, align = "center" }: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClass} gap-3 mb-12`}>
      {/* Title */}
      <h2 className="text-black">{title}</h2>

      {/* Clean accent line */}
      <div className="w-16 h-1 bg-gradient-to-r from-[#268ece] to-[#1d7ab8] rounded-full" />
    </div>
  );
}
