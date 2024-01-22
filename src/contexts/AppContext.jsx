import axios from "axios";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { sendEmail } from "../../services/sendEmail";
// import { sendWelcomeEmail } from "../utils/SendWelcomeEmail";
// import nodemailer from "nodemailer";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
  const location = useLocation();
  let currentPage = location.pathname;

  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [loader, setLoader] = useState(false);
  const [currentCourse, setCurrentCourse] = useState({});

  //================================================================================to handle user reg form and submission
  const [regFormData, setregFormData] = useState({});
  const [validationErr, setValidationErr] = useState("");

  // console.log("regFormData", regFormData);

  const handleInputChange = (e) => {
    setValidationErr("");
    const { name, value } = e.target;
    setregFormData({ ...regFormData, [name]: value });
    setUserExists("");
  };

  const [regSuccess, setRegSuccess] = useState(false);
  const [userExists, setUserExists] = useState(false);

  const register = async (regFormData) => {
    try {
      setLoader(true);
      const response = await axios.post(
        "https://web-production-6c20.up.railway.app/flip/student/signup/",
        regFormData
      );
      console.log("API response:", response.data);

      if (response.data.uid) {
        navigate("/login");
        setRegSuccess(true);
        setTimeout(() => {
          setRegSuccess(false);
          setregFormData({});
        }, 3000);

        // Call the function to send the welcome email
        // await sendEmail(regFormData.email);
      }
    } catch (error) {
      console.error("API error:", error);
      if (error.response.status === 400) {
        setUserExists("User with this email address already exists.");
      }
    } finally {
      setLoader(false);
    }
  };

  //==========================================================================to handle user login form and submission

  const [loginFormData, setloginFormData] = useState({});
  const [invalidCred, setInvalidCred] = useState("");
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || {}
  );

  // console.log("loginFormData", loginFormData);

  const handleLoginInputChange = (e) => {
    setValidationErr("");
    const { name, value } = e.target;
    setloginFormData({ ...loginFormData, [name]: value });
    setInvalidCred("");
  };

  const [loginSuccess, setloginSuccess] = useState(false);
  const [tinyLoader, settinyLoader] = useState(false);

  const login = async (loginFormData) => {
    try {
      settinyLoader(true);
      const response = await axios.post(
        "https://web-production-6c20.up.railway.app/flip/auth/login",
        loginFormData
      );
      const data = await response.json();
      console.log(data);

      if (response.data.user_data) {
        let dashboardRoute = "/";
        if (response.data.user_data.is_instructor) {
          dashboardRoute = "/dashboard-trainer";
        } else if (response.data.user_data.is_volunteer) {
          dashboardRoute = "/school-management";
        }

        navigate(dashboardRoute);
        setloginSuccess(true);
        setUserData(response.data);
        localStorage.setItem("userData", JSON.stringify(response.data));
        setTimeout(() => {
          setloginSuccess(false);
          setregFormData({});
          setloginFormData({});
        }, 3000);
      }
    } catch (error) {
      console.error("API error:", error);
      if (error.response.status >= 400) {
        setInvalidCred("Invalid login credentials.");
      }
    } finally {
      settinyLoader(false);
    }
  };

  //==========================================================================to handle instructor reg form and submission
  const [trainerRegFormData, setTrainerRegFormData] = useState({});
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [pageErr, setPageErr] = useState("");

  const handleTrainerInputChange = (e) => {
    setValidationErr("");
    const { name, value } = e.target;
    setTrainerRegFormData({
      ...trainerRegFormData,
      [name]: name === "years_of_experience" ? Number(value) : value,
    });
    setUserExists("");
    setPageErr("");
  };
  function joinArrayElements(array) {
    return array.join(", ");
  }

  useEffect(() => {
    setTrainerRegFormData((prev) => {
      return {
        ...prev,
        skills: joinArrayElements(selectedSkills),
      };
    });
  }, [selectedSkills]);

  const registerTrainer = async (trainerRegFormData) => {
    try {
      settinyLoader(true);
      const response = await axios.post(
        "https://web-production-6c20.up.railway.app/flip/instructor/signup/",
        trainerRegFormData
      );
      console.log("API response:", response.data);

      if (response.data.uid) {
        navigate("/login");
        setRegSuccess(true);
        setTimeout(() => {
          setRegSuccess(false);
          setTrainerRegFormData({});
        }, 3000);
      }
    } catch (error) {
      console.error("API error:", error);
      if (error.response.status === 400) {
        setUserExists("User with this email address already exists.");
      }
    } finally {
      settinyLoader(false);
    }
  };

  //======================================================================================to handle log out

  const [logoutSuccess, setlogoutSuccess] = useState(false);

  const logout = () => {
    localStorage.removeItem("userData");
    setUserData({});
    navigate("/");
    setlogoutSuccess(true);
    // setTimeout(() => {
    //   setlogoutSuccess(false);
    //   window.location.reload();
    // }, 1500);
  };

  const isAuthenticated = userData?.access;
  const isInstructor = userData?.user_data?.is_instructor;
  const isStudent = userData?.user_data?.is_student;
  const isVolunteer = userData?.user_data?.is_volunteer;

  const [inlineLoader2, setInlineLoader2] = useState(false);

  //================================================================================to fetch all bootcamps without auth
  const [allBootcampsRaw, setallBootcampsRaw] = useState([]);

  async function fetchAllBootcampsRaw() {
    setInlineLoader2(true);
    try {
      const response = await axios.get(
        `https://web-production-6c20.up.railway.app/flip/all/bootcamps`
      );
      // console.log("All raw bootcamps fetched successfully:", response.data);
      setallBootcampsRaw(response.data);
    } catch (error) {
      console.error("Error fetching all raw bootcamps", error);
    } finally {
      setInlineLoader2(false);
    }
  }

  //================================================================================to fetch all bootcamps without auth
  const [allCoursesRaw, setallCoursesRaw] = useState([]);

  async function fetchAllCoursesRaw() {
    setInlineLoader2(true);
    try {
      const response = await axios.get(
        `https://web-production-6c20.up.railway.app/flip/all/courses`
      );
      // console.log("All raw courses fetched successfully:", response.data);
      setallCoursesRaw(response.data);
    } catch (error) {
      console.error("Error fetching all raw courses", error);
    } finally {
      setInlineLoader2(false);
    }
  }

  // useEffect(() => {
  //   fetchAllBootcampsRaw();
  //   fetchAllCoursesRaw();
  // }, []);

  const [showPassword, setShowPassword] = useState(false);
  function toggleShowPsw() {
    setShowPassword((prev) => !prev);
  }

  useEffect(() => {
    setShowPassword(false);
  }, [currentPage]);

  //==========================================================to register for cohort
  const [successCohort, setSuccessCohort] = useState(false);
  const registerCohortF = async (data) => {
    console.log("data", data);
    try {
      settinyLoader(true);
      const response = await axios.post(
        "https://flip2tech-production.up.railway.app/flip/flip-cohort/",
        data
      );

      if (response.status === 201) {
        setSuccessCohort(true);
        // setTimeout(() => {
        //   setSuccessCohort(false);
        // }, 3000);
      }
    } catch (error) {
      console.error("Cohort error:", error);
      if (error.response.status === 400) {
        setUserExists("A user already registered with this email address.");
      }
    } finally {
      settinyLoader(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        loader,
        setCurrentCourse,
        currentCourse,
        handleInputChange,
        regFormData,
        validationErr,
        setValidationErr,
        register,
        handleLoginInputChange,
        login,
        loginFormData,
        regSuccess,
        loginSuccess,
        userExists,
        userData,
        invalidCred,
        logoutSuccess,
        logout,
        handleTrainerInputChange,
        trainerRegFormData,
        registerTrainer,
        setSelectedSkills,
        selectedSkills,
        setPageErr,
        pageErr,
        isAuthenticated,
        isInstructor,
        isStudent,
        inlineLoader2,
        allBootcampsRaw,
        allCoursesRaw,
        isVolunteer,
        toggleShowPsw,
        showPassword,
        tinyLoader,
        successCohort,
        setSuccessCohort,
        registerCohortF,
        setUserExists,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
