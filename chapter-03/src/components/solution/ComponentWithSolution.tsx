import React from "react";
import VerySlowComponent from "../VerySlowComponent.tsx";
import BunchOfStuff from "../BunchOfStuff.tsx";
import OtherStuffAlsoComplicated from "../OtherStuffAlsoComplicated.tsx";
import ScrollableWithMovingBlock from "./ScrollableWithMovingBlock.tsx";

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
