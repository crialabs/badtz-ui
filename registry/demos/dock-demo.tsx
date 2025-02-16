import { Dock, DockIcon } from "@/registry/components/dock";
import { useBreakpoint } from "@/hooks/use-brakpoints";

export default function DockDemo() {
  const breakpoint = useBreakpoint();

  const dockItems = [
    {
      src: "/images/components/dock/tailwindcss-logo.webp",
      name: "TailwindCSS",
      href: "#tailwindcss",
    },
    {
      src: "/images/components/dock/edge-logo.webp",
      name: "Edge",
      href: "#linear",
    },
    {
      src: "/images/components/dock/motion-logo.webp",
      name: "Motion",
      href: "#motion",
    },
    {
      src: "/images/components/dock/react-logo.webp",
      name: "React",
      href: "#react",
    },
    {
      src: "/images/components/dock/linear-logo.webp",
      name: "Linear",
      href: "#linear",
    },
    {
      src: "/images/components/dock/drizzle-orm-logo.webp",
      name: "Drizzle ORM",
      href: "#drizzle-orm",
    },
    {
      src: "/images/components/dock/deepseek-logo.webp",
      name: "Deepseek",
      href: "#linear",
    },
  ];

  const itemsToDisplay =
    breakpoint === "small" ? dockItems.slice(0, 4) : dockItems;

  return (
    <Dock>
      {itemsToDisplay.map((item, index) => (
        <DockIcon
          key={index}
          src={item.src}
          name={item.name}
          href={item.href}
        />
      ))}
    </Dock>
  );
}
