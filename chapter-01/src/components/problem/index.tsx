import { ModalDialog } from "../Modal.tsx";
import { Button } from "../button.tsx";
import { VerySlowComponent } from "../very-slow-component.tsx";
import { BunchOfStuff, OtherStuffAlsoComplicated } from "../mocks.tsx";
import { useModalDialog } from "../../hooks/useModalDialog.ts";

const ComponentWithProblem = () => {
  console.log("ComponentWithProblem render!");

  // const [isOpen, setIsOpen] = useState(false);

  const { isOpen, open, close } = useModalDialog(); // The same effect is with putting all the logic inside custom hook. That is why custom hooks could be "danger"

  /**
   * local state isOpen causing re-rendering of all children components when it got changed
   * Affected components: Button, VerySlowComponent, BunchOfStuff, OtherStuffAlsoComplicated
   *
   * Some of the basics:
   * Mounting: When a component first appears on the screen, we call it mounting.
   * This is when React creates this component's instance for the first time, initializes its state, runs its hooks, and appends elements to the DOM.
   *
   * Unmounting: this is when React detects that a component is not needed anymore. So it does the final clean-up, destroys this component's instance and everything associated with it, like the component's state, and finally removes the DOM element associated with it.
   *
   * Rre-rendering: This is when React updates an already existing component with some new information. Compared to mounting, re-rendering is lightweight: React just re-uses the already existing instance, runs the hooks, does all the necessary calculations, and updates the existing DOM element with the new attributes.
   *
   * Re-rendering is when React updates the component with the new data and triggers all the hooks that depend on that data. Without these, there will be no data updates in React and, as a result, no interactivity.¢
   * */

  return (
    <>
      {/* add the button */}
      <Button onClick={open}>Open dialog</Button>
      {/* add the dialog itself */}
      {/*{isOpen ? <ModalDialog onClose={() => setIsOpen(false)} /> : null}*/}

      {/* With custom hook useModalDialog */}
      {isOpen ? <ModalDialog onClose={close} /> : null}
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </>
  );
};

export default ComponentWithProblem;
