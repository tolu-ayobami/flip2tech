/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import programData from "../data/program.json";
import { useEffect } from "react";
import { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import { Link } from "react-router-dom";

const RegisterPhysical = () => {
  const { title } = useParams();
  //   console.log(title.replace(/-/g, " "));
  const navigate = useNavigate();

  const currentCourseOriginal = programData?.filter(
    (item) => item?.title.replace(/\//g, "_") === title
  )[0];

  const [isValidEmail, setIsValidEmail] = useState(true);

  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState("");

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    age_range: "",
    branch: "",
    field_of_study: currentCourseOriginal?.title || "",
    duration: "",
    amount_paid: 0,
  });
  // console.log("formData", formData);

  const currentCourseForm = programData?.filter(
    (item) => item?.title === formData?.field_of_study
  )[0];

  useEffect(() => {
    if (formData?.field_of_study && formData?.duration) {
      const course = programData?.filter(
        (item) => item?.title === formData?.field_of_study
      )[0];

      const price = () => {
        if (
          formData?.field_of_study === "Data Analysis" ||
          formData?.field_of_study === "Graphic Design" ||
          formData?.field_of_study === "Digital Marketing"
        ) {
          return formData?.duration === "6 Weeks"
            ? course?.price[0]
            : course?.price[1];
        } else {
          return course?.price[0];
        }
      };

      setFormData((prev) => {
        return {
          ...prev,
          amount_paid: price(),
        };
      });
    }
  }, [formData?.field_of_study, formData?.duration]);

  useEffect(() => {
    setFormData((prev) => {
      return {
        ...prev,
        duration: "",
        amount_paid: 0,
      };
    });
  }, [formData?.field_of_study]);

  function handleChange(e) {
    setSendError("");
    const { value, id } = e.target;
    let isValidEmail = true;

    if (id === "email") {
      // Define a regex pattern for email validation
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      isValidEmail = emailPattern.test(value);
    }

    setFormData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
    setIsValidEmail(isValidEmail);
  }

  //===============================================paystack config
  const config = {
    reference: new Date().getTime().toString(),
    email: formData?.email,
    amount: Number(`${formData?.amount_paid}00`),
    // publicKey: "pk_test_546f34031486c247144df63b0fe2fe35623ad4da",
    publicKey: "pk_live_429fb119795f9ff6ee25c112b9c8291f7ebe24e4",
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    navigate(

      "/student-dashboard"

      // `/course/${currentCourseOriginal?.title}/enroll-success/${reference?.reference}`
    );
    sendPaymentData();
    localStorage.setItem("refData", JSON.stringify(formData));
  };

  // you can call this function anything
  const onClose = () => {
    console.log("closed");
  };

  const isFormDataValid = Object.values(formData).every((value) =>
    Boolean(value)
  );
  const initializePayment = usePaystackPayment(config);

  const PaystackButton = () => {
    return (
      <button
        disabled={(!isFormDataValid && !isValidEmail) || loading}
        onClick={(e) => {
          e.preventDefault();
          if (isFormDataValid && isValidEmail) {
            initializePayment(onSuccess, onClose);
          }
        }}
        className={`w-fit px-12 py-2 lg:py-3 flex items-center gap-2 hover:opacity-80 uppercase md:text-[1.2rem] text-[#000103] font-medium ${
          (isFormDataValid && isValidEmail) || loading
            ? "cursor-pointer bg-gradient-to-r from-[#ffbb00] to-[#faf000]"
            : "cursor-not-allowed bg-gray-400"
        }`}
      >
        {loading ? (
          "Processing"
        ) : (
          <p>
            {formData?.amount_paid
              ? `Pay N${formData?.amount_paid?.toLocaleString()}`
              : "Pay"}
          </p>
        )}
        {!loading && (
          <img alt="icon" className="w-5 h-5" src="/images/lock.png" />
        )}
        {loading && <ClipLoader color="#fff" size={20} />}
      </button>
    );
  };

  const sendPaymentData = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://flip2tech-production.up.railway.app/flip/register/physical/",
        formData
      );
      console.log("API response:", response.data);
    } catch (error) {
      console.error("API error:", error);
      if (error?.response?.data?.email[0]) {
        setSendError(error?.response?.data?.email[0]);
      }
    } finally {
      setLoading(false);
    }
  };

  // const verifyEmail = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.post(
  //       "https://flip2tech-production.up.railway.app/on-site/check-mail",
  //       { email: formData?.email }
  //     );
  //     console.log("API response:", response.data);

  //     const emailExists = response?.data?.filter((item) => {
  //       return (
  //         item?.email?.tolowerCase() === formData?.email?.toLocaleLowerCase()
  //       );
  //     });

  //     if (emailExists?.length === 0) {
  //       // initializePayment(onSuccess, onClose);
  //       console.log("INITIALIZE PAYMENT!!!!!!!");
  //       setLoading(false);
  //     } else {
  //       setSendError(
  //         "Physical classes have been registered for with this email!"
  //       );
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     console.error("API error:", error);
  //   }
  // };

  return (
    <div className="w-full min-h-screen flex md:flex-row flex-col">
      <div className="w-full h-[250px] md:h-screen bg-phy bg-no-repeat bg-cover relative">
        <div className="w-full h-full absolute top-0 left-0 p-5 md:p-10 bg-gradient-to-t from-black/90 to-transparent flex flex-col">
          <img
            alt=""
            src="/images/logo-white.png"
            className="w-[130px] h-auto md:w-[200px] rounded-sm md:rounded-b-lg"
          />
          <p className="font-medium text-[1.5rem] md:text-[2rem] mt-auto text-white">
            We are thrilled <br />
            to welcome you to the <br />
            <span className="text-yellow-300">FlipToTech</span> Physical
            Programme
          </p>
        </div>
      </div>
      <div className="w-full h-full bg-white p-5 md:p-14">
        <h2 className="text-[1.75rem] md:text-[2em] font-[400]">
          Register for our physical classes
          
        </h2>
        <p>
          Transform Your Passion into Motion: Enroll Now for Our Dynamic
          Physical Classes.
        </p>

        <form className="mt-8 flex flex-col gap-3">
          <div>
            <p className="text-black/70">
              ALL FIELDS ARE REQUIRED, PLEASE FILL CAREFULLY!
            </p>
            <p className="text-black/70">
              AMOUNT TO PAY IS BASED ON FIELD OF STUDY AND DURATION!
            </p>
          </div>
          <div>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              onChange={handleChange}
              className="w-full px-3 py-4 border border-black/30 mt-2 outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              onChange={handleChange}
              className="w-full px-3 py-4 border border-black/30 mt-2 outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={handleChange}
              className={`w-full px-3 py-4 border border-black/30 mt-2 outline-none ${
                isValidEmail ? "border-black/30" : "border-red-500"
              }`}
              required
            />
            {!isValidEmail && (
              <p className="text-red-500">
                Please enter a valid email address.
              </p>
            )}
          </div>

          <div className="w-full flex gap-4">
            <div className="w-full">
              <label htmlFor="age_range">Age range</label>
              <select
                id="age_range"
                onChange={handleChange}
                className="w-full px-3 py-4 border border-black/30 mt-2 outline-none"
                defaultValue={formData?.age_range || "DEFAULT"}
                required
              >
                <option value="DEFAULT" disabled hidden>
                  Select
                </option>
                <option value="5-10">5-10</option>
                <option value="10-15">10-15</option>
                <option value="15-20">15-20</option>
                <option value="20-25">20-25</option>
                <option value="25-30">25-30</option>
                <option value="30-35">30-35</option>
                <option value="35-40">35-40</option>
              </select>
            </div>

            <div className="w-full">
              <label htmlFor="branch">Choose branch</label>
              <select
                id="branch"
                onChange={handleChange}
                className="w-full px-3 py-4 border border-black/30 mt-2 outline-none"
                defaultValue={"DEFAULT"}
                required
              >
                <option value="DEFAULT" disabled hidden>
                  Select
                </option>
                <option value="Jakande Gate Branch">Jakande Gate Branch</option>
                <option value="Ijegun Branch">Ijegun Branch</option>
                <option value="FESTAC Branch">FESTAC Branch</option>
                {/* <option value="Ejigbo Branch">Ejigbo Branch</option> */}
              </select>
            </div>
          </div>

          <div className="w-full flex gap-4">
            <div className="w-full">
              <label htmlFor="field_of_study">Field of study</label>
              <select
                id="field_of_study"
                onChange={handleChange}
                className="w-full px-3 py-4 border border-black/30 mt-2 outline-none"
                defaultValue={formData?.field_of_study || "DEFAULT"}
                required
              >
                <option value="DEFAULT" disabled hidden>
                  Select
                </option>
                {programData?.map((x, ind) => {
                  return (
                    <option key={ind} value={x?.title}>
                      {x?.title}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="w-full">
              <label htmlFor="duration">Duration</label>
              <select
                id="duration"
                onChange={handleChange}
                className="w-full px-3 py-4 border border-black/30 mt-2 outline-none"
                // defaultValue={"DEFAULT"}
                value={formData?.duration || "DEFAULT"}
                required
              >
                <option value="DEFAULT" disabled hidden>
                  Select
                </option>
                {currentCourseForm?.duration?.map((x, ind) => {
                  return (
                    <option key={ind} value={x}>
                      {x}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          {sendError && (
            <p className="text-red-500">{capitalizeFirstLetter(sendError)}</p>
          )}

          <div className="w-full flex justify-center mt-7 md:mt-14">
            <PaystackButton />
          </div>
          <p className="w-full text-center text-[.85rem]">
            Secured by Paystack
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPhysical;
