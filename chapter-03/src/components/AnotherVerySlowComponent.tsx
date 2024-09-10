import React from "react";
import { wait } from "../utils/wait.ts";

const AnotherVerySlowComponent: React.FC = () => {
  console.log("AnotherVerySlowComponent render");

  wait(400);
  return null;
};

export default AnotherVerySlowComponent;
