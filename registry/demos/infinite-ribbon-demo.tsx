import { InfiniteRibbon } from "@/registry/components/infinite-ribbon";

export default function InfiniteRibbonDemo() {
  return (
    <div className="flex items-center justify-center relative overflow-hidden h-[350px] w-full">
      <InfiniteRibbon rotation={5} className="absolute">
        Build fast, responsive, and beautiful interfaces with ready-to-use
        components. Designed for developers who demand the best.
      </InfiniteRibbon>
      <InfiniteRibbon reverse={true} rotation={-5}>
        Build fast, responsive, and beautiful interfaces with ready-to-use
        components. Designed for developers who demand the best.
      </InfiniteRibbon>
    </div>
  );
}
