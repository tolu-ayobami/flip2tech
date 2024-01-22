import { PulseLoader } from "react-spinners";
import { useAdminContext } from "../contexts/AdminContext";
import { useMaketerContext } from "../contexts/MaketerContext";

const Loader = () => {
  const {
    uploadingCourse,
    uploadingBootcamp,
    uploadingTopic,
    uploadingContent,
    payingForBootcamp,
    uploadingBootcampTopic,
    uploadingBootcampContent,
    edittingBootcamp,
    edittingTopic,
    submittingAccount,
  } = useAdminContext();

  const { uploadingschool } = useMaketerContext();
  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 bg-white flex justify-center items-center z-[100]">
      <div className="md:w-1/3 w-[80%] text-[1.2rem] md:text-[2rem] font-bold p-[25px] md:py-[20px] rounded-2xl flex flex-col gap-4 justify-center items-center">
        <PulseLoader
          color="#FFBD13"
          size={
            uploadingCourse ||
            uploadingBootcamp ||
            uploadingTopic ||
            uploadingContent ||
            uploadingBootcampTopic ||
            uploadingBootcampContent ||
            edittingBootcamp ||
            edittingTopic ||
            uploadingschool ||
            submittingAccount
              ? 20
              : 30
          }
        />
        {uploadingCourse && (
          <div>
            <p className="font-bold mt-3 text-black text-[.95rem] text-center">
              Creating Course...
            </p>
            <p className="font-light mt-1 text-black text-[.85rem] text-center">
              This may take a minute
            </p>
          </div>
        )}
        {uploadingBootcamp && (
          <div>
            <p className="font-bold mt-3 text-black text-[.95rem] text-center">
              Creating Bootcamp...
            </p>
            <p className="font-light mt-1 text-black text-[.85rem] text-center">
              This may take a minute
            </p>
          </div>
        )}
        {uploadingTopic && (
          <div>
            <p className="font-bold mt-3 text-black text-[.95rem] text-center">
              Creating Topic...
            </p>
            <p className="font-light mt-1 text-black text-[.85rem] text-center">
              This may take a minute
            </p>
          </div>
        )}
        {uploadingContent && (
          <div>
            <p className="font-bold mt-3 text-black text-[.95rem] text-center">
              Creating Content...
            </p>
            <p className="font-light mt-1 text-black text-[.85rem] text-center">
              This may take a minute
            </p>
          </div>
        )}
        {payingForBootcamp && (
          <div>
            <p className="font-bold mt-3 text-black text-[.95rem] text-center">
              Processing Enrollment...
            </p>
            <p className="font-light mt-1 text-black text-[.85rem] text-center">
              This may take a minute
            </p>
          </div>
        )}
        {uploadingBootcampTopic && (
          <div>
            <p className="font-bold mt-3 text-black text-[.95rem] text-center">
              Creating Bootcamp Topic...
            </p>
            <p className="font-light mt-1 text-black text-[.85rem] text-center">
              This may take a minute
            </p>
          </div>
        )}
        {uploadingBootcampContent && (
          <div>
            <p className="font-bold mt-3 text-black text-[.95rem] text-center">
              Creating Topic Content...
            </p>
            <p className="font-light mt-1 text-black text-[.85rem] text-center">
              This may take a minute
            </p>
          </div>
        )}
        {edittingBootcamp && (
          <div>
            <p className="font-bold mt-3 text-black text-[.95rem] text-center">
              Editting Bootcamp...
            </p>
            <p className="font-light mt-1 text-black text-[.85rem] text-center">
              This may take a minute
            </p>
          </div>
        )}
        {edittingTopic && (
          <div>
            <p className="font-bold mt-3 text-black text-[.95rem] text-center">
              Editting Bootcamp Topic...
            </p>
            <p className="font-light mt-1 text-black text-[.85rem] text-center">
              This may take a minute
            </p>
          </div>
        )}
        {uploadingschool && (
          <div>
            <p className="font-bold mt-3 text-black text-[.95rem] text-center">
              Adding school...
            </p>
            <p className="font-light mt-1 text-black text-[.85rem] text-center">
              This may take a minute
            </p>
          </div>
        )}
        {submittingAccount && (
          <div>
            <p className="font-bold mt-3 text-black text-[.95rem] text-center">
              Adding FCMB Account...
            </p>
            <p className="font-light mt-1 text-black text-[.85rem] text-center">
              This may take a minute
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Loader;
