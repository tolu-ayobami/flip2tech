import React,{useState} from "react";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { ClipLoader } from "react-spinners";


const SchoolRegistration  =  () =>{
const[school_name, setSchoolname] = useState("")

const[school_address, setSchooladdress] = useState()

const[school_lga, setSchoollga] = useState("")

const[referral_code, setReferral_code] = useState("")

const [school_email, setSchoolemail] = useState("")



    const[close, setClose] = useState(false);

    const get = () =>{
        setClose(!close);
    }

    const [tinyLoader, settinyLoader] = useState(false);

    const[toggle, setToggle] = useState(false);

    const grt = () =>{
        setToggle(!toggle)
    }

    const [invalidCred, setInvalidCred] = useState("");

    const [loader, setLoader] = useState(false);

const navigate = useNavigate();

const handleSubmit = async(e)=>{

    e.preventDefault();

    if(referral_code.length < 6){
        setInvalidCred("please enter a valid code")
    }
   

    
    try {
        settinyLoader(true);
   
        const res = await fetch("https://flip2tech-production.up.railway.app/auth/school-registration/",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({referral_code, school_name, school_address, school_lga, school_email}),
        })
        const data = await res.json()
        
        console.log(data)
       
         if(data.message){

           navigate("/volunteerdashboard");
     
         }else{
            setInvalidCred("invalid credentials ");
         }
      
     } catch (error) {
      console.log(error)
       if(error.res.status === 400){
        setInvalidCred("Email already exist");
      }
       
     }finally {
        settinyLoader(false);
      }
        

}
    
    return(        
    

        <div  className="w-full max-md:h-auto font-Poppins bg-slate-100">
           {loader && <Loader />}

             
            <div className="flex w-full ">
              
           <div    
                  className={` w-[280px] h-full fixed bg-black ${toggle? "max-md:block max-md:fixed top-0 bottom-0 max-md:w-[300px]" : "max-md:hidden"}`}>
              
               <div  className="flex  align-center pl-[30px] pt-[38px]">
                <span className="flex  justify-center align-center  max-md:m-auto max-md:w-[60%]"><img src="/vdashboardimages/logohead.png"></img></span>
                <span className="flex my-[auto] p-[5px] max-lg:hidden max-md:block  bg-white justify-center align-center  max-md:m-auto max-md:w-[10%]  cursor-pointer" onClick={grt} ><img src="/vdashboardimages/close.png" className="w-[15px]"></img></span>
                </div>

                <div className="mt-[60px] flex flex-col gap-[10px] ml-[20px]">

         <Link to="/volunteerdashboard"> <div className="bg-amber-400 p-[10px]  rounded-tl-[10px] rounded-bl-[10px]">
            <img src="/vdashboardimages/Content.png"></img>
                </div></Link>

                <div onClick={get} className="my-[auto] hover:bg-amber-400 text-white hover:text-black p-[10px] flex align-center gap-[13px] rounded-tl-[10px] rounded-bl-[10px]">
     <span className="my-[auto]"><img src="/vdashboardimages/exit.svg" className="hover:bg-black-600"></img></span>
     <h1 className="font-medium ml-[6px]">Exit to site</h1>
     </div>
 
 </div>
                
                </div>
        
                {close &&  <div className="bg-[rgba(0,0,0,0.4)]  bg-transaparent w-full h-full fixed  top-0 bottom-0 left-0 right-0 " >
                    <div className="w-[50%] m-[auto] max-sm:w-[100%] max-md:w-[70%] absolute top-[50%] left-[50%]" style={{transform: "translate(-50%, -50%)"}}>
                        <div className="w-[80%]  mx-[auto] box-border bg-white shadow-md p-[30px] flex flex-col mx-[auto] gap-[10px] ">
                            <div className="flex text-center justify-evenly">
                            <h1 className="text-center font-bold">Are you sure you want to exit?</h1>
                             <span onClick={get} className="pl-[40px] cursor-pointer" ><img src="/vdashboardimages/close.png" className="w-[15px]"></img></span>
                            </div>

                            <div className=" flex max-md:flex-col gap-[15px] m-[auto] ">
                               <Link to="/volunter"> <button className="rounded-md text-white p-[10px] flex align-center justify-center m-auto mt-[30px] bg-black w-[130px]">yes</button></Link>
                                <button  onClick={get} className="rounded-md text-white p-[10px] flex align-center justify-center m-auto mt-[30px] bg-black w-[130px]">no</button> 
                                </div> 
                        </div>
                    </div>
                    </div>}
                        
                <div className="flex flex-col ml-[280px] max-md:ml-[0px] w-full">


                <div className=" flex w-[100%] bg-white  h-[90px]  shadow-md p-[20px] max-md:p-[15px] justify-between align-center  my-[auto]">
                  
                 <div className="flex gap-[20px] align-center my-[auto] ml-[8px]">
                   <div className="flex flex-col gap-[3px]  my-[auto] hidden max-md:flex my-[auto] cursor-pointer" onClick={grt}>
                    <span  className="w-[25px] bg-amber-200  h-[3px]"></span>
                    <span  className="w-[25px] bg-amber-200 h-[3px]"></span>
                    <span  className="w-[25px] bg-amber-200 h-[3px]"></span>
                   </div>
                    
                   

                 
                    <div className="flex gap-[5px] flex-col align-center">
                        <h1 className="font-bold  my-[auto]">Welcome,</h1>
                       {/*<h1 className="font-bold  my-[auto]">{an.message}</h1>*/}
                    </div>
                    </div>


                    <div className=" flex  align-center my-[auto] ">
                        <div>
                      <span><img src="/vdashboardimages/Group 422.png" className="w-[70%] max-sm:w-[50%]"></img></span>
                        </div>
                        
                  
                    <div className="flex align-center my-[auto]">
                    <span ><img src="/vdashboardimages/Avatar.png" className="w-[70%] max-sm:w-[50%]"></img></span>
                   
                    {/* <span className="my-[auto] max-sm:w-[50%]"><img src="/vdashboardimages/Icons.png"></img></span>*/}
                   
                    </div>
                    
                    </div>
                </div>


                <div className="p-[30px] m-auto w-[70%] max-md:w-[87%] max-sm:w-[95%]">
                    <div className="text-center font-bold max-md:text-[24px] text-[30px]">
                        <h1>School Registration</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div className="bg-slate-200 mt-[30px] p-[20px] w-[100%] rounded-md">
                        <h1>School Name</h1>
                        <input type="text" placeholder="...." value={school_name} onChange={(e) => setSchoolname(e.target.value)} required className="w-[100%] mt-[10px] rounded-md"/>
                    </div>


                    <div className="bg-slate-200 mt-[30px] p-[20px] w-[100%] rounded-md">
                        <h1>School email</h1>
                        <input type="text" placeholder="...." value={school_email} onChange={(e) => setSchoolemail(e.target.value)} required className="w-[100%] mt-[10px] rounded-md"/>
                    </div>

                  {/*  <div className="bg-slate-200 mt-[30px] p-[20px] w-[100%]">
                        <h2>Number of Students</h2>
                        <div className="flex gap-[30px]">
                        <input type="text" placeholder="Girls" className="w-[30%]"/>
                        <input type="text" placeholder="Boys" className="w-[30%]"/>
                        </div>
                      
    </div>*/}

                    <div className="bg-slate-200 mt-[30px] p-[20px] w-[100%] rounded-md">
                        <h2>School Address</h2>
                        <input type="text" placeholder="...." value={school_address} onChange={(e) => setSchooladdress(e.target.value)} required className="w-[100%] mt-[10px] rounded-md"/>
                    </div>

                    <div className="bg-slate-200 mt-[30px] p-[20px] w-[100%] rounded-md">
                        <h2>School LGA</h2>
                        <input type="text" placeholder="...." value={school_lga} onChange={(e) => setSchoollga(e.target.value)} required className="w-[100%] mt-[10px] rounded-md"/>
                    </div>

                    <div className="bg-slate-200 mt-[30px] p-[20px] w-[100%] rounded-md">
                        <h2>Volunteer Referral code Required</h2>
                        <input type="text" placeholder="...." maxLength={6} min={6} value={referral_code} onChange={(e) => setReferral_code(e.target.value)} required className="w-[100%] mt-[10px] rounded-md"/>
                    </div>

                    {invalidCred && (
                    <div className="w-full p-2 my-2 text-[.9rem] text-red-500 border border-red-500 rounded-md">
                      {invalidCred}
                    </div>
                  )}

                        <button
                    type="submit"
                    className="w-[80%] m-[auto] text-black bg-yellow-300  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex justify-center items-center gap-2"
                  >
                    {tinyLoader ? "Procesing" : "Login"}
                    {tinyLoader && <ClipLoader color="#fff" size={20} />}
                  </button>
                    </form>
                </div>

    </div>
    </div>
    </div>



    )
}

export default SchoolRegistration;





















