/* eslint-disable react/prop-types */
const EditBootcampForm = ({
  validationErr,
  formData,
  handleBootcampChange,
  handleVideoChange,
  videoPreview,
  handleImageChange,
  imagePreview,
}) => {
  const defaultPrice = formData.price?.split(" ")[1]?.split(".")[0];
  return (
    <form className="w-full flex flex-col gap-5">
      <div>
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Bootcamp title
        </label>
        <input
          type="text"
          id="title"
          className={`bg-gray-50 border text-gray-900 text-[.75em] sm:text-sm rounded-lg ${
            (validationErr && !formData?.title) || formData?.title?.length >= 40
              ? "border-red-500"
              : "border-gray-300"
          } focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
          placeholder="New Bootcamp"
          required
          value={formData.title}
          onChange={handleBootcampChange}
        />
        {formData?.title?.length >= 40 && (
          <p className="text-xs text-red-500 dark:text-red-400">
            Max character length reached
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Bootcamp description
        </label>
        <textarea
          type="text"
          id="description"
          className={`bg-gray-50 h-[200px] border text-gray-900 text-[.75em] sm:text-sm rounded-lg ${
            (validationErr && !formData?.description) ||
            formData?.description?.length >= 200
              ? "border-red-500"
              : "border-gray-300"
          } focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
          placeholder="This is a New Bootcamp"
          required
          maxLength={200}
          value={formData.description}
          onChange={handleBootcampChange}
        />
        {formData?.description?.length >= 200 && (
          <p className="text-xs text-red-500 dark:text-red-400">
            Max character length reached
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="cover_video"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Replace Cover video
        </label>
        <input
          type="file"
          id="cover_video"
          accept="video/mp4"
          className={`bg-gray-50 border text-gray-900 text-[.75em] pl-4 sm:text-sm rounded-lg ${
            validationErr && !formData?.cover_video
              ? "border-red-500"
              : "border-gray-300"
          } focus:ring-yellow-300 focus:border-yellow-300 block w-full dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
          required
          onChange={handleVideoChange}
        />
        {videoPreview && (
          <video
            src={videoPreview}
            controls
            className="mt-4 md:w-[300px] w-full"
          />
        )}
      </div>

      <div>
        <label
          htmlFor="cover_image"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Replace Cover Image
        </label>
        <input
          type="file"
          id="cover_image"
          accept="image/png, image/jpeg, image/jpg"
          className={`bg-gray-50 border text-gray-900 text-[.75em] pl-4 sm:text-sm rounded-lg ${
            validationErr && !formData?.cover_image
              ? "border-red-500"
              : "border-gray-300"
          } focus:ring-yellow-300 focus:border-yellow-300 block w-full dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
          required
          onChange={handleImageChange}
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Cover Preview"
            className="mt-4 md:w-[300px] w-full"
          />
        )}
      </div>

      <div>
        <label
          htmlFor="price"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Bootcamp price
        </label>
        <input
          type="number"
          id="price"
          className={`bg-gray-50 border text-gray-900 text-[.75em] sm:text-sm rounded-lg ${
            validationErr && !formData?.price
              ? "border-red-500"
              : "border-gray-300"
          } focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
          placeholder="1000"
          required
          value={defaultPrice}
          onChange={handleBootcampChange}
        />
      </div>

      <div>
        <label
          htmlFor="learning_method"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Program type
        </label>
        <select
          id="learning_method"
          className={`bg-gray-50 border text-gray-900 text-[.75em] sm:text-sm rounded-lg ${
            validationErr && !formData?.learning_method
              ? "border-red-500"
              : "border-gray-300"
          } focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
          required
          value={formData.learning_method}
          onChange={handleBootcampChange}
        >
          <option value="" hidden>
            Select program type
          </option>
          <option value="Online BootCamp">Online BootCamp</option>
          <option value="Physical BootCamp">Physical BootCamp</option>
          <option value="Hybrid BootCamp">Hybrid BootCamp</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="age_range"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Age Range
        </label>
        <select
          id="age_range"
          className={`bg-gray-50 border text-gray-900 text-[.75em] sm:text-sm rounded-lg ${
            validationErr && !formData?.age_range
              ? "border-red-500"
              : "border-gray-300"
          } focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
          required
          value={formData.age_range}
          onChange={handleBootcampChange}
        >
          <option value="" hidden>
            Select Age Range
          </option>
          <option value="8-12">8-12</option>
          <option value="13-18">13-18</option>
          <option value="19-25">19-25</option>
        </select>
      </div>
    </form>
  );
};

export default EditBootcampForm;
