import React from "react";
import { BunchOfStuff, OtherStuffAlsoComplicated } from "../mocks.tsx";
import { VerySlowComponent } from "../very-slow-component.tsx";
import { Button } from "../button.tsx";
import { ModalDialog } from "../Modal.tsx";
import { useModalDialog } from "../../hooks/useModalDialog.ts";

const SimpleComponentWithoutMemoization: React.FC = () => {
  console.log("MovingStateDown component rendered!");

  const { isOpen, open, close } = useModalDialog(); // The same effect is with putting all the logic inside custom hook. That is why custom hooks could be "danger"

  return (
    <div className="layout">
      {/* here it goes, component with the state inside */}
      <Button onClick={open}>Open dialog</Button>

      {isOpen ? <ModalDialog onClose={close} /> : null}

      <VerySlowComponent />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </div>
  );
};

export default React.memo(SimpleComponentWithoutMemoization);
