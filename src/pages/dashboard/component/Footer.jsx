import react from "react";
import { Link } from "react-router-dom";









const Footer = () =>{
    return(
  <div>

<div className=" bg-[#F6F8FF] p-[20px] px-[40px] mt-[150px] max-md:flex-col" >

<div className="w-[95%] m-[auto]">

<div className=" flex  align-center justify-between  max-md:flex-col max-md:mt-[30px]">
    <h2 className="font-medium max-md:text-[20px] text-[30px] my-[auto]">Unlock Your Digital Potential with Flip to Tech</h2>
    <div className="p-[10px] my-[auto] mt-[20px] flex gap:20px align-center justify-center bg-[#FEBB00] rounded-md w-[150px]">
                       
    <div className=""> 
   <Link to="/selectionpage"> <button className=" font-bold">Get started</button></Link>
    </div>
                     
                         
                         </div>
</div>



<div className="flex align-center gap-[30px]  max-md:flex-col justify-between mt-[70px]">


<div className=" flex gap-[20px] flex-col">


<div className="flex align-center my-[auto] justify-between w-[100%] max-md:w-[50%]  border-b gap-[60px]">
    <div className=" flex gap-[10px]">
    <img src="/homepageimage/lk.svg"/>
<p>LINKEDIN</p>
    </div>

<img src="/homepageimage/row.svg"/>
</div>





<div className="flex align-center my-[auto] justify-between w-[100%] max-md:w-[50%]   border-b gap-[60px]">
    <div className=" flex gap-[10px]">
    <img src="/homepageimage/Frame.svg"/>
<p>TWITTER</p>
    </div>

<img src="/homepageimage/row.svg"/>
</div>



</div>

<div className="flex gap-[20px] flex-col">


<div className="flex align-center my-[auto] justify-between w-[100%] max-md:w-[50%]  border-b gap-[60px]">
    <div className=" flex gap-[10px]">
    <img src="/homepageimage/Instagram.svg"/>
<p>INSTAGRAM</p>
    </div>

<img src="/homepageimage/row.svg"/>
</div>




<div className="flex align-center my-[auto] justify-between w-[100%] max-md:w-[50%]   border-b gap-[60px]">
    <div className=" flex gap-[10px]">
    <img src="/homepageimage/WhatsApp.svg"/>
<p>WHATSAPP</p>
    </div>

<img src="/homepageimage/row.svg"/>
</div>
</div>








<div className="flex gap-[20px] flex-col ">


<div className="flex align-center my-[auto] justify-between  w-[100%]  max-md:w-[50%]  border-b gap-[60px]">
    <div className=" flex gap-[10px]">
    <img src="/homepageimage/discord.svg"/>
<p>DISCORD</p>
    </div>

<img src="/homepageimage/row.svg"/>
</div>




<div className="flex align-center my-[auto] justify-between w-[100%] max-md:w-[50%] border-b gap-[60px]">
    <div className=" flex gap-[10px]">
    <img src="/homepageimage/slack.svg"/>
<p>SLACK</p>
    </div>

<img src="/homepageimage/row.svg"/>
</div>
</div>

</div>





</div>

<div className=" flex align-center w-[95%] m-[auto] max-md:flex-col max-md:gap-[30px] justify-between mt-[50px]">



<div className=" flex flex-col gap-[10px]">
<Link to="/"><img src="/homepageimage/logo.png" className="w-[150px]"/></Link>


<p>hello@fliptotech.ng</p>
<p>+2347017935247</p>
<p>All rights reserved.</p>
</div>






<div className=" flex flex-col gap-[10px]">
<h2 className="font-bold">COMPANY</h2>

<p>About Us</p>
<p>Partners</p>
<p>Careers Alumni</p>
<p>Become A Volunteer</p>
</div>







<div className="flex flex-col gap-[10px]">
<h2 className="font-bold">SCHOOLS</h2>

<p>Software School</p>
<p>Business School</p>
<p>Data School</p>
<p>Design School</p>
</div>





<div className="flex flex-col gap-[10px]">
<h2 className="font-bold">TOP COURSES</h2>

<p>Web Development Bootcamp</p>
<p>Data Analytics Bootcamp</p>
<p>Cyber Security Bootcamp</p>
<p>Product Design Bootcamp</p>
</div>





<div className="flex flex-col gap-[10px]">
<h2 className="font-bold">LEGAL</h2>

<p>Privacy Policy</p>
<p>Terms of Use</p>
<p>Cookies Preferences</p>
<p>F.A.Q</p>
</div>




</div>



<div className=" text-center mt-[40px]">
    <p>© All rights reserved 2024.Fliptotech</p>
</div>

</div>

        </div>
    )
}


export default Footer;