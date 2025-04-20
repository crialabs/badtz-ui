import { cn } from "@/lib/utils";

// TODO: Find suitable colors for the badge variants
const variants: Record<string, { text: string; classes: string }> = {
  new: {
    text: "New",
    classes: "text-emerald-400 after:bg-emerald-500/20 ring-emerald-400/50",
  },
  pro: {
    text: "Pro",
    classes: "text-pink-400 after:bg-pink-500/20 ring-pink-400/50",
  },
  hot: {
    text: "Hot",
    classes: "text-amber-400 after:bg-amber-500/20 ring-amber-400/50",
  },
  soon: {
    text: "Soon",
    classes: "text-indigo-400 after:bg-indigo-500/20 ring-indigo-400/50",
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
        "inline-flex items-center z- rounded-full font-light px-2 py-0.5 text-[11px] ring-1 ring-inset leading-none text-white relative after:absolute after:inset-0 after:rounded-full bg-white dark:bg-sidebar after:opacity-50 after:z-1",
        classes,
        className
      )}
    >
      {text}
    </span>
  );
}
