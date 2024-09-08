import React from "react";
import MovingStateDown from "./components/solution/moving-state-down.tsx";

/**
 * Key takeaways
 * Re-rendering is how React updates components with new data. Without re-renders, there will be no interactivity in our apps.
 * State update is the initial source of all re-renders.
 * If a component's re-render is triggered, all nested components inside that component will be re-rendered.
 * During the normal React re-renders cycle (without the use of memoization), props change doesen't matter: components will re-render even if they do not have any props.
 * We can use the pattern known as "moving state down" to prevent unnecessary re-renders in big apps.
 * State update inside a hook will trigger the re-render of component that uses this hook, even if the state itself is not used.
 * In the case of hooks using other hooks, any state update within that chain of hooks will trigger the re-render of a component that uses that very first hook.
 * */

const App: React.FC = () => {
  console.log("App rendered");

  return (
    <div>
      {/*<ComponentWithProblem />*/}
      <MovingStateDown />
    </div>
  );
};

export default App;
