import React from "react";

type LoadingProps = {
  color?: string;
};

const Loading: React.FC<LoadingProps> = (props) => {
  return <div {...props}>Loading...</div>;
};

export default Loading;
