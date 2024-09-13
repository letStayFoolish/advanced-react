import React, { ReactElement, useState } from "react";

/**
 * Instead of "icon" that excepts an Element,
 * we are receiving a function that returns Element.
 *
 * */

type SIZE = "small" | "medium" | "large";
type APPEARANCE =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "secondary";

type ButtonProps = {
  size?: SIZE;
  color?: string;
  appearance?: APPEARANCE;
  renderIcon: (
    props: { size: SIZE; color: string },
    state: { isHovered: boolean },
  ) => ReactElement;
};
//
// const DEFAULT_PROPS: ButtonProps = {
//   size: "medium",
//   color: "black",
//   appearance: "secondary",
// } as const;

const ButtonWithIconProp: React.FC<ButtonProps> = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { renderIcon, size, appearance } = props;

  const defaultProps: { size: SIZE; color: string } = {
    size: size === "large" ? "large" : "medium",
    color: appearance === "primary" ? "white" : "black",
  };

  // and here we have just to call the function where the icon should be rendered.
  return (
    <button {...props}>Click {renderIcon(defaultProps, { isHovered })}</button>
  );
};

export default ButtonWithIconProp;
