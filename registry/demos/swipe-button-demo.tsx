"use client";

import { SwipeButton } from "@/registry/components/buttons/swipe-button";
import confetti from "canvas-confetti";

export default function SwipeButtonDemo() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div>
      <SwipeButton onSwipeComplete={triggerConfetti} />
    </div>
  );
}
