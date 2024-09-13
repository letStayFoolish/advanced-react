import { ModalDialog } from "../Modal.tsx";
import { Button } from "../button.tsx";
import { MemoizedSlowComponent } from "../very-slow-component.tsx";
import {
  MemoizedBunchOfStuff,
  MemoizedOtherStuffAlsoComplicated,
} from "../mocks.tsx";
import { useModalDialog } from "../../hooks/useModalDialog.ts";

const MemoizedComponents = () => {
  console.log("ComponentWithProblem render!");

  const { isOpen, open, close } = useModalDialog(); // The same effect is with putting all the logic inside custom hook. That is why custom hooks could be "danger"

  return (
    <>
      {/* add the button */}
      <Button onClick={open}>Open dialog</Button>
      {/* add the dialog itself */}
      {/* With custom hook useModalDialog */}
      {isOpen ? <ModalDialog onClose={close} /> : null}
      <MemoizedSlowComponent />
      <MemoizedBunchOfStuff />
      <MemoizedOtherStuffAlsoComplicated />
    </>
  );
};

export default MemoizedComponents;
