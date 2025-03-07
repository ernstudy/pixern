import React from "react";

// css
import "./App.css";

// components
import Cover from "./components/Cover";
import ImageDisplay from "./components/ImageDisplay";
import CopyRigthComponent from "./components/CopyRigthComponent";

export default function App() {
  const searchImage = (inputText) => {
    console.log("loarding...", inputText);
    // console.log("loarding...2", text);
  };

  return (
    <>
      <Cover onSearch={searchImage} />
      <ImageDisplay />

      <CopyRigthComponent />
    </>
  );
}
