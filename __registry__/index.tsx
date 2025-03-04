
// @ts-nocheck
import * as React from "react";

interface RegistryItem {
  name: string;
  type: string;
  registryDependencies?: undefined;
  component: React.LazyExoticComponent<() => JSX.Element>;
  source: string;
  files: string[];
  category: string;
  subcategory: string;
  chunks: never[];
}

export const Index: Record<string, RegistryItem> = {
  "animated-card": {
    name: "animated-card",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () =>
        import(
          "@/__registry__/components/components/animated-cards/animated-card"
        ),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/components/animated-cards/animated-card")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/components/animated-cards/animated-card.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"visual-1": {
    name: "visual-1",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () =>
        import("@/__registry__/components/components/animated-cards/visual-1"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/components/animated-cards/visual-1")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/components/animated-cards/visual-1.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"visual-2": {
    name: "visual-2",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () =>
        import("@/__registry__/components/components/animated-cards/visual-2"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/components/animated-cards/visual-2")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/components/animated-cards/visual-2.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"visual-3": {
    name: "visual-3",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () =>
        import("@/__registry__/components/components/animated-cards/visual-3"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/components/animated-cards/visual-3")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/components/animated-cards/visual-3.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"hyperspace-background": {
    name: "hyperspace-background",
    type: "components:ui",
    registryDependencies: undefined,
    component: React.lazy(() => import("@/__registry__/components/components/backgrounds/hyperspace-background")),
    source: "",
    files: [
  "__registry__/components/components/backgrounds/hyperspace-background.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"stripe-animated-gradient": {
    name: "stripe-animated-gradient",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () =>
        import(
          "@/__registry__/components/components/backgrounds/stripe-animated-gradient"
        ),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/components/backgrounds/stripe-animated-gradient")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/components/backgrounds/stripe-animated-gradient.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"border-beam": {
    name: "border-beam",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/components/border-beam"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/components/border-beam")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/components/border-beam.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"confetti-button": {
    name: "confetti-button",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () =>
        import("@/__registry__/components/components/buttons/confetti-button"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/components/buttons/confetti-button")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/components/buttons/confetti-button.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"gradient-slide-button": {
    name: "gradient-slide-button",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () =>
        import(
          "@/__registry__/components/components/buttons/gradient-slide-button"
        ),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/components/buttons/gradient-slide-button")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/components/buttons/gradient-slide-button.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"like-button": {
    name: "like-button",
    type: "components:ui",
    registryDependencies: undefined,
    component: React.lazy(() => import("@/__registry__/components/components/buttons/like-button")),
    source: "",
    files: [
  "__registry__/components/components/buttons/like-button.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"shuffle-button": {
    name: "shuffle-button",
    type: "components:ui",
    registryDependencies: undefined,
    component: React.lazy(() => import("@/__registry__/components/components/buttons/shuffle-button")),
    source: "",
    files: [
  "__registry__/components/components/buttons/shuffle-button.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"stagger-button": {
    name: "stagger-button",
    type: "components:ui",
    registryDependencies: undefined,
    component: React.lazy(() => import("@/__registry__/components/components/buttons/stagger-button")),
    source: "",
    files: [
  "__registry__/components/components/buttons/stagger-button.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"star-button": {
    name: "star-button",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/components/buttons/star-button"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/components/buttons/star-button")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/components/buttons/star-button.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"cloud-orbit": {
    name: "cloud-orbit",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/components/cloud-orbit"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/components/cloud-orbit")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/components/cloud-orbit.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"dock": {
    name: "dock",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/components/dock"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/components/dock")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/components/dock.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"expandable-card": {
    name: "expandable-card",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/components/expandable-card"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/components/expandable-card")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/components/expandable-card.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"image-split": {
    name: "image-split",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/components/image-split"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/components/image-split")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/components/image-split.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"image-trail": {
    name: "image-trail",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/components/image-trail"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/components/image-trail")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/components/image-trail.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"infinite-ribbon": {
    name: "infinite-ribbon",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/components/infinite-ribbon"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/components/infinite-ribbon")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/components/infinite-ribbon.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"layer1": {
    name: "layer1",
    type: "components:ui",
    registryDependencies: undefined,
    component: React.lazy(() => import("@/__registry__/components/components/layer1")),
    source: "",
    files: [
  "__registry__/components/components/layer1.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"layer2": {
    name: "layer2",
    type: "components:ui",
    registryDependencies: undefined,
    component: React.lazy(() => import("@/__registry__/components/components/layer2")),
    source: "",
    files: [
  "__registry__/components/components/layer2.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"mouse-wave-scene": {
    name: "mouse-wave-scene",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () =>
        import("@/__registry__/components/components/shaders/mouse-wave-scene"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/components/shaders/mouse-wave-scene")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/components/shaders/mouse-wave-scene.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"mouse-wave-shader": {
    name: "mouse-wave-shader",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () =>
        import(
          "@/__registry__/components/components/shaders/mouse-wave-shader"
        ),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/components/ui/mouse-wave-shader")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/components/ui/mouse-wave-shader.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"mouse-wave": {
    name: "mouse-wave",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/components/shaders/mouse-wave"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/components/ui/mouse-wave")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/components/ui/mouse-wave.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"pixel-distorsion-scene": {
    name: "pixel-distorsion-scene",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () =>
        import(
          "@/__registry__/components/components/shaders/pixel-distorsion-scene"
        ),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/components/shaders/pixel-distorsion-scene")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/components/shaders/pixel-distorsion-scene.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"pixel-distorsion-shader": {
    name: "pixel-distorsion-shader",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () =>
        import(
          "@/__registry__/components/components/shaders/pixel-distorsion-shader"
        ),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/components/shaders/pixel-distorsion-shader")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/components/shaders/pixel-distorsion-shader.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"pixel-distorsion": {
    name: "pixel-distorsion",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () =>
        import("@/__registry__/components/components/shaders/pixel-distorsion"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/components/shaders/pixel-distorsion")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/components/shaders/pixel-distorsion.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"pulse-shader-scene": {
    name: "pulse-shader-scene",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () =>
        import(
          "@/__registry__/components/components/shaders/pulse-shader-scene"
        ),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/components/shaders/pulse-shader-scene")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/components/shaders/pulse-shader-scene.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"pulse-shader-shader": {
    name: "pulse-shader-shader",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () =>
        import(
          "@/__registry__/components/components/shaders/pulse-shader-shader"
        ),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/components/ui/pulse-shader-shader")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/components/ui/pulse-shader-shader.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"pulse-shader": {
    name: "pulse-shader",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/components/shaders/pulse-shader"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/components/ui/pulse-shader")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/components/ui/pulse-shader.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"social-proof-avatars": {
    name: "social-proof-avatars",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/components/social-proof-avatars"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/components/social-proof-avatars")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/components/social-proof-avatars.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"spaceship-scrollbar": {
    name: "spaceship-scrollbar",
    type: "components:ui",
    registryDependencies: undefined,
    component: React.lazy(() => import("@/__registry__/components/components/spaceship-scrollbar")),
    source: "",
    files: [
  "__registry__/components/components/spaceship-scrollbar.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"blur-reveal": {
    name: "blur-reveal",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () =>
        import(
          "@/__registry__/components/components/text-animations/blur-reveal"
        ),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/components/text-animations/blur-reveal")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/components/text-animations/blur-reveal.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"wrapper-3d": {
    name: "wrapper-3d",
    type: "components:ui",
    registryDependencies: undefined,
    component: React.lazy(() => import("@/__registry__/components/components/wrapper-3d")),
    source: "",
    files: [
  "__registry__/components/components/wrapper-3d.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"animated-card-1-demo": {
    name: "animated-card-1-demo",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/demos/animated-card-1-demo"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/demos/animated-card-1-demo")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/demos/animated-card-1-demo.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"animated-card-2-demo": {
    name: "animated-card-2-demo",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/demos/animated-card-2-demo"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/demos/animated-card-2-demo")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/demos/animated-card-2-demo.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"animated-card-3-demo": {
    name: "animated-card-3-demo",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/demos/animated-card-3-demo"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/demos/animated-card-3-demo")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/demos/animated-card-3-demo.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"blur-reveal-demo": {
    name: "blur-reveal-demo",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/demos/blur-reveal-demo"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/demos/blur-reveal-demo")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/demos/blur-reveal-demo.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"border-beam-demo": {
    name: "border-beam-demo",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/demos/border-beam-demo"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/demos/border-beam-demo")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/demos/border-beam-demo.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"cloud-orbit-demo": {
    name: "cloud-orbit-demo",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/demos/cloud-orbit-demo"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/demos/cloud-orbit-demo")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/demos/cloud-orbit-demo.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"confetti-button-demo": {
    name: "confetti-button-demo",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/demos/confetti-button-demo"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/demos/confetti-button-demo")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/demos/confetti-button-demo.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"dock-demo": {
    name: "dock-demo",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/demos/dock-demo"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/demos/dock-demo")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/demos/dock-demo.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"expandable-card-demo": {
    name: "expandable-card-demo",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/demos/expandable-card-demo"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/demos/expandable-card-demo")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/demos/expandable-card-demo.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"gradient-slide-demo": {
    name: "gradient-slide-demo",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/demos/gradient-slide-demo"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/demos/gradient-slide-demo")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/demos/gradient-slide-demo.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"hyperspace-background-demo": {
    name: "hyperspace-background-demo",
    type: "components:ui",
    registryDependencies: undefined,
    component: React.lazy(() => import("@/__registry__/components/demos/hyperspace-background-demo")),
    source: "",
    files: [
  "__registry__/components/demos/hyperspace-background-demo.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"image-split-demo": {
    name: "image-split-demo",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/demos/image-split-demo"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/demos/image-split-demo")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/demos/image-split-demo.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"image-trail-demo": {
    name: "image-trail-demo",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/demos/image-trail-demo"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/demos/image-trail-demo")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/demos/image-trail-demo.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"infinite-ribbon-demo-bis": {
    name: "infinite-ribbon-demo-bis",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/demos/infinite-ribbon-demo-bis"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/demos/infinite-ribbon-demo-bis")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/demos/infinite-ribbon-demo-bis.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"infinite-ribbon-demo": {
    name: "infinite-ribbon-demo",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/demos/infinite-ribbon-demo"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/demos/infinite-ribbon-demo")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/demos/infinite-ribbon-demo.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"like-button-demo": {
    name: "like-button-demo",
    type: "components:ui",
    registryDependencies: undefined,
    component: React.lazy(() => import("@/__registry__/components/demos/like-button-demo")),
    source: "",
    files: [
  "__registry__/components/demos/like-button-demo.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"mouse-wave-demo": {
    name: "mouse-wave-demo",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/demos/mouse-wave-demo"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/demos/mouse-wave-demo")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/demos/mouse-wave-demo.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"pixel-distorsion-demo": {
    name: "pixel-distorsion-demo",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/demos/pixel-distorsion-demo"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/demos/pixel-distorsion-demo")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/demos/pixel-distorsion-demo.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"pulse-shader-demo": {
    name: "pulse-shader-demo",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/demos/pulse-shader-demo"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/demos/pulse-shader-demo")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/demos/pulse-shader-demo.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"scrollship-scrollbar-demo": {
    name: "scrollship-scrollbar-demo",
    type: "components:ui",
    registryDependencies: undefined,
    component: React.lazy(() => import("@/__registry__/components/demos/scrollship-scrollbar-demo")),
    source: "",
    files: [
  "__registry__/components/demos/scrollship-scrollbar-demo.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"shuffle-button-demo": {
    name: "shuffle-button-demo",
    type: "components:ui",
    registryDependencies: undefined,
    component: React.lazy(() => import("@/__registry__/components/demos/shuffle-button-demo")),
    source: "",
    files: [
  "__registry__/components/demos/shuffle-button-demo.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"social-proof-avatars-demo": {
    name: "social-proof-avatars-demo",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/demos/social-proof-avatars-demo"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/demos/social-proof-avatars-demo")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/demos/social-proof-avatars-demo.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"spaceship-scrollbar-demo": {
    name: "spaceship-scrollbar-demo",
    type: "components:ui",
    registryDependencies: undefined,
    component: React.lazy(() => import("@/__registry__/components/demos/spaceship-scrollbar-demo")),
    source: "",
    files: [
  "__registry__/components/demos/spaceship-scrollbar-demo.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"stagger-button-demo": {
    name: "stagger-button-demo",
    type: "components:ui",
    registryDependencies: undefined,
    component: React.lazy(() => import("@/__registry__/components/demos/stagger-button-demo")),
    source: "",
    files: [
  "__registry__/components/demos/stagger-button-demo.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"star-button-demo": {
    name: "star-button-demo",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () => import("@/__registry__/components/demos/star-button-demo"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/demos/star-button-demo")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/demos/star-button-demo.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"stripe-animated-gradient-demo": {
    name: "stripe-animated-gradient-demo",
    type: "components:ui",
    registryDependencies: undefined,
<<<<<<< HEAD
    component: React.lazy(
      () =>
        import("@/__registry__/components/demos/stripe-animated-gradient-demo"),
    ),
=======
    component: React.lazy(() => import("@/__registry__/components/demos/stripe-animated-gradient-demo")),
>>>>>>> 3af7515bb3439f82b51ddc50aa84412b86b849df
    source: "",
    files: [
  "__registry__/components/demos/stripe-animated-gradient-demo.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  },"wrapper-3d-demo": {
    name: "wrapper-3d-demo",
    type: "components:ui",
    registryDependencies: undefined,
    component: React.lazy(() => import("@/__registry__/components/demos/wrapper-3d-demo")),
    source: "",
    files: [
  "__registry__/components/demos/wrapper-3d-demo.js"
],
    category: "undefined",
    subcategory: "undefined",
    chunks: []
  }
};
  