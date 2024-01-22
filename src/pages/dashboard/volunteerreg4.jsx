import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./component/Footer"
import Header from "./component/Header"
import axios from "axios";
import Loader from "../../components/Loader";
import { ClipLoader } from "react-spinners";

const Volunteerreg4 = () => {

    const[close, setClose] = useState(false);

    const get = () =>{
        setClose(!close);
    }
    const [loader, setLoader] = useState(false);

    const[NUBAN, setNUBAN] = useState("")

    const[invalidCred, setInvalidCred] = useState("");

const navigate = useNavigate()

    const[cred, setCred] = useState("");

    const name = (e) =>{
        setNUBAN(e.target.value);
    }

{/*
useEffect(() =>{
  if(localStorage.getItem("token") =="" && localStorage.getItem("token") == null){
    navigate("/volunteerreg3");
  }
  },[])
*/}

const [tinyLoader, settinyLoader] = useState(false);

const handleSubmit = async(e) =>{
        e.preventDefault();
       
  try {
    settinyLoader(true);
    const res = await fetch("https://flip2tech-production.up.railway.app/auth/bank-account-verification/",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer " + localStorage.getItem("token")
      },
      body: JSON.stringify({NUBAN}),
    })
  
    const data = await res.json();

  const an = data.account_name

  setCred(an)

  console.log(data)
  
    if(data.message){
     
      settinyLoader(true)

      setTimeout(() => {
        navigate("/thankyoupage")
         }, 6000);
    }
    
  } catch (error) {
    if (error.data.status >= 400) {
      setInvalidCred("please enter a valid fcmb account number");
     }else{
      setInvalidCred("please enter a valid fcmb account number");
    }
    
  }finally {
    settinyLoader(false);
  }





   {/* try {
        await axios.post("https://flip2tech-production.up.railway.app/volunteer-continue-verification/",{
      NUBAN,
       },{headers:{Authorization:"Bearer" + localStorage.getItem("token")
    }}).then((r) =>{
         if(r.ok){
           navigate("/volunteerlogin");
         }else{
          setInvalidCred("error occured");
         }
        
       })
     } catch (error) {
       if (error.response === !ok) {
         setInvalidCred("error occured");
       }
       
     }
    */}


    }

    return(

        <div className="">
            <Header/>
            

            {loader && <Loader />}

            <div className="p-[20px] shadow-md m-auto w-[55%] max-md:w-[85%] mt-[150px] max-sm:w-[94%]">
                     
            <div className=" flex flex-col gap-[5px] max-md:text-[20px] text-[26px]">
                        <h1>Please fill in your information</h1>
                      
                    </div>

                    <p className="mt-[10px]">If you win this competition, do you have a FCMB account to receive the price?</p>
                    
                    
                    <form onSubmit={handleSubmit}>
                    <div className=" mt-[30px] p-[20px] w-[100%]  rounded-md">
                        <h2>FCMB ACCOUNT NUMBER</h2>
                        <input type="number" value={NUBAN} required onChange={name} placeholder="000000" className="w-[100%] mt-[10px] rounded-md"/>
                    </div>

                    <div className=" mt-[10px] p-[20px] w-[100%]  rounded-md">
                        <h2>FCMB ACCOUNT NAME</h2>
                        <input type="text" placeholder="please wait..." readOnly value={tinyLoader? "processing...." : cred} className="w-[100%] mt-[10px] rounded-md"/>
                    </div>

                    {invalidCred && (
                    <div className="w-full p-2 my-2 text-[.9rem] text-red-500 border border-red-500 rounded-md">
                      {invalidCred}
                    </div>
                  )}
                    <p className="mt-[10px]">Do not have an account? <span className="text-yellow-300 font-bold" onClick={get}><a href="#">Create One</a></span></p>

                    <div className="flex flex-col mt-[40px]">

                    <button
                    type="submit"
                    className="w-[80%] text-black bg-yellow-300 m-[auto]  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex justify-center items-center gap-2"
                  >
                    {tinyLoader ? "Procesing" : "proceed"}
                    {tinyLoader && <ClipLoader color="#fff" size={20} />}
                  </button>

               <span className="rounded-md text-black p-[10px] w-[80%] flex align-center justify-center m-auto mt-[30px]  w-[130px]" style={{border:"1px solid orange"}}>    
              <Link to="/volunteerreg2"><button type="submit" >Back</button></Link>
               </span>
                    </div>
                    </form>


                    {close &&  <div className="bg-[rgba(0,0,0,0.4)]  bg-transaparent w-full h-full fixed  top-0 bottom-0 left-0 right-0 " >
                    <div className="w-[40%] m-[auto] max-sm:w-[100%] max-md:w-[60%] absolute top-[50%] left-[50%]" style={{transform: "translate(-50%, -50%)"}}>
                        <div className="w-[70%] mx-[auto] box-border bg-white shadow-md p-[20px] flex flex-col mx-[auto] gap-[10px] ">
                            <div className="flex text-center justify-evenly">
                            <h1 className="text-center font-bold">Create an Account</h1>
                             <span onClick={get} className="pl-[40px] cursor-pointer" ><img src="/vdashboardimages/close.png" className="w-[15px]"></img></span>
                            </div>
                            <div className="flex flex-col gap-[10px] px-[auto]">
                            <p className="font-medium text-blue-600  overflow-x-hidden"><a href="https://onlineaccount.fcmb.com/personal/">https://onlineaccount.fcmb.com/personal</a></p>
                            <p className="font-medium text-center">OR</p>
                            <p className="font-medium">Contact</p>
                            <p className="font-medium">Anne Jasmine :- +234 708 612 3646</p>
                            <p className="font-medium text-center">OR</p>
                            <p className="font-medium">Find the closest FCMB Branch to you</p>
                            <p className="font-medium text-blue-600 overflow-x-hidden"><a href="https://onlineaccount.fcmb.com/personal/">https://onlineaccount.fcmb.com/personal</a></p>


                            </div>
                            
                        </div>
                    </div>
                    </div>}
                </div>

            <Footer/>
        </div>
    )

}

export default Volunteerreg4;