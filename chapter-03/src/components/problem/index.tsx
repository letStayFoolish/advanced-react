import React, { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  text?: string;
  isLoading: boolean;
  iconLeftName: string;
  iconLeftColor: string;
  iconLeftSize: string;
  isIconLeftAvatar: boolean;
};

const ButtonWithManyProps: React.FC<ButtonProps> = (props) => {
  console.log("ButtonWithManyProps render!");

  return <button {...props}>{props.text}</button>;
};

export default ButtonWithManyProps;
