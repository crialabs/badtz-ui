"use client";

export default function AnimatedDotPattern() {
  return (
    <div className="relative h-[350px] w-full">
      <div className="absolute inset-0 bg-[radial-gradient(#525252_1px,transparent_1px)] [background-size:16px_16px] animate-twinkle  [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      <style jsx>
        {`
          @keyframes twinkle {
            0% {
              opacity: 1;
            }
            50% {
              opacity: 0.15;
            }
            100% {
              opacity: 1;
            }
          }

          .animate-twinkle {
            animation: twinkle 3s infinite alternate ease-in-out;
          }
        `}
      </style>
      <span className="text-4xl font-bold font-gilroy absolute inset-0 flex items-center justify-center">
        Dot Pattern
      </span>
    </div>
  );
}
