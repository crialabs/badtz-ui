import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="w-full h-full bg-third px-0 sm:px-12 md:px-16">
      <div className="sm:border-x py-12 lg:max-w-5xl mx-auto">
        <div className="px-6 lg:px-8 text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground text-balance max-w-[605px] font-gilroy">
            Frequently asked questions
          </h2>
          <p className="text-balance max-w-[550px] md:max-w-[700px] tracking-tight text-muted-foreground text-sm md:text-base mt-4">
            Browse through our most common questions. Can't find what you're
            looking for? Our team is here to help you.
          </p>
        </div>
        <div className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="px-4">
              <AccordionTrigger className="text-base gap-4">
                What are UI components and how can they enhance my landing page?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                UI components are pre-built, reusable interface elements
                designed to create stunning landing pages quickly. Our library
                offers a comprehensive collection of modern, customizable
                components that help developers and designers build
                professional-looking websites with minimal effort. From hero
                sections to feature cards, we provide everything you need for a
                high-converting landing page.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="px-4">
              <AccordionTrigger className="text-base gap-4">
                Is this UI component library free and open source?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Yes! Our entire UI component library is completely free and open
                source under the MIT license. You can use, modify, and
                distribute our components for both personal and commercial
                projects without any costs. We believe in giving back to the
                developer community while maintaining high-quality standards in
                our components.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="px-4">
              <AccordionTrigger className="text-base gap-4">
                How customizable are these landing page UI components?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Our UI components are highly customizable through Tailwind CSS
                classes and design tokens. You can easily modify colors,
                typography, spacing, and animations to match your brand
                identity. Each component is built with flexibility in mind,
                allowing you to create unique designs while maintaining
                consistency across your landing page.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="px-4">
              <AccordionTrigger className="text-base gap-4">
                Are these UI components optimized for performance and SEO?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Absolutely! Our components are built with performance in mind,
                using React Server Components when possible and implementing
                best practices for web vitals. They're lightweight, accessible,
                and SEO-friendly by default. We ensure semantic HTML structure
                and proper meta tags support to help your landing page rank
                better in search engines.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="px-4">
              <AccordionTrigger className="text-base gap-4">
                How do I get started with these landing page UI components?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
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
