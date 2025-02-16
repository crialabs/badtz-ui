import { cn } from "@/lib/utils";
import Link from "next/link";

interface MarketingProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function Marketing({
  href,
  children,
  className,
}: MarketingProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        "bg-secondary dark:bg-secondary text-center relative px-4 py-1.5 w-full flex items-center justify-center border-b border-border",
        className
      )}
    >
      <span className={cn("text-foreground text-sm text-balance font-light")}>
        {children}
      </span>
    </Link>
  );
}
