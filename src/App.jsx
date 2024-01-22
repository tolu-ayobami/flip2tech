// Import necessary dependencies
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Loader from "./components/Loader";
import { useAppContext } from "./contexts/AppContext";
import PaymentSuccess from "./pages/PaymentSuccess";
import ReceiptPageCont from "./pages/ReceiptPageCont";
import TagManager from "react-gtm-module";
import VolunteerDashboard from "./pages/dashboard/volunteer-dashboard";
import StudentDashboard from "./pages/dashboard/student-dashboard";
import SchoolRegistration from "./pages/dashboard/school-registration";
import Volunteerlogin from "./pages/dashboard/volunteerlogin";
import Volunteerregistration from "./pages/dashboard/volunteerregistration";
import Volunteerreg1 from "./pages/dashboard/volunteerreg1";
import Volunteerreg2 from "./pages/dashboard/volunteerreg2";
import Volunteerreg3 from "./pages/dashboard/volunteerreg3";
import Volunteerreg4 from "./pages/dashboard/volunteerreg4";
import Thankyoupage from "./pages/dashboard/thankyoupage";
import Emailverify from "./pages/dashboard/emailverificationform";
import InstructorDashboard from "./pages/dashboard/instructordashboard";
import GetStarted from "./pages/dashboard/getstartedpage";
import Home from "./pages/dashboard/gethomepage";
import Selectionpage from "./pages/dashboard/selectionpagge";
import Form from "./pages/dashboard/progressbar/form";


// Lazy-loaded components
// const Homepage = lazy(() => import("./pages/Homepage"));
const Homepage2 = lazy(() => import("./pages/Homepage2"));
const Courses = lazy(() => import("./pages/Courses"));
const VolunteerPage = lazy(() => import("./pages/VolunteerPage"));
const KidsPage = lazy(() => import("./pages/KidsPage"));
const CourseDetails2 = lazy(() => import("./pages/CourseDetails2"));
const RegisterPhysical = lazy(() => import("./pages/RegisterPhysical"));

