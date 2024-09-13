import React from "react";

export const BunchOfStuff = () => {
  console.log("BunchOfStuff render!");

  return <div className="bunch-of-stuff">Bunch of stuff</div>;
};

export const MemoizedBunchOfStuff = React.memo(BunchOfStuff);

export const OtherStuffAlsoComplicated = () => {
  console.log("OtherStuffAlsoComplicated render!");

  return <div>Other stuff</div>;
};

export const MemoizedOtherStuffAlsoComplicated = React.memo(
  OtherStuffAlsoComplicated,
);
