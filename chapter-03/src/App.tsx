import React from "react";
// import ComponentWithProblem from "./components/problem";
// import ComponentWithSolution from "./components/solution/ComponentWithSolution.tsx";
import ChildrenAsProps from "./components/solution/ChildrenAsProps.tsx";
import VerySlowComponent from "./components/VerySlowComponent.tsx";
import BunchOfStuff from "./components/BunchOfStuff.tsx";
import OtherStuffAlsoComplicated from "./components/OtherStuffAlsoComplicated.tsx";

const App: React.FC = () => {
  console.log("App rendered");

  return (
    <>
      {/*<ComponentWithProblem />*/}
      {/*<ComponentWithSolution />*/}
      <ChildrenAsProps>
        <VerySlowComponent />
        <BunchOfStuff />
        <OtherStuffAlsoComplicated />
      </ChildrenAsProps>
    </>
  );
};

export default App;
