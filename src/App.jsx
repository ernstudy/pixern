// css
import "./App.css";

// components
import Cover from "./components/Cover";
import ImageDisplay from "./components/ImageDisplay";
import CopyRigthComponent from "./components/CopyRigthComponent";

export default function App() {
  return (
    <>
      <Cover onSearch={searchImage} />
      <ImageDisplay imageData={imageData} />

      <CopyRigthComponent />
    </>
  );
}
