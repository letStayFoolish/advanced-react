import React, { ComponentProps, ReactElement } from "react";

type ButtonProps = ComponentProps<"button"> & {
  appearance?: "default" | "primary" | "success" | "warning" | "danger";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  icon: ReactElement;
};

const ButtonWithCloneElement: React.FC<ButtonProps> = (props) => {
  const { appearance, size, icon } = props;

  const defaultProps = {
    color: appearance === "primary" ? "white" : "black",
    size: size === "sm" ? "sm" : "md",
  };

  const newProps = {
    ...defaultProps,
    ...icon.props,
  };

  const clonedIcon = React.cloneElement(icon, newProps);
  return <button>Submit {clonedIcon}</button>;
};

export default ButtonWithCloneElement;
