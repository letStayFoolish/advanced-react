import React from "react";

const wait = (ms: number) => {
  const start = Date.now();
  let now = start;

  while (now - start < ms) now = Date.now();
};

export const VerySlowComponent = () => {
  wait(500);

  console.log("VerySlowComponent render!");
  return null;
};

export const MemoizedSlowComponent = React.memo(VerySlowComponent);

export const AnotherVerySlowComponent = () => {
  console.log("AnotherVerySlowComponent render!");
  wait(500);
  return null;
};
