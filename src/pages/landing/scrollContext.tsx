import { createContext, useContext, useRef } from "react";

type ScrollMap = {
  [key: string]: HTMLElement | null;
};

const ScrollContext = createContext<{
  register: (name: string, el: HTMLElement | null) => void;
  scrollTo: (name: string) => void;
} | null>(null);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const elements = useRef<ScrollMap>({});

  const register = (name: string, el: HTMLElement | null) => {
    elements.current[name] = el;
  };

  const scrollTo = (name: string) => {
    const el = elements.current[name];
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollContext.Provider value={{ register, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const ctx = useContext(ScrollContext);
  if (!ctx) throw new Error("useScroll must be used inside ScrollProvider");
  return ctx;
};
