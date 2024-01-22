/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";
import { useMaketerContext } from "../contexts/MaketerContext";
import ScrollToTop from "../ScrollToTop";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";

const RegisterMaketer = () => {
  const {
    loader,
    regFormData,
    registerVolunteer,
    setValidationErr,
    handleInputChange,
    validationErr,
    userExists,
  } = useMaketerContext();
  const { showPassword, toggleShowPsw, tinyLoader } = useAppContext();

  const lgas = [
    "Agege",
    "Ajeromi-Ifelodun",
    "Alimosho",
    "Amuwo-Odofin",
    "Apapa",
    "Badagry",
    "Epe",
    "Eti-Osa",
    "Ibeju-Lekki",
    "Ifako-Ijaiye",
    "Ikeja",
    "Ikorodu",
    "Kosofe",
    "Lagos Island",
    "Lagos Mainland",
    "Mushin",
    "Ojo",
    "Oshodi-Isolo",
    "Shomolu",
    "Surulere",
    "Agbado/Oke-Odo LCDA",
    "Agboyi-Ketu LCDA",
    "Agege LCDA",
    "Ajeromi-Ifelodun LCDA",
    "Alimosho LCDA",
    "Apapa LCDA",
    "Apapa-Iganmu LCDA",
    "Ayobo-Ipaja LCDA",
    "Badagry West LCDA",
    "Bariga LCDA",
    "Coker/Aguda LCDA",
    "Egbe-Idimu LCDA",
    "Eti-Osa East LCDA",
    "Eti-Osa West LCDA",
    "Iba LCDA",
    "Ifako-Ijaiye LCDA",
    "Ifelodun LCDA",
    "Igando-Ikotun LCDA",
    "Igbogbo-Baiyeku LCDA",
    "Ijede LCDA",
    "Ikeja LCDA",
    "Ikorodu North LCDA",
    "Ikorodu West LCDA",
    "Ikosi-Isheri LCDA",
    "Ikoyi-Obalende LCDA",
    "Iru-Victoria Island LCDA",
    "Isolo LCDA",
    "Itire-Ikate LCDA",
    "Kosofe LCDA",
    "Lagos Island East LCDA",
    "Lagos Island West LCDA",
    "Lagos Mainland East LCDA",
    "Lagos Mainland West LCDA",
    "Lekki LCDA",
    "Mosan-Okunola LCDA",
    "Mushin LCDA",
    "Odi-Olowo/Ojuwoye LCDA",
  ];

  // console.log("regFormData", regFormData);
  //================================================Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      regFormData?.first_name &&
      regFormData?.last_name &&
      regFormData?.email &&
      regFormData?.lga &&
      regFormData?.password &&
      regFormData?.contact &&
      regFormData?.nin
    ) {
      await registerVolunteer(regFormData);
    } else {
      setValidationErr("All fields are required");
    }
  };

  return (
    <>
      {loader && <Loader />}

      <Header2 />

      <main className="w-full pt-[80px] pb-10 text-black/80 font-poppins overflow-hidden">
        <section className="w-full h-full bg-white overflow-y-auto">
          {/* <div className="bg-black w-full h-[60px] md:h-[100px]"></div> */}
          {/*================================================Link to navigate back to the Home page */}
          {/* <Link to="/">
            <p className="text-white underline hover:text-yellow-300 text-[.85rem] ml-4 mt-4 cursor-pointer">
              Back to homepage
            </p>
          </Link> */}
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            {/* <div className="flex gap-2 items-center bg-white rounded-lg mb-5">
              <img
                alt=""
                src="/images/logo.png"
                className="w-[150px] h-auto md:w-[200px] md:h-auto"
              />
            </div> */}
            <div className="w-full md:max-w-xl lg:max-w-3xl bg-[#EEF1F5] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                {/*================================================Form Title */}
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                  Please fill in your information
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div className="w-full flex gap-3">
                    <div className="w-full">
                      {/*================================================First Name Input */}
                      <label
                        htmlFor="first_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-3 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300"
                        placeholder="John"
                        required
                        value={regFormData.first_name || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-full">
                      {/*================================================Last Name Input */}
                      <label
                        htmlFor="last_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-3 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300"
                        placeholder="Doe"
                        required
                        value={regFormData.last_name || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="w-full flex gap-3">
                    {/*================================================Email Input */}
                    <div className="w-full">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-3 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300"
                        placeholder="name@email.com"
                        required
                        value={regFormData.email || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-full">
                      {/*================================================Contact Input */}
                      <label
                        htmlFor="contact"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Phone contact
                      </label>
                      <input
                        type="contact"
                        name="contact"
                        id="contact"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-3 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300"
                        placeholder="08123456780"
                        required
                        value={regFormData.contact || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="w-full flex gap-3 md:flex-row flex-col">
                    <div className="w-full">
                      <label
                        htmlFor="nin"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        NIN
                      </label>
                      <input
                        type="nin"
                        name="nin"
                        id="nin"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-3 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300"
                        placeholder="12345678910"
                        required
                        value={regFormData.nin || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="lga"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Local Government Area
                      </label>
                      <select
                        name="lga"
                        id="lga"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-3 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300"
                        value={regFormData.lga || ""}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="" hidden>
                          Select LGA
                        </option>
                        {lgas.map((lga) => (
                          <option key={lga} value={lga}>
                            {lga}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/*================================================Password Input */}
                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-3 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300"
                      required
                      value={regFormData.password || ""}
                      onChange={handleInputChange}
                    />
                    <p
                      onClick={toggleShowPsw}
                      className="absolute right-2 top-[53%] cursor-pointer hover:text-yellow-400 font-medium"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </p>
                  </div>

                  {/*================================================Validation Error */}
                  {validationErr && (
                    <div className="w-full p-2 my-2 text-[.9rem] text-red-500 border border-red-500 rounded-md">
                      {validationErr}
                    </div>
                  )}

                  {/*================================================User Exists Error */}
                  {userExists && (
                    <div className="w-full p-2 my-2 text-[.9rem] text-red-500 border border-red-500 rounded-md">
                      {userExists}
                    </div>
                  )}

                  {/*================================================Submit Button */}
                  {/* <button
                    type="submit"
                    className="w-full text-white bg-yellow-400/80 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex justify-center items-center gap-2"
                  >
                    {tinyLoader ? "Procesing" : "Register"}
                    {tinyLoader && <ClipLoader color="#fff" size={20} />}
                  </button> */}

                  <button
                    type="submit"
                    className="w-fit mt-5 px-3 lg:px-12 py-2 lg:py-3 flex items-center gap-2 bg-black hover:opacity-80 uppercase md:text-[1.2rem] text-white border border-[#000103] font-medium"
                  >
                    {tinyLoader ? "Procesing" : "REGISTER"}
                    {tinyLoader && <ClipLoader color="#fff" size={20} />}
                    <img
                      alt="icon"
                      className="w-7 h-7"
                      src="/images/arrow-up-white.png"
                    />
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    {/*================================================Link to navigate to Login page */}
                    <Link
                      to="/login"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign In
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <ScrollToTop />
    </>
  );
};

export default RegisterMaketer;
