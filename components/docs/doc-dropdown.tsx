"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function DocDropdown() {
  const pathname = usePathname();

  const githubBaseUrl = "https://github.com/badtzx0/badtz-ui/blob/main/content";
  const githubEditUrl = `${githubBaseUrl}${pathname}.mdx`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-8 w-8 hover:bg-sidebar-accent transition-colors flex items-center justify-center rounded-md [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-foreground bg-transparent shadow-none">
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 bg-background border-sidebar-border mb-4 shadow-sm"
        align="start"
      >
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>GitHub</DropdownMenuSubTrigger>
            <DropdownMenuSeparator />
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem asChild>
                  <Link
                    href={githubEditUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Edit this Page
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link
                    href="https://github.com/badtzx0/badtz-ui"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repo
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem asChild>
            <Link
              href="https://github.com/badtzx0/badtz-ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              Request a component
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link
              href="https://github.com/badtzx0/badtz-ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              Report a Bug
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link
              href="https://github.com/badtzx0/badtz-ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              Feedback
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
