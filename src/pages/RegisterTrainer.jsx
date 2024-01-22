import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";
import skills from "../data/skills.json";

const RegisterTrainer = () => {
  const {
    loader,
    handleTrainerInputChange,
    trainerRegFormData,
    registerTrainer,
    validationErr,
    setValidationErr,
    userExists,
    selectedSkills,
    setSelectedSkills,
    setPageErr,
    pageErr,
    showPassword,
    toggleShowPsw,
  } = useAppContext();

  console.log("trainerRegFormData", trainerRegFormData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      trainerRegFormData?.years_of_experience &&
      trainerRegFormData?.skills?.length > 0 &&
      trainerRegFormData?.about_me &&
      trainerRegFormData?.username &&
      trainerRegFormData?.password
    ) {
      await registerTrainer(trainerRegFormData);
    } else {
      setValidationErr("All fields are required");
    }
  };

  const [page2, setPage2] = useState(false);

  function toggleNext() {
    if (
      trainerRegFormData?.first_name &&
      trainerRegFormData?.last_name &&
      trainerRegFormData?.email &&
      trainerRegFormData?.date_of_birth &&
      trainerRegFormData?.contact
    ) {
      setPage2((prev) => !prev);
    } else {
      setPageErr("All fields are required");
    }
  }

  const [searchTerm, setSearchTerm] = useState("");

  // Handler for updating the search term state
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      return;
    }

    if (selectedSkills.length >= 5) {
      return;
    }

    setSelectedSkills((prevSelectedSkills) => [...prevSelectedSkills, skill]);
    setSearchTerm("");
  };

  const filteredSkills = skills.filter((skill) =>
    skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRemoveSkill = (skill) => {
    setSelectedSkills((prevSelectedSkills) =>
      prevSelectedSkills.filter((selectedSkill) => selectedSkill !== skill)
    );
  };

  return (
    <>
      {loader && <Loader />}

      <main className="w-full h-screen text-black/80 font-poppins bg-register bg-cover bg-no-repeat bg-bottom overflow-hidden">
        <section className="w-full h-full bg-black/50 dark:bg-gray-900/50 overflow-y-auto pb-20">
          <Link to="/dashboard-trainer">
            <p className="text-white underline hover:text-yellow-300 text-[.85rem] ml-4 mt-4 cursor-pointer">
              Back to Dashboard
            </p>
          </Link>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="flex gap-2 items-center bg-white rounded-lg mb-5">
              <img
                alt=""
                src="/images/logo.png"
                className="w-[150px] h-auto md:w-[200px] md:h-auto"
              />
            </div>
            {!page2 && (
              <div className="w-full md:max-w-xl lg:max-w-3xl bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Get Started as an Instructor
                  </h1>
                  <div className="w-full justify-center flex items-center gap-1">
                    <div className="w-5 h-5 rounded-full bg-yellow-300 border border-yellow-300"></div>
                    <div className="w-9 h-1 rounded-full bg-gray-400/80"></div>
                    <div className="w-5 h-5 rounded-full bg-white border border-gray-400"></div>
                  </div>
                  <form
                    className="space-y-4 md:space-y-6"
                    //   onSubmit={handleSubmit}
                  >
                    <div className="w-full flex gap-3">
                      <div className="w-full">
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
                          value={trainerRegFormData.first_name || ""}
                          onChange={handleTrainerInputChange}
                        />
                      </div>
                      <div className="w-full">
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
                          value={trainerRegFormData.last_name || ""}
                          onChange={handleTrainerInputChange}
                        />
                      </div>
                    </div>
                    <div className="w-full flex md:flex-row flex-col gap-3">
                      <div className="w-full">
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
                          value={trainerRegFormData.date_of_birth || ""}
                          onChange={handleTrainerInputChange}
                        />
                      </div>
                      <div className="w-full">
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
                          value={trainerRegFormData.contact || ""}
                          onChange={handleTrainerInputChange}
                        />
                      </div>
                    </div>
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
                        value={trainerRegFormData.email || ""}
                        onChange={handleTrainerInputChange}
                      />
                    </div>

                    {pageErr && (
                      <div className="w-full p-2 my-2 text-[.9rem] text-red-500 border border-red-500 rounded-md">
                        {pageErr}
                      </div>
                    )}

                    {userExists && (
                      <div className="w-full p-2 my-2 text-[.9rem] text-red-500 border border-red-500 rounded-md">
                        {userExists}
                      </div>
                    )}

                    <button
                      // type="submit"
                      onClick={toggleNext}
                      className="w-fit text-white bg-yellow-400/80 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-7 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Next
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have a trainer account?{" "}
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
            )}

            {/*=========================================================== page 2 */}
            {page2 && (
              <div className="w-full md:max-w-xl lg:max-w-3xl bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Get Started as A Trainer
                  </h1>
                  <div className="w-full justify-center flex items-center gap-1">
                    <div className="w-5 h-5 rounded-full bg-yellow-300 border border-yellow-300"></div>
                    <div className="w-9 h-1 rounded-full bg-gray-400/80"></div>
                    <div className="w-5 h-5 rounded-full bg-yellow-300 border border-yellow-300"></div>
                  </div>
                  <form
                    className="space-y-4 md:space-y-6"
                    //   onSubmit={handleSubmit}
                  >
                    <div className="w-full flex md:flex-row flex-col gap-5">
                      <div className="w-full">
                        <label
                          htmlFor="years_of_experience"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Years of Experience
                        </label>
                        <input
                          type="number"
                          name="years_of_experience"
                          id="years_of_experience"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300"
                          placeholder="3"
                          required
                          value={trainerRegFormData.years_of_experience || ""}
                          onChange={handleTrainerInputChange}
                        />
                      </div>
                      <div className="relative w-full">
                        <label
                          htmlFor="skills"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Skills{" "}
                          <span className="text-gray-500">
                            (Select a maximum of 5 skills)
                          </span>
                        </label>
                        <input
                          type="text"
                          name="skills"
                          id="skills"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300"
                          placeholder="Search skill, e.g javascript"
                          required
                          value={searchTerm}
                          onChange={handleSearch}
                        />
                        {searchTerm && (
                          <ul className="w-full min-h-fit max-h-[130px] p-3 rounded-lg border border-gray-300 overflow-y-auto absolute bg-white">
                            {filteredSkills.map((skill) => (
                              <li
                                key={skill}
                                onClick={() => handleSelectSkill(skill)}
                                className="p-1 hover:bg-yellow-300/40 text-[.8rem] cursor-pointer"
                              >
                                {skill}
                              </li>
                            ))}
                          </ul>
                        )}
                        {selectedSkills?.length > 0 && (
                          <div className="w-full mt-3">
                            <h3>Selected Skills:</h3>
                            <ul className="w-full flex gap-2 flex-wrap">
                              {selectedSkills.map((selectedSkill) => (
                                <li
                                  key={selectedSkill}
                                  className="text-white bg-black/80 px-3 py-1 text-[.85rem] rounded-full flex gap-1 items-center"
                                >
                                  {selectedSkill}
                                  <div
                                    onClick={() =>
                                      handleRemoveSkill(selectedSkill)
                                    }
                                    className="p-[2px] rounded-full bg-white/80"
                                  >
                                    <img
                                      alt=""
                                      src="/images/icons8-close-50.png"
                                      className="w-2 h-2"
                                    />
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="about_me"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        About me
                      </label>
                      <textarea
                        type="text"
                        name="about_me"
                        id="about_me"
                        className="h-[80px] bg-gray-50 border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300"
                        required
                        value={trainerRegFormData.about_me || ""}
                        onChange={handleTrainerInputChange}
                      />
                    </div>
                    <div className="w-full flex gap-3">
                      <div className="w-full">
                        <label
                          htmlFor="username"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300"
                          placeholder="username"
                          required
                          value={trainerRegFormData.username || ""}
                          onChange={handleTrainerInputChange}
                        />
                      </div>
                      <div className="w-full">
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
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300"
                          placeholder="********"
                          required
                          value={trainerRegFormData.password || ""}
                          onChange={handleTrainerInputChange}
                        />
                        <p
                          onClick={toggleShowPsw}
                          className="absolute right-2 top-[53%] cursor-pointer hover:text-yellow-400 font-medium"
                        >
                          {showPassword ? "Hide" : "Show"}
                        </p>
                      </div>
                    </div>

                    {validationErr && (
                      <div className="w-full p-2 my-2 text-[.9rem] text-red-500 border border-red-500 rounded-md">
                        {validationErr}
                      </div>
                    )}

                    {userExists && (
                      <div className="w-full p-2 my-2 text-[.9rem] text-red-500 border border-red-500 rounded-md">
                        {userExists}
                      </div>
                    )}

                    <div className="flex gap-2">
                      <button
                        // type="submit"
                        onClick={toggleNext}
                        className="w-fit text-black bg-inherit hover:bg-yellow-300 border border-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-7 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        Previous
                      </button>
                      <button
                        onClick={(e) => handleSubmit(e)}
                        className="w-fit text-white bg-yellow-400/80 hover:bg-yellow-300 border border-yellow-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-7 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        Submit
                      </button>
                    </div>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have a trainer account?{" "}
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
            )}
          </div>
        </section>
      </main>

      <ScrollToTop />
    </>
  );
};

export default RegisterTrainer;
