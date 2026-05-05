"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8 rounded-full border border-hairline/30"></div>;
  }

  const isDark = theme === "dark";

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";

    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    const transition = document.startViewTransition(() => {
      setTheme(newTheme);
    });

    transition.ready.then(() => {
      const radius = Math.hypot(window.innerWidth, window.innerHeight);

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at 0px 0px)`,
            `circle(${radius}px at 0px 0px)`,
          ],
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-9 h-9 rounded-full bg-primaryInk text-canvas flex items-center justify-center hover:bg-accent transition-colors duration-300 overflow-hidden shadow-sm"
      aria-label="Toggle theme"
    >
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${isDark ? "translate-y-full rotate-90 opacity-0" : "translate-y-0 rotate-0 opacity-100"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </svg>
      </div>
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${isDark ? "translate-y-0 rotate-0 opacity-100" : "-translate-y-full -rotate-90 opacity-0"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
      </div>
    </button>
  );
}
