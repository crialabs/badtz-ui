import Link from "next/link";

export function HeroBadge() {
  return (
    <Link
      href="/docs/components/shaders/pulse-shader"
      className="rounded-full font-light 
      py-[5px] px-6 shadow-sm border border-border text-sm dark:bg-secondary text-muted-foreground hover:text-foreground transition-colors duration-300"
      aria-label="1 Component update per day"
    >
      <p>
        {/* 1 New Component / day */}New Component
        <span className="md:inline hidden">
          <span className="mx-1.5">•</span>
          {/*Streaking*/}Pulse Shader
        </span>
      </p>
    </Link>
  );
}
