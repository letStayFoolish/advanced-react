import React from "react";

import MemoWithChildren from "./components/problem/MemoWithChildren.tsx";

const App: React.FC = () => {
  console.log("App rendered");

  return (
    <div>
      {/*<MemoizedComponents />*/}
      <MemoWithChildren />
      {/*<SimpleComponentWithoutMemoization />*/}
    </div>
  );
};

export default App;
