import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import review from "./data";
import Footer from "./component/Footer"
import testimonials from "../../data/testimonials.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation} from "swiper";
import "../../swiper-pagination.css";
import Faqs from "./faqs";
import { useSwiper } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css"



// Import Swiper styles

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




const Home = () =>{

const [toggle, setToggle] = useState(false)

   const swiper = useSwiper()

    const [set, setSet] = useState(false);

    const jy = () => {
        setSet(!set);
    }
    
    
    
    useEffect(() =>{
		AOS.init({duration: 2000})

	}, [])
      


const [index, setIndex] = useState(review)



    return(
        <>
        <div className=" adu">




            <div className=" w-[100%] px-[60px] flex align-center max-md:p-[18px]  justify-center max-md:justify-between  m-[auto] justify-between  pt-[10px]">

               
                <div className="my-[auto] ">
              <Link to="/"><img src="/homepageimage/logo.png" className="w-[200px] max-md:w-[115px]"></img></Link>
              </div>
                <div className={set? "active clao": "clao"}>


                <div className=" my-[auto]">


                <div className="my-[auto] ">
              <Link to="/"><img src="/homepageimage/logo-white.png" className="w-[200px] max-md:w-[120px] hidden max-md:flex"></img></Link>
               </div>
               <ul className="flex align-center gap-[20px] m-[auto] justify-center mr-[190px] max-md:mr-[0px] ul text-center max-md:flex-col max-md:mt-[40px] max-md:gap-[30px]">
      
                     <Link to="/"><li >ABOUT US</li></Link>
                    <Link to="/"><li>COURSES</li></Link>
                   <Link to="/volunteer"> <li>VOLUNTEERS</li></Link>
      
                   </ul>
                </div>


                <div className=" flex gap-[20px] align-center my-[auto] max-md:flex-col ">
                    <div className=" my-[auto] p-[10px]  text-amber-400 max-md:text-white bg-red text-center font-bold rounded-sm w-[130px]">
                        <p>Login</p>
                    </div>

                    <div className="my-[auto]">
                       <Link to="/selectionpage"><button className="p-[10px] bg-[#FEBB00] rounded-md font-bold max-md:text-black w-[130px]">Get started</button></Link>
                    </div>
                </div>
                
                </div>
                 
                {set? <div className="w-[8%] my-[auto] cursor-pointer" onClick={jy}><img src="/homepageimage/close.png" className="w-[100%] max-md:flex h-[auto] hidden "/></div> :
           (<div  onClick={jy} className="flex flex-col gap-[3px]  my-[auto] hidden max-md:flex my-[auto] cursor-pointer" >
              <span  className="w-[30px] bg-amber-200  h-[3px]"></span>
             <span  className="w-[30px] bg-amber-200 h-[3px]"></span>
              <span  className="w-[30px] bg-amber-200 h-[3px]"></span>
            </div>)
                  }

            </div>


          {/*  ///section2   */}

            <div className="mt-[50px]    max-md:pb-[30px]">
                <div className="m-[auto]  flex align-center justify-center max-md:gap-[40px] justify-evenly max-md:flex-col max-md:flex-col-reverse  w-[98%]">

                    <div className="w-[40%]  max-md:w-[90%] max-md:m-[auto] my-[auto]">
                        <p className="font-bold">OFFLINE AND ONLINE LEARNING</p>
                        <h2 className="font-bold text-[26px]  max-md:text-[20px]">Launch Your High-Income Tech Skills For the Digital Future.</h2>
                       
                       <p>Dive into the future of innovation! Master coding, cybersecurity, design, and more. Your journey to tech expertise starts here. </p>
                       
                       <div className="p-[10px]  mt-[20px] flex gap:20px align-center justify-center bg-[#FEBB00] rounded-md w-[150px]">
                    
                      <div className=""> 
                      <button className=" font-bold">Get started</button>
                     </div>
                     
                     <div className=""> 
                     <img src="/homepageimage/right.svg"></img>
                     </div>
                        
                        </div>
                    </div>


                    <div className="w-[45%]  max-md:w-[93%] max-md:m-[auto]">
                    <img src="/homepageimage/Image.png"></img>
                    </div>
                </div>
              
            </div>

      


              <div   data-aos="fade-right"     className="flex p-[30px] align-center bg-[#FFF7E1] justify-center  justify-around  w-[100%]">
                <div className="flex flex-col align-center text-center">
                    <h2  className="font-bold  max-md:text-[14px]">4,000+</h2>
                    <p className=" max-md:text-[12px]">LEARNERS</p>
                </div>
                <div className="flex flex-col align-center text-center">
                <h2 className="font-bold  max-md:text-[14px]" >4+</h2>
                <p className=" max-md:text-[12px]">PHYSICAL LOCATION</p>
                </div>



                <div className="flex flex-col align-center justify-center text-center">
                <h2  className="font-bold  max-md:text-[14px]">12+</h2>
                <p className=" max-md:text-[12px]">COURSES</p>
                </div>

              </div>

  {/*  ///section3   */}

            </div>
            <div className="">
                <marquee style={{border:" 1px solid #D49C00", marginTop:"5px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,</marquee>
            </div>

            
  <div  data-aos="fade-left" className="">
    <div className="mt-[40px] text-center max-md:w-[90%] w-[60%] m-[auto] ">
        <h2 className="font-bold text-[30px] text-center  max-md:text-[20px]">Choose Excellence, Embrace Innovation</h2>
        <p>At FLIP-TO-TECH, we redefine excellence. Immerse yourself in a world where every detail is crafted for your success. Choose us, because your journey deserves nothing less than exceptional.</p>
    </div>




    <div    data-aos="fade-up" className=" flex gap-[30px] align-center W-[80%] max-md:flex-col max-md:w-[90%] max-md:mt-[50px] max-md:m-[auto] justify-center mt-[50px]">


       
        <div style={{border:" 1px solid #D49C00"}} className="w-[25%] hover:bg-amber-400 hover:scale-110 transition duration-1000  max-md:m-[auto] max-md:w-[90%] rounded-lg flex  flex-col gap-[30px] p-[30px] ">
       
       <div className="">
       <img src="/homepageimage/Icons.png" className="w-[20%]"></img>

       </div>
     
        <div className="">
        <h2 className="font-bold">EXPERT INSTURCTORS</h2>
        <p>Learn from industry leaders, as our expert instructors guide you through the latest in tech.</p>
        </div>
        
        </div>


         
        <div  style={{border:" 1px solid #D49C00"}} className="w-[25%] hover:bg-amber-400 hover:scale-110 transition duration-1000  border max-md:w-[90%] max-md:m-[auto] max-md:justify-center  max-md:w-[90%]   rounded-md flex flex-col gap-[30px] p-[30px] ">
       
       <div>
       <img src="/homepageimage/Icons1.png" className="w-[20%]"></img>

       </div>
     
        <div>
        <h2 className="font-bold">CUTTING EDGE CURRICULLUM</h2>
        <p>Stay ahead with a curriculum designed to embrace the forefront of technological innovation.</p>
        </div>
        
        </div>




         
        <div style={{border:" 1px solid #D49C00"}} className="w-[25%] border max-md:w-[90%] max-md:m-[auto] hover:bg-amber-400 hover:scale-110 transition duration-1000 rounded-md flex flex-col gap-[30px]  p-[30px]  ">
       
       <div>
       <img src="/homepageimage/Icons2.png" className="w-[20%]"></img>

       </div>
     
        <div>
        <h2 className="font-bold">THRIVING TECH COMMUNITY</h2>
        <p>Join a vibrant community of tech enthusiasts, fostering collaboration and endless opportunities.</p>
        </div>
        
        </div>


    </div>








    <div data-aos="fade-left"  className="">


<div className=" flex  flex-col gap-[10px] max-md:m-[auto] text-center w-[80%] m-[auto] pt-[50px]">
    <h2 className="font-bold text-[30px]  max-md:text-[20px]">Accessing our amazing courses</h2>
    <p className="w-[80%] max-md:w-[90%] text-center m-[auto]">Half of success is knowing what to act on. Inside of our Flip To Tech Programs, You’ll have access to the latest opportunities so you can be at the right place at the right time.  </p>
</div>

<div className="flex w-[90%] max-md:flex-col max-md:w-[90%] max-md:mt-[40px] m-[auto] gap-[20px]">

<div className=" w-[80%] max-md:w-[90%] mt-[40px]  hover:scale-105 transition duration-1000  max-md:m-[auto] max-md:text-[15px] rounded-md  shadow-md flex flex-col gap-[25px]">
    <img src="/homepageimage/course.png" className="rounded-t-md"/>


    <div className=" p-[15px] flex flex-col gap-[10px]">
    <p className="p-[3px] rounded-md bg-[#FFF1CCB5] w-[100px] text-center">#52000</p>
    <p className="font-bold">Learn Essentials of User Interface Design in Figma</p>
    
    
     
    <div className="flex justify-between w-[100%] my-[auto]">
    <div className="flex gap-[10px] w-[100%]">
    <img src="/homepageimage/clock.svg"/>
    <p className="my-[auto] w-[100%]">3 months</p>
    </div>


    <div className="flex gap-[10px] w-[100%] my-[auto]">
    <img src="/homepageimage/cap.svg" className=" my-[auto]"/>
    <p>Online/Onsite Class</p>
    </div>
</div>
<div className=" flex gap-[10px] justify-between align-center">


    <div className="flex gap-[20px]">
    <img src="/homepageimage/tim.png" className="rounded-[50%] w-[40px] my-[auto] h-[auto]"/>
    <div className=" flex flex-col gap-[3px]">
    <p>Tim berry</p>
    <div className="flex gap-[3px]">
    <img src="/homepageimage/star2.svg"/>
    <img src="/homepageimage/star2.svg"/>
    <img src="/homepageimage/star2.svg"/>
    <img src="/homepageimage/star2.svg"/>
    <img src="/homepageimage/star.svg"/>
    </div>
    
    </div>
   
    </div>
    <img src="/homepageimage/Arrow.png" className="w-[30px] my-[auto] h-[auto]"/>
    </div>
</div>
</div>






















<div className=" w-[80%] mt-[40px] max-md:w-[90%] hover:scale-105 transition duration-1000 max-md:m-[auto] max-md:text-[15px] rounded-md  shadow-md flex flex-col gap-[25px]">
    <img src="/homepageimage/course.png" className="rounded-t-md"/>


    <div className=" p-[15px] flex flex-col gap-[10px]">
    <p className="p-[3px] rounded-md bg-[#FFF1CCB5] w-[100px] text-center">#52000</p>
    <p className="font-bold">Learn Essentials of User Interface Design in Figma</p>
    
    
      
    <div className="flex justify-between w-[100%] my-[auto]">
    <div className="flex gap-[10px] w-[100%]">
    <img src="/homepageimage/clock.svg"/>
    <p className="my-[auto] w-[100%]">3 months</p>
    </div>


    <div className="flex gap-[10px] w-[100%] my-[auto]">
    <img src="/homepageimage/cap.svg" className=" my-[auto]"/>
    <p>Online/Onsite Class</p>
    </div>
</div>

<div className=" flex gap-[10px] justify-between align-center">


    <div className="flex gap-[20px]">
    <img src="/homepageimage/tim.png" className="rounded-[50%] w-[40px] my-[auto] h-[auto]"/>
    <div className=" flex flex-col gap-[3px]">
    <p>Tim berry</p>
    <div className="flex gap-[3px]">
    <img src="/homepageimage/star2.svg"/>
    <img src="/homepageimage/star2.svg"/>
    <img src="/homepageimage/star2.svg"/>
    <img src="/homepageimage/star2.svg"/>
    <img src="/homepageimage/star.svg"/>
    </div>
    
    </div>
   
    </div>
    <img src="/homepageimage/Arrow.png" className="w-[30px] my-[auto] h-[auto]"/>
    </div>
</div>
</div>



























<div className=" w-[80%] max-md:w-[90%] mt-[40px] hover:scale-105 transition duration-1000 max-md:m-[auto] max-md:text-[15px] rounded-md  shadow-md flex flex-col gap-[25px]">
    <img src="/homepageimage/course.png" className="rounded-t-md"/>


    <div className=" p-[15px] flex flex-col gap-[10px]">
    <p className="p-[3px] rounded-md bg-[#FFF1CCB5] w-[100px] text-center">#52000</p>
    <p className="font-bold">Learn Essentials of User Interface Design in Figma</p>
    
    
    <div className="flex justify-between w-[100%] my-[auto]">
    <div className="flex gap-[10px] w-[100%]">
    <img src="/homepageimage/clock.svg"/>
    <p className="my-[auto] w-[100%]">3 months</p>
    </div>


    <div className="flex gap-[10px] w-[100%] my-[auto]">
    <img src="/homepageimage/cap.svg" className=" my-[auto]"/>
    <p>Online/Onsite Class</p>
    </div>
</div>

    <div className=" flex gap-[10px] justify-between align-center">

    <div className="flex gap-[20px]">
    <img src="/homepageimage/tim.png" className="rounded-[50%] w-[40px] my-[auto] h-[auto]"/>
    <div className=" flex flex-col gap-[3px]">
    <p>Tim berry</p>
    <div className="flex gap-[3px]">
    <img src="/homepageimage/star2.svg"/>
    <img src="/homepageimage/star2.svg"/>
    <img src="/homepageimage/star2.svg"/>
    <img src="/homepageimage/star2.svg"/>
    <img src="/homepageimage/star.svg"/>
    </div>
    
    </div>
   
    </div>
    <img src="/homepageimage/Arrow.png" className="w-[30px] my-[auto] h-[auto]"/>
    </div>
</div>
</div>






</div>


<div className="flex gap-[20px] w-[90%] mt-[30px] w-[flex-end align-center justify-end">
<img src="/homepageimage/Arrow1.png" className="w-[40px] my-auto]"></img>
<img src="/homepageimage/Arrow2.png"  className="w-[40px] my-auto]"></img>
</div>


</div>










    <div data-aos="fade-up"  className="mt-[50px] flex flex-col gap-[10px] text-center max-md:w-[90%] w-[60%] m-[auto] ">
        <h2 className="font-bold text-[30px] text-center  max-md:text-[20px]">Elevate Your Experience with our Unique Features</h2>
        <p>Unlock immersive learning, teaching opportunities, and advocacy rewards. Elevate your tech journey with our standout features designed for success.</p>
    </div>

         

   
         



<div data-aos="fade-right"  className=" flex align-center W-[80%] m-[auto] max-md:flex-col max-md:gap-[40px] max-md:mt-[40px] justify-evenly justify-center ">

         <div className=" flex flex-col w-[40%] max-md:w-[85%] max-md:m-[auto] my-[auto] mt-[70px] ">
            
         <div className="flex flex-col mb-[50px] gap-[10px]  my-[auto]">
        <h2 className="font-bold text-[30px]  max-md:text-[17px]">Immersive Learning Experiences</h2>
        <p>Engage in hands-on, project-based learning that goes beyond theory, shaping you into a tech professional ready for real-world.</p>
        </div>
        
        <div className="flex gap-[10px] align-center justify-center  my-[auto] ">

        <img src="/homepageimage/Skiils.png" className="w-[10%] h-[auto] max-md:w-[6%] my-[auto] max-sm:w-[10%]" ></img>
       

        <div className="flex flex-col max-md:m-[auto] gap-[35px] max-md:gap-[20px]">

       <div className="flex flex-col w-[100%]">
        <h2 className="font-bold text-[20px]  max-md:text-[15px]">Hands-On Mastery</h2>
        <p className="max-md:text-[13px]">Engage deeply with practical exercises, mastering tech skills through hands-on application.</p>
        </div>



       <div className="flex flex-col w-[100%]">
        <h2 className="font-bold text-[20px]  max-md:text-[15px]">Real-World Challenge</h2>
        <p className="max-md:text-[13px]">Tackle industry-inspired projects, preparing you to excel in real-world tech scenarios.</p>
        </div>


        
       <div className="flex flex-col w-[100%]">
        <h2 className="font-bold text-[20px]  max-md:text-[15px]">Beyond Theory</h2>
        <p className="max-md:text-[13px]">Engage deeply with practical exercises, mastering tech skills through hands-on application.</p>
        </div>
        
        </div>
        
     </div>
     <div className="p-[10px]  mt-[20px] flex gap:20px align-center justify-center bg-[#FEBB00] rounded-md w-[150px]">
                    
                    <div className=""> 
                    <button className=" font-bold">Get started</button>
                   </div>
                   
                   <div className=""> 
                   <img src="/homepageimage/right.svg"></img>
                   </div>
                      
                      </div>
     </div>



<div className=" w-[40%] my-[auto]  max-md:w-[85%] max-md:m-[auto] ">
<img src="/homepageimage/Image1.png" className="w-[95%]"></img>
</div>



</div>



{/*//////////////////////////   volunteer*/}






<div data-aos="zoom-in" className=" flex align-center W-[80%] m-[auto]  max-md:gap-[50px] max-md:flex-col-reverse mt-[50px] justify-evenly justify-center ">

         

            <div className=" w-[40%] my-[auto] max-md:w-[85%] max-md:m-[auto]   mt-[10%]">
           <img src="/homepageimage/Imager.png" className=""></img>
          </div>
        
    
        
         <div className=" flex flex-col w-[40%] my-[auto] max-md:w-[85%] max-md:m-[auto] mt-[70px] ">
            
         <div className="flex flex-col mb-[50px] my-[auto]">
        <h2 className="font-bold text-[30px]  max-md:text-[17px]">Earn as a Tech Advocate</h2>
        <p>Join our volunteer program to not only create awareness for Flip to Tech but also earn rewards while championing the tech education revolution. Be the voice of change!.</p>
        </div>
        
        <div className="flex gap-[10px] align-center justify-center  my-[auto] ">

        <img src="/homepageimage/Skiils.png" className="w-[10%] h-[auto] max-md:w-[6%] my-[auto] max-sm:w-[10%]" ></img>
        

        <div className="flex flex-col gap-[35px] max-md:gap-[20px]">

       <div className="flex flex-col w-[100%]">
        <h2 className="font-bold text-[20px] max-md:text-[15px]">Awareness Amplification </h2>
        <p className="max-md:text-[13px]"> Boost Flip to Tech visibility while creating awareness within your network and beyond. </p>
        </div>



       <div className="flex flex-col w-[100%]">
        <h2 className="font-bold text-[20px] max-md:text-[15px]">Rewards for Advocacy </h2>
        <p className="max-md:text-[13px]">Be recognized and rewarded for your role in championing the revolution in tech education.. </p>
        </div>


        
       <div className="flex flex-col w-[100%]">
        <h2 className="font-bold text-[20px]  max-md:text-[15px]">Change Catalyst </h2>
        <p  className="max-md:text-[13px]" > As a volunteer, be the catalyst for positive change in the tech education landscape.</p>
        </div>
        
        </div>
        
     </div>
     <div className="p-[10px]  mt-[20px] flex gap:20px align-center justify-center bg-[#FEBB00] rounded-md w-[200px]">
                    
                    <div className=""> 
                    <button className=" font-bold">Become a volunteer</button>
                   </div>
                   
                   <div className=""> 
                   <img src="/homepageimage/right.svg"></img>
                   </div>
                      
                      </div>
     </div>





</div>




<div data-aos="fade-right"  className=" flex align-center justify-center m-[auto] mt-[40px] max-md:flex-col gap-[20px] ">
    <h2 className="font-bold text-[30px] w-[30%] max-md:w-[90%] text-center max-md:m-[auto]">Trusted by Visionaries, Backed by Innovators</h2>

    <p className="w-[50%] my-[auto] max-md:w-[80%] max-md:m-[auto]">Leading companies choose Flip to Tech for cutting-edge skill development. Join the league of innovators who trust us to shape their tech-savvy workforce. Elevate your company with expertise you can rely on.</p>
</div>


<div data-aos="fade-left"  className=" flex flex-col max-md:m-[auto] gap-[40px] max-md:mt-[30px] w-[100%]  mt-[70px]">
    <div className=" flex gap-[60px] max-md:m-[auto] justify-center align-center w-[100%] overflow-x-scroll m-[auto]">
<img src="/homepageimage/FCMB.svg" className="w-[17%] h-[auto] my-[auto]" />
<img src="/homepageimage/Logoi.png"  className="w-[17%] h-[auto] my-[auto]"/>
<img src="/homepageimage/slum.png" className="w-[17%] h-[auto] my-[auto]"/>
<img src="/homepageimage/FCMB.svg" className="w-[17%] h-[auto] my-[auto]" />
<img src="/homepageimage/Logoi.png" className="w-[17%] h-[auto] my-[auto]" />
    </div>

    <div className=" flex gap-[60px] max-md:m-[auto] justify-center align-center w-[100%] overflow-x-scroll m-[auto]">
<img src="/homepageimage/FCMB.svg" className="w-[17%] h-[auto] my-[auto]" />
<img src="/homepageimage/Logoi.png"  className="w-[17%] h-[auto] my-[auto]"/>
<img src="/homepageimage/slum.png" className="w-[17%] h-[auto] my-[auto]"/>
<img src="/homepageimage/FCMB.svg" className="w-[17%] h-[auto] my-[auto]" />
<img src="/homepageimage/Logoi.png" className="w-[17%] h-[auto] my-[auto]" />
    </div>

    </div>

<div data-aos="fade-right" className=" flex align-center justify-evenly max-md:flex-col w-[98%] m-[auto]">

<div className=" w-[40%] mt-[50px] max-md:w-[90%] max-md:m-[auto] flex flex-col gap-[20px] max-md:mt-[50px]">
        
        <h2 className="font-bold text-[30px] max-md:text-[20px] max-md:text-center">Frequently Asked Questions</h2>
        <p className="max-md:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
   
        <div className="p-[10px]  max-md:m-[auto]  flex gap:20px align-center justify-center bg-[#FEBB00] rounded-md w-[150px]">
                    
                    <div className=""> 
                    <button className=" font-bold">Contact Us</button>
                   </div>
                   
                   <div className=""> 
                   <img src="/homepageimage/right.svg"></img>
                   </div>
                      
                      </div>

                      <img src="/homepageimage/amico2.png" className="w-[80%] mt-[40px] max-md:m-[auto]"></img>
   
   
    </div>


<div className="flex my-[auto] flex-col w-[40%] max-md:w-[90%] max-md:mt-[40px] max-md:m-[auto]">
    
{index.map((ma) => {

return(
      <Faqs {...ma}/>
    )
})}
</div>

    


</div>



<div data-aos="fade-up"  className="m-[auto] text-center mt-[70px] max-md:w-[99%] ">
    <h2 className="font-bold text-[30px] max-md:text-[20px] ">Meet Our Tech Trailblazers</h2>
    <p className="w-[50%] m-[auto] max-md:w-[90%] mt-[10px]">Flip to Tech: Where success stories are crafted, and dreams transform into reality. Your success story starts here.</p>
</div>

<div data-aos="fade-up" className="">
      <Swiper
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{
        delay: 7500,
        disableOnInteraction: false,
      }}
      navigation={{
        prevEl:".prev",
        nextEl:".next",
      }}
      pagination={{
        clickable: true,
      }}

      modules={[Autoplay, Pagination, Navigation]}
    >
      {testimonials.map((item, index) => {
        return (
          <SwiperSlide key={index}>
                <div className="flex gap-[20px] p-[10px] overflow-hidden max-md:w-[80%] max-md:gap-[20px] max-md:mt-[40px] max-md:h-[500px] max-md:flex-col max-md:m-[auto] m-[auto] mt-[30px] pb-[30px] justify-center my-[auto] align-center w-[50%]" style={{border:"1px solid #FEBB00", borderRadius:"20px"}}>
                    
                    <img src={item.image} className="w-[120px] h-[120px]  my-[auto]   max-md:m-[auto] my-[auto] rounded-lg" style={{borderRadius:"100%"}} />
                    
                    <div className="my-[auto] max-md:p-[10px] flex max-md:w-[90%] max-md:m-[auto] flex-col w-[50%]">
                    <img src="/homepageimage/quote.svg" className="w-[15%] max-md:m-[auto]"/>
                        <h2 className="max-md:text-center">{item.story}</h2>
                        <h2 className="font-bold text-[20px] max-md:m-[auto]">{item.name}</h2>
                        <h2 className="max-md:text-center">{item.role}</h2>
                </div>
            </div>
          </SwiperSlide>
        );
      })}
      <div className="all ">
                <img src="/homepageimage/Arrow1.png" onClick={() => swiper.slidePrev()} className="prev my-[auto]" />
               <img src="/homepageimage/Arrow2.png" onClick={() => swiper.slideNext()} className="next my-[auto]" />
            </div>
    </Swiper>
</div>

<div data-aos="fade-left"  className="flex align-center my-[auto] mt-[70px] w-[80%] m-[auto] max-md:gap-[30px] max-md:flex-col justify-evenly">


<div className=" w-[40%] flex flex-col gap-[10px] max-md:gap-[15px] mt-[40px] max-md:w-[100%] max-md:m-[auto]">

    <h2 className="font-bold text-[30px] max-md:text-[20px] max-md:text-center" > Stay Tech-Tuned with Flip to Tech’s Insider Insights</h2>
    <p className="max-md:text-[14px] max-md:text-center">Subscribe to our newsletter for a front-row seat to the latest tech trends, exclusive updates, and exciting opportunities. </p>
 <div className="flex max-md:m-[auto] max-md:justify-center w-[100%]">
 <input type="text" className="border-amber-200" placeholder="your email@gmail.com"></input>
 <button className="bg-[#FEBB00] p-[10px] w-[100px]">send</button>
 </div>
 
    </div>
        
    <img src="/homepageimage/pana.png" className="max-md:m-[auto]"/>
</div>







<Footer/>




  </div>
            </>
    )
}

export default Home;                
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
           