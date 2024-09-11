import React, { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  appearance?: "default" | "primary" | "success" | "warning" | "danger";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  icon: JSX.Element & {
    color?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
  };
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
