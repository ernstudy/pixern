import React from "react";

// css
import "./App.css";

// components
import Cover from "./components/Cover";
import ImageDisplay from "./components/ImageDisplay";
import CopyRigthComponent from "./components/CopyRigthComponent";

export default function App() {
  return (
    <>
      <Cover />
      <ImageDisplay />

      <CopyRigthComponent />
    </>
  );
}
