import { useCallback, useState } from "react";
import { useResizeDetector } from "./useResizeDetector.ts";

export const useModalDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log("useModalDialog re-created!");

  useResizeDetector();

  return {
    isOpen,
    open: useCallback(() => {
      console.log("Open modal function");
      setIsOpen(true);
    }, []),
    close: useCallback(() => {
      console.log("Close modal function");
      setIsOpen(false);
    }, []),
  };
};
