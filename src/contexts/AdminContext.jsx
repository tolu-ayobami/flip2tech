/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "./AppContext";

export const AdminContext = createContext();

// eslint-disable-next-line react/prop-types
const AdminContextProvider = ({ children }) => {
  const { userData } = useAppContext();

  const location = useLocation();
  let currentPage = location.pathname;

  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);
  const [inlineLoader, setInlineLoader] = useState(false);

  //================================================================================to fetch all users
  const [allUsers, setallUsers] = useState([]);

  async function fetchAllUsers() {
    setInlineLoader(true);
    try {
      const response = await axios.get(
        `https://web-production-6c20.up.railway.app/flip/student/signup/`
      );
      // console.log("All userss fetched successfully:", response.data);
      setallUsers(response.data);
    } catch (error) {
      console.error("Error fetching all users", error);
    } finally {
      setInlineLoader(false);
    }
  }

  //=================================================================================to handle bootcamp form
  const [validationErr, setValidationErr] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    cover_video: "",
    cover_image: "",
    price: 0,
    learning_method: "",
    age_range: "",
  });

  //   console.log("formData", formData);

  function handleBootcampChange(e) {
    const { value, id } = e.target;
    setValidationErr("");
    setFormData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

  const [imagePreview, setImagePreview] = useState(null);

  function handleImageChange(e) {
    const file = e.target.files[0];
    setValidationErr("");
    setFormData((prev) => ({ ...prev, cover_image: file }));

    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  }

  const [videoPreview, setVideoPreview] = useState(null);

  function handleVideoChange(e) {
    const file = e.target.files[0];
    setValidationErr("");
    setFormData((prev) => ({ ...prev, cover_video: file }));

    if (file) {
      setVideoPreview(URL.createObjectURL(file));
    }
  }

  //=====================================================================================to submit bootcamp
  const [bootcampSuccess, setBootcampSuccess] = useState(false);
  const [uploadingBootcamp, setUploadingBootcamp] = useState(false);
  const [uploadingBootcampErr, setUploadingBootcampErr] = useState("");
  const [trackProgress, settTackProgress] = useState(false);

  async function submitBootcamp(formData, token) {
    console.log("formData", formData);
    setUploadingBootcamp(true);
    setUploadingBootcampErr("");
    try {
      const response = await axios.post(
        "https://web-production-6c20.up.railway.app/flip/bootcamp/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Form data submitted successfully:", response.data);
      settTackProgress((prev) => !prev);
      navigate("/bootcamp-management");
      setBootcampSuccess(true);
      setTimeout(() => {
        setBootcampSuccess(false);
        setFormData({});
      }, 3000);
    } catch (error) {
      console.error("Error submitting form data:", error);
      setUploadingBootcampErr(
        error?.message === "Network Error"
          ? "Bad network Connection"
          : "Apologies, an unexpected problem occurred"
      );
    } finally {
      setUploadingBootcamp(false);
    }
  }

  //=====================================================================================to edit bootcamp
  const [editbootcampSuccess, seteditBootcampSuccess] = useState(false);
  const [edittingBootcamp, setedittingBootcamp] = useState(false);
  const [edittingBootcampErr, setedittingBootcampErr] = useState("");
  // const [trackProgress, settTackProgress] = useState(false);

  async function submitEditBootcamp(data, token, id, title) {
    setedittingBootcamp(true);
    setedittingBootcampErr("");
    try {
      const response = await axios.put(
        `https://web-production-6c20.up.railway.app/flip/update/bootcamp/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Bootcamp editted successfully:", response.data);
      // settTackProgress((prev) => !prev);
      navigate(`/bootcamp-management`);
      fetchBootcamps(token);
    } catch (error) {
      console.error("Error editting bootcamp:", error);
      setedittingBootcampErr(error?.message);
    } finally {
      setedittingBootcamp(false);
    }
  }

  //================================================================================to fetch all bootcamps
  const [allBootcamps, setAllBootcamps] = useState([]);

  async function fetchBootcamps(token) {
    setInlineLoader(true);
    try {
      const response = await axios.get(
        "https://web-production-6c20.up.railway.app/flip/bootcamp/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("Bootcamps fetched successfully:", response.data);
      const myBootcamps = response?.data?.filter(
        (item) => item?.age_range === userData?.user_data?.age_range
      );
      setAllBootcamps(
        userData?.user_data?.is_instructor ? response?.data : myBootcamps
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setInlineLoader(false);
    }
  }

  useEffect(() => {
    setFormData({
      title: "",
      description: "",
      cover_video: "",
      cover_image: "",
    });
    setValidationErr("");
    setUploadingBootcampErr("");
  }, [currentPage, bootcampSuccess]);

  useEffect(() => {
    if (userData?.access) {
      fetchBootcamps(userData?.access);
    }
  }, [trackProgress, userData]);

  //================================================================================to fetch bootcamp topics
  const [bootcampDetails, setbootcampDetails] = useState([]);

  async function fetchBootcampDetail(token, id) {
    setInlineLoader(true);
    try {
      const response = await axios.get(
        `https://web-production-6c20.up.railway.app/flip/bootcamp/topics?bootcamp_id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Bootcamp topics fetched successfully:", response.data);
      setbootcampDetails(response.data);
    } catch (error) {
      console.error("Error fetching bootcamp topics:", error);
    } finally {
      setInlineLoader(false);
    }
  }

  //====================================================================================to delete bootcamp
  const [showDelete, setShowDelete] = useState(null);
  const [deletingBootcamp, setdeletingBootcamp] = useState(false);

  async function deleteBootcamp(token, id) {
    setdeletingBootcamp(true);
    try {
      const response = await axios.delete(
        `https://web-production-6c20.up.railway.app/flip/update/bootcamp/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Bootcamp deleted successfully", response.data);
      fetchBootcamps(token);
      setShowDelete(null);
    } catch (error) {
      console.error("Error deleting bootcamp:", error);
      // Handle the error or show an error message to the user
    } finally {
      setdeletingBootcamp(false);
    }
  }

  //===========================================================================to create bootcamp topic
  const [bootcamptopicData, setbootcampTopicData] = useState({
    title: "",
    description: "",
    bootcamp: "",
  });

  function handleBootcampTopicChange(e) {
    const { value, id } = e.target;
    setValidationErr("");
    setbootcampTopicData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

  const [bootcamptopicSuccess, setbootcampTopicSuccess] = useState(false);
  const [uploadingBootcampTopic, setUploadingBootcampTopic] = useState(false);
  const [uploadingBootcampTopicErr, setUploadingBootcampTopicErr] =
    useState("");

  async function submitBootcampTopic(token, title, id) {
    setUploadingBootcampTopic(true);
    setUploadingBootcampTopicErr("");
    try {
      const response = await axios.post(
        `https://web-production-6c20.up.railway.app/flip/bootcamp/topics/?bootcamp_id=${id}`,
        bootcamptopicData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("bootcamp topic created successfully:", response.data);
      navigate(`/bootcamp-management/${title}`);
      setbootcampTopicSuccess(true);
      setbootcampTopicData({});
      setTimeout(() => {
        setbootcampTopicSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error creating bootcamp topic:", error);
      setUploadingBootcampTopicErr(error?.message);
    } finally {
      setUploadingBootcampTopic(false);
    }
  }

  //==============================================================================to edit bootcamp topic
  const [editTopic, seteditTopic] = useState(null);
  const [edittingTopic, setedittingTopic] = useState(false);

  async function editBootcampTopic(data, token, bootcamp_id, id) {
    setedittingTopic(true);
    try {
      const response = await axios.put(
        `https://web-production-6c20.up.railway.app/flip/update/bootcamp/topic/${bootcamp_id}/?topic_id=${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("topic editted successfully", response.data);
      seteditTopic(null);
    } catch (error) {
      console.error("Error editting topic:", error);
    } finally {
      setedittingTopic(false);
      window.location.reload();
    }
  }

  //================================================================================to delete bootcamp topic
  const [deleteTopic, setdeleteTopic] = useState(null);
  const [deletingTopic, setdeletingTopic] = useState(false);

  async function deleteBootcampTopic(token, bootcamp_id, id) {
    setdeletingTopic(true);
    try {
      const response = await axios.delete(
        `https://web-production-6c20.up.railway.app/flip/update/bootcamp/topic/${bootcamp_id}/?topic_id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("topic deleted successfully", response.data);
      setdeleteTopic(null);
    } catch (error) {
      console.error("Error deleting topic:", error);
    } finally {
      setdeletingTopic(false);
      window.location.reload();
    }
  }

  //===========================================================================to create bootcamp topic content
  const [addBootcampContent, setAddBootcampContent] = useState(null);

  const [bootcampContentData, setbootcampContentData] = useState({
    title: "",
  });

  // console.log("bootcampContentData", bootcampContentData);

  function handleBootcampContentChange(e) {
    const { value, id } = e.target;
    setValidationErr("");
    setbootcampContentData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

  const [bootcampContentSuccess, setbootcampContentSuccess] = useState(false);
  const [uploadingBootcampContent, setUploadingBootcampContent] =
    useState(false);
  const [uploadingBootcampContentErr, setUploadingBootcampContentErr] =
    useState("");

  async function submitBootcampContent(token, bootcamp_id, id) {
    setUploadingBootcampContent(true);
    setUploadingBootcampContentErr("");
    try {
      const response = await axios.post(
        `https://web-production-6c20.up.railway.app/flip/bootcamp/content/${bootcamp_id}/?topic_id=${id}`,
        bootcampContentData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(
        "bootcamp topic content created successfully:",
        response.data
      );
      setAddBootcampContent(null);
      setbootcampContentSuccess(true);
      fetchtopicContent(token);
      setTimeout(() => {
        setbootcampContentSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error creating bootcamp topic content:", error);
      setUploadingBootcampContentErr(error?.message);
    } finally {
      setUploadingBootcampContent(false);
    }
  }

  //================================================================================to fecth all bootcamp contents
  const [bootcampTopicContent, setbootcampTopicContent] = useState([]);
  const [fetchingContent, setFetchingContent] = useState(false);

  async function fetchBootcampTopicContent(token, bootcamp_id, id) {
    setFetchingContent(true);
    try {
      const response = await axios.get(
        `https://web-production-6c20.up.railway.app/flip/bootcamp/content/${bootcamp_id}/?topic_id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Bootcamp content fetched successfully:", response.data);
      setbootcampTopicContent(response.data);
    } catch (error) {
      console.error("Error fetching bootcamp topic content:", error);
    } finally {
      setFetchingContent(false);
    }
  }

  //==========================================================================to handle course creation form
  const [courseformData, setCourseFormData] = useState({
    title: "",
    description: "",
    requirements: "",
    max_students: "",
    difficulty: "",
    q_and_a: "",
    category: "",
    course_type: "",
    intro_video: "",
    course_thumbnail: "",
  });

  // console.log("courseformData", courseformData);

  function handleCourseChange(e) {
    const { value, id } = e.target;
    setValidationErr("");
    setUploadingCourseErr("");
    setCourseFormData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

  const [req, setReq] = useState("");
  const [requirements, setRequirements] = useState([]);

  function addRequirement() {
    if (req && req !== " ") {
      setRequirements((prev) => [...prev, req]);
      setReq("");
      setValidationErr("");
      setUploadingCourseErr("");
    }
  }

  function removeReq(removed) {
    const newReq = requirements?.filter((item) => item !== removed);
    setRequirements(newReq);
  }

  function joinArrayElements(array) {
    return array.join(", ");
  }
  useEffect(() => {
    setCourseFormData((prev) => {
      return {
        ...prev,
        requirements: joinArrayElements(requirements),
      };
    });
  }, [requirements]);

  const [courseimagePreview, setCourseImagePreview] = useState(null);

  function handleCourseImageChange(e) {
    const file = e.target.files[0];
    setValidationErr("");
    setUploadingCourseErr("");
    setCourseFormData((prev) => ({ ...prev, course_thumbnail: file }));

    if (file) {
      setCourseImagePreview(URL.createObjectURL(file));
    }
  }

  const [coursevideoPreview, setCourseVideoPreview] = useState(null);

  function handleCourseVideoChange(e) {
    const file = e.target.files[0];
    setValidationErr("");
    setUploadingCourseErr("");
    setCourseFormData((prev) => ({ ...prev, intro_video: file }));

    if (file) {
      setCourseVideoPreview(URL.createObjectURL(file));
    }
  }

  //=====================================================================================to submit course
  const [courseSuccess, setCourseSuccess] = useState(false);
  const [uploadingCourse, setUploadingCourse] = useState(false);
  const [uploadingCourseErr, setUploadingCourseErr] = useState("");

  async function submitCourse(data, token) {
    setUploadingCourse(true);
    setUploadingCourseErr("");
    try {
      const response = await axios.post(
        "https://web-production-6c20.up.railway.app/flip/course",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Form data submitted successfully:", response.data);
      navigate("/course-management");
      settTackProgress((prev) => !prev);
      setCourseSuccess(true);
      setTimeout(() => {
        setCourseSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form data:", error);
      setUploadingCourseErr(error?.message);
    } finally {
      setUploadingCourse(false);
    }
  }

  //================================================================================to fetch all courses
  const [allCourses, setAllCourses] = useState([]);

  async function fetchCourses(token) {
    setInlineLoader(true);
    try {
      const response = await axios.get(
        "https://web-production-6c20.up.railway.app/flip/course",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("Courses fetched successfully:", response.data);
      setAllCourses(response.data);
    } catch (error) {
      console.error("Error fetching all courses:", error);
    } finally {
      setInlineLoader(false);
    }
  }

  useEffect(() => {
    setCourseFormData({
      title: "",
      description: "",
      requirements: "",
      max_students: "",
      difficulty: "",
      q_and_a: "",
      category: "",
      course_type: "",
      intro_video: "",
      course_thumbnail: "",
    });
    setValidationErr("");
    setRequirements([]);
    setCourseVideoPreview(null);
    setCourseImagePreview(null);
    setUploadingCourseErr("");
  }, [currentPage, courseSuccess]);

  useEffect(() => {
    if (userData?.access) {
      fetchCourses(userData?.access);
    }
  }, [trackProgress, userData]);

  //================================================================================to fetch course full details
  const [courseDetails, setCourseDetails] = useState([]);

  async function fetchCourseDetails(id, title) {
    setInlineLoader(true);
    try {
      const response = await axios.get(
        `https://web-production-6c20.up.railway.app/flip/full_course/${id}`
      );
      // console.log("Courses details fetched successfully:", response.data);
      setCourseDetails(response.data);
      navigate(`/course-management/${title}`);
    } catch (error) {
      console.error("Error fetching course full details:", error);
    } finally {
      setInlineLoader(false);
    }
  }

  //===========================================================================to create topic
  const [topicData, setTopicData] = useState({
    title: "",
    description: "",
    time_frame: "",
    course: "",
  });

  function handleTopicChange(e) {
    const { value, id } = e.target;
    setValidationErr("");
    setTopicData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

  const [topicSuccess, setTopicSuccess] = useState(false);
  const [uploadingTopic, setUploadingTopic] = useState(false);
  const [uploadingTopicErr, setUploadingTopicErr] = useState("");

  async function submitTopic(token, title, id) {
    setUploadingTopic(true);
    setUploadingTopicErr("");
    try {
      const response = await axios.post(
        "https://web-production-6c20.up.railway.app/flip/topic/",
        topicData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("topic created successfully:", response.data);
      navigate(`/course-management/${title}`);
      setTopicSuccess(true);
      setTimeout(() => {
        setTopicSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error creating topic:", error);
      setUploadingTopicErr(error?.message);
    } finally {
      setUploadingTopic(false);
    }
  }

  //================================================================================to fetch all topics
  const [allTopics, setallTopics] = useState([]);

  async function fetchAllTopics() {
    setInlineLoader(true);
    try {
      const response = await axios.get(
        `https://web-production-6c20.up.railway.app/flip/topic/`
      );
      // console.log("All topics fetched successfully:", response.data);
      setallTopics(response.data);
    } catch (error) {
      console.error("Error fetching all raw courses", error);
    } finally {
      setInlineLoader(false);
    }
  }

  //========================================================to edit topic
  const [editCourseTopic, seteditCourseTopic] = useState(null);
  const [edittingCourseTopic, setedittingCourseTopic] = useState(false);

  async function submitEditCourseTopic(data, token, course_id, id) {
    setedittingCourseTopic(true);
    try {
      const response = await axios.put(
        `https://web-production-6c20.up.railway.app/flip/update/bootcamp/topic/${course_id}/?topic_id=${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("topic editted successfully", response.data);
      seteditCourseTopic(null);
    } catch (error) {
      console.error("Error editting topic:", error);
    } finally {
      setedittingCourseTopic(false);
      window.location.reload();
    }
  }

  //========================================================to delete topic
  const [deleteCourseTopic, setdeleteCourseTopic] = useState(null);
  const [deletingCourseTopic, setdeletingCourseTopic] = useState(false);

  async function submitDeleteCourseTopic(token, course_id, id) {
    setdeletingCourseTopic(true);
    try {
      const response = await axios.delete(
        `https://web-production-6c20.up.railway.app/flip/update/bootcamp/topic/${course_id}/?topic_id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("topic deleted successfully", response.data);
      setdeleteCourseTopic(null);
    } catch (error) {
      console.error("Error deleting topic:", error);
    } finally {
      setdeletingCourseTopic(false);
      window.location.reload();
    }
  }

  //===========================================================================to create content
  const [addContent, setAddContent] = useState(null);

  const [contentData, setcontentData] = useState({
    title: "",
    notes: "",
    video: "",
    topic: "",
  });

  // console.log("contentData", contentData);

  function handleContentChange(e) {
    const { value, id } = e.target;
    setValidationErr("");
    setcontentData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

  const [contentSuccess, setcontentSuccess] = useState(false);
  const [uploadingContent, setUploadingContent] = useState(false);
  const [uploadingContentErr, setUploadingContentErr] = useState("");

  async function submitContent(token) {
    setUploadingContent(true);
    setUploadingContentErr("");
    try {
      const response = await axios.post(
        "https://web-production-6c20.up.railway.app/flip/content/",
        contentData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("content created successfully:", response.data);
      setAddContent(null);
      setcontentSuccess(true);
      fetchtopicContent(token);
      setTimeout(() => {
        setcontentSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error creating content:", error);
      setUploadingContentErr(error?.message);
    } finally {
      setUploadingContent(false);
      window.location.reload();
    }
  }

  const [contentvideoPreview, setcontentVideoPreview] = useState(null);

  function handleContentVideoChange(e) {
    const file = e.target.files[0];
    setValidationErr("");
    setUploadingContentErr("");
    setcontentData((prev) => ({ ...prev, video: file }));

    if (file) {
      setcontentVideoPreview(URL.createObjectURL(file));
    }
  }

  //================================================================================to fecth all contents
  const [topicContent, settopicContent] = useState([]);

  async function fetchtopicContent(token) {
    setInlineLoader(true);
    try {
      const response = await axios.get(
        `https://web-production-6c20.up.railway.app/flip/content/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("Courses content fetched successfully:", response.data);
      settopicContent(response.data);
    } catch (error) {
      console.error("Error fetching topic content:", error);
    } finally {
      setInlineLoader(false);
    }
  }

  //=====================================================================================to pay for bootcamp
  const [payForBootcampSuccess, setpayForBootcampSuccess] = useState(false);
  const [payingForBootcamp, setpayingForBootcamp] = useState(false);
  const [payForBootcampErr, setpayForBootcampErr] = useState("");
  const [authUrl, setAuthUrl] = useState("");
  // console.log("authUrl", authUrl);

  async function payForBootcamp(data, token, id) {
    setpayingForBootcamp(true);
    setpayForBootcampErr("");
    try {
      const response = await axios.post(
        `https://web-production-6c20.up.railway.app/flip/deposit/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("payment details sent successfully:", response.data);
      setAuthUrl(response.data?.data?.authorization_url);
      // open the authUrl in a new tab
      // Open the authUrl in a new tab
      const newTab = window.open(
        response.data?.data?.authorization_url,
        "_blank"
      );
      if (newTab) {
        newTab.focus(); // Optionally, focus on the new tab
      }
      setpayForBootcampSuccess(true);
      setTimeout(() => {
        setpayForBootcampSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form data:", error);
      setpayForBootcampErr(error?.message);
    } finally {
      setpayingForBootcamp(false);
    }
  }

  return (
    <AdminContext.Provider
      value={{
        currentPage,
        loader,
        handleBootcampChange,
        formData,
        imagePreview,
        handleImageChange,
        handleVideoChange,
        videoPreview,
        submitBootcamp,
        validationErr,
        setValidationErr,
        bootcampSuccess,
        inlineLoader,
        allBootcamps,
        courseformData,
        handleCourseChange,
        courseimagePreview,
        handleCourseImageChange,
        coursevideoPreview,
        handleCourseVideoChange,
        setReq,
        req,
        requirements,
        addRequirement,
        removeReq,
        allCourses,
        submitCourse,
        uploadingCourse,
        uploadingBootcamp,
        uploadingCourseErr,
        uploadingBootcampErr,
        courseDetails,
        fetchCourseDetails,
        submitTopic,
        topicSuccess,
        uploadingTopic,
        uploadingTopicErr,
        handleTopicChange,
        setTopicData,
        topicData,
        contentData,
        setcontentData,
        handleContentChange,
        contentSuccess,
        uploadingContent,
        uploadingContentErr,
        submitContent,
        addContent,
        setAddContent,
        contentvideoPreview,
        handleContentVideoChange,
        deleteBootcamp,
        showDelete,
        setShowDelete,
        deletingBootcamp,
        fetchtopicContent,
        topicContent,
        payForBootcamp,
        payForBootcampSuccess,
        payingForBootcamp,
        bootcampDetails,
        fetchBootcampDetail,
        bootcamptopicSuccess,
        uploadingBootcampTopic,
        uploadingBootcampTopicErr,
        submitBootcampTopic,
        bootcamptopicData,
        setbootcampTopicData,
        handleBootcampTopicChange,
        bootcampContentData,
        handleBootcampContentChange,
        bootcampContentSuccess,
        uploadingBootcampContent,
        uploadingBootcampContentErr,
        addBootcampContent,
        setAddBootcampContent,
        submitBootcampContent,
        bootcampTopicContent,
        fetchBootcampTopicContent,
        fetchingContent,
        deleteTopic,
        setdeleteTopic,
        deletingTopic,
        deleteBootcampTopic,
        editbootcampSuccess,
        edittingBootcamp,
        edittingBootcampErr,
        submitEditBootcamp,
        setbootcampTopicContent,
        editTopic,
        seteditTopic,
        editBootcampTopic,
        edittingTopic,
        seteditCourseTopic,
        setdeleteCourseTopic,
        editCourseTopic,
        edittingCourseTopic,
        submitEditCourseTopic,
        deleteCourseTopic,
        deletingCourseTopic,
        submitDeleteCourseTopic,
        fetchAllUsers,
        allUsers,
        fetchAllTopics,
        allTopics,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAdminContext = () => {
  return useContext(AdminContext);
};

export default AdminContextProvider;
