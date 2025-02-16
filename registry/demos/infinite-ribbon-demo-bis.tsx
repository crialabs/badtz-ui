import { InfiniteRibbon } from "@/registry/components/infinite-ribbon";

export default function InfiniteRibbonDemo() {
  return (
    <div className="flex items-center flex-col justify-center gap-6 overflow-hidden h-[350px] w-full">
      <InfiniteRibbon>
        Build fast, responsive, and beautiful interfaces with ready-to-use
        components. Designed for developers who demand the best.
      </InfiniteRibbon>
      <InfiniteRibbon reverse={true}>
        Build fast, responsive, and beautiful interfaces with ready-to-use
        components. Designed for developers who demand the best.
      </InfiniteRibbon>
    </div>
  );
}
