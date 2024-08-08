import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import FolderRoute from "./routes/route.jsx";
import { BrowserRouter } from "react-router-dom";
import ScrollToTopButton from "./components/ScrolltoTop/ScrollToTop.jsx";
import ModalPopup from "./components/PopUp/PopUp.jsx";
import { ModalProvider } from "./context/useModal.jsx";
import App from "./App.jsx";
import "./index.css";
import "./App.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <ChakraProvider>
    <ModalProvider>
      <BrowserRouter>
        <FolderRoute />
        <ScrollToTopButton />
        <ModalPopup />
      </BrowserRouter>
    </ModalProvider>
  </ChakraProvider>
</React.StrictMode>
);
