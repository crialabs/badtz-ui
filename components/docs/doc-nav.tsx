"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { CircleArrowUp } from "lucide-react";
import { DocsSearchbar } from "@/components/docs/doc-searchbar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { DocDropdown } from "@/components/docs/doc-dropdown";
import * as React from "react";
import { Icons } from "@/components/icons";
import { SocialButton } from "@/components/ui/social-button";
import { usePlausible } from "next-plausible";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import { DocModeToggle } from "@/components/docs/doc-mode-toggle";
import { LargeLogo } from "@/components/logo";

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
  children: React.ReactNode;
};

type DocsSidebarNavItemsProps = {
  items: Item[];
  pathname: string;
};

export function DocNav({ items, children }: DocNavProps) {
  const plausible = usePlausible();
  const pathname = usePathname();

  return (
    <div className="flex bg-sidebar h-[100dvh] overflow-hidden">
      <div className="h-full flex flex-col">
        <div className="flex flex-col h-full">
          <div className="px-4 py-3">
            <Link href="/">
              <LargeLogo />
            </Link>
          </div>
          <ScrollArea className="flex-1 overflow-auto w-[246px]">
            <div className="pb-6 pt-4 pr-6 pl-3">
              <nav aria-label="Documentation navigation">
                {items.map((item, index) => (
                  <Collapsible
                    defaultOpen
                    key={index}
                    className={cn("group/collapsible")}
                  >
                    <CollapsibleTrigger className="flex w-full items-center justify-start text-sm px-1.5 h-[30px] hover:bg-sidebar-accent rounded-md pt-[1px] group/trigger">
                      <span className="whitespace-nowrap text-sidebar-primary-foreground text-[13.5px] font-medium flex items-center gap-1 [&_svg]:opacity-70 group-hover/trigger:[&_svg]:opacity-100 [&_svg]:mb-[1.5px] [&_svg]:mr-[3px] [&_svg]:size-3.5 transition-opacity duration-200">
                        {item.icon}
                        {item.title}
                        <TriangleDownIcon className="transition-transform group-data-[state=closed]/collapsible:-rotate-[90deg] group-data-[state=open]/collapsible:rotate-[0deg]" />
                      </span>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      {item?.items?.length && (
                        <DocsSidebarNavItems
                          items={item.items}
                          pathname={pathname}
                        />
                      )}
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </nav>
            </div>
          </ScrollArea>
          <div className="py-3 px-4 flex items-center justify-between gap-2">
            <Link
              href="https://pro.badtz-ui.com/"
              className="h-7 text-xs rounded-full border border-sidebar-border flex items-center whitespace-nowrap pr-3 pl-1.5 w-min group/pro-plan cursor-pointer"
            >
              <CircleArrowUp className="size-3.5 mr-1.5 text-sidebar-muted-foreground group-hover/pro-plan:text-sidebar-primary-foreground transition-colors duration-200" />
              Pro plan
            </Link>

            <div className="flex items-center justify-between">
              <div className="flex justify-center gap-0.5">
                <SocialButton
                  className="hover:bg-sidebar-accent [&_svg]:size-3.5"
                  srOnly="GitHub Link"
                  src="https://github.com/badtzx0/badtz-ui"
                  onClick={() => plausible("Clicked on GitHub Button")}
                >
                  <Icons.gitHub />
                </SocialButton>
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
                  className="hover:bg-sidebar-accent [&_svg]:size-4"
                >
                  <Icons.discord />
                </SocialButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2.5 pl-0 pt-0 h-full w-full flex-1 flex flex-col">
        <div className="py-2 flex justify-end items-center relative">
          <div className="fixed w-full max-w-[450px] top-2 left-1/2 -translate-x-1/2">
            <DocsSearchbar />
          </div>
          <div className="flex items-center gap-1.5 mr-4">
            <DocModeToggle />
            <DocDropdown />
          </div>
        </div>
        <div className="border rounded-md overflow-y-auto flex-1 shadow-xs">
          {children}
        </div>
      </div>
    </div>
  );
}

export function DocsSidebarNavItems({
  items,
  pathname,
}: DocsSidebarNavItemsProps) {
  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm pt-1 pb-5 ml-1 gap-[1px]">
      {items.map((item, index) => {
        const isSoon = item.label === "soon";

        return item.href && !item.disabled && !isSoon ? (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "group flex w-full text-[13.5px] items-center focus:outline-transparent outline-none pl-4 pr-2 text-balance h-[30px] transition-colors rounded-md duration-200 font-medium text-sidebar-muted-foreground hover:text-sidebar-primary-foreground",
              pathname === item.href
                ? "bg-sidebar-primary text-sidebar-primary-foreground"
                : "hover:bg-sidebar-primary/50"
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.title}
            {item.label && <Badge className="ml-auto" variant={item.label} />}
          </Link>
        ) : (
          <span
            key={index}
            className={cn(
              "flex w-full text-[13.5px] outline-none focus:outline-transparent items-center pl-4 pr-2 h-[30px] text-sidebar-muted-foreground cursor-default text-balance font-medium"
            )}
          >
            {item.title}
            {item.label && <Badge className="ml-auto" variant={item.label} />}
          </span>
        );
      })}
    </div>
  ) : null;
}
