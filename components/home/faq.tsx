import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="w-full h-full py-16 sm:py-28">
      <div className="px-6 lg:px-8 lg:max-w-5xl mx-auto">
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-foreground text-balance max-w-[605px] font-gilroy">
            Frequently asked <br /> questions
          </h2>
          <p className="mt-4 text-balance max-w-[550px] md:max-w-[550px] tracking-tight lg:mt-6 sm:mt-3 text-muted-foreground text-base md:text-lg font-light">
            Browse through our most common questions. Can't find what you're
            looking for? Our team is here to help you.
          </p>
        </div>
        <div className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base font-light">
                What are UI components and how can they enhance my landing page?
              </AccordionTrigger>
              <AccordionContent className="text-base font-light text-muted-foreground">
                UI components are pre-built, reusable interface elements
                designed to create stunning landing pages quickly. Our library
                offers a comprehensive collection of modern, customizable
                components that help developers and designers build
                professional-looking websites with minimal effort. From hero
                sections to feature cards, we provide everything you need for a
                high-converting landing page.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-base font-light">
                Is this UI component library free and open source?
              </AccordionTrigger>
              <AccordionContent className="text-base font-light text-muted-foreground">
                Yes! Our entire UI component library is completely free and open
                source under the MIT license. You can use, modify, and
                distribute our components for both personal and commercial
                projects without any costs. We believe in giving back to the
                developer community while maintaining high-quality standards in
                our components.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-base font-light">
                How customizable are these landing page UI components?
              </AccordionTrigger>
              <AccordionContent className="text-base font-light text-muted-foreground">
                Our UI components are highly customizable through Tailwind CSS
                classes and design tokens. You can easily modify colors,
                typography, spacing, and animations to match your brand
                identity. Each component is built with flexibility in mind,
                allowing you to create unique designs while maintaining
                consistency across your landing page.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-base font-light">
                Are these UI components optimized for performance and SEO?
              </AccordionTrigger>
              <AccordionContent className="text-base font-light text-muted-foreground">
                Absolutely! Our components are built with performance in mind,
                using React Server Components when possible and implementing
                best practices for web vitals. They're lightweight, accessible,
                and SEO-friendly by default. We ensure semantic HTML structure
                and proper meta tags support to help your landing page rank
                better in search engines.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-base font-light">
                How do I get started with these landing page UI components?
              </AccordionTrigger>
              <AccordionContent className="text-base font-light text-muted-foreground">
                Getting started is simple! You have two convenient options:
                either use our CLI to add components directly to your project,
                or simply copy and paste the component code you need from our
                documentation. Each component comes with clear instructions and
                can be easily customized using Tailwind CSS classes. Our
                components are designed to work seamlessly with Next.js and
                React, making implementation straightforward for developers of
                all skill levels.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
