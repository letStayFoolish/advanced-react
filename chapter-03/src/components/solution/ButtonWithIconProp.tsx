import React, { ComponentProps, ReactNode } from "react";

/**
 * As a first solution, we have to get rid of so many props in the Button component to define icon within
 *
 * All we need is to get rid of those configuration props and pass the icon as an Element instead.
 * */

type ButtonProps = ComponentProps<"button"> & {
  icon?: ReactNode;
};

const ButtonWithIconProp: React.FC<ButtonProps> = (props) => {
  return <button {...props}>Click {props.icon}</button>;
};

export default ButtonWithIconProp;
