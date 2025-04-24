import { SidebarProvider } from "@/components/ui/sidebar";
import { DocNav } from "@/components/docs/doc-nav";
import { docsConfig } from "@/config/docs";
import { MobileDocHeader } from "@/components/docs/mobile-doc-header";
import Marketing from "@/components/marketing";
import Header from "@/components/header";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-third">
      <Header />

      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 bg-third">
        <aside className="border-grid fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block">
          <DocNav items={docsConfig} />
        </aside>
        {children}
      </div>
    </div>
  );
}
