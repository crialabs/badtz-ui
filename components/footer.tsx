import Link from "next/link";
import { LargeLogo } from "@/components/logo";
import * as React from "react";
import NewsletterForm from "@/components/newsletter/subscribe-form";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

interface LinkType {
  href: string;
  label: string;
  itemProp?: string;
}

interface LinkSectionProps {
  title: string;
  links: LinkType[];
}

const CURRENT_YEAR = new Date().getFullYear();

const LinkSection: React.FC<LinkSectionProps> = ({ title, links }) => (
  <nav
    aria-label={title}
    itemScope
    itemType="https://schema.org/SiteNavigationElement"
  >
    <div className="flex flex-col md:text-sm">
      <h3 className="font-medium text-foreground mb-6" itemProp="name">
        {title}
      </h3>
      <ul className="space-y-3 text-muted-foreground">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              itemProp="url"
            >
              <span itemProp="name">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

const FOOTER_SECTIONS: { title: string; links: LinkType[] }[] = [
  {
    title: "Products",
    links: [
      { href: "/components", label: "Components" },
      { href: "/changelog", label: "Changelog" },
      { href: "#templates", label: "Templates" },
      { href: "#sections", label: "Sections" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "#privacy", label: "Privacy" },
      { href: "#terms", label: "Terms" },
      { href: "/docs", label: "Documentation" },
    ],
  },
  {
    title: "Community",
    links: [
      { href: "https://discord.com/invite/SV2y7vz6Es", label: "Discord" },
      {
        href: "https://x.com/badtz_ui",
        label: "Twitter",
        itemProp: "sameAs",
      },
      { href: "/newsletter", label: "Newsletter" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/", label: "About" },
      { href: "https://pro.badtz-ui.com", label: "BadtzUI Pro" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-border w-full bg-secondary"
      aria-label="Footer"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div
        className="px-6 lg:px-8 pb-12 pt-12 max-w-5xl mx-auto"
        itemScope
        itemType="https://schema.org/Organization"
        itemID="#organization"
      >
        <meta itemProp="name" content="BadtzUI" />
        <link itemProp="url" href={baseUrl} />
        <meta itemProp="logo" content={`${baseUrl}/static/badtz-ui-logo.png`} />

        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-20">
          <div className="flex flex-col space-y-4">
            <LargeLogo />
            <p
              className="md:text-sm text-muted-foreground"
              itemProp="description"
            >
              Built in public by{" "}
              <Link
                target="_blank"
                rel="noreferrer"
                className="font-medium hover:underline underline-offset-2"
                href="https://x.com/badtz_ui"
                itemProp="founder"
              >
                Badtz
              </Link>
              <br />
              with{" "}
              <span
                aria-label="Component library"
                data-tooltip="Custom React components"
                className="cursor-default py-0.5 px-1 text-xs bg-muted border border-border rounded-md"
              >
                BadtzUI
              </span>
            </p>
            <p
              className="md:text-sm text-muted-foreground mt-2"
              itemProp="slogan"
            >
              Here you can subscribe to my
              <br />
              personal newsletter. No spam, I promise :)
            </p>
            <NewsletterForm />
            <div itemScope itemType="https://schema.org/ContactPoint">
              <meta itemProp="email" content="contact@badtz-ui.com" />
              <meta itemProp="contactType" content="customer service" />
              <meta itemProp="url" content={baseUrl} />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full md:w-auto">
            {FOOTER_SECTIONS.map((section) => (
              <LinkSection
                key={section.title}
                title={section.title}
                links={section.links.map((link) => {
                  const isExternal =
                    link.href.startsWith("http") &&
                    !link.href.includes("badtz-ui.com");
                  const isBadtzUIPro = link.href === "https://pro.badtz-ui.com";
                  return {
                    ...link,
                    itemProp: isExternal ? "sameAs" : undefined,
                    target: isExternal || isBadtzUIPro ? "_blank" : undefined,
                    rel:
                      isExternal && !isBadtzUIPro
                        ? "noopener noreferrer"
                        : undefined,
                  };
                })}
              />
            ))}
          </div>
        </div>

        <p
          className="text-xs text-muted-foreground mt-10"
          itemScope
          itemType="https://schema.org/CreativeWork"
        >
          <meta itemProp="copyrightYear" content={CURRENT_YEAR.toString()} />
          <span itemProp="copyrightHolder">© {CURRENT_YEAR} BadtzUI.</span> All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
