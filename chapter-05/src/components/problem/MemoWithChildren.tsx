import React, { PropsWithChildren, useMemo, useState } from "react";

const Child: React.FC<PropsWithChildren> = ({ children }) => {
  console.log("Child render");

  return <div>{children}</div>;
};

const ChildMemoized = React.memo(Child);

const MemoWithChildren: React.FC = () => {
  console.log("MemoWithChildren render");

  const [count, setCount] = useState(1);

  /**
   * So what we have here from a memoization and props perspective is a component that is wrapped in React.memo and has a prop with a non-memoized object in it!
   *
   * In order to fix it, we need to memoize the div as well:
   * */

  const content = useMemo(() => {
    console.log("Content render");

    return <div>Some text here</div>;
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <h2>{count}</h2>
      <ChildMemoized>
        {/*Without memoization of children (props)*/}
        {/*<div>Some text here</div>*/}
        {/* *** */}
        {/*With memoized children object:*/}
        {content}
      </ChildMemoized>
    </>
  );
};

export default MemoWithChildren;
