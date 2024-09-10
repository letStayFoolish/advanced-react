import React, { PropsWithChildren, useState } from "react";
import { getPosition } from "../../utils/getPosition.ts";
import MovingBlock from "../mocks/MovingBlock.tsx";

/**
 * Props are just an object that we pass as the first argument to our component function.
 * Whatever is passed through props won't be affected by the state change of the component that receives those props.
 *  */

const ChildrenAsProps: React.FC<PropsWithChildren> = ({ children }) => {
  console.log("ChildrenAsProps render");

  const [position, setPosition] = useState(300);

  const onScroll = (e: any) => {
    // calculate position based on the scrolled value
    const calculated = getPosition(e.target.scrollTop);
    // save it to state
    setPosition(calculated);
  };

  return (
    <div className="scrollable-block" onScroll={onScroll}>
      <MovingBlock position={position} />
      {children}
    </div>
  );
};

export default ChildrenAsProps;
