"use client";

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
import * as React from "react";
import { Icons } from "@/components/icons";
import { SocialButton } from "@/components/ui/social-button";
import { usePlausible } from "next-plausible";

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
  const pathname = usePathname();

  return (
    <div className="border-sidebar-border h-full flex flex-col">
      <div className="flex flex-col h-full">
        <ScrollArea className="flex-1 overflow-auto">
          <div className="pb-6 pt-4 pr-6 pl-3">
            <nav aria-label="Documentation navigation">
              <div className="mb-4">
                <DocsSearchbar />
              </div>
              {items.map((item, index) => (
                <Collapsible
                  defaultOpen
                  key={index}
                  className={cn("group/collapsible mb-2")}
                >
                  <CollapsibleTrigger className="flex w-full items-center justify-between text-sm px-3 py-2 hover:bg-sidebar-accent rounded-md">
                    <span className="whitespace-nowrap text-sm font-medium flex items-center gap-2">
                      {item.icon}
                      {item.title}
                    </span>
                    <ChevronDown
                      size={12}
                      className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180"
                    />
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

        <div className="py-4 px-3 mt-auto">
          <div className="flex items-center justify-between">
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
          </div>
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
    <div className="grid grid-flow-row auto-rows-max text-sm py-1 ml-1 gap-[2px]">
      {items.map((item, index) => {
        const isSoon = item.label === "soon";

        return item.href && !item.disabled && !isSoon ? (
          <Link
            key={index}
            href={item.href}
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
              "flex w-full text-sm outline-none focus:outline-transparent items-center px-3 h-8 text-muted-foreground cursor-not-allowed text-balance"
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
