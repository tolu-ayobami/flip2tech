/* eslint-disable react/prop-types */
const CreateSchoolForm = ({
  validationErr,
  schoolData,
  handleSchoolChange,
  imagePreview1,
  handleImageChange1,
  imagePreview2,
  handleImageChange2,
}) => {
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

  // console.log("schoolData", schoolData);

  return (
    <form className="w-full flex flex-col gap-5">
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          School Name
        </label>
        <input
          type="text"
          id="name"
          className={`bg-gray-50 border ${
            (validationErr && !schoolData?.name) ||
            schoolData?.name?.length >= 60
              ? "border-red-500"
              : "border-gray-300"
          } text-gray-900 text-[.75em] sm:text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-600 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300 block w-full`}
          placeholder="New school"
          required
          maxLength={60}
          value={schoolData.name}
          onChange={handleSchoolChange}
        />
        {schoolData?.name?.length >= 60 && (
          <p className="text-xs text-red-500 dark:text-red-400">
            Max character length reached
          </p>
        )}
      </div>

      {/* <div>
        <label
          htmlFor="bool"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Government Approved Bool
        </label>
        <input
          type="text"
          id="bool"
          className={`bg-gray-50 border ${
            (validationErr && !schoolData?.bool) || schoolData?.bool?.length >= 40
              ? "border-red-500"
              : "border-gray-300"
          } text-gray-900 text-[.75em] sm:text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300 block w-full`}
          placeholder="#####"
          required
          maxLength={50}
          value={schoolData.bool}
          onChange={handleSchoolChange}
        />
        {schoolData?.bool?.length >= 40 && (
          <p className="text-xs text-red-500 dark:text-red-400">
            Max character length reached
          </p>
        )}
      </div> */}

      <div>
        <label
          htmlFor="address"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          School Address
        </label>
        <input
          type="text"
          id="address"
          className={`bg-gray-50 border ${
            (validationErr && !schoolData?.address) ||
            schoolData?.address?.length >= 60
              ? "border-red-500"
              : "border-gray-300"
          } text-gray-900 text-[.75em] sm:text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300 block w-full`}
          placeholder="123 Humpty road"
          required
          maxLength={60}
          value={schoolData.address}
          onChange={handleSchoolChange}
        />
        {schoolData?.address?.length >= 60 && (
          <p className="text-xs text-red-500 dark:text-red-400">
            Max character length reached
          </p>
        )}
      </div>

      <div className="w-full">
        <label
          htmlFor="lga"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Local Government ARea
        </label>
        <select
          name="lga"
          id="lga"
          className={`bg-gray-50 border ${
            validationErr && !schoolData?.lga
              ? "border-red-500"
              : "border-gray-300"
          } text-gray-900 text-[.75em] sm:text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-600 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300 block w-full`}
          value={schoolData.lga || ""}
          onChange={handleSchoolChange}
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

      {/* <div className="w-full">
        <label
          htmlFor="years"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Years of Existence
        </label>
        <input
          type="years"
          name="years"
          id="years"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300"
          placeholder="3"
          required
          value={schoolData.years || ""}
          onChange={handleSchoolChange}
        />
      </div> */}

      <div>
        <label
          htmlFor="image1"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          School Image 1
        </label>
        <input
          type="file"
          id="image1"
          accept="image/png, image/jpeg, image/jpg"
          className={`bg-gray-50 border text-gray-900 text-[.75em] pl-4 sm:text-sm rounded-lg ${
            validationErr && !schoolData?.image1
              ? "border-red-500"
              : "border-gray-300"
          } focus:ring-yellow-300 focus:border-yellow-300 block w-full dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
          required
          onChange={handleImageChange1}
        />
        {imagePreview1 && (
          <img
            src={imagePreview1}
            alt="Cover Preview"
            className="mt-4 md:w-[300px] w-full"
          />
        )}
      </div>

      <div>
        <label
          htmlFor="image2"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          School Image 2
        </label>
        <input
          type="file"
          id="image2"
          accept="image/png, image/jpeg, image/jpg"
          className={`bg-gray-50 border text-gray-900 text-[.75em] pl-4 sm:text-sm rounded-lg ${
            validationErr && !schoolData?.image2
              ? "border-red-500"
              : "border-gray-300"
          } focus:ring-yellow-300 focus:border-yellow-300 block w-full dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
          required
          onChange={handleImageChange2}
        />
        {imagePreview2 && (
          <img
            src={imagePreview2}
            alt="Cover Preview"
            className="mt-4 md:w-[300px] w-full"
          />
        )}
      </div>

      {/* <div>
        <label
          htmlFor="image3"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          School Image 3
        </label>
        <input
          type="file"
          id="image3"
          accept="image/png, image/jpeg, image/jpg"
          className={`bg-gray-50 border text-gray-900 text-[.75em] pl-4 sm:text-sm rounded-lg ${
            validationErr && !schoolData?.image3
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
      </div> */}

      <div className="w-full">
        {/*================================================Contact Input */}
        <label
          htmlFor="reference_contact"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Staff Contact 1
        </label>
        <input
          type="number"
          name="reference_contact"
          id="reference_contact"
          className={`bg-gray-50 border ${
            validationErr && !schoolData?.reference_contact
              ? "border-red-500"
              : "border-gray-300"
          } text-gray-900 text-[.75em] sm:text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-600 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300 block w-full`}
          placeholder="1234567890"
          required
          value={schoolData.reference_contact || ""}
          onChange={handleSchoolChange}
        />
      </div>

      <div className="w-full">
        {/*================================================Contact Input */}
        <label
          htmlFor="reference_contact2"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Staff Contact 2
        </label>
        <input
          type="number"
          name="reference_contact2"
          id="reference_contact2"
          className={`bg-gray-50 border ${
            validationErr && !schoolData?.reference_contact2
              ? "border-red-500"
              : "border-gray-300"
          } text-gray-900 text-[.75em] sm:text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-600 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300 block w-full`}
          placeholder="0987654321"
          required
          value={schoolData.reference_contact2 || ""}
          onChange={handleSchoolChange}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          School Email Address
        </label>
        <input
          type="text"
          id="email"
          className={`bg-gray-50 border ${
            (validationErr && !schoolData?.email) ||
            schoolData?.email?.length >= 100
              ? "border-red-500"
              : "border-gray-300"
          } text-gray-900 text-[.75em] sm:text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-1000 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300 block w-full`}
          placeholder="email@email.com"
          required
          maxLength={100}
          value={schoolData?.email}
          onChange={handleSchoolChange}
        />
        {schoolData?.email?.length >= 100 && (
          <p className="text-xs text-red-500 dark:text-red-400">
            Max character length reached
          </p>
        )}
      </div>
      <div className="w-full">
        {/*================================================Contact Input */}
        <label
          htmlFor="number_of_boys"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Number of Boys
        </label>
        <input
          type="number"
          name="number_of_boys"
          id="number_of_boys"
          className={`bg-gray-50 border ${
            validationErr && !schoolData?.number_of_boys
              ? "border-red-500"
              : "border-gray-300"
          } text-gray-900 text-[.75em] sm:text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-600 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300 block w-full`}
          placeholder="49"
          required
          value={schoolData.number_of_boys || ""}
          onChange={handleSchoolChange}
        />
      </div>

      <div className="w-full">
        {/*================================================Contact Input */}
        <label
          htmlFor="number_of_girls"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Number of Girls
        </label>
        <input
          type="number"
          name="number_of_girls"
          id="number_of_girls"
          className={`bg-gray-50 border ${
            validationErr && !schoolData?.number_of_girls
              ? "border-red-500"
              : "border-gray-300"
          } text-gray-900 text-[.75em] sm:text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-600 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300 block w-full`}
          placeholder="23"
          required
          value={schoolData.number_of_girls || ""}
          onChange={handleSchoolChange}
        />
      </div>
    </form>
  );
};

export default CreateSchoolForm;
