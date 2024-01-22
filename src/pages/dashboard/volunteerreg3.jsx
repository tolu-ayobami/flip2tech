import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./component/Footer"
import Header from "./component/Header"
import Loader from "../../components/Loader";
import { ClipLoader } from "react-spinners";


const Volunteerreg3 = () => {



    const[course, setCourse] = useState("")
    const[education_level, setEducation_level] = useState("")
    const[prev_course, setPrev_course] = useState("")
    const[experience, setExperience] = useState("")

    const [tinyLoader, settinyLoader] = useState(false);
    const [loader, setLoader] = useState(false);
    const cos = (e) =>{
        setCourse(e.target.value);
    }
const navigate = useNavigate()
    
    const [invalidCred, setInvalidCred] = useState("");
    
    
    const edu = (e) =>{
        setEducation_level(e.target.value);
    }

    
    const prev = (e) =>{
            setPrev_course(e.target.value);
    }

    
    const ex = (e) =>{
      setExperience(e.target.value);
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
  const res = await fetch("https://flip2tech-production.up.railway.app/auth/volunteer-education/",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer " + localStorage.getItem("token")
    },
    body: JSON.stringify({course, education_level, prev_course, experience}),
  })

  const data = await res.json();

console.log(data)

  if(data.message){

    navigate("/volunteerreg4");
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
                  <div className=" mt-[15px] p-[20px] w-[100%] rounded-md">
                        <h2>COURSE OF INTEREST</h2>
                       <select value={course}  onChange={cos} required className="w-[100%] mt-[10px] max-md:w-[70%] max-sm:w-[100%] rounded-md">
                       <option value="">-</option>
                        <option value="codign">CODING</option>
                        <option value="ui/ux">UI/UX</option>
                        <option value="data analysis">DATA ANALYSIS</option>
                        <option value="marketer">MARKETER</option>
                        <option value="frontend developement">FRONT-END DEVELOPMENT</option>
                        <option value="backend developement">BACK-END DEVELOPMENT</option>
                       </select>
                    </div>

                    
                    <div className=" mt-[15px] p-[20px] w-[100%] rounded-md">
                        <h2>LEVEL OF EDUCATION</h2>
                       <select value={education_level} onChange={edu} required className="w-[100%] mt-[10px] max-md:w-[70%] max-sm:w-[100%] rounded-md">
                       <option value="">-</option>
                        <option value="ond">OND</option>
                        <option value="bsc">BSC</option>
                        <option value="post graduate">POST GRADUATE</option>
                        <option value="masters">MASTERS</option>
                        <option value="phd">PHD</option>
                       </select>
                    </div>

                    
                    <div className=" mt-[15px] p-[20px] w-[100%] rounded-md">
                        <h2>HAVE YOU EVER TAKEN A TECH COURSE</h2>
                       <select value={prev_course}  onChange={prev} required className="w-[100%] mt-[10px] max-md:w-[70%] max-sm:w-[100%] rounded-md">
                       <option value="">-</option>
                        <option value="yes">YES</option>
                        <option value="no">NO</option>
                       </select>
                    </div>


                    <div className=" mt-[20px] p-[20px] w-[100%] rounded-md">
                        <h2>HOW WAS YOUR EXPERIENCE</h2>
                    <textarea name="text" value={experience} onChange={ex} rows="4" cols="6" required  className="w-[100%] h-[100px] mt-[10px] rounded-md" wrap="soft"/>
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
                        <Link to="/volunteerreg2"><button type="submit" >Back</button></Link>
                    </span>
                    </div>
                    </form>
                </div>
            <Footer/>
            </div>

    )
}
export default Volunteerreg3;