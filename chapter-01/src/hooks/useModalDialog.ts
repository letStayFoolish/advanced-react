import { useState } from "react";
import { useResizeDetector } from "./useResizeDetector.ts";

export const useModalDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log("useModalDialog re-created!");

  useResizeDetector();

  return { isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) };
};
