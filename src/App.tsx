import React from "react";
import Set from "./components/Set";
import View from "./components/View";
import PersonSettings from "./contexts/Text.context";

const App = () => {
  return (
    <PersonSettings>
      <View />
      <Set />
    </PersonSettings>
  );
};

export default App;
