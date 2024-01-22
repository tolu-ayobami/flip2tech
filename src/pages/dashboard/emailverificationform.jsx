import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./component/Footer";
import { ClipLoader } from "react-spinners";

import Header from "./component/Header"




const Emailverify = () => {

    const [invalidCred, setInvalidCred] = useState("");


    const [tinyLoader, settinyLoader] = useState(false);

    const[verification_code, setVerification_code] = useState("")

    const very = (e) =>{
        setVerification_code(e.target.value);
    }

    const navigate = useNavigate();
    

    
{/*
useEffect(() =>{
  if(localStorage.getItem("token") !="" && localStorage.getItem("token") != null){
    navigate("/volunteerregistration");
  }
  },[])
*/}


    const handleSubmit = async(e) =>{
        e.preventDefault();

setInvalidCred("")

if(!verification_code){
  setInvalidCred("please enter a code");
}


if(verification_code.length < 6){
  setInvalidCred("please enter a valid code");
}
    
  try {
    settinyLoader(true);
      const res = await fetch("https://flip2tech-production.up.railway.app/auth/email-verification/",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({verification_code}),
      })
    
      const data = await res.json()
    
      console.log(data)

      if(data.message){
        navigate("/volunteerlogin");
        
        const token = data.access_token
        localStorage.setItem("token", token)
   
        const first_name = data.first_name
        localStorage.setItem("first_name", JSON.stringify(first_name));
   
              const last_name = data.last_name
               localStorage.setItem("last_name", JSON.stringify(last_name))
      }else{
        setInvalidCred("invalid code");
      }
      
     } catch (error) {
       if(error.res.status >= 400){
        setInvalidCred("invalid code");
      }
    
     }finally {
      settinyLoader(false);
    }


     
    }

    return(

        <div className="">
            <Header/>
            
          
            <div className="p-[20px]  shadow-md m-auto w-[55%] mt-[200px] mb-[100px] max-md:w-[70%]  max-sm:w-[100%]">
                    <div className=" w-[full] flex max-md:text-[20px] text-[26px]">
                        <h1>Please enter the verification code sent to your email</h1> 
                    </div>
                   
                    <div  className=" mt-[20px] p-[20px] w-[100%] rounded-md">

                    <form onSubmit={handleSubmit} >
                        <h2 className="">verification code</h2>
                        <input type="text" placeholder="enter code" required minLength={6} maxLength={6} value={verification_code} onChange={very}  className="w-[100%] mt-[10px]  rounded-md"/>
                        
                        {invalidCred && (
                    <div className="w-full p-2 my-2 text-[.9rem] text-red-500 border border-red-500 rounded-md">
                      {invalidCred}
                    </div>
                  )}
                         <button
                    type="submit"
                    className="w-[80%] text-black bg-yellow-300 m-[auto] mt-[30px] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex justify-center items-center gap-2"
                  >
                    {tinyLoader ? "Procesing" : "proceed"}
                    {tinyLoader && <ClipLoader color="#fff" size={20} />}
                  </button>
                    </form>
                   </div>
                    
                </div>
 

            <Footer/>
        </div>
    )

}

export default Emailverify;