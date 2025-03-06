import React from "react";

// css
import "./App.css";

// components
import Cover from "./components/Cover";
import ImageDisplay from "./components/ImageDisplay";
import CopyRigthComponent from "./components/CopyRigthComponent";
import { InputProvider } from "./context/InputContext";

export default function App() {
  return (
    <InputProvider>
      <Cover />
      <ImageDisplay />

      <CopyRigthComponent />
    </InputProvider>
  );
}
