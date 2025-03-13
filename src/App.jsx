import React, { useContext, useEffect, useState } from "react";

// css
import "./App.css";

// components
import Cover from "./components/Cover";
import ImageDisplay from "./components/ImageDisplay";
import CopyRigthComponent from "./components/CopyRigthComponent";
import { InputContext } from "./context/InputContext";

export default function App() {
  const per_page = 10;
  const [imageData, setImageData] = useState(null);
  const {
    numOfpages,
    setNumOfPages,
    inputValue,
    setInputValue,
    setButtonPages,
  } = useContext(InputContext);

  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    console.log("number of pages changes to:", numOfpages);
    // When the page number changes, Get the value form SessionStorage
    getInputValue();
  }, [numOfpages]);

  useEffect(() => {
    // When the page refreshes, save in session storage the default value '' from input value
    setInputValue("");
    sessionStorage.setItem("item", inputValue);
    // When the page refreshes, change the value of the text to 'random'
    searchImage("random");
  }, []);

  // get input value from session storage
  const getInputValue = () => {
    const item = sessionStorage.getItem("item");
    // if the item form session storage is empty '' return with the preview default value 'random'
    // don't continue, stop the rest of the code from executing
    if (item == "") return searchImage("random");
    //but if the item contains a value, call searchImage with this specific value
    console.log("item value from session storage:", item);
    searchImage(item);
    // and set this value in the inputValue state, to show it in the search bar
    if (inputValue == "") {
      setInputValue(item);
    }
  };

  // handle image search
  const searchImage = async (inputText) => {
    console.log("searching for:", inputText);
    try {
      const data = await fetch(
        `${API_URL}?query=${inputText}&page=${numOfpages}&per_page=${per_page}&client_id=${API_KEY}`
      );
      if (!data.ok)
        throw new Error(`Error: ${data.status} - ${data.statusText}`);

      const response = await data.json();
      setImageData(response.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Cover onSearch={searchImage} />
      <ImageDisplay imageData={imageData} />

      <CopyRigthComponent />
    </>
  );
}
