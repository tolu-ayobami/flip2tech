import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./contexts/AppContext";
import AdminContextProvider from "./contexts/AdminContext.jsx";
import KidsContextProvider from "./contexts/KidsContext.jsx";
import "./index.css";
import MaketerContextProvider from "./contexts/MaketerContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <AppContextProvider>
        <AdminContextProvider>
          <MaketerContextProvider>
            <KidsContextProvider>
              <App />
            </KidsContextProvider>
          </MaketerContextProvider>
        </AdminContextProvider>
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
