import { Button } from "./button";

type BasicModalDialogProps = {
  onClose: () => void;
};

export const ModalDialog = ({ onClose }: BasicModalDialogProps) => {
  console.log("ModalDialog render!");

  return (
    <div className="modal-dialog">
      <div className="content">modal content</div>
      <div className="footer">
        <Button onClick={onClose}>close dialog</Button>
      </div>
    </div>
  );
};
