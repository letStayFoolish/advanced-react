import React, { useState } from "react";
import { getPosition } from "../../utils/getPosition.ts";
import MovingBlock from "../mocks/MovingBlock.tsx";

/**
 * In this case (solution) state and its update is passed down to the component only needing it.
 * The rest of the slow components are passed through props, tgey are outside of this component. In the "hierarchical" components tree, they belong to the parent.
 * So our slow components won't re-render when the state is updated, and the scrolling experience will be smooth and lag-free.
 * */

const ScrollableWithMovingBlock: React.FC<{ content: React.ReactElement }> = ({
  content,
}) => {
  console.log("ScrollableWithMovingBlock render!");
  const [position, setPosition] = useState(300);

  /**
   * When setPosition is triggered, and re-render happens, React will compare all those object definitions that the function returns, will see that the content object is exactly the same before and after.
   * And will skip the re-render of whatever is there.
   * */

  const onScroll = (e: any) => {
    // calculate position based on the scrolled value
    const calculated = getPosition(e.target.scrollTop);
    // save it to state
    setPosition(calculated);
  };

  return (
    <div className="scrollable-block" onScroll={onScroll}>
      <MovingBlock position={position} />
      {content && content}
    </div>
  );
};

export default ScrollableWithMovingBlock;
