import React, { useContext } from "react";
import { TextContext } from "../contexts/Text.context";

const Set = () => {
  const { state, actions } = useContext(TextContext);

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    //
    const valueType = e.currentTarget.name;
    const newValue = e.currentTarget.value;

    if (valueType === "name") {
      actions.setName(newValue);
    }
    //
    else if (valueType === "age") {
      actions.setAge(newValue);
    }
  };

  return (
    <form>
      <input
        autoComplete="off"
        minLength={2}
        name="name"
        onChange={handleOnChange}
        placeholder={state.name}
        type="text"
        required
      />
      <input
        autoComplete="off"
        minLength={1}
        maxLength={2}
        name="age"
        onChange={handleOnChange}
        placeholder={state.age}
        type="text"
        required
      />
      <input type="submit" value="Save Chagned" />
    </form>
  );
};

export default Set;
