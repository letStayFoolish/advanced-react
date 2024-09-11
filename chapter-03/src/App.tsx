import React from "react";
import ButtonWithManyProps from "./components/problem";
import ButtonWithIconProp from "./components/solution/ButtonWithIconProp.tsx";
import ButtonIcon from "./components/mocks/ButtonIcon.tsx";
import ButtonWithCloneElement from "./components/solution/ButtonWithCloneElement.tsx";
import Loading from "./components/mocks/Loading.tsx";

/**
 * We have to be very careful with this pattern (cloning Elements), and make sure that always override default props with actual props.
 *
 * Keynotes:
 *
 * When components render another component, the configuration of which is controlled by props, we can pass an entire component element as prop instead, leaving configuration concern to the consumer.
 *
 * If a component that has elements as props is rendered conditionally, then even if those elements are created outside of the condition, they will only be rendered when the conditional component is rendered.
 *
 * If we need to provide default props to the element from props, we can use the cloneElement function for that.
 * */

const App: React.FC = () => {
  console.log("App rendered");

  return (
    <>
      <ButtonWithIconProp icon={<ButtonIcon />} />
      <ButtonWithManyProps
        isLoading={false}
        iconLeftName={"Chili"}
        iconLeftColor={"green"}
        iconLeftSize={"20"}
        isIconLeftAvatar={true}
      />

      {/* Now we can use multiple times Button with Icon inside */}
      <ButtonWithCloneElement appearance="primary" icon={<Loading />} />
      <ButtonWithCloneElement appearance="success" icon={<Loading />} />
      <ButtonWithCloneElement size="lg" icon={<Loading />} />

      {/* override the default black color with red icons */}
      <ButtonWithCloneElement icon={<Loading color="red" />} />
    </>
  );
};

export default App;
