/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
// import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
// import { useAdminContext } from "../contexts/AdminContext";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import KidsCourseCard from "../components/KidsCourseCard";
import { useState } from "react";
import { PulseLoader } from "react-spinners";
import KidsCarousel from "../components/KidsCarousel";
// import { usePaystackPayment } from "react-paystack";

const Kids = () => {
  const { loader, userData, allBootcampsRaw, userDetails } = useAppContext();

  // console.log("allBootcampsRaw", allBootcampsRaw);
  // console.log("email", userDetails);

  const allKidsBootcamps = allBootcampsRaw?.filter(
    (item) => item?.age_range === "8-12"
  );
  // const { allCourses } = useAdminContext();

  // ======================================================Initialize AOS library for animations
  useEffect(() => {
    AOS.init();
  }, []);

  //====================================================================to initialize payment

  // paystack integration
  // const paystackConfig = {
  //   reference: new Date().getTime().toString(),
  //   email: `khalid@gmail.com`, //their mail
  //   amount: `100000`, // amount is in Kobo
  //   publicKey: "pk_test_546f34031486c247144df63b0fe2fe35623ad4da", // pk_test_546f34031486c247144df63b0fe2fe35623ad4da // pk_live_429fb119795f9ff6ee25c112b9c8291f7ebe24e4,
  //   url: "https://paystack.com/pay/jwho9o1qhy", // Subscription page URL
  // };

  // // to init paystack
  // const initializePayment = usePaystackPayment(paystackConfig);

  // const onSuccess = (transaction) => {
  //   console.log("transaction", transaction);

  //   setLoader(true);

  // };

  // const callback = (response) => {
  //   console.log("response", response);
  //   alert("Payment complete! Reference: " + reference);

  //   const data = {
  //     ride_path: ride_path,
  //     price: detailsForm?.seats
  //       ? `${currentTime?.price * detailsForm?.seats}`
  //       : `${currentTime?.price}`,
  //     time: currentTime?.time,
  //     terminal: detailsForm?.terminal,
  //     slot: Number(detailsForm?.seats),
  //     reference: "default", //transaction?.reference,
  //     message: "approved", //transaction?.message,
  //     status: "success", //transaction?.status,
  //   };

  // to verify payment.
  //   verifyPayment(data)
  //     .then((res) => setBookingCode(res?.booking_code))
  //     .catch((err) => console.log(err));
  // };

  // const onClose = () => {
  //   alert("Transaction was not completed, window closed.");
  // };

  const [loading, setLoading] = useState(true);
  const [openSubscribe, setOpenSubscribe] = useState(false);

  function handleOpenSub() {
    setOpenSubscribe((prev) => !prev);
    setLoading(true);

    // initializePayment(callback, onClose);
  }

  const handleIframeLoad = () => {
    setLoading(false);
  };

  const handleIframeMessage = (event) => {
    // Ensure that the message is coming from the Paystack subscription page
    if (event.origin === "https://paystack.com/pay/jwho9o1qhy") {
      const eventData = JSON.parse(event.data);

      // Check for subscription.create event
      if (eventData.event === "subscription.create") {
        console.log("Subscription Created!");
        // Handle the subscription creation here
        // You can perform further actions like updating the UI
      }

      // Check for charge.success event
      if (eventData.event === "charge.success") {
        console.log("Transaction Successful!");
        // Handle the successful transaction here
        // You can perform further actions like showing a success message or updating the UI
      }
    }
  };

  useEffect(() => {
    // Listen for the "message" event from the iframe's contentWindow
    window.addEventListener("message", handleIframeMessage);

    return () => {
      // Cleanup the event listener when the component unmounts
      window.removeEventListener("message", handleIframeMessage);
    };
  }, []);

  return (
    <>
      {loader && <Loader />}

      {/* the payment pop up page */}
      {openSubscribe && (
        <section className="w-full min-h-screen">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
              <PulseLoader color="#FFBD13" size={15} />
            </div>
          )}
          <button
            onClick={handleOpenSub}
            className="px-5 py-1 bg-white rounded-md text-black hover:bg-yellow-300 border-2 border-yellow-300 absolute top-3 left-3 text-[.75rem]"
          >
            Cancel Payment
          </button>
          <iframe
            src="https://paystack.com/pay/jwho9o1qhy"
            title="Paystack Payment"
            className="w-full min-h-screen"
            onLoad={handleIframeLoad}
          ></iframe>
        </section>
      )}

      {!openSubscribe && (
        <>
          <Header />
          <main className="w-full text-black/80 font-poppins">
            <section className="pt-[60px] md:pt-[80px] bg-white/90">
              <section className="px-3 md:px-20 lg:px-[250px]">
                {/* Background image */}
                <div className={`w-full md:h-[500px] min-h-[350px] relative`}>
                  <div className="w-full h-full p-3 md:p-0 absolute top-0 left-0 flex justify-center items-center bg-gradient-to-r from-yellow-400/50 to-white">
                    <div className="text-black absolute top-3 left-3 md:top-8 md:left-10 md:pb-2">
                      <h1 className="text-[1.75rem] md:text-[2.75rem] font-bold font-petch">
                        Kids
                      </h1>
                    </div>
                    {/* Conditional greeting based on user data */}
                    <div className="w-full p-4 md:p-6 mt-auto flex md:flex-row flex-col-reverse justify-between items-end">
                      <div className="w-[100%] md:w-[500px] h-[250px]">
                        <KidsCarousel handleOpenSub={handleOpenSub} />
                      </div>
                      <div className="h-auto md:h-full md:w-[40%] min-w-[300px] absolute right-0 bottom-0 bg-kids bg-cover bg-no-repeat bg-center"></div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="px-3 md:px-20 lg:px-[250px] min-h-[200px] py-[100px] relative">
                <img
                  alt=""
                  src="/images/sammy-lettering-learn-at-home.png"
                  className="w-[90px] absolute bottoptom-[-100px] left-[230px] hidden lg:block swing"
                />
                <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-bold font-petch text-center">
                  Our Kids Bootcamps
                </h1>
                <p className="text-[1.15rem] lg:text-[1.5rem] tracking-wide font-medium text-center border-b border-yellow-300/50 pb-2">
                  Enroll today to enroll now and get access to all kids courses
                </p>

                {allKidsBootcamps?.length > 0 && userData?.access && (
                  <>
                    <div className="w-full mt-8 flex gap-4 md:flex-wrap overflow-x-auto md:overflow-x-hidden px-4 py-7 overflow-y-hidden">
                      {allKidsBootcamps?.slice(0, 5)?.map((item, index) => {
                        return (
                          <KidsCourseCard
                            item={item}
                            key={index}
                            handleOpenSub={handleOpenSub}
                          />
                        );
                      })}
                    </div>
                  </>
                )}
              </section>

              {/* ===============================================================================Our vision Section */}
              <section className="w-full min-h-[450px] relative bg-foot bg-bottom bg-cover">
                <div className="w-full min-h-[450px] px-3 md:px-20 lg:px-[250px] py-10 bg-black/60">
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="text-[1.75rem] md:text-[3.5rem] text-white/90 font-petch mb-3"
                  >
                    OUR VISION
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                    className="w-full md:w-[70%] text-white text-[1.1rem] md:text-[1.25rem] tracking-wide"
                  >
                    As a mission-driven organization, FlipToTech is dedicated to
                    realizing its vision of a world where every individual can
                    acquire technical skills and knowledge, regardless of
                    financial constraints or geographical limitations.
                    FlipToTech believes in removing barriers to education and
                    empowering learners to unlock their potential in the field
                    of technology.
                  </p>
                  <button
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                    className="px-10 py-2 mt-8 bg-[#FFBD13] uppercase text-[1rem] text-black border border-black rounded-md"
                  >
                    Learn More
                  </button>
                </div>
              </section>
            </section>
          </main>
          {/* Scroll to Top component */}
          <ScrollToTop />
          {/* Footer Component */}
          <Footer />
        </>
      )}
    </>
  );
};

export default Kids;
