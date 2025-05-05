export interface DocItem {
  title: string;
  href: string;
  items: DocItem[];
  label?: string;
}

export interface DocCategory {
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
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
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
  {
    title: "Templates",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
      </svg>
    ),
    items: [
      {
        title: "SaaS Template",
        href: "/docs/templates/mappl-saas-template",
        items: [],
        label: "pro",
      },
    ],
  },
  {
    title: "Components",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    ),
    items: [
      {
        title: "Keyboard",
        href: "/docs/components/animated-keyboard",
        items: [],
        label: "new",
      },
      {
        title: "Animated List",
        href: "/docs/components/animated-list",
        items: [],
        label: "new",
      },
      {
        title: "Particles",
        href: "/docs/components/particles",
        items: [],
        label: "new",
      },
      {
        title: "Marquee",
        href: "/docs/components/marquee",
        label: "new",
        items: [],
      },
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
    title: "3d & Shaders",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    items: [
      {
        title: "Pixel Distorsion",
        href: "/docs/components/shaders/pixel-distorsion-shader",
        items: [],
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
    title: "Animated Cards",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M14 15H9v-5" />
        <path d="M16 3h5v5" />
        <path d="M21 3 9 15" />
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
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
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
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="4 7 4 4 20 4 20 7" />
        <line x1="9" x2="15" y1="20" y2="20" />
        <line x1="12" x2="12" y1="4" y2="20" />
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
      {
        title: "Fade Up Word",
        href: "/docs/components/text-animations/fade-up-word",
        items: [],
      },
      {
        title: "Stagger Blur Effect",
        href: "/docs/components/text-animations/stagger-blur-effect",
        items: [],
      },
    ],
  },
  {
    title: "Buttons",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
        <path d="m12 16 4-4-4-4" />
      </svg>
    ),
    items: [
      {
        title: "Swipe Button",
        href: "/docs/components/buttons/swipe-button",
        items: [],
        label: "new",
      },
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
