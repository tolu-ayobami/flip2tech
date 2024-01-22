import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Footer from "./component/Footer";

import Header from "./component/Header"
import Loader from "../../components/Loader";
import { ClipLoader } from "react-spinners";


const Volunteerreg2 = () => {

  const [loader, setLoader] = useState(false);

    const[bio, setBio] = useState("")
    const[laptop, setLaptop,] = useState("")
    const[internet, setInternet] = useState("")

    const [tinyLoader, settinyLoader] = useState(false);


    const name = (e) =>{
        setBio(e.target.value);
    }
const navigate = useNavigate()
    
    const [invalidCred, setInvalidCred] = useState("");
    
    
    const lga = (e) =>{
        setLaptop(e.target.value);
    }

    
    const nin = (e) =>{
            setInternet(e.target.value);
    }

{/*
useEffect(() =>{
  if(localStorage.getItem("token") =="" && localStorage.getItem("token") == null){
    navigate("/volunteerreg2");
  }
  },[])
*/}

    const handleSubmit = async(e) =>{

      e.preventDefault();
        
try {
  settinyLoader(true);
  const res = await fetch("https://flip2tech-production.up.railway.app/volunteer-continue-verification/",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer " + localStorage.getItem("token")
    },
    body: JSON.stringify({bio, internet, laptop}),
  })

  const data = await res.json();

console.log(data)

  if(data.message){

    navigate("/volunteerreg3");
  }else{

    setInvalidCred("please enter valid details");
  
}
  
} catch (error) {
  if (error.res.status === 400) {
    setInvalidCred("please enter valid details");
   }
}finally {
  settinyLoader(false);
}



       {/* try {
            await axios.post("https://flip2tech-production.up.railway.app/volunteer-continue-verification/",{
            bio, internet, course, educational_level, laptop
           },{headers:{Authorization:"Bearer" + localStorage.getItem("token")
        }}).then((r) =>{
             if(r.ok){
               
               console.log(r)
             }else{
              setInvalidCred("error occured");
             }
            
           })
         } catch (error) {
           if (error.response === !ok) {
             setInvalidCred("error occured");
           }
           
         }*/}


        }
    return(

        <div className="">
            <Header/>
            {loader && <Loader />}
            <div className="p-[20px] shadow-md m-auto w-[55%] max-md:w-[85%] mt-[150px] max-sm:w-[94%]">
              
            <div className=" flex flex-col gap-[5px] max-md:text-[20px] text-[26px]">
                        <h1>Please fill in your information</h1>
                        
                    </div>

                  <form onSubmit={handleSubmit}>
                    <div className=" mt-[20px] p-[20px] w-[100%] rounded-md">
                        <h2>TELL US ABOUT YOUR SELF</h2>
                    <textarea name="text" value={bio} onChange={name} rows="4" cols="6" required  className="w-[100%] h-[100px] mt-[10px] rounded-md" wrap="soft"/>
                    </div>

                   

                    

                    <div className=" mt-[15px] p-[20px] w-[100%] rounded-md">
                        <h2>DO YOU HAVE A FUNCTIONING LAPTOP</h2>
                       <select value={laptop}  onChange={lga} required className="w-[100%] mt-[10px] max-md:w-[70%] max-sm:w-[100%] rounded-md">
                       <option value="">-</option>
                        <option value="yes">YES</option>
                        <option value="no">NO</option>
                       </select>
                    </div>

                    
                    <div className=" mt-[15px] p-[20px] w-[100%] rounded-md">
                        <h2>DO YOU HAVE ACCESS TO INTERNET</h2>
                       <select value={internet} onChange={nin} required className="w-[100%] mt-[10px] max-md:w-[70%] max-sm:w-[100%] rounded-md">
                       <option value="">-</option>
                        <option value="yes">YES</option>
                        <option value="no">NO</option>
                       </select>
                    </div>

                    {invalidCred && (
                    <div className="w-full p-2 my-2 text-[.9rem] text-red-500 border border-red-500 rounded-md">
                      {invalidCred}
                    </div>
                  )}
                 <div className="flex mt-[40px] flex-col">

                 <button
                    type="submit"
                    className="w-[80%] text-black bg-yellow-300 m-[auto]  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex justify-center items-center gap-2"
                  >
                    {tinyLoader ? "Procesing" : "proceed"}
                    {tinyLoader && <ClipLoader color="#fff" size={20} />}
                  </button>
                    <span className="rounded-md text-black p-[10px] w-[80%] flex align-center justify-center m-auto mt-[30px]  w-[130px]" style={{border:"1px solid orange"}}>    
                        <Link to="/volunteerreg1"><button type="submit" >Back</button></Link>
                    </span>
                    </div>
                    </form>
                </div>
            <Footer/>
            </div>

    )
}
export default Volunteerreg2;