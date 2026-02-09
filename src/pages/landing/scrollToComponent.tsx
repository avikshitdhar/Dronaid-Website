import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useScroll } from "./scrollContext";

const ScrollToComponent = () => {
  const location = useLocation();
  const { scrollTo } = useScroll();

  useEffect(() => {
    const target = (location.state as any)?.scrollTo;
    if (target) {
      scrollTo(target);
    }
  }, [location, scrollTo]);

  return null;
};

export default ScrollToComponent;
