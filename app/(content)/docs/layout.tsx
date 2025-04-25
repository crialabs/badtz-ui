import { SidebarProvider } from "@/components/ui/sidebar";
import { DocNav } from "@/components/docs/doc-nav";
import { docsConfig } from "@/config/docs";
import Header from "@/components/header";
import { DocHeader } from "@/components/docs/doc-header";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-doc-background">
      {/*
      <DocHeader />

      <div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          
        </aside>
        </div>
        */}
      <DocNav items={docsConfig}>{children}</DocNav>
    </div>
  );
}
