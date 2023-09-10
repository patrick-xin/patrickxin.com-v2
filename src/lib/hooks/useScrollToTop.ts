/* eslint-disable */
// @ts-nocheck

import { useEffect, useState } from "react";

export const useScrollToTop = ({ top = 20 }) => {
  const [visible, setVisible] = useState(false);
  const onScroll = () => {
    setVisible(document.documentElement.scrollTop > top);
  };
  useEffect(() => {
    if (!window || !document) return;
    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, []);
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return { visible, scrollToTop };
};
