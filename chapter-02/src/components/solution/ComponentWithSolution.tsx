import React from "react";

import ScrollableWithMovingBlock from "./ScrollableWithMovingBlock.tsx";
import VerySlowComponent from "../mocks/VerySlowComponent.tsx";
import BunchOfStuff from "../mocks/BunchOfStuff.tsx";
import OtherStuffAlsoComplicated from "../mocks/OtherStuffAlsoComplicated.tsx";

const ComponentWithSolution: React.FC = () => {
  console.log("ComponentWithSolution render!");
  const slowComponents = (
    <>
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </>
  );

  return (
    <>
      <ScrollableWithMovingBlock content={slowComponents} />
    </>
  );
};

export default ComponentWithSolution;
