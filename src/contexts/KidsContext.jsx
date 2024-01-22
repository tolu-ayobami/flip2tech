// import axios from "axios";
import { createContext, useContext } from "react";
import { useLocation } from "react-router-dom";
// import { sendWelcomeEmail } from "../utils/SendWelcomeEmail";
// import nodemailer from "nodemailer";

export const KidsContext = createContext();

// eslint-disable-next-line react/prop-types
const KidsContextProvider = ({ children }) => {
  const location = useLocation();
  let currentPage = location.pathname;

  return (
    <KidsContext.Provider
      value={{
        currentPage,
      }}
    >
      {children}
    </KidsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useKidsContext = () => {
  return useContext(KidsContext);
};

export default KidsContextProvider;
