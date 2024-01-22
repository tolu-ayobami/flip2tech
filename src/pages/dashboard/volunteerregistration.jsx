
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import axios from "axios";
import ToastMod from "../../components/ToastMod";

import { ClipLoader } from "react-spinners";



const Volunteerregistration = () => {


  useEffect(() =>{
    if(localStorage.getItem("token") =="" && localStorage.getItem("token") == null){
      navigate("/volunteerlogin");
    }
    },[])
  

  const[email, setEmail] = useState("")


  const[first_name, setFirst_name] = useState("")
  const[last_name, setLast_name] = useState("")

  const[password, setPassword] = useState("")

    

  
  const firstn = (e) =>{
    setFirst_name(e.target.value)
  }

  const lastn = (e) =>{
    setLast_name(e.target.value)
  }


  const em =(e) =>{
    setEmail(e.target.value);
  }

  const [userExists, setUserExists] = useState(false);
  const [regSuccess, setRegSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  function toggleShowPsw() {
    setShowPassword((prev) => !prev);
  }

  const pas =(e) =>{
    setPassword(e.target.value);
  }
  const [loader, setLoader] = useState(false);

const navigate = useNavigate();

const [tinyLoader, settinyLoader] = useState(false);

const [user_type, setUsertype] = useState(
  JSON.parse(localStorage.getItem("user_type")) 
);



  const handleSubmit = async(e) =>{
    e.preventDefault();




    setUserExists("")


    if(!email){
      setUserExists("please enter email")
    }

    setPassword("")
    
    setEmail("")
    setFirst_name("")
    setLast_name("")
  





try {

  settinyLoader(true);
 
  const res = await fetch("https://flip2tech-production.up.railway.app/auth/signup/",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({email, password, first_name, last_name,  user_type}),
  })


  const data = await res.json();
  


console.log(data)
  if(data.message){
    setRegSuccess(true);
    setTimeout(() => {
      setRegSuccess(false);
      navigate("/emailverify");
    }, 3000);
  }else{
    setUserExists("User with this email address already exists.");
  }

} catch (error) {
  if (error.res.status === 400) {
    setUserExists("User with this email address already exists.");
  }
}finally {

  settinyLoader(false);
}


{/*
try {
  const res = await fetch("https://flip2tech-production.up.railway.app/auth/volunteer-signup/",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({ email, password, contact, first_name, last_name, username, LGA}),
  })

  const data = await res.json();

console.log(data);

  if(res.ok){
    navigate("/volunteerlogin");
}else{
    console.log("error")
}
} catch (error) {
  if (error.res.status === 400) {
    setUserExists("User with this email address already exists.");
  }
  
} */}

}
return(
    <div className="">
       {loader && <Loader />}


       {regSuccess && (
        <div className="w-[300px]">
          <ToastMod message="Signed up successfully" />
        </div>
      )}
                <div className="bg-cover bg-no-repeat fixed top-0 bottom-0 left-0 right-0 dark:bg-gray-900/50 bg-black/50 log">

             <div className=" flex max-md:w-[87%] w-[40%] absolute top-[50%] left-[50%] p-[20px] flex-col bg-white shadow-md rounded-lg"  style={{transform: "translate(-50%, -50%)"}} >
       
                {/*================================================Form Title */}
                <h1 className="text-[35px] max-md:text-[25px] text-center font-bold">
            Sign Up
                </h1>
                <p className="text-center  max-md:text-[14px] mt-[20px]  font-medium">Please enter your account information for entry authorization.</p>
                <form
                  className="space-y-4 md:space-y-6 mt-[20px]"
                  onSubmit={handleSubmit}
                >
                  <div className="w-full flex gap-3">
                    <div className="w-full">
                      {/*================================================First Name Input */}
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
                        onChange={firstn}
                        value={first_name}
                       
                      />
                    </div>
                    <div className="w-full">
                      {/*================================================Last Name Input */}
                      <label
                        htmlFor="last_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        LAST NAME
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300"
                        placeholder="Doe"
                        required
                        onChange={lastn}
                        value={last_name}
                       
                      />
                    </div>
                  </div>

                  
                  {/*================================================Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300"
                      placeholder="name@email.com"
                      required
                      onChange={em}
                      value={email}
                      
                    />
                  </div>

                  {/*================================================Password Input */}
                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      PASSWORD
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300"
                      required
                      onChange={pas}
                      value={password}
                     
                    />
                    <p
                      onClick={toggleShowPsw}
                      className="absolute right-2 top-[53%] cursor-pointer hover:text-yellow-400 font-medium"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </p>
                  </div>

                  {/*================================================Validation Error */}
                  

                  {/*================================================User Exists Error */}
                   {userExists && (
                    <div className="w-full p-2 my-2 text-[.9rem] text-red-500 border border-red-500 rounded-md">
                      {userExists}
                    </div>
                  )}

                  {/*================================================Submit Button */}
                  <button
                    type="submit"
                    className="w-[80%] text-black bg-yellow-300  m-[auto]  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex justify-center items-center gap-2"
                  >
                    {tinyLoader ? "Procesing" : "Register"}
                    {tinyLoader && <ClipLoader color="#fff" size={20} />}
                  </button>
                  <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    {/*================================================Link to navigate to Login page */}
                    <Link
                      to="/volunteerlogin"
                      className="font-medium text-yellow-300 hover:underline dark:text-primary-500"
                    >
                      Login
                    </Link>
                  </p>
                </form>
              </div>
              </div>
              </div>



)

}

export default Volunteerregistration;