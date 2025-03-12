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
    // reset button pages to 5 and number of pages to 1
    setButtonPages(5);
    setNumOfPages(1);
  }, [inputValue]);

  useEffect(() => {
    // When the page refresh, change the value of the text to 'random'
    searchImage("random");

    sessionStorage.setItem("item", inputValue);
  }, []);

  // get input value from session storage
  const getInputValue = () => {
    const item = sessionStorage.getItem("item");
    if (!item) return;
    console.log("new value from session storage", item);
    searchImage(item);
    if (inputValue == "") {
      setInputValue(item);
    }
  };

  // handle image search
  const searchImage = async (inputText) => {
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
