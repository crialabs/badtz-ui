"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { X } from "lucide-react";
import { DocsSearchbar } from "@/components/docs/doc-searchbar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { DocDropdown } from "@/components/docs/doc-dropdown";
import { Logo } from "@/components/logo";
import * as React from "react";
import { Icons } from "@/components/icons";
import { SocialButton } from "@/components/ui/social-button";
import { usePlausible } from "next-plausible";
import { useBreakpoint } from "@/hooks/use-brakpoints";

type Item = {
  title: string;
  icon?: React.ReactNode;
  href?: string;
  label?: string;
  disabled?: boolean;
  external?: boolean;
  items?: Item[];
};

type DocNavProps = {
  items: Item[];
};

type DocsSidebarNavItemsProps = {
  items: Item[];
  pathname: string;
};

export function DocNav({ items }: DocNavProps) {
  const plausible = usePlausible();
  const { setOpenMobile } = useSidebar();
  const pathname = usePathname();
  const closeSidebar = () => setOpenMobile(false);
  const breakpoint = useBreakpoint();

  return (
    <Sidebar className="border-r border-sidebar-border">
      <button
        className="absolute z-10 top-2.5 right-2 p-1 bg-background border border-sidebar-border rounded-md text-foreground md:hidden"
        onClick={closeSidebar}
        aria-label="Close sidebar"
      >
        <X className="w-3 h-3" />
      </button>
      <SidebarContent className="gap-0">
        <SidebarGroup className="px-4 pt-4">
          <SidebarGroupLabel className="sr-only">logo</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="hover:bg-transparent hover:text-foreground text-foreground active:bg-transparent"
                >
                  <Link href="/" className="[&_svg]:size-5">
                    <Logo />
                    <span className="text-lg font-gilroy font-semibold mt-[2px]">
                      BadtzUI
                    </span>
                    <span className="text-[10px] mt-2 -ml-0.5 bg-sidebar-accent border px-1 rounded mr-1 leading-none py-0.5">
                      Beta
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="px-2 pt-1">
          <DocsSearchbar />
        </div>
        <ScrollArea className="h-full overflow-auto">
          <SidebarGroup className="pb-6 pt-4 pr-6 pl-3">
            <SidebarGroupContent>
              <SidebarMenu aria-label="Documentation navigation">
                {items.map((item, index) => (
                  <Collapsible
                    defaultOpen
                    key={index}
                    className={cn("group/collapsible mb-2")}
                  >
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <CollapsibleTrigger className="flex w-full items-center justify-between text-sm">
                          {item.icon}
                          <span className="whitespace-nowrap text-sm font-medium">
                            {item.title}
                          </span>
                          <ChevronDown
                            size={12}
                            className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180"
                          />
                        </CollapsibleTrigger>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <CollapsibleContent className="">
                      {item?.items?.length && (
                        <DocsSidebarNavItems
                          items={item.items}
                          pathname={pathname}
                        />
                      )}
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </ScrollArea>

        <SidebarGroup className="py-t px-3 border-t border-sidebar-border mt-auto">
          <SidebarGroupContent className="flex items-center justify-between">
            <DocDropdown />
            <div className="flex justify-center gap-0">
              <SocialButton
                className="hover:bg-sidebar-accent [&_svg]:size-3"
                srOnly="Twitter Link"
                src="https://x.com/badtz_ui"
              >
                <Icons.twitter />
              </SocialButton>
              <SocialButton
                srOnly="Discord Link"
                src="https://discord.gg/SV2y7vz6Es"
                className="hover:bg-sidebar-accent"
                onClick={() => plausible("Clicked on GitHub Button")}
              >
                <Icons.discord />
              </SocialButton>
              <ModeToggle className="hover:bg-sidebar-accent" />
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export function DocsSidebarNavItems({
  items,
  pathname,
}: DocsSidebarNavItemsProps) {
  const { setOpenMobile } = useSidebar();

  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm py-1 ml-1 gap-[2px]">
      {items.map((item, index) => {
        const isSoon = item.label === "soon";

        return item.href && !item.disabled && !isSoon ? (
          <Link
            key={index}
            href={item.href}
            onClick={() => setOpenMobile(false)}
            className={cn(
              "group flex w-full text-sm items-center focus:outline-transparent outline-none px-3 text-balance h-8 transition-colors rounded-md duration-200",
              pathname === item.href
                ? "text-accent bg-accent-foreground dark:bg-accent-foreground/10"
                : "text-muted-foreground hover:bg-sidebar-accent"
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.title}
            {item.label && <Badge className="ml-2" variant={item.label} />}
          </Link>
        ) : (
          <span
            key={index}
            className={cn(
              "flex w-full text-sm outline-none focus:outline-transparent items-center px-3 h-8 text-muted-foreground cursor-not-allowed text-balance "
            )}
          >
            {item.title}
            {item.label && <Badge className="ml-2" variant={item.label} />}
          </span>
        );
      })}
    </div>
  ) : null;
}
