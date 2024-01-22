import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./component/Footer"
import Header from "./component/Header"
import Loader from "../../components/Loader";
import { ClipLoader } from "react-spinners";

import axios from "axios";


const Volunteerreg1 = () => {

   
    
    const[date_of_birth, setDate_of_birth] = useState("")
    const[LGA, setLGA] = useState("")
    const[NIN, setNIN] = useState("")

    const[city, setCity] = useState("")

    const cit = (e) =>{
      setCity(e.target.value)
    }

    const [tinyLoader, settinyLoader] = useState(false);

    const[street, setStreet] = useState("")
    
    const strt = (e) =>{
      setStreet(e.target.value)
    }


    const[contact, setContact] = useState("")

    
    const cont = (e) =>{
      setContact(e.target.value)
    }


    const[state, setState] = useState("")

    
    const ste = (e) =>{
      setState(e.target.value)
    }

    const [invalidCred, setInvalidCred] = useState("");
    
    

const navigate = useNavigate();
    
    const date = (e) =>{
        setDate_of_birth(e.target.value);
    }



    const [loader, setLoader] = useState(false);
    

    
    const lga = (e) =>{
        setLGA(e.target.value);
    }

    
    const nin = (e) =>{
        setNIN(e.target.value);
    }

    
{/*
useEffect(() =>{
  if(localStorage.getItem("token") =="" && localStorage.getItem("token") == null){
    navigate("/volunteerreg1");
  }
  },[])
*/}

const[ori, setOri] = useState([]);



const ret = async() =>{
  const res = await fetch("https://flip2tech-production.up.railway.app/lgas/",{
    method:"GET",
    headers:{
      "Content-Type":"application/json",
    }
  });

  const data = await res.json();
  console.log(data)
  setOri(data.lgas)
}


useEffect(()=>{
  ret();
}, [])


const [first_name, setFirst_name] = useState(
  JSON.parse(localStorage.getItem("first_name")) 
);

const ft = (e) =>{
  setFirst_name(e.target.value)
}





const [last_name, setLast_name] = useState(
  JSON.parse(localStorage.getItem("last_name")) 
);


const lt = (e) =>{
  setLast_name(e.target.value)
}

    const handleSubmit = async(e) =>{
      
        e.preventDefault();

        if(!NIN){
          setInvalidCred("please enter your nin")
        }

        if(NIN.length < 10)(
          setInvalidCred("please enter a valid nin")

        )
        



        
try {

  settinyLoader(true);
    const res = await fetch("https://flip2tech-production.up.railway.app/volunteer-continue-registration/",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer " + localStorage.getItem("token")
      },
      body: JSON.stringify({LGA, NIN, first_name, last_name, contact, street, city, state,  date_of_birth, }),
    })

 

    const data = await res.json();

 
  
  console.log(data);

    if(data.message){
      navigate("/volunteerreg2");
    
    }else{

      setInvalidCred("please enter valid details");
    
  }
    
  } catch (error) {
    console.log(error)
    if (error.res.status === 400) {
      setInvalidCred("Invalid credentials.");
    }

  }finally {
    
    settinyLoader(false);
  }
    
  
        {/*
    try {
        await axios.post("https://flip2tech-production.up.railway.app/volunteer-continue-registration/",{
        full_name, LGA, NIN, address, date_of_birth,
       },{headers:{Authorization:"Bearer " + localStorage.getItem("token")
    }}).then((r) =>{
         if(r.message){
            console.log(r);
           navigate("/volunteerreg2");
           
         }else{
          setInvalidCred("error occured");
         }
        
       })
     } catch (error) {
     console.log(error);
       } */}
       
     
    }

    return(

        <div className="">
            <Header/>
            {loader && <Loader />}

            <div className="p-[20px] shadow-md m-auto w-[55%] max-md:w-[85%]  max-sm:w-[94%] mt-[150px] ">
                  
                    <div className=" w-[100%] max-md:text-[25px] text-[26px]">
                        <h1>Please fill in your information</h1>
                      
                    </div>

                  

                    <form  onSubmit={handleSubmit}>
                      <div className=" mt-[20px] p-[20px] w-[100%] flex gap-[30px] rounded-md">
                      <div className="w-[100%]">
                        <h2>FIRST NAME</h2>
                        <input type="text"  value={first_name} onChange={ft} placeholder="gordon" required className="w-[100%] mt-[10px] rounded-md"/>
                        </div>
                        <div className="w-[100%]">
                          <h2>LAST NAME</h2>
                        <input type="text" value={last_name} onChange={lt}  placeholder="gordon" required className="w-[100%] mt-[10px] rounded-md"/>
                          </div>
                      </div>

                   
                       
                    

                    <div className=" mt-[15px] p-[20px] w-[100%] rounded-md">
                        <h2>DATE OF BIRTH</h2>
                        <input
                       type="date"
                       name="date_of_birth"
                       id="date_of_birth"
                        required
                        placeholder=""
                        value={date_of_birth}
                        onChange={date}
                        
                
                       
                        className="w-[100%] max-sm:w-[100%] rounded-md mt-[10px]"
                      />
                      
                    </div>

                    <div className=" mt-[15px] p-[20px] w-[100%] rounded-md">
                        <h2>MOBILE NUMBER </h2>
                        <input type="text" value={contact} onChange={cont} placeholder="00000000" minLength={11} maxLength={11}  required className="w-[100%] mt-[10px] rounded-md"/>
                    </div>


                    <div className=" mt-[15px] p-[20px] w-[100%] rounded-md">
                        <h2>STREET </h2>
                        <input type="text" value={street} onChange={strt} placeholder="---"  required className="w-[100%] mt-[10px] rounded-md"/>
                    </div>


                    
                    <div className=" mt-[15px] p-[20px] w-[100%] rounded-md">
                        <h2>CITY </h2>
                        <input type="text" value={city} onChange={cit} placeholder="---"  required className="w-[100%] mt-[10px] rounded-md"/>
                    </div>



                    
                    <div className=" mt-[15px] p-[20px] w-[100%] rounded-md">
                        <h2>STATE </h2>
                        <input type="text" value={state} onChange={ste} placeholder="----"  required className="w-[100%] mt-[10px] rounded-md"/>
                    </div>



                    
                    <div className=" mt-[15px] p-[20px] w-[100%] rounded-md">
                        <h2>LGA of Residence  (Required)</h2>
                        
                    <select value={LGA} onChange={lga} className="w-[100%] max-sm:w-[100%] rounded-md mt-[10px]">
      <option value="">Select  LGA</option>
      {ori.map((lga, index) => (
        <option key={index} value={lga} >
          {lga}
        </option>
      ))}
    </select>

                    
                      
                      
                      
                    
                    </div>


                    <div className=" mt-[15px] p-[20px] w-[100%] rounded-md">
                        <h2>NIN (Required)</h2>
                        <input type="text" value={NIN} onChange={nin} placeholder="000000" minLength={11} maxLength={11} required className="w-[100%] mt-[10px] rounded-md"/>
                    </div>


                    {invalidCred && (
                    <div className="w-full p-2 my-2 text-[.9rem] text-red-500 border border-red-500 rounded-md">
                      {invalidCred}
                    </div>
                  )}

                    <button
                    type="submit"
                    className="w-[80%] text-[20px] text-black bg-yellow-300 m-[auto] mt-[50px] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex justify-center items-center gap-2"
                  >
                    {tinyLoader ? "Procesing" : "proceed"}
                    {tinyLoader && <ClipLoader color="#fff" size={20} />}
                  </button>
                    </form>
                </div>

            <Footer/>
        </div>
    )

}

export default Volunteerreg1;