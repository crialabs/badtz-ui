import { SidebarProvider } from "@/components/ui/sidebar";
import { DocNav } from "@/components/docs/doc-nav";
import { docsConfig } from "@/config/docs";
import { MobileDocHeader } from "@/components/docs/mobile-doc-header";
import Marketing from "@/components/marketing";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Marketing
        className=""
        href="https://x.com/badtz_ui"
        plausibleEvent="Clicked on Twitter"
      >
        🎉 New components daily! Follow us on X for updates.
      </Marketing>
      <SidebarProvider>
        <div className="flex flex-col h-full w-full bg-background">
          <div className="flex-1 items-start flex">
            <DocNav items={docsConfig} />
            <div className="flex flex-col w-full relative">
              <MobileDocHeader />
              {children}
            </div>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}
