import React from "react";
import { wait } from "../../utils/wait.ts";

const VerySlowComponent: React.FC = () => {
  console.log("VerySlowComponent render!");

  wait(400);
  return null;
};

export default VerySlowComponent;
