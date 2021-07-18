import React from "react";
import { useState } from "react";
import { createContext } from "react";

export type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: "Woong",
  age: 31,
};

export const TextContext: any = createContext<Person>(person);

interface Props {
  children: React.ReactNode;
}

const PersonSettings: React.FC<Props> = ({ children }) => {
  //
  const [name, setName] = useState<string>(person.name);
  const [age, setAge] = useState<number>(person.age);

  const personValue: any = {
    state: { name, age },
    actions: { setName, setAge },
  };

  return (
    <TextContext.Provider value={personValue}>{children}</TextContext.Provider>
  );
};

export default PersonSettings;
