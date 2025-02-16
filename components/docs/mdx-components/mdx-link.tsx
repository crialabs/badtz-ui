import Link from "@/node_modules/next/link";
import { ReactNode } from "react";

interface MdxLinkProps {
  children: ReactNode;
  href: string;
}

export function MdxLink({ children, href }: MdxLinkProps) {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="inline-block underline underline-offset-2"
    >
      {children}
    </Link>
  );
}
