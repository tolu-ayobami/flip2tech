/* eslint-disable react/prop-types */
const CreateCourseForm = ({
  validationErr,
  courseformData,
  handleCourseChange,
  req,
  setReq,
  addRequirement,
  requirements,
  removeReq,
  handleCourseVideoChange,
  coursevideoPreview,
  handleCourseImageChange,
  courseimagePreview,
}) => {
  return (
    <form className="w-full flex flex-col gap-5">
      <div>
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Course title
        </label>
        <input
          type="text"
          id="title"
          className={`bg-gray-50 border text-gray-900 text-[.75em] sm:text-sm rounded-lg ${
            validationErr && !courseformData?.title
              ? "border-red-500"
              : "border-gray-300"
          } focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 placeholder:text-gray-400 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
          placeholder="New Bootcamp"
          maxLength={40}
          value={courseformData.title}
          onChange={handleCourseChange}
        />
      </div>
      <div>
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Course description
        </label>
        <textarea
          type="text"
          id="description"
          className={`bg-gray-50 h-[120px] border text-gray-900 text-[.75em] sm:text-sm rounded-lg ${
            validationErr && !courseformData?.description
              ? "border-red-500"
              : "border-gray-300"
          } focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 placeholder:text-gray-400 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
          placeholder="This is a New Bootcamp"
          value={courseformData.description}
          onChange={handleCourseChange}
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="req"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Requirements
        </label>
        <div className="w-full flex gap-4 items-center">
          <input
            type="text"
            id="req"
            className={`bg-gray-50 border text-gray-900 text-[.75em] sm:text-sm rounded-lg ${
              validationErr && !courseformData?.requirements
                ? "border-red-500"
                : "border-gray-300"
            } focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 placeholder:text-gray-400 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
            placeholder="E.g Computer"
            value={req}
            onChange={(e) => setReq(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              addRequirement();
            }}
            className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
          >
            Add
          </button>
        </div>
        {validationErr && !courseformData?.requirements && (
          <p className="text-red-500 text-[.95rem] font-medium mt-3 text-end w-full">
            Add at least one requirement
          </p>
        )}
        {requirements?.length > 0 && (
          <ul className="w-full flex gap-2 flex-wrap mt-2">
            {requirements.map((item, index) => (
              <li
                key={index}
                className="text-white bg-black/80 px-3 py-1 text-[.85rem] rounded-full flex gap-1 items-center"
              >
                {item}
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    removeReq(item);
                  }}
                  className="p-[2px] rounded-full bg-white/80 cursor-pointer"
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
        )}
      </div>
      <div className="w-full flex gap-4 md:flex-row flex-col">
        <div className="w-full">
          <label
            htmlFor="max_students"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Max students
          </label>
          <input
            type="number"
            id="max_students"
            className={`bg-gray-50 border text-gray-900 text-[.75em] sm:text-sm rounded-lg ${
              validationErr && !courseformData?.max_students
                ? "border-red-500"
                : "border-gray-300"
            } focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 placeholder:text-gray-400 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
            placeholder="100"
            value={courseformData.max_students}
            onChange={handleCourseChange}
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="difficulty"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Difficulty
          </label>
          <select
            id="difficulty"
            className={`bg-gray-50 border text-gray-900 text-[.75em] sm:text-sm rounded-lg ${
              validationErr && !courseformData?.difficulty
                ? "border-red-500"
                : "border-gray-300"
            } focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 placeholder:text-gray-400 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
            required
            value={courseformData.difficulty}
            onChange={handleCourseChange}
          >
            <option value="" hidden>
              Select
            </option>
            <option value="Beginner">Beginner</option>
            <option value="All Levels">All Levels</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            {/* Add more course types as needed */}
          </select>
        </div>
      </div>

      <div className="w-full flex gap-4 md:flex-row flex-col">
        <div className="w-full">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category
          </label>
          <select
            id="category"
            className={`bg-gray-50 border text-gray-900 text-[.75em] sm:text-sm rounded-lg ${
              validationErr && !courseformData?.category
                ? "border-red-500"
                : "border-gray-300"
            } focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 placeholder:text-gray-400 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
            value={courseformData.category}
            onChange={handleCourseChange}
          >
            <option value="" hidden>
              Select
            </option>
            <option value="" hidden>
              Select
            </option>
            <option value="Robotics">Robotics</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile App Development">
              Mobile App Development
            </option>
            <option value="Data Science and Analytics">
              Data Science and Analytics
            </option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Cloud Computing">Cloud Computing</option>
            <option value="Artificial Intelligence and Machine Learning">
              Artificial Intelligence and Machine Learning
            </option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Project Management">Project Management</option>
            <option value="Blockchain and Cryptocurrency">
              Blockchain and Cryptocurrency
            </option>
            <option value="Internet of Things (IoT)">
              Internet of Things (IoT)
            </option>
            <option value="Game Design and Development">
              Game Design and Development
            </option>
          </select>
        </div>
        <div className="w-full">
          <label
            htmlFor="course_type"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Course type
          </label>
          <select
            id="course_type"
            className={`bg-gray-50 border text-gray-900 text-[.75em] sm:text-sm rounded-lg ${
              validationErr && !courseformData?.course_type
                ? "border-red-500"
                : "border-gray-300"
            } focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 placeholder:text-gray-400 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
            value={courseformData.course_type}
            onChange={handleCourseChange}
          >
            <option value="" hidden>
              Select
            </option>
            <option value="" hidden>
              Select
            </option>
            <option value="Free">Free</option>
            <option value="Paid">Paid</option>
          </select>
        </div>
      </div>
      <div className="w-full flex gap-4 md:flex-row flex-col">
        <div className="w-full">
          <label
            htmlFor="q_and_a"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Q and A
          </label>
          <select
            id="q_and_a"
            className={`bg-gray-50 border text-gray-900 text-[.75em] sm:text-sm rounded-lg ${
              validationErr && !courseformData?.q_and_a
                ? "border-red-500"
                : "border-gray-300"
            } focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 placeholder:text-gray-400 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
            value={courseformData.q_and_a}
            onChange={handleCourseChange}
          >
            <option value="" hidden>
              Select
            </option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
      </div>
      <div>
        <label
          htmlFor="intro_video"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Intro video
        </label>
        <input
          type="file"
          id="intro_video"
          accept="video/mp4"
          className={`bg-gray-50 border text-gray-900 text-[.75em] pl-4 sm:text-sm rounded-lg ${
            validationErr && !courseformData?.intro_video
              ? "border-red-500"
              : "border-gray-300"
          } focus:ring-yellow-300 focus:border-yellow-300 block w-full placeholder:text-gray-400 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
          onChange={handleCourseVideoChange}
        />
        {coursevideoPreview && (
          <video
            src={coursevideoPreview}
            controls
            className="mt-4 md:w-[300px] w-full"
          />
        )}
      </div>

      <div>
        <label
          htmlFor="course_thumbnail"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Course thumbnail
        </label>
        <input
          type="file"
          id="course_thumbnail"
          accept="image/png, image/jpeg, image/jpg"
          className={`bg-gray-50 border text-gray-900 text-[.75em] pl-4 sm:text-sm rounded-lg ${
            validationErr && !courseformData?.course_thumbnail
              ? "border-red-500"
              : "border-gray-300"
          } focus:ring-yellow-300 focus:border-yellow-300 block w-full placeholder:text-gray-400 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
          onChange={handleCourseImageChange}
        />
        {courseimagePreview && (
          <img
            src={courseimagePreview}
            alt="Cover Preview"
            className="mt-4 md:w-[300px] w-full"
          />
        )}
      </div>
    </form>
  );
};

export default CreateCourseForm;
