import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// box icon
import "boxicons";

// fontFamily
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// component
import App from "./App.jsx";
import { ImagesProvider } from "./context/ImagesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ImagesProvider>
      <App />
    </ImagesProvider>
  </StrictMode>,
);
