import { createContext, useMemo, useState } from "react";

export const InputContext = createContext();

export const InputProvider = ({ children }) => {
  // use state
  const [inputValue, setInputValue] = useState("");
  // use memo
  const value = useMemo(() => ({ inputValue, setInputValue }), [inputValue]);

  return (
    <InputContext.Provider value={value}>{children}</InputContext.Provider>
  );
};
