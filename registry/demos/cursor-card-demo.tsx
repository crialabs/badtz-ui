"use client";

import {
  CursorCard,
  CursorCardsContainer,
} from "@/registry/components/cursor-cards";
import { useTheme } from "next-themes";
import { BellRing } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { useEffect } from "react";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

export default function CursorCardDemo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <CursorCardsContainer className="gap-6 flex">
        <CursorCard
          borderColor={theme === "dark" ? "#262626" : "#e5e5e5"}
          className="rounded-xl h-auto w-[300px] shadow-md p-6"
        >
          <div className="flex flex-col">
            <h3 className="text-foreground">Notifications</h3>
            <p className="text-muted-foreground text-sm mt-0.5">
              You have 3 unread messages.
            </p>
            <div className="flex items-center space-x-4 rounded-md border p-4 mt-10 bg-neutral-50 dark:bg-neutral-950">
              <BellRing />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Push Notifications
                </p>
                <p className="text-sm text-muted-foreground">
                  Send notifications to device.
                </p>
              </div>
              <Switch />
            </div>
          </div>
        </CursorCard>
        <CursorCard
          borderColor={theme === "dark" ? "#262626" : "#e5e5e5"}
          className="rounded-xl h-auto w-[300px] shadow-md p-6 md:block hidden"
        >
          <div className="h-full flex justify-between flex-col">
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-emerald-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CursorCard>
      </CursorCardsContainer>
    </div>
  );
}
