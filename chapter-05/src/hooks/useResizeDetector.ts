import { useEffect, useState } from "react";

export const useResizeDetector = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const listener = () => setWidth(window.innerWidth);

    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, []);

  console.log("Current width: ", width);

  return null;
};
