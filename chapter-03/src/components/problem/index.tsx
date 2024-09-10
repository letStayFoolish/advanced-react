import React, { useState } from "react";
import VerySlowComponent from "../VerySlowComponent.tsx";
import BunchOfStuff from "../BunchOfStuff.tsx";
import OtherStuffAlsoComplicated from "../OtherStuffAlsoComplicated.tsx";
import { getPosition } from "../../utils/getPosition.ts";
import MovingBlock from "../MovingBlock.tsx";

/**
 * Keynotes:
 *
 * A Component is just a function that accepts an argument (props) and returns Elements that should be rendered when this Component renders on the screen.
 *
 * An Element is an object that describes what needs to be rendered on the screen, with type either a string for DOM elements or a reference to a Component for components.
 *
 * Re-render is just React calling the Component's function.
 *
 * A component re-renders when its element object changes, as determined by Object.is comparison of it before and after re-render.
 *
 * When elements are passed as props to a component, and this component triggers a re-render through a state update, elements that are passed as props won't re-render.
 *
 * "children" are just props and behave like any other prop when they are passed via JSX nesting syntax.
 * */

const ComponentWithProblem: React.FC = () => {
  const [position, setPosition] = useState(150);

  const onScroll = (e: any) => {
    // calculate position based on the scrolled value
    const calculated = getPosition(e.target.scrollTop);
    // save it to state
    setPosition(calculated);
  };

  return (
    <div className="scrollable-block" onScroll={onScroll}>
      {/* pass position value to the new movable component */}
      <MovingBlock position={position} />
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </div>
  );
};

export default ComponentWithProblem;
