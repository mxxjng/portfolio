import { useEffect, useState } from "react";

export const useStickyNavigation = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    stickyNav();
    window.addEventListener("scroll", stickyNav);

    return function cleanup() {
      window.removeEventListener("scroll", stickyNav);
    };
  }, []);

  const stickyNav = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 0) {
      setIsSticky(true);
    } else if (scrollTop <= 0) {
      setIsSticky(false);
    }
  };

  return { isSticky };
};
