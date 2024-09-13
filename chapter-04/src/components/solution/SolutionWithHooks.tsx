import React from "react";
import { useResizeDetector } from "../../hooks/useResizeDetector.ts";

// Hooks replaced render props

const SolutionWithHooks: React.FC = () => {
  const windowWidth = useResizeDetector();

  return windowWidth > 600 ? <WideLayout /> : <NarrowLayout />;
};

export default SolutionWithHooks;

const WideLayout = () => <div>WideLayout</div>;
const NarrowLayout = () => <div>NarrowLayout</div>;
