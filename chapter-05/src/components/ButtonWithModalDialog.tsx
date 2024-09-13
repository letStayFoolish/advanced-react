import React from "react";
import { Button } from "./button.tsx";
import { ModalDialog } from "./Modal.tsx";
import { useModalDialog } from "../hooks/useModalDialog.ts";

const ButtonWithModalDialog: React.FC = () => {
  console.log("ButtonWithModalDialog re-rendered!");
  // const [isOpen, setIsOpen] = useState(false);

  // Using custom hook
  const { isOpen, open, close } = useModalDialog();

  // render only Button and ModalDialog here
  return (
    // <>
    //   <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
    //   {isOpen ? <ModalDialog onClose={() => setIsOpen(false)} /> : null}
    // </>

    <>
      <Button onClick={open}>Open dialog</Button>
      {isOpen ? <ModalDialog onClose={close} /> : null}
    </>
  );
};

export default ButtonWithModalDialog;
