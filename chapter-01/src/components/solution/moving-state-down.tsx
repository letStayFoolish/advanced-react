import React from "react";
import { VerySlowComponent } from "../very-slow-component.tsx";
import { BunchOfStuff, OtherStuffAlsoComplicated } from "../mocks.tsx";
import ButtonWithModalDialog from "../ButtonWithModalDialog.tsx";

/**
 * Now, the state update when the Button is clicked is still triggered, and some components re-render because of it. But! It only happens with components inside the ButtonWithModalDialog component.
 * As a result, the modal dialog appears instantly. We just fixed a big performance problem with a simple composition technique!
 * */

const MovingStateDown: React.FC = () => {
  console.log("MovingStateDown component rendered!");

  return (
    <div className="layout">
      {/* here it goes, component with the state inside */}
      <ButtonWithModalDialog />
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </div>
  );
};

export default MovingStateDown;
