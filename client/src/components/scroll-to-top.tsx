// client/src/components/ScrollToTop.tsx

import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Always scroll to the very top on route change
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
