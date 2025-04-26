"use client";

import * as React from "react";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface Bookmark {
  title: string;
  href: string;
}

interface BookmarksContextType {
  bookmarks: Bookmark[];
  addBookmark: (bookmark: Bookmark) => void;
  removeBookmark: (href: string) => void;
  isBookmarked: (href: string) => boolean;
}

const BookmarksContext = createContext<BookmarksContextType | undefined>(
  undefined
);

export function BookmarksProvider({ children }: { children: ReactNode }) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  useEffect(() => {
    const storedBookmarks = localStorage.getItem("badtz-ui-bookmarks");
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
  }, []);

  const addBookmark = (bookmark: Bookmark) => {
    const newBookmarks = [...bookmarks, bookmark];
    setBookmarks(newBookmarks);
    localStorage.setItem("badtz-ui-bookmarks", JSON.stringify(newBookmarks));
  };

  const removeBookmark = (href: string) => {
    const newBookmarks = bookmarks.filter((b) => b.href !== href);
    setBookmarks(newBookmarks);
    localStorage.setItem("badtz-ui-bookmarks", JSON.stringify(newBookmarks));
  };

  const isBookmarked = (href: string) => {
    return bookmarks.some((b) => b.href === href);
  };

  return (
    <BookmarksContext.Provider
      value={{ bookmarks, addBookmark, removeBookmark, isBookmarked }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}

export function useBookmarks() {
  const context = useContext(BookmarksContext);
  if (context === undefined) {
    throw new Error("useBookmarks must be used within a BookmarksProvider");
  }
  return context;
}
