import { TableOfContents } from "@/components/TableOfContents";

type Section = { id: string; label: string };

export function CaseSidebar({
  sections,
  accentColor = "var(--accent)",
}: {
  sections: Section[];
  accentColor?: string;
}) {
  return (
    <aside className="hidden lg:block w-32 flex-shrink-0">
      <div className="sticky top-32">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>Contents</p>
        <TableOfContents sections={sections} accentColor={accentColor} />
      </div>
    </aside>
  );
}