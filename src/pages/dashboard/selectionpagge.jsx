import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";

import Footer from "./component/Footer"

import Header from "./component/Header"
import AOS from "aos";
import "aos/dist/aos.css"


const Selectionpage = () =>{

  const handleClick = (userType) => {
  
    localStorage.setItem('user_type', JSON.stringify(userType));
   
  };

 
  useEffect(() =>{
		AOS.init({duration: 2000})

	}, [])
      


    return(
        <div>

<Header/>


<div data-aos="fade-right" className="w-[80%] m-[auto] text-center  mt-[100px]">
    <h2 className="font-bold text-[30px] max-md:text-[24px] max-md:w-[95%]">Welcome to FliptoTech</h2>
    <p className="w-[50%] m-[auto] mt-[20px] max-md:w-[95%]">Your journey here begins with a simple choice. By selecting the user type that aligns with your interests and objectives, we can fine-tune your experience, ensuring you receive content and resources that resonate with your unique needs.</p>
</div>



<div className="m-[auto] flex flex-col gap-[40px]  justify-center w-[50%] mt-[70px]">


  <div data-aos="fade-left" className=" flex max-md:flex-col max-md:m-[auto]  gap-[50px]">

   <div className="w-[50%] max-md:w-[100%]  hover:scale-110 transition duration-1000" onClick={() => {
            handleClick("volunteer");
          }}>
  <Link to="/volunteerregistration"><img src="/homepageimage/volunteer.png" className="rounded-lg"/></Link>
   </div>

   <div className="w-[50%]  max-md:w-[100%] hover:scale-110 transition duration-1000"  onClick={() => {
            handleClick("instructor");
          }}>
   <Link to="/volunteerregistration"><img src="/homepageimage/teacher.svg" className="rounded-lg"/></Link>
   </div>
   
   </div>

   <div data-aos="fade-up" className="flex max-md:flex-col max-md:m-[auto]  gap-[50px]">

   <div className="w-[50%] max-md:w-[100%]  hover:scale-110 transition duration-1000" onClick={() => {
            handleClick("student");
          }}>
   <Link to="/volunteerregistration"><img src="/homepageimage/student.png" className="rounded-lg"/> </Link>
   </div>

   <div className="w-[50%]  max-md:w-[100%] hover:scale-110 transition duration-1000"  onClick={() => {
            handleClick("parent");
          }}>
   <Link to="/volunteerregistration"><img src="/homepageimage/parent.svg" className="rounded-lg"/></Link>
   </div>

   </div>

</div>

<Footer/>


        </div>
    )
}


export default Selectionpage