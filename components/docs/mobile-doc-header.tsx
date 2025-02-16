import { LargeLogo } from "@/components/logo";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";

export function MobileDocHeader() {
  return (
    <div className="md:hidden flex">
      <div className=" mx-auto min-w-0 max-w-4xl container z-[50] py-3 h-14 flex items-center fixed top-0 inset-x-0 w-full bg-background/70 backdrop-blur-md justify-between border-b">
        <Link href="/">
          <LargeLogo />
        </Link>
        <SidebarTrigger />
      </div>
      <div className="w-full h-14"></div>
    </div>
  );
}