const BootcampDetails = lazy(() => import("./pages/BootcampDetails"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const KidsPaymentSuccess = lazy(() => import("./pages/KidsPaymentSuccess"));
const VolunteerPaymentSuccess = lazy(() =>
  import("./pages/VolunteerPaymentSuccess")
);
const AllProgrammes = lazy(() => import("./pages/AllProgrammes"));

const RegisterTrainer = lazy(() => import("./pages/RegisterTrainer"));
const RegisterMaketer = lazy(() => import("./pages/RegisterMaketer"));
const RegisterCohort = lazy(() => import("./pages/RegisterCohort"));
const CohortPage = lazy(() => import("./pages/CohortPage"));

const TrainerDashboard = lazy(() => import("./instructor/TrainerDashboard"));
const TrainerCourse = lazy(() => import("./instructor/TrainerCourse"));
const TrainerVolunteer = lazy(() => import("./instructor/TrainerVolunteer"));

const TrainerCourseDetails = lazy(() =>
  import("./instructor/TrainerCourseDetails")
);
const TrainerBootcampDetails = lazy(() =>
  import("./instructor/TrainerBootcampDetails")
);
const TrainerCreateTopic = lazy(() =>
  import("./instructor/TrainerCreateTopic")
);
const TrainerCreateBootcampTopic = lazy(() =>
  import("./instructor/TrainerCreateBootcampTopic")
);
const TrainerBootcamps = lazy(() => import("./instructor/TrainerBootcamps"));
const TrainerCreateBootcamp = lazy(() =>
  import("./instructor/TrainerCreateBootcamp")
);
const TrainerEditBootcamp = lazy(() =>
  import("./instructor/TrainerEditBootcamp")
);
const TrainerCreateCourse = lazy(() =>
  import("./instructor/TrainerCreateCourse")
);
const MaketerDashboard = lazy(() => import("./maketer/MaketerDashboard"));
const MaketerSchools = lazy(() => import("./maketer/MaketerSchools"));
const MaketerCreateSchool = lazy(() => import("./maketer/MaketerCreateSchool"));

function App() {
  // Get authentication and role information from AppContext
  const { isAuthenticated, isInstructor, isVolunteer } = useAppContext();

  useEffect(() => {
    // Initialize GTM
    TagManager.initialize({
      gtmId: "GTM-TCDKZH4F",
    });
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Homepage2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/volunteerdashboard" element={<VolunteerDashboard />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/schoolregistration" element={<SchoolRegistration/>} />
        <Route path="/volunteerlogin" element={<Volunteerlogin/>} />
        <Route path="/volunteerregistration" element={<Volunteerregistration/>} />
        <Route path="/volunteerreg1" element={<Volunteerreg1/>} />
        <Route path="/emailverify" element={<Emailverify/>} />
        <Route path="/volunteerreg2" element={<Volunteerreg2/>} />
        <Route path="/volunteerreg4" element={<Volunteerreg4/>} />
        <Route path="/thankyoupage" element={<Thankyoupage/>} />
        <Route path="/volunteerreg3" element={<Volunteerreg3/>} />
        <Route path="/getstartedpage" element={<GetStarted/>} />
        <Route path="/gethomepage" element={<Home/>} />
        <Route path="/selectionpage" element={<Selectionpage/>} />
        <Route path="/progress" element={<Form/>} />
      
        
        <Route path="/instructordashboard" element={<InstructorDashboard/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-trainer" element={<RegisterTrainer />} />
        <Route path="/register-volunteer" element={<RegisterMaketer />} />
        <Route path="/register-cohort" element={<RegisterCohort />} />
        <Route path="/all-programmes" element={<AllProgrammes />} />
        <Route path="/course/:title" element={<CourseDetails2 />} />
        <Route path="/course/:title/enroll" element={<RegisterPhysical />} />
        <Route
          path="/course/:title/enroll-success/:reference"
          element={<PaymentSuccess />}
        />
        <Route
          path="/course/:title/enroll-success/:reference/download"
          element={<ReceiptPageCont />}
        />

        <Route path="/cohort" element={<CohortPage />} />

        {/* kids */}
        <Route path="/kids" element={<KidsPage />} />

        <Route path="/payment-success" element={<VolunteerPaymentSuccess />} />

        {/* volunteer */}
        <Route path="/volunteer" element={<VolunteerPage />} />

        {/* Volunteer Protected routes: */}
        
          <Route path="/dashboard-volunteer" element={<MaketerDashboard />} />
      
          <Route path="/dashboard-volunteer" element={<RegisterMaketer />} />
      

          <>
            <Route path="/dashboard-volunteer" element={<MaketerDashboard />} />
            <Route path="/school-management" element={<MaketerSchools />} />
            <Route path="/create-school" element={<MaketerCreateSchool />} />
          </>
      
          // Redirect to login page if not authenticated as student
          
      

        {/* Student Protected routes: */}
        {/* {isAuthenticated || isStudent ? (
          <>
            <Route path="/courses" element={<Courses />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/course/:title" element={<CourseDetails />} />
            <Route path="/bootcamp/:title" element={<BootcampDetails />} />
            <Route
              path="/kids/payment-success"
              element={<KidsPaymentSuccess />}
            />
          </>
        ) : (
          // Redirect to login page if not authenticated as student
          <Route path="*" element={<Login />} />
        )} */}

        {/* Instructor Protected routes: */}
  
          <>
            <Route path="/courses" element={<Courses />} />
            <Route path="/bootcamp/:title" element={<BootcampDetails />} />
            <Route path="/dashboard-trainer" element={<TrainerDashboard />} />
            <Route path="/course-management" element={<TrainerCourse />} />
            <Route
              path="/volunteer-management"
              element={<TrainerVolunteer />}
            />
            <Route
              path="/course-management/:title"
              element={<TrainerCourseDetails />}
            />
            <Route
              path="/course-management/:title/create-topic"
              element={<TrainerCreateTopic />}
            />

            <Route path="/bootcamp-management" element={<TrainerBootcamps />} />
            <Route
              path="/bootcamp-management/:title"
              element={<TrainerBootcampDetails />}
            />
            <Route
              path="/bootcamp-management/:title/create-topic"
              element={<TrainerCreateBootcampTopic />}
            />

            <Route
              path="/bootcamp-create"
              element={<TrainerCreateBootcamp />}
            />
            <Route
              path="/bootcamp-management/:title/edit"
              element={<TrainerEditBootcamp />}
            />
            <Route path="/course-create" element={<TrainerCreateCourse />} />
            <Route
              path="/kids/payment-success"
              element={<KidsPaymentSuccess />}
            />
             
          </>
    
          // Redirect to login page if not authenticated as instructor
        
        

        {/* <Route path="/courses" element={<Courses />} />
        {/* <Route path="/kids" element={<Kids />} /> */}
        {/* <Route path="/course/:title" element={<CourseDetails />} /> 
        <Route path="/bootcamp/:title" element={<BootcampDetails />} />
        <Route path="/dashboard-trainer" element={<TrainerDashboard />} />
        <Route path="/course-management" element={<TrainerCourse />} />
        <Route path="/volunteer-management" element={<TrainerVolunteer />} />
        <Route
          path="/course-management/:title"
          element={<TrainerCourseDetails />}
        />
        <Route
          path="/course-management/:title/create-topic"
          element={<TrainerCreateTopic />}
        />

        <Route path="/bootcamp-management" element={<TrainerBootcamps />} />
        <Route
          path="/bootcamp-management/:title"
          element={<TrainerBootcampDetails />}
        />
        <Route
          path="/bootcamp-management/:title/create-topic"
          element={<TrainerCreateBootcampTopic />}
        />

        <Route path="/bootcamp-create" element={<TrainerCreateBootcamp />} />
        <Route
          path="/bootcamp-management/:title/edit"
          element={<TrainerEditBootcamp />}
        />
        <Route path="/course-create" element={<TrainerCreateCourse />} />
        <Route path="/kids/payment-success" element={<KidsPaymentSuccess />} /> */}
      </Routes>
    </Suspense>
  );
}

export default App;
