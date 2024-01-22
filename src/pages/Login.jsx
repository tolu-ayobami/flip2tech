/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import Loader from "../components/Loader";
import ToastMod from "../components/ToastMod";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";

const Login = () => {
  const {
    loader,
    handleLoginInputChange,
    loginFormData,
    login,
    validationErr,
    setValidationErr,
    regSuccess,
    invalidCred,
    showPassword,
    toggleShowPsw,
    tinyLoader,
  } = useAppContext();

  //================================================Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loginFormData?.email && loginFormData?.password) {
      await login(loginFormData);
    } else {
      setValidationErr("All fields are required");
    }
  };

  // console.log("tinyLoader", tinyLoader);

  return (
    <>
      {loader && <Loader />}

      {/*================================================Display toast message if registration was successful */}
      {regSuccess && (
        <div className="w-[300px]">
          <ToastMod message="Signed up successfully" />
        </div>
      )}

      <main className="w-full h-screen text-black/80 font-poppins bg-login bg-cover bg-no-repeat bg-bottom overflow-hidden">
        <section className="w-full h-full bg-black/50 dark:bg-gray-900/50 overflow-y-auto">
          {/*================================================Link to navigate back to the Home page */}
          <Link to="/">
            <p className="text-white underline hover:text-yellow-300 text-[.85rem] ml-4 mt-4 cursor-pointer">
              Back to homepage
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
            <div className="w-full md:max-w-xl bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                {/*================================================Form Title */}
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSubmit}
                >
                  {/*================================================Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className={`bg-gray-50 border text-gray-900 text-[.75em] sm:text-sm rounded-lg ${
                        invalidCred ? "border-red-500" : "border-gray-300"
                      } focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
                      placeholder="name@email.com"
                      required
                      value={loginFormData.email || ""}
                      onChange={handleLoginInputChange}
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
                      className={`bg-gray-50 border text-gray-900 text-[.75em] sm:text-sm rounded-lg ${
                        invalidCred ? "border-red-500" : "border-gray-300"
                      } focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-300 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
                      required
                      value={loginFormData.password || ""}
                      onChange={handleLoginInputChange}
                    />
                    <p
                      onClick={toggleShowPsw}
                      className="absolute right-2 top-[53%] cursor-pointer hover:text-yellow-400 font-medium"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </p>
                  </div>
                  {/*================================================Remember Me and Forgot Password */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox" cla
                         ssName="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="remember"
                          className="text-gray-500 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    {/* <a
                      href="#"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </a> */}
                  </div>
                  {/*================================================Validation Error Messages */}
                  {validationErr && (
                    <div className="w-full p-2 my-2 text-red-500 border border-red-500 rounded-md">
                      {validationErr}
                    </div>
                  )}
                  {invalidCred && (
                    <div className="w-full p-2 my-2 text-[.9rem] text-red-500 border border-red-500 rounded-md">
                      {invalidCred}
                    </div>
                  )}
                  {/*================================================Submit Button */}
                  <button
                    type="submit"
                    className="w-full text-white bg-yellow-400/80 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex justify-center items-center gap-2"
                  >
                    {tinyLoader ? "Procesing" : "Sign In"}
                    {tinyLoader && <ClipLoader color="#fff" size={20} />}
                  </button>
                  {/*================================================Sign Up Link */}
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <Link
                      to="/register"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign up
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

export default Login;
