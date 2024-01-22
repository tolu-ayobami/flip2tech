import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import Loader from "../../components/Loader";
import { ClipLoader } from "react-spinners";

const Volunteerlogin = () => {


  const [showPassword, setShowPassword] = useState(false);
  function toggleShowPsw() {
    setShowPassword((prev) => !prev);
  }

  const[email, setEmail] = useState("")

  const[password, setPassword] = useState("")
  
const navigate = useNavigate(

)
  const em =(e) =>{
    setEmail(e.target.value);
  }

  const pas =(e) =>{
    setPassword(e.target.value);
  }
  

  const [invalidCred, setInvalidCred] = useState("");

  const [tinyLoader, settinyLoader] = useState(false);

  

  const [ari, setAri] = useState("");



  const [loader, setLoader] = useState(false);

 
  const handleSubmit = async(e) =>{
    e.preventDefault();
    setInvalidCred("");
    setEmail("")
    setPassword("")

    if(!email && !password){
      setInvalidCred("All fields are required");
    }
    
    
    

    try {
      settinyLoader(true);
 
      const res = await fetch("https://flip2tech-production.up.railway.app/auth/login/",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({email, password}),
      })
      const data = await res.json()
      const token = data.token
      localStorage.setItem("token", token)
        const user = data.role
        setAri(user)
          console.log(user)
      console.log(data)
     
      if (data.role === "instructor") {
        navigate("/instructordashboard");
      } else if (data.role === "student") {
        navigate("/studentdashboard");
      } else if (data.role === "volunteer" && data.registration_completed === false) {
        navigate("/volunteerreg1");
      } else if (data.role === "volunteer" && data.registration_completed === true) {
        navigate("/volunteerdashboard");
      }else if(!data.message){
        setInvalidCred("invalid credentials")
      }



      

      setLoginSuccess(true);
      
      setTimeout(() => {
        setLoginSuccess(false);
      }, 3000);
      
   } catch (error) {
    console.log(error)
    if (error.res.status === 400) {
      setInvalidCred("Invalid login credentials.");
    }
     
   }finally {
    settinyLoader(false);
  }
    
   



{/*
    try {
      settinyLoader(true);
      const res = await fetch("https://flip2tech-production.up.railway.app/auth/volunteer-login/",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({email, password}),
     
      })
    
      
      if(res.ok){
        navigate("/volunteerdashboard");
    }else{
      if (error.res.status >= 400) {
        setInvalidCred("Invalid login credentials.");
      }
    }
    } catch (error) {
      console.log(error)
      
    } finally {
      settinyLoader(false);
    }
  */}

  }

 


  
return(
    <div className="">
        {loader && <Loader />}



               <div className="bg-cover bg-no-repeat fixed overflow-y-scroll top-0 bottom-0 left-0 right-0 dark:bg-gray-900/50 bg-black/50 log">

             <div className=" flex max-md:w-[87%] w-[40%] overflow-y-scroll absolute top-[50%] left-[50%] p-[20px] flex-col bg-white shadow-md rounded-lg"  style={{transform: "translate(-50%, -50%)"}} >

      
                {/*================================================Form Title */}
                <h1 className="font-bold text-[35px] text-center max-md:text-[25px]">
                 Login
                 
                </h1>
                <p className="text-center max-md:text-[14px] mt-[20px] font-medium">Please enter your account information for entry authorization.</p>
                <form
                  className="space-y-4 md:space-y-6  mt-[20px]"
                 onSubmit={handleSubmit}
                >
                  {/*================================================Email Input */}
                  <div>
                    <label
                      htmlFor="username"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border text-gray-900 text-[.75em] sm:text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300" 
                      placeholder="john@gmail.com"
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
                      className="bg-gray-50 border text-gray-900 text-[.75em] sm:text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300" 
                      placeholder="••••••••"
                      onChange={pas}
                      value={password}
                      required
                    />
                    <p
                      onClick={toggleShowPsw}
                      className="absolute right-2 top-[53%] cursor-pointer hover:text-yellow-400 font-medium"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </p>
                  </div>
                  {/*================================================Remember Me and Forgot Password */}
                  <div className="flex items-center justify-between">
                    <div className="flex align-center">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      

                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="remember"
                          className="text-gray-500 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                      </div>


                      <div className="text-sm">
                        <p className="text-amber-400 font-bold"><Link to="">Forgot password?</Link></p>
                    </div>

                  

                   

        
                  </div>
                  
                  {invalidCred && (
                    <div className="w-full p-2 my-2 text-[.9rem] text-red-500 border border-red-500 rounded-md">
                      {invalidCred}
                    </div>
                  )}
                  {/*================================================Submit Button */}
                  <button
                    type="submit"
                    className="w-[90%] m-[auto] text-black bg-yellow-300  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex justify-center items-center gap-2"
                  >
                    {tinyLoader ? "Procesing" : "Login"}
                    {tinyLoader && <ClipLoader color="#fff" size={20} />}
                  </button>
                  {/*================================================Sign Up Link */}
                  <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <Link
                      to="/volunteerregistration"
                      className=" text-primary-600 font-bold hover:underline text-amber-400"
                    >
                      Sign up
                    </Link>
                  </p>
                </form>
              </div>
              </div>
              </div>

)

}

export default Volunteerlogin;