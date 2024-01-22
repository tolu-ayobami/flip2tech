import axios from "axios";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "./AppContext";
// import { sendWelcomeEmail } from "../utils/SendWelcomeEmail";
// import nodemailer from "nodemailer";

export const MaketerContext = createContext();

// eslint-disable-next-line react/prop-types
const MaketerContextProvider = ({ children }) => {
  const location = useLocation();
  let currentPage = location.pathname;

  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [loader, setLoader] = useState(false);

  //================================================================================to handle volunteer reg form and submission
  const [regFormData, setregFormData] = useState({});
  const [validationErr, setValidationErr] = useState("");

  const handleInputChange = (e) => {
    setValidationErr("");
    const { name, value } = e.target;
    setregFormData({ ...regFormData, [name]: value });
    setUserExists("");
  };

  const [regSuccess, setRegSuccess] = useState(false);
  const [userExists, setUserExists] = useState(false);

  const registerVolunteer = async (regFormData) => {
    try {
      setLoader(true);
      const response = await axios.post(
        "https://web-production-6c20.up.railway.app/flip/reg/volunteer",
        regFormData
      );
      console.log("API response:", response);

      if (response.status >= 200 || response.status < 300) {
        navigate("/login");
        setRegSuccess(true);
        setTimeout(() => {
          setRegSuccess(false);
          setregFormData({});
        }, 3000);
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

  //=======================================================================to create school
  const { userData } = useAppContext();
  const [schoolData, setschoolData] = useState({
    volunteer: userData?.user_data?.uid,
    name: "",
    address: "",
    image1: "",
    image2: "",
    email: "",
    reference_contact: "",
    reference_contact2: "",
    lga: "",
    number_of_boys: 0,
    number_of_girls: 0,
  });

  // console.log("schoolData", schoolData);

  function handleSchoolChange(e) {
    const { value, id } = e.target;
    setValidationErr("");
    setschoolData((prev) => {
      return {
        ...prev,
        [id]: value,
        volunteer: userData?.user_data?.uid,
      };
    });
  }

  const [imagePreview1, setImagePreview1] = useState(null);

  function handleImageChange1(e) {
    const file = e.target.files[0];
    setValidationErr("");
    setschoolData((prev) => ({ ...prev, image1: file }));

    if (file) {
      setImagePreview1(URL.createObjectURL(file));
    }
  }

  const [imagePreview2, setImagePreview2] = useState(null);

  function handleImageChange2(e) {
    const file = e.target.files[0];
    setValidationErr("");
    setschoolData((prev) => ({ ...prev, image2: file }));

    if (file) {
      setImagePreview2(URL.createObjectURL(file));
    }
  }

  useEffect(() => {
    setImagePreview2(null);
    setImagePreview1(null);
  }, [currentPage]);

  //=====================================================================================to submit school
  const [schoolSuccess, setschoolSuccess] = useState(false);
  const [uploadingschool, setUploadingschool] = useState(false);
  const [uploadingschoolErr, setUploadingschoolErr] = useState("");
  // const [trackProgress, settTackProgress] = useState(false);

  async function submitschool() {
    setUploadingschool(true);
    setUploadingschoolErr("");
    try {
      const response = await axios.post(
        "https://web-production-6c20.up.railway.app/flip/add/school",
        schoolData,
        {
          headers: {
            Authorization: `Bearer ${userData?.access}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("school data submitted successfully:", response.data);
      // settTackProgress((prev) => !prev);
      navigate("/school-management");
      setschoolSuccess(true);
      setTimeout(() => {
        setschoolSuccess(false);
        setschoolData({});
      }, 3000);
    } catch (error) {
      console.error("Error submitting school data:", error);
      setUploadingschoolErr(
        error?.message === "Network Error"
          ? "Bad network Connection"
          : "Apologies, an unexpected problem occurred"
      );
    } finally {
      setUploadingschool(false);
    }
  }

  //================================================================================to fetch all bootcamps
  const [allSchools, setallSchools] = useState([]);
  const [fetchingAllSch, setfetchingAllSch] = useState(false);

  async function fetchallSchools() {
    setfetchingAllSch(true);
    try {
      const response = await axios.get(
        `https://web-production-6c20.up.railway.app/flip/add/school`,
        {
          headers: {
            Authorization: `Bearer ${userData?.access}`,
          },
        }
      );
      // console.log("all schools fetched successfully:", response.data);
      setallSchools(response.data);
    } catch (error) {
      console.error("Error fetching all schools:", error);
    } finally {
      setfetchingAllSch(false);
    }
  }

  //================================================================================to fetch all bootcamps
  const [mySchools, setmySchools] = useState([]);
  const [inlineLoader, setInlineLoader] = useState(false);

  async function fetchMySchools(id) {
    setInlineLoader(true);
    try {
      const response = await axios.get(
        `https://web-production-6c20.up.railway.app/flip/my/schools?uid=${id}`,
        {
          headers: {
            Authorization: `Bearer ${userData?.access}`,
          },
        }
      );
      // console.log("schools fetched successfully:", response.data);
      setmySchools(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setInlineLoader(false);
    }
  }

  const [allVolunteers, setAllVolunteers] = useState([]);
  const [fetchingVolunteers, setfetchingVolunteers] = useState(false);

  async function fetchAllVolunteers() {
    setfetchingVolunteers(true);
    try {
      const response = await axios.get(
        `https://web-production-6c20.up.railway.app/flip/reg/volunteer`,
        {
          headers: {
            Authorization: `Bearer ${userData?.access}`,
          },
        }
      );
      // console.log("volunteers fetched successfully:", response.data);
      setAllVolunteers(response.data);
    } catch (error) {
      console.error("Error fetching volunteers:", error);
    } finally {
      setfetchingVolunteers(false);
    }
  }

  //====================================================================================to check colunteer fcmb account added
  const [fcmbAccountStatus, setfcmbAccountStatus] = useState({});

  async function fetchMyFcmb() {
    setInlineLoader(true);
    try {
      const response = await axios.get(
        `https://web-production-6c20.up.railway.app/flip/volunteer/payment?volunteer=${userData?.user_data?.uid}`,
        {
          headers: {
            Authorization: `Bearer ${userData?.access}`,
          },
        }
      );
      // console.log("fcmb account fetched successfully:", response.data);
      setfcmbAccountStatus(response.data);
    } catch (error) {
      console.error("Error fetching fcmb account:", error);
    } finally {
      setInlineLoader(false);
    }
  }

  //========================================================================================to add fcmb account
  const [fcmbData, setfcmbData] = useState({
    volunteer: userData?.user_data?.uid,
    bank_name: "FCMB",
    account_name: "",
    account_number: "",
  });

  // console.log("fcmbData", fcmbData);

  function handlefcmbChange(e) {
    const { value, id } = e.target;
    setValidationErr("");
    setfcmbData((prev) => {
      return {
        ...prev,
        [id]: value,
        volunteer: userData?.user_data?.uid,
      };
    });
  }

  const [openMod, setOpenMod] = useState(false);
  const [submitted, setsubmitted] = useState(
    JSON.parse(localStorage.getItem("20schools")) || false
  );

  const [submittingAccount, setsubmittingAccount] = useState(false);
  const [submittingAccountErr, setsubmittingAccountErr] = useState("");

  async function submitAccount() {
    setsubmittingAccount(true);
    setsubmittingAccountErr("");
    try {
      await axios.post(
        `https://web-production-6c20.up.railway.app/flip/volunteer/payment?volunteer=${fcmbData?.volunteer}`,
        fcmbData,
        {
          headers: {
            Authorization: `Bearer ${userData?.access}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // console.log("fcmb account submitted successfully:", response.data);
      fetchMyFcmb();
      setOpenMod(false);
      localStorage.setItem("20schools", true);
      setsubmitted(true);
    } catch (error) {
      console.error("Error submitting school data:", error);
      submittingAccountErr(
        error?.message === "Network Error"
          ? "Bad network Connection"
          : "Apologies, an unexpected problem occurred"
      );
    } finally {
      setsubmittingAccount(false);
    }
  }

  //-==============================================================================to change school status
  async function changeStatus(id, data) {
    try {
      await axios.put(
        `https://web-production-6c20.up.railway.app/flip/school/status?volunteer=${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${userData?.access}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      fetchallSchools();
      // console.log("School updated successfully:", response.data);
      setOpenMod(false);
    } catch (error) {
      console.error("Error updating school data:", error);
    }
  }

  return (
    <MaketerContext.Provider
      value={{
        currentPage,
        loader,
        handleInputChange,
        regSuccess,
        validationErr,
        registerVolunteer,
        userExists,
        regFormData,
        setValidationErr,
        schoolData,
        handleSchoolChange,
        imagePreview1,
        handleImageChange1,
        imagePreview2,
        handleImageChange2,
        setschoolData,
        uploadingschool,
        schoolSuccess,
        uploadingschoolErr,
        submitschool,
        fetchMySchools,
        mySchools,
        inlineLoader,
        fcmbAccountStatus,
        fetchMyFcmb,
        fcmbData,
        handlefcmbChange,
        setOpenMod,
        openMod,
        submitAccount,
        submittingAccount,
        submittingAccountErr,
        allVolunteers,
        fetchAllVolunteers,
        allSchools,
        fetchingAllSch,
        fetchallSchools,
        changeStatus,
        fetchingVolunteers,
        submitted,
      }}
    >
      {children}
    </MaketerContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMaketerContext = () => {
  return useContext(MaketerContext);
};

export default MaketerContextProvider;
