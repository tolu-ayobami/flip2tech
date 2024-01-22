import { useNavigate, useParams } from "react-router-dom";
import programData from "../data/program.json";

const PaymentSuccess = () => {
  const { title, reference } = useParams();
  const currentCourse = programData?.filter(
    (item) => item?.title?.replace(/\//g, "_") === title
  )[0];

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const amOrPm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  const time =
    (hours % 12 || 12) +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes +
    " " +
    amOrPm;

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date().toLocaleDateString(undefined, options);

  const data = JSON.parse(localStorage.getItem("refData"));
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full min-h-screen bg-white flex justify-center py-10 px-3 relative">
        <div>
          <div className="w-full md:w-[500px] flex flex-col items-center gap-7 border border-black/10 rounded-lg">
            <img
              alt=""
              src="/images/success.png"
              className="w-[100px] md:w-[150px] h-auto relative top-[-20px]"
            />
            <p className="text-center text-[1.5rem] md:text-[1.75rem] font-bold text-[#179100] px-3 md:px-5">
              PAYMENT CONFIRMATION SLIP
            </p>
            <div className="px-3 md:px-5">
              <p className="text-[#179100] mb-5 text-center">
                Your Payment was successful
              </p>
              <p className="hidden md:block">
                ===== x ===== x ===== x ===== x ===== x ===== x =====
              </p>
              <p className="block md:hidden">===== x ===== x ===== x =====</p>
            </div>

            <div className="w-full flex justify-between px-3 md:px-5">
              <div className="w-[60%]">
                <p className="font-bold">Name</p>
                <p>
                  {data?.first_name} {data?.last_name}
                </p>
              </div>
              <div className="w-[40%]">
                <p className="font-bold">Date</p>
                <p>{formattedDate}</p>
              </div>
            </div>

            <div className="w-full flex justify-between mt-5 px-3 md:px-5">
              <div className="w-[60%]">
                <p className="font-bold">Program</p>
                <p>{data?.field_of_study}</p>
              </div>
              <div className="w-[40%]">
                <p className="font-bold">Time</p>
                <p>{time}</p>
              </div>
            </div>

            <div className="w-full flex justify-between mt-5 px-3 md:px-5">
              <div className="w-[60%]">
                <p className="font-bold">Duration</p>
                <p>{data?.duration}</p>
              </div>
              <div className="w-[40%]">
                <p className="font-bold">Branch</p>
                <p>Jakande Gate</p>
              </div>
            </div>

            <div className="w-full flex justify-between mt-5 px-3 md:px-5">
              <div className="w-[60%]">
                <p className="font-bold">Transaction ID</p>
                <p className="text-[#179100]">{reference}</p>
              </div>
              <div className="w-[40%]">
                <p className="font-bold">Amount</p>
                <p className="text-[#179100] font-bold text-[1.5rem]">
                  {data?.amount_paid}
                </p>
              </div>
            </div>
            <p className="px-3 md:px-5">
              Kindly go to your chosen branch with this slip printed
            </p>

            <img
              alt=""
              src="/images/Receipt Footer.png"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full flex justify-center flex-col md:flex-row gap-3 mt-14 px-3 md:px-5">
            <button
              onClick={() => {
                const url = `/course/${currentCourse?.title}/enroll-success/${reference}/download`;
                window.open(url, "_blank");
              }}
              // onClick={() =>
              //   navigate(
              //     `/course/${currentCourse?.title}/enroll-success/${reference}/download`
              //   )
              // }
              className="w-fit px-5 py-2 lg:py-2 flex items-center gap-2 bg-gradient-to-r from-[#ffbb00] to-[#faf000] hover:opacity-80 uppercase md:text-[1rem] text-[#000103]"
            >
              Download PDF
              <img
                alt="icon"
                className="w-7 h-7"
                src="/images/icons8-pdf-48.png"
              />
            </button>
            <button
              onClick={() => navigate(`/`)}
              className="w-fit px-5 py-2 lg:py-2 flex items-center gap-2 bg-gray-400 hover:opacity-80 uppercase md:text-[1rem] text-[#000103]"
            >
              Back to home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
