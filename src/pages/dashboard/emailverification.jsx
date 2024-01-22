import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import axios from "axios";



const Emailverification = () => {

    const [invalidCred, setInvalidCred] = useState("");



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
   
      }else{
        setInvalidCred("invalid code");
      }
      
     } catch (error) {
       if(error.res.status >= 400){
        setInvalidCred("invalid code");
      }
      
       
       
     }


     
    }

    return(

        <div className="">
            <Header/>
            
          
            <div className="p-[30px] m-auto w-[55%] max-md:w-[80%] mt-[80px] max-sm:w-[100%]">
                    <div className=" w-[full] flex max-md:text-[20px] text-[26px]">
                        <h1>Please enter the verification code sent to your email</h1> 
                    </div>
                   
                    <div  className="bg-slate-200 mt-[20px] p-[20px] w-[100%] rounded-md">

                    <form onSubmit={handleSubmit} >
                        <h2 className="">verification code</h2>
                        <input type="text" placeholder="enter code" required minLength={6} maxLength={6} value={verification_code} onChange={very}  className="w-[100%] mt-[10px]  rounded-md"/>
                        
                        {invalidCred && (
                    <div className="w-full p-2 my-2 text-[.9rem] text-red-500 border border-red-500 rounded-md">
                      {invalidCred}
                    </div>
                  )}
                        <span className="rounded-sm text-white p-[10px] flex align-center justify-center m-auto mt-[30px] bg-black w-[130px]">    
                        <button type="submit" className=" rounded-md">Proceed</button>
                    </span>
                    </form>
                   </div>
                    
                </div>
 

            <Footer/>
        </div>
    )

}

export default Emailverification;