import React, {useState} from "react";
import ReactPaginate from "react-paginate";

 


const StudentDashboard = () =>{
    const[toggle, setToggle] = useState(false);

    const grt = () =>{
        setToggle(!toggle)
    }

  

    return(

        <div  className="w-full max-md:h-auto font-Poppins bg-slate-100">
            <div className="flex w-full ">
                
           <div   
                className={` w-[280px] h-full fixed bg-black ${toggle? "max-md:block max-md:fixed top-0 bottom-0 w-[300px] " : "max-md:hidden"}`}>
              
               <div  className="flex  gap-[40px] align-center pl-[30px] pt-[38px]">
                <span className="flex  justify-center align-center  max-md:m-auto max-md:w-[60%]"><img src="/vdashboardimages/logohead.png"></img></span>
                <span className="flex my-[auto] p-[5px] max-lg:hidden max-md:block  bg-white justify-center align-center  max-md:m-auto max-md:w-[10%]  cursor-pointer" onClick={grt} ><img src="/vdashboardimages/close.png" className="w-[15px]"></img></span>
                </div>

                <div className="mt-[60px] flex flex-col gap-[10px] ml-[20px]">

<div className="bg-amber-400 p-[10px]  rounded-tl-[10px] rounded-bl-[10px]">
 <img src="/vdashboardimages/Content.png"></img>
 </div>
 
 <div className="my-[auto] hover:bg-amber-400 text-white hover:text-black text-black p-[10px] flex align-center gap-[13px] rounded-tl-[10px] rounded-bl-[10px]" >
     <img src="/vdashboardimages/enrolled courses.svg"></img>
     <h1 className="font-medium">Enrolled Courses</h1>
     </div>
 <div className="my-[auto] hover:bg-amber-400 text-white hover:text-black p-[10px]  flex align-center gap-[13px] rounded-tl-[10px] rounded-bl-[10px]">
     <img src="/vdashboardimages/score board.png"></img>
     <h1 className="font-medium">Score Board</h1>
     </div>
 <div className="my-[auto] hover:bg-amber-400 text-white hover:text-black p-[10px] flex align-center gap-[13px] rounded-tl-[10px] rounded-bl-[10px]">
     <img src="/vdashboardimages/events.svg"></img>
     <h1 className="font-medium ">Events</h1>
     </div>
 <div className="my-[auto] hover:bg-amber-400 text-white hover:text-black p-[10px] flex align-center gap-[13px] rounded-tl-[10px] rounded-bl-[10px]">
     <span className="my-[auto]"><img src="/vdashboardimages/exit.svg" className="hover:bg-black-600"></img></span>
     <h1 className="font-medium ml-[6px]">Exit to site</h1>
     </div>

 </div>
                
                </div>


                <div className="flex flex-col ml-[280px] max-md:ml-[0px] w-full">

                <div className=" flex w-[100%] bg-white  h-[90px] shadow-md p-[35px] justify-between align-center">
               
                <div className="flex gap-[20px] align-center my-[auto]">
                <div className="flex flex-col gap-[3px] pr-[15px] my-[auto] hidden max-md:flex my-[auto] cursor-pointer" onClick={grt}>
                    <span  className="w-[25px] bg-amber-200  h-[3px]"></span>
                    <span  className="w-[25px] bg-amber-200 h-[3px]"></span>
                    <span  className="w-[25px] bg-amber-200 h-[3px]"></span>
                   </div>
                   
                   
                    <div className="flex gap-[20px] align-center">
                        <h1 className="font-bold  my-[auto]">Hello Tope</h1>
                        <span className="my-[auto]"><img src="/vdashboardimages/Group.svg"></img></span>
                    </div>
                    </div>

                    <div className=" flex  align-center my-[auto]  max-md:gap-[10px] gap-[40px]">
                        <div>
                      <span><img src="/vdashboardimages/Group 422.png" className="w-[70%]"></img></span>
                        </div>
                        
                  
                    <div className="flex align-center my-[auto]">
                    <span ><img src="/vdashboardimages/Avatar.png" className="w-[70%]"></img></span>
                   <div className="flex gap-[15px] align-center my-[auto] ">
                    <h1 className="font-bold">Tope</h1>
                    <span className="my-[auto]"><img src="/vdashboardimages/Icons.png"></img></span>
                   </div>
                    </div>
                    
                    </div>
                </div>

                <div className="w-full p-[30px] ">
                    <div className="w-[100%] max-sm:w-[100%] max-md:w-[95%] max-sm:flex-col flex gap-[30px] ">
                        <div className="w-[100%]  max-md:w-[100%] p-[10px] bg-blue-600 h-[129px] flex align-center justify-center flex-col rounded-md text-white text-center">
                            <p className="max-sm:text-[15px] max-md:text-[15px]">PAYMENT LEFT</p>
                            <h1 className=" font-bold text-[30px] max-sm:text-[18px] max-md:text-[15px]">N20,000</h1>

                        </div>

                        <div className="w-[100%]  max-md:w-[100%] p-[10px] bg-[#E3A700] h-[129px] flex align-center justify-center flex-col rounded-md text-white text-center">
                            <p className="max-sm:text-[15px] max-md:text-[15px]">ASSIGNMENT</p>
                            <h1 className=" font-bold text-[30px] max-sm:text-[18px] max-md:text-[15px] ">50</h1>

                        </div>

                        <div className="w-[100%]  max-md:w-[100%] p-[10px]  bg-blue-600 h-[129px] flex align-center justify-center flex-col rounded-md text-white text-center">
                            <p className="max-sm:text-[15px] max-md:text-[15px]">CLASSES FOR THIS WEEK</p>
                           <div className="flex  gap-[10px] justify-center align-center">
                            <h1 className=" font-bold text-[30px] max-sm:text-[18px] max-md:text-[15px] ">5</h1>
                        
                            </div>

                        </div>
                        <div className="w-[100%] rounded-tl-[10px] rounded-b-[10px] flex flex-col justify-center bg-slate-200">
                            <div className="flex max-md:justify-center max-md:gap-[10px] align-center rounded-t-[10px]  bg-white p-[15px] h-[100px]">
                            <span className="my-[auto] w-[50px] max-md:w-[20px] clip"><img src="/vdashboardimages/dollar.svg"></img></span>
                           <div className="flex flex-col gap-[3px]">
                            <h3 className="font-bold text-[13px]">REFERRALS</h3>
                            <div className="flex gap-[5px] align-center">
                            <h1 className="my-[auto] font-bold text-[30px]">500</h1>
                            <span className="my-[auto]"><img src="/vdashboardimages/Vector.svg"></img></span>
                            <p className="text-[#179100;] my-[auto]">100%</p>
                            </div>
                           </div>
                            </div>
                            <h3 className="p-[10px] pl-[30px] text-[13px]">VIEW ALL</h3>
                            
                        </div>
                    </div>
                    
                </div>

                
                <div className="w-full  p-[30px]">

                <div className="flex align-center max-md:flex-col">

                <div className="w-full">

                <div className="w-full">
                        <h1 className="font-semibold text-[20px] max-md:text-[20px]">CLASSES FOR THE WEEK</h1>
                    </div>

                <div className="border-[2px] w-[98%] mt-[20px] max-sm:w-[100%] max-md:w-[95%]  p-[15px] h-[400px] overflow-y-scroll">

                    <div className="flex w-[97%] align-center justify-between bg-blue-600 max-sm:w-[100%] rounded-lg shadow-md h-[130px] max-md:w-[95%] mt-[20px] bg-[white] text-white pl-[50px] my-[auto] ">

                    <div className="flex flex-col justify-center  ">
                       <h1>Intro to Web Development -- Lesson 1</h1>
                       <div className="flex align-center  gap-[10px]">
                       <span className="my-[auto]" ><img src="/vdashboardimages/Ellipse 1157.svg" className=""></img></span>
                       <p>09:00 AM - 12:30 PM</p>
                        </div>
                        </div>

                        <div className="my-[auto] flex align-center  justify-center w-[100px] mr-[40px] bg-center   bg-no-repeat bg-calendar">
                        <h1 className="text-black mt-[8px]  p-[20px] mx-[auto] ">MON</h1>
                        </div>

                  </div>


                  <div className="flex w-[97%]  align-center justify-between bg-amber-400 max-sm:w-[100%] rounded-lg shadow-md h-[130px] max-md:w-[95%] mt-[20px] bg-[white] text-white pl-[50px] my-[auto] ">

                    <div className="flex flex-col justify-center  ">
                       <h1>Intro to Web Development -- Lesson 1</h1>
                       <div className="flex align-center  gap-[10px]">
                       <span className="my-[auto]" ><img src="/vdashboardimages/Ellipse 1157.svg" className=""></img></span>
                       <p>09:00 AM - 12:30 PM</p>
                        </div>
                        </div>

                        <div className="my-[auto]  flex align-center  justify-center w-[100px] mr-[40px] bg-center   bg-no-repeat bg-calendar">
                        <h1 className="text-black p-[20px] mt-[8px]  mx-[auto] ">WED</h1>
                        </div>

                  </div>


                      <div className="flex w-[97%] align-center bg-clip-border justify-between bg-blue-600 max-sm:w-[100%] rounded-lg shadow-md h-[130px] max-md:w-[95%] mt-[20px] bg-[white] text-white pl-[50px] my-[auto] ">

                    <div className="flex flex-col justify-center  ">
                       <h1>Intro to Web Development -- Lesson 1</h1>
                       <div className="flex align-center  gap-[10px]">
                       <span className="my-[auto]" ><img src="/vdashboardimages/Ellipse 1157.svg" className=""></img></span>
                       <p>09:00 AM - 12:30 PM</p>
                        </div>
                        </div>

                        
                        <div className="my-[auto]  mr-[40px] flex align-center  justify-center bg-center w-[100px] bg-no-repeat  bg-calendar">
                        <h1 className="text-black p-[20px] mt-[8px] mx-[auto] ">FRI</h1>
                        </div>

                  </div>
   
                    </div>

                    </div>

                    <div className="w-[30%] max-sm:w-[100%] max-md:w-[95%]">

                    <div className="w-full max-md:mt-[20px]">
                        <h1 className="font-semibold text-[20px] max-md:text-[20px]">Assignments</h1>
                    </div>


                    <div className="border-[1px] mt-[20px] h-[400px] overflow-y-scroll p-[10px]">

                        <div className="bg-slate-200  w-[100%] p-[15px]">
                            <h1 className="font-bold">Javascript Lesson 2</h1>
                            <p className="text-[12px]">19-03-2040</p>
                            <span className="text-[10px]"><a href="#">Link here</a></span>

                        </div>

                        <div className="bg-slate-200 mt-[20px] w-[100%] p-[15px]">
                            <h1 className="font-bold">Javascript Lesson 2</h1>
                            <p className="text-[12px]">19-03-2040</p>
                            <span className="text-[10px]"><a href="#">Link here</a></span>

                        </div>

                        <div className="bg-slate-200 mt-[20px] w-[100%] p-[15px]">
                            <h1 className="font-bold">Javascript Lesson 2</h1>
                            <p className="text-[12px]">19-03-2040</p>
                            <span className="text-[10px]"><a href="#">Link here</a></span>

                        </div>

                        <div className="bg-slate-200 mt-[20px] w-[100%] p-[15px]">
                            <h1 className="font-bold">Javascript Lesson 2</h1>
                            <p className="text-[12px]">19-03-2040</p>
                            <span className="text-[10px]"><a href="#">Link here</a></span>

                        </div>
                      

                        
                    </div>

                    </div>
                    </div>
                
                </div>

              
                

{/*==========================REFERRED STUDENTSt */}


            

                </div>

              
  
            </div>

        </div>
    );
};


export default StudentDashboard;