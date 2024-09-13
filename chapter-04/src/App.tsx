import React from "react";
import ButtonWithIconProp from "./components/solution/ButtonWithIconProp.tsx";
import HomeIcon from "./components/mocks/HomeIcon.tsx";

/**
 * Render props for rendering Elements
 *
 * A render prop is nothing more than a function that returns an Element.
 *
 * Instead of cloning elements, we can just pass the object to the function.
 * */

const App: React.FC = () => {
  console.log("App rendered");

  const homeIcon = (props: any, state: { isHovered: boolean }) => (
    <HomeIcon {...props} className={state.isHovered ? "hovered" : ""} />
  );

  return (
    <>
      {/*  Just pass the icon to the renderIcon function with default props:  */}
      <ButtonWithIconProp renderIcon={homeIcon} />
      {/*  Or we can override some of the default props:  */}
      <ButtonWithIconProp
        renderIcon={(props) => <HomeIcon {...props} size="large" color="red" />}
      />
    </>
  );
};

export default App;
