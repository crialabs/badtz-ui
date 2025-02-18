import { cn } from "@/lib/utils";

// TODO: Find suitable colors for the badge variants
const variants: Record<string, { text: string; classes: string }> = {
  new: {
    text: "New",
    classes: "text-foreground bg-muted ring-sidebar-border",
  },
  pro: {
    text: "Pro",
    classes: "text-foreground bg-muted ring-sidebar-border",
  },
  hot: {
    text: "Hot",
    classes: "text-foreground bg-muted ring-sidebar-border",
  },
  soon: {
    text: "Soon",
    classes: "text-foreground bg-muted ring-sidebar-border",
  },
};

interface BadgeProps {
  className?: string;
  variant?: keyof typeof variants;
}

export function Badge({ className, variant = "pro" }: BadgeProps) {
  const variantData = variants[variant];

  if (!variantData) {
    return null;
  }

  const { text, classes } = variantData;

  return (
    <span
      className={cn(
        "inline-flex items-center rounded font-light px-1.5 py-0.5 text-[11px] ring-1 ring-inset leading-none text-white",
        classes,
        className,
      )}
    >
      {text}
    </span>
  );
}
