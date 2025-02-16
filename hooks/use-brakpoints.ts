import { useState, useEffect } from "react";

type Breakpoint = "small" | "medium" | "large";

export function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("large");

  const updateBreakpoint = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setBreakpoint("small");
    } else if (width >= 768 && width < 1024) {
      setBreakpoint("medium");
    } else {
      setBreakpoint("large");
    }
  };

  useEffect(() => {
    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return breakpoint;
}
