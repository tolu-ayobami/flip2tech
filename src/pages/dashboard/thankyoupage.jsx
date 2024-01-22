import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./component/Footer"
import Header from "./component/Header"





const Thankyoupage = () =>{

    return(

        <div className="">
            <Header/>
        <div className="w-[80%] max-md:mt-[40px] mt-[100px]  m-[auto] max-md:w-[80%] flex flex-col gap-[30px]">
        <img src="/images/pana7.png" className="w-[30%] m-[auto] max-md-[80%] mt-[70px]"/>
        <h2 className="font-bold  text-[30px] text-center">Congratulations, Tech Trailblazer!</h2>
        <p className="w-[50%] max-md:w-[90%] text-center m-[auto]">Congratulations on completing your registration! You're now an essential part of our mission to revolutionize tech education. Get ready to make a real impact and inspire change. Thank you for joining us on this exciting journey!</p>
            <Link to="/volunteerdashboard"><button className="bg-amber-400 p-[15px] rounded-md max-md:w-[70%] m m-[auto] flex align-center justify-center w-[30%]">Go to Dashboard</button></Link>

            </div>

    
            <Footer />
        </div>
    )

}

export default Thankyoupage;