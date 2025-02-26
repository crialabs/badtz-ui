import path from "path";

interface DocItem {
  title: string;
  href: string;
  items: DocItem[];
  label?: string;
}

interface DocCategory {
  title: string;
  icon: JSX.Element;
  items: DocItem[];
}

export const docsConfig: DocCategory[] = [
  {
    title: "Getting Started",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-4"
      >
        <path d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z" />
        <path
          fillRule="evenodd"
          d="M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    items: [
      {
        title: "Introduction",
        href: "/docs",
        items: [],
      },
    ],
  },
  /*
  {
    title: "Templates",
    items: [

    ],
  },
  */
  {
    title: "3d & Shaders",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-3"
      >
        <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
      </svg>
    ),
    items: [
      {
        title: "Pixel Distorsion",
        href: "/docs/components/shaders/pixel-distorsion-shader",
        items: [],
        label: "hot",
      },
      {
        title: "Pulse Shader",
        href: "/docs/components/shaders/pulse-shader",
        items: [],
      },
      {
        title: "Mouse Wave Shader",
        href: "/docs/components/shaders/mouse-wave-shader",
        items: [],
      },
      {
        title: "Glass Distortion",
        href: "/docs/components/glass-text",
        label: "soon",
        items: [],
      },
      {
        title: "Globe",
        href: "/docs/components/globe/",
        label: "soon",
        items: [],
      },
      {
        title: "Liquid shader",
        href: "/docs/components/liquid-shader",
        label: "soon",
        items: [],
      },
    ],
  },
  {
    title: "Components",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-3"
      >
        <path
          fillRule="evenodd"
          d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    items: [
      {
        title: "Bento Grid",
        href: "/docs/components/bento-grid",
        label: "soon",
        items: [],
      },
      {
        title: "Radiant Edge",
        href: "/docs/components/radiant-edge",
        label: "soon",
        items: [],
      },
      {
        title: "Spaceship Scrollbar",
        href: "/docs/components/spaceship-scrollbar",
        items: [],
      },
      {
        title: "Spotlight box",
        href: "/docs/components/magic-border",
        label: "soon",
        items: [],
      },
      {
        title: "Social Proof Avatars",
        href: "/docs/components/social-proof-avatars",
        items: [],
      },
      {
        title: "Border Beam",
        href: "/docs/components/border-beam",
        items: [],
      },
      {
        title: "Cloud Orbit",
        href: "/docs/components/cloud-orbit",
        items: [],
        label: "new",
      },
      {
        title: "Dock",
        href: "/docs/components/dock",
        items: [],
      },
      {
        title: "Expandable Card",
        href: "/docs/components/expandable-card",
        items: [],
      },
      {
        title: "Image Split",
        href: "/docs/components/image-split",
        items: [],
        label: "hot",
      },
      {
        title: "Image Trail",
        href: "/docs/components/image-trail",
        items: [],
        label: "new",
      },
      {
        title: "Infinite Ribbon",
        href: "/docs/components/infinite-ribbon",
        items: [],
      },
      {
        title: "3D Wrapper",
        href: "/docs/components/wrapper-3d",
        items: [],
      },
    ],
  },
  {
    title: "Animated Cards",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-3"
      >
        <path
          fillRule="evenodd"
          d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    items: [
      {
        title: "Animated Card 1",
        href: "/docs/components/animated-cards/animated-card-1",
        items: [],
      },
      {
        title: "Animated Card 2",
        href: "/docs/components/animated-cards/animated-card-2",
        items: [],
      },
      {
        title: "Animated Card 3",
        href: "/docs/components/animated-cards/animated-card-3",
        items: [],
      },
      {
        title: "Animated Card 4",
        href: "/docs/components/animated-cards/animated-card-4",
        items: [],
        label: "soon",
      },
      {
        title: "Animated Card 5",
        href: "/docs/components/animated-cards/animated-card-5",
        items: [],
        label: "soon",
      },
    ],
  },
  {
    title: "Backgrounds",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-3"
      >
        <path
          fillRule="evenodd"
          d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    items: [
      {
        title: "Stripe Animated Gradient",
        href: "/docs/components/backgrounds/stripe-animated-gradient",
        items: [],
      },
      {
        title: "Hyperspace Background",
        href: "/docs/components/backgrounds/hyperspace-background",
        items: [],
      },
    ],
  },
  {
    title: "Text Animations",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-3"
      >
        <path
          fillRule="evenodd"
          d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
          clipRule="evenodd"
        />
        <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
      </svg>
    ),
    items: [
      /*
      {
        title: "Scroll-text-reveal--",
        href: "/docs/components/wave-shader",
        items: [],
      },
      */
      {
        title: "Blur Reveal",
        href: "/docs/components/text-animations/blur-reveal",
        items: [],
      },
    ],
  },
  {
    title: "Buttons",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-3"
      >
        <path
          fillRule="evenodd"
          d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    items: [
      {
        title: "Gradient Slide",
        href: "/docs/components/buttons/gradient-slide-button",
        items: [],
      },
      {
        title: "Star Button",
        href: "/docs/components/buttons/star-button",
        items: [],
      },
      {
        title: "Confetti Button",
        href: "/docs/components/buttons/confetti-button",
        items: [],
      },
      {
        title: "Shuffle Button",
        href: "/docs/components/buttons/shuffle-button",
        items: [],
      },
      {
        title: "Stagger Button",
        href: "/docs/components/buttons/stagger-button",
        items: [],
      },
      {
        title: "Like Button",
        href: "/docs/components/buttons/like-button",
        items: [],
      },
      /*
      {
        title: "Gradient Button",
        href: "/docs/components/buttons/gradient-button",
        label: "soon",
        items: [],
      },
      */
    ],
  },
];
