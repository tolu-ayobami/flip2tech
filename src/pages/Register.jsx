/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";

const Register = () => {
  //================================================Handle form submission
  const {
    loader,
    handleInputChange,
    regFormData,
    register,
    validationErr,
    setValidationErr,
    userExists,
    showPassword,
    toggleShowPsw,
  } = useAppContext();

  //================================================Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      regFormData?.first_name &&
      regFormData?.last_name &&
      regFormData?.email &&
      regFormData?.date_of_birth &&
      regFormData?.password &&
      regFormData?.contact
    ) {
      await register(regFormData);
    } else {
      setValidationErr("All fields are required");
    }
  };

  return (
    <>
      {loader && <Loader />}

      <main className="w-full h-screen text-black/80 font-poppins bg-register bg-cover bg-no-repeat bg-bottom overflow-hidden">
        <section className="w-full h-full bg-black/50 dark:bg-gray-900/50 overflow-y-auto">
          {/*================================================Link to navigate back to the Home page */}
          <Link to="/">
            <p className="text-white underline hover:text-yellow-300 text-[.85rem] ml-4 mt-4 cursor-pointer">
              Back to Home Page
            </p>
          </Link>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="flex gap-2 items-center bg-white rounded-lg mb-5">
              {/*================================================Logo */}
              <img
                alt=""
                src="/images/logo.png"
                className="w-[150px] h-auto md:w-[200px] md:h-auto"
              />
            </div>
            <div className="w-full md:max-w-xl lg:max-w-3xl bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                {/*================================================Form Title */}
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Get Started
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300"
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300"
                        placeholder="Doe"
                        required
                        value={regFormData.last_name || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="w-full flex gap-3">
                    <div className="w-full">
                      {/*================================================Date of Birth Input */}
                      <label
                        htmlFor="date_of_birth"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        name="date_of_birth"
                        id="date_of_birth"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300"
                        required
                        value={regFormData.date_of_birth || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-full">
                      {/*================================================Contact Input */}
                      <label
                        htmlFor="contact"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Contact
                      </label>
                      <input
                        type="number"
                        name="contact"
                        id="contact"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300"
                        placeholder="08012345678"
                        required
                        value={regFormData.contact || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  {/*================================================Email Input */}
                  <div>
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300"
                      placeholder="name@email.com"
                      required
                      value={regFormData.email || ""}
                      onChange={handleInputChange}
                    />
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300"
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
                  <button
                    type="submit"
                    className="w-full text-white bg-yellow-400/80 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Register
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

      <ScrollToTop />
    </>
  );
};

export default Register;
