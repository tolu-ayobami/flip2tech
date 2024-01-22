/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
import { Link, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

const RegisterCohort = () => {
  const {
    setUserExists,
    successCohort,
    registerCohortF,
    tinyLoader,
    userExists,
    setSuccessCohort,
  } = useAppContext();
  const [isValidEmail, setIsValidEmail] = useState(true);

  const navigate = useNavigate();

  //   const [loading, setLoading] = useState(false);
  //   const [sendError, setSendError] = useState("");

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    country: "",
    state: "",
    interest: "",
    about_me: "",
  });

  function handleChange(e) {
    setUserExists("");
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

  const isFormDataValid = Object.values(formData).every((value) =>
    Boolean(value)
  );

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countriesArray = data.map((country) => {
          return {
            name: country.name.common,
            code: country.cca2,
          };
        });

        // Sort the countries alphabetically by name
        countriesArray.sort((a, b) => a.name.localeCompare(b.name));

        setCountries(countriesArray);
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    registerCohortF(formData);
  }

  return (
    <div className="w-full min-h-screen flex md:flex-row flex-col md:overflow-y-hidden">
      <div className="w-full h-[250px] md:h-screen bg-cohort bg-no-repeat bg-cover relative">
        <div className="w-full h-full absolute top-0 left-0 p-5 md:p-10 bg-gradient-to-t from-black/90 to-transparent flex flex-col">
          <Link to="/">
            <img
              alt=""
              src="/images/logo-white.png"
              className="w-[130px] h-auto md:w-[200px] rounded-sm md:rounded-b-lg"
            />
          </Link>
          <p className="font-medium text-[1.5rem] md:text-[2rem] mt-auto text-white">
            We are thrilled <br />
            to welcome you to the <br />
            <span className="text-yellow-300">FlipToTech</span> Cohort
          </p>
        </div>
      </div>
      <div className="w-full h-full bg-white p-5 md:p-14 md:overflow-y-auto">
        <h2 className="text-[1.75rem] md:text-[2em] font-[400]">
          Register for Cohorts
        </h2>
        <p>Transform Your Passion into Motion: Register Now for our cohorts.</p>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="mt-8 flex flex-col gap-3"
        >
          <div>
            <p className="text-black/70">
              ALL FIELDS ARE REQUIRED, PLEASE FILL CAREFULLY!
            </p>
          </div>
          <div className="w-full flex gap-4 md:flex-row flex-col">
            <div className="w-full">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                id="first_name"
                onChange={handleChange}
                placeholder="First name"
                className="w-full px-3 py-4 border border-black/30 mt-2 outline-none placeholder:text-black/40"
                required
              />
            </div>

            <div className="w-full">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                id="last_name"
                onChange={handleChange}
                placeholder="Last name"
                className="w-full px-3 py-4 border border-black/30 mt-2 outline-none placeholder:text-black/40"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={handleChange}
              placeholder="Email"
              className={`w-full px-3 py-4 border border-black/30 mt-2 outline-none placeholder:text-black/40 ${
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
              <label htmlFor="age_range">Country</label>
              <select
                id="country"
                onChange={handleChange}
                className="w-full px-3 py-4 border border-black/30 mt-2 outline-none placeholder:text-black/40"
                defaultValue={formData?.country || "DEFAULT"}
                required
              >
                <option value="DEFAULT" disabled hidden>
                  Select
                </option>
                {countries?.map((itm, ind) => {
                  return (
                    <option key={ind} value={itm?.name}>
                      {itm?.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="w-full">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                onChange={handleChange}
                placeholder="State/Province"
                className="w-full px-3 py-4 border border-black/30 mt-2 outline-none placeholder:text-black/40"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="interest">Interest</label>
            <input
              type="text"
              id="interest"
              onChange={handleChange}
              placeholder="E.g Frontend development"
              className="w-full px-3 py-4 border border-black/30 mt-2 outline-none placeholder:text-black/40"
              required
            />
          </div>

          <div className="w-full flex flex-col">
            <label htmlFor="about_me">About you</label>
            <textarea
              type="text"
              id="about_me"
              onChange={handleChange}
              placeholder=""
              className="w-full px-3 py-4 border border-black/30 mt-2 outline-none placeholder:text-black/40"
              required
            />
          </div>

          {userExists && (
            <p className="text-red-500">{capitalizeFirstLetter(userExists)}</p>
          )}

          <div className="w-full flex justify-center mt-7 md:mt-14">
            <button
              disabled={tinyLoader}
              className={`w-fit px-12 py-2 lg:py-3 flex items-center gap-2 hover:opacity-80 uppercase md:text-[1.2rem] text-[#000103] font-medium ${
                isFormDataValid && isValidEmail
                  ? "cursor-pointer bg-gradient-to-r from-[#ffbb00] to-[#faf000]"
                  : "cursor-not-allowed bg-gray-400"
              }`}
            >
              {tinyLoader ? "Processing..." : "Register"}
            </button>
            {/* <button
              disabled={true}
              className={`w-fit px-12 py-2 lg:py-3 flex items-center gap-2 hover:opacity-80 uppercase md:text-[1.2rem] text-[#000103] font-medium cursor-not-allowed bg-gray-400`}
            >
              {tinyLoader ? "Processing..." : "Coming Soon!"}
            </button> */}
          </div>
          {/* <p className="w-full text-center text-[.85rem]">
            Secured by Paystack
          </p> */}
        </form>
      </div>

      {successCohort && (
        <div className="w-full h-screen p-4 fixed top-0 left-0 bg-black/80 flex justify-center items-center py-10 md:pt-[100px] md:pb-10">
          <Confetti
            numberOfPieces={300}
            width={window.innerWidth || 300}
            height={window.innerHeight || 200}
          />
          <div className="w-full sm:w-[580px] p-5 rounded-lg flex flex-col items-center gap-6 bg-white h-fit">
            <img alt="" src="/images/success.png" className="w-14 h-14" />
            <p className="text-[.9rem] text-center">
              You have successfully registered for FlipToTech CoHort 2024
              <br />
              We're thrilled to welcome you to FlipToTech Builders Cohort 2024.
              The next steps will be forwarded to you by mail.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  navigate("/");
                  setSuccessCohort(false);
                }}
                className={`w-fit px-5 py-2 lg:py-3 flex items-center gap-2 hover:opacity-80 uppercase md:text-[1.2rem] text-[#000103] font-medium cursor-pointer bg-gradient-to-r from-[#ffbb00] to-[#faf000]`}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterCohort;
