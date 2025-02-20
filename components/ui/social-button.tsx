import Link from "next/link";
import { cn } from "@/lib/utils";

interface SocialButtonProps {
  src: string;
  className?: string;
  children: React.ReactNode;
  srOnly: string;
  onClick?: () => void;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  src,
  className = "",
  srOnly,
  children,
  onClick,
}) => {
  return (
    <Link
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "h-8 w-8 dark:hover:bg-muted/70 hover:bg-muted/20 border border-transparent hover:border-secondary-border transition-colors flex items-center justify-center rounded-md [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-foreground bg-transparent",
        className,
      )}
    >
      <button onClick={onClick}>
        {children}
        <span className="sr-only">{srOnly}</span>
      </button>
    </Link>
  );
};
