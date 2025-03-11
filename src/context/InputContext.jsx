import { createContext, useMemo, useState } from "react";

export const InputContext = createContext();

export const InputProvider = ({ children }) => {
  // use state
  const [inputValue, setInputValue] = useState("");
  const [numOfpages, setNumOfPages] = useState(1);
  const [buttonPages, setButtonPages] = useState(5);
  // use memo
  // const value = useMemo(() => ({ inputValue, setInputValue }), [inputValue]);

  return (
    <InputContext.Provider
      value={{
        inputValue,
        setInputValue,
        numOfpages,
        setNumOfPages,
        buttonPages,
        setButtonPages,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};
