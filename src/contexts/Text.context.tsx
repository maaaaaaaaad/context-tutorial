import React from "react";
import { useState } from "react";
import { createContext } from "react";

type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: "Woong",
  age: 31,
};

const TextContext = createContext<Person>(person);

const Text = () => {
  //
  const [name, setName] = useState<string>(person.name);
  const [age, setAge] = useState<number>(person.age);

  const personValue: any = {
    state: { name, age },
    actions: { setName, setAge },
  };

  return <TextContext.Provider value={personValue}></TextContext.Provider>;
};

export default Text;
