//TODO: everything, (bad)

import Link from "next/link";
import Image from "next/image";
import { allPosts } from "@/.contentlayer/generated";
import { ChevronLeft } from "lucide-react";
import { Icons } from "@/components/icons";
import { formatDate } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BadtzUI • Author: Badtz",
  description:
    "Discover articles by Badtz, the founder of BadtzUI. Sharing insights on UI components, React, design systems, and frontend development.",
  openGraph: {
    title: "BadtzUI - Articles by Badtz",
    images: "/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://www.badtz-ui.com/blog/authors/badtz",
  },
};

export default function AuthorPage() {
  const articles = allPosts.filter((post) =>
    post.authors.some((author) => author.trim() === "badtz")
  );

  return (
    <>
      <div className="w-full h-full pb-16 sm:pb-28 min-h-[80dvh]">
        <div className="px-6 lg:px-8 lg:max-w-5xl mx-auto pt-10 md:pt-20 relative">
          <Link
            href="/blog"
            className="flex [&_svg]:size-3 text-foreground items-center gap-2 rounded-lg pl-3 pr-4 h-9 text-sm border bg-secondary hover:border-foreground/10 transition-colors duration-300 whitespace-nowrap shrink-0 w-min"
          >
            <ChevronLeft />
            Back
          </Link>
          <div className="mt-8 text-center flex items-center flex-col">
            <Image
              src="/images/badtz-author.webp"
              alt="Badtz"
              width={100}
              height={100}
              className="rounded-full mx-auto border-border border"
            />
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-foreground font-gilroy mt-4">
              Badtz
            </h1>
            <p className="text-balance font-light tracking-tight lg:mt-4 mt-3 max-w-[680px] text-muted-foreground text-base md:text-lg">
              Founder of BadtzUI – Crafting high-quality, accessible UI
              components for React developers.
            </p>
            <div className="mt-4 flex justify-center space-x-2">
              <Link
                href={`https://twitter.com/badtz_ui`}
                target="_blank"
                title={`View badtz's Twitter profile`}
                className="flex [&_svg]:size-3.5 items-center gap-2 rounded-lg px-2 aspect-square justify-center h-10 text-sm border bg-secondary hover:border-foreground/10 transition-colors duration-300 whitespace-nowrap shrink-0 w-min"
              >
                <Icons.twitter />
              </Link>
              <Link
                href="https://github.com/badtzx0"
                target="_blank"
                title={`View badtz's Github profile`}
                className="flex [&_svg]:size-4 items-center gap-2 rounded-lg px-2 aspect-square justify-center h-10 text-sm border bg-secondary hover:border-foreground/10 transition-colors duration-300 whitespace-nowrap shrink-0 w-min"
              >
                <Icons.gitHub />
              </Link>
            </div>
          </div>
          <hr className="my-6" />
          {articles?.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
              {articles.map((post, index) => (
                <Link href={`/blog/${post.slugAsParams}`} key={post._id}>
                  <article className="flex flex-col w-full p-2 border border-transparent hover:border-border rounded-xl transition-colors duration-200 shadow-none hover:shadow-sm">
                    {post.image && (
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={760}
                        height={400}
                        className="aspect-video object-cover bg-secondary border-border border rounded-lg"
                        priority={index <= 1}
                      />
                    )}
                    <div className="pt-2.5 p-1">
                      <h2 className="text-xl font-gilroy">{post.title}</h2>
                      {post.date && (
                        <p className="text-xs text-muted-foreground">
                          {formatDate(post.date)}
                        </p>
                      )}
                      {post.description && (
                        <p className="mt-2 text-sm text-muted-foreground text-justify font-light">
                          {post.description.length > 140
                            ? `${post.description.slice(0, 140)}...`
                            : post.description}
                        </p>
                      )}

                      <div className="flex items-center space-x-1.5 text-sm mt-3">
                        <Image
                          src="/images/badtz-avatar-small.webp"
                          alt="Author Avatar"
                          width={20}
                          height={20}
                          className="rounded-full bg-secondary shrink-0 h-5 w-5 invert dark:invert-[0]"
                        />
                        <p className="font-light text-sm text-thin text-muted-foreground">
                          Badtz
                        </p>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground mt-6">
              No posts published by this author.
            </p>
          )}

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Badtz",
                image: "/images/badtz-author.webp",
                description:
                  "Founder of BadtzUI – Crafting high-quality, accessible UI components for React developers.",
                url: "https://badtz-ui.com/blog/authors/badtz",
                sameAs: ["https://twitter.com/badtz_ui"],
              }),
            }}
          />
        </div>
      </div>
    </>
  );
}
