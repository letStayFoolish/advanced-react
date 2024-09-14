import React from "react";

import HomePageNewFormWay from "./components/solution/HomePageNewFormWay.tsx";

const App: React.FC = () => {
  console.log("App rendered");

  return (
    <div>
      {/*<HomePageOldForm />*/}
      <HomePageNewFormWay />
    </div>
  );
};

export default App;
