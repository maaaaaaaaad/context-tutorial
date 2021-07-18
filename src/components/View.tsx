import React from "react";
import { useContext } from "react";
import { TextContext } from "../contexts/Text.context";

const View = () => {
  //
  const { state } = useContext(TextContext);

  return (
    <section>
      <h2>Name: {state.name}</h2>
      <h2>Age: {state.age}</h2>
    </section>
  );
};

export default View;
