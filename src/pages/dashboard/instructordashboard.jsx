import React, {useState} from "react";
import ReactPaginate from "react-paginate";

 


const InstructorDashboard = () =>{
    const[toggle, setToggle] = useState(false);

    const grt = () =>{
        setToggle(!toggle)
    }

  

    return(

        <div  className="w-full max-md:h-auto font-Poppins bg-slate-100">
            <div className="flex w-full ">
                
           <div   
                className={` w-[280px] h-full fixed bg-black ${toggle? "max-md:block max-md:fixed top-0 bottom-0 max-md:w-[300px] " : "max-md:hidden"}`}>
              
               <div  className="flex  gap-[40px] align-center pl-[30px] pt-[38px]">
                <span className="flex  justify-center align-center  max-md:m-auto max-md:w-[60%]"><img src="/vdashboardimages/logohead.png"></img></span>
                <span className="flex my-[auto] p-[5px] max-lg:hidden max-md:block  bg-white justify-center align-center  max-md:m-auto max-md:w-[10%]  cursor-pointer" onClick={grt} ><img src="/vdashboardimages/close.png" className="w-[15px]"></img></span>
                </div>

                <div className="mt-[60px] flex flex-col gap-[10px] ml-[20px]">

<div className="bg-amber-400 p-[10px]  rounded-tl-[10px] rounded-bl-[10px]">
 <img src="/vdashboardimages/Content.png"></img>
 </div>
 
 <div className="my-[auto] hover:bg-amber-400 text-white hover:text-black text-black p-[10px] flex align-center gap-[13px] rounded-tl-[10px] rounded-bl-[10px]" >
     <img src="/vdashboardimages/Student1.svg"></img>
     <h1 className="font-medium">Student Grading</h1>
     </div>
 <div className="my-[auto] hover:bg-amber-400 text-white hover:text-black p-[10px]  flex align-center gap-[13px] rounded-tl-[10px] rounded-bl-[10px]">
     <img src="/vdashboardimages/file.svg"></img>
     <h1 className="font-medium">My Courses</h1>
     </div>
 <div className="my-[auto] hover:bg-amber-400 text-white hover:text-black p-[10px] flex align-center gap-[13px] rounded-tl-[10px] rounded-bl-[10px]">
     <img src="/vdashboardimages/exitv.svg"></img>
     <h1 className="font-medium ">Exit to site</h1>
     </div>
 

 </div>
                
                </div>


                <div className="flex flex-col ml-[280px] max-md:ml-[0px] w-full">

                <div className=" flex w-[100%] bg-white  h-[90px] shadow-md p-[35px] justify-between align-center">
               
                <div className="flex gap-[20px] align-center my-[auto]">
                <div className="flex flex-col gap-[3px]  my-[auto] hidden max-md:flex my-[auto] cursor-pointer" onClick={grt}>
                    <span  className="w-[25px] bg-amber-200  h-[3px]"></span>
                    <span  className="w-[25px] bg-amber-200 h-[3px]"></span>
                    <span  className="w-[25px] bg-amber-200 h-[3px]"></span>
                   </div>
                   
                   
                    <div className="flex gap-[20px] align-center">
                        <h1 className="font-bold  my-[auto]">Hello</h1>
                        <span className="my-[auto]"><img src="/vdashboardimages/Group.svg"></img></span>
                    </div>
                    </div>

                    <div className=" flex  align-center my-[auto]  max-md:gap-[10px] gap-[25px]">
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
                    <div className="w-[90%] max-sm:w-[100%] max-md:w-[95%] max-sm:flex-col flex gap-[30px] ">
                        <div className="w-[80%]  max-md:w-[100%] p-[10px] bg-blue-600 h-[129px] flex align-center justify-center flex-col rounded-md text-white text-center">
                            <p className="max-sm:text-[15px] max-md:text-[15px]">NO. OF STUDENTS</p>
                            <h1 className=" font-bold text-[30px] max-sm:text-[18px] max-md:text-[15px]">150</h1>

                        </div>

                        <div className="w-[80%]  max-md:w-[100%] p-[10px] bg-[#E3A700] h-[129px] flex align-center justify-center flex-col rounded-md text-white text-center">
                            <p className="max-sm:text-[15px] max-md:text-[15px]">NO. OF ASSIGNED COURSES</p>
                            <h1 className=" font-bold text-[30px] max-sm:text-[18px] max-md:text-[15px] ">10</h1>

                        </div>

                       
                        <div className="w-[90%] rounded-[10px] flex max-md:w-[100%] p-[10px] h-[129px] flex-col justify-center bg-white">
                          <span className="pl-[40px] max-md:m-[auto] max-md:pl-[0px]"><h1>Assessments</h1></span>
                          <div className="flex gap-[8px] m-[auto] pb-[10px]   max-md:flex-col">
                          <span className="p-[10px] max-md:p-[5px] w-[140px] border-[1px] border-amber-500 rounded-md"><button>Add Assesments</button></span>
                          <span className="p-[10px] max-md:p-[5px] w-[140px] border-[1px] border-blue-600 rounded-md"><button>No of tasks:50</button></span>
                          </div>
                         
                        </div>
                    </div>
                    
                </div>


                
                <div className="w-full p-[30px]">
                    <div className="w-full flex align-center gap-[10px]">
                        <h1 className="font-semibold text-[30px] max-md:text-[20px]">My Students</h1>
                        <span className="my-[auto]"><img src="/vdashboardimages/student.svg"></img></span>
                    </div>

                <div className="w-[90%] max-sm:w-[100%]  max-md:w-[95%]">
                    <div className="w-[100%] max-sm:w-[100%]  max-md:w-[100%] mt-[20px] bg-[white]  shadow-md ">
                        <table className="w-full overflow-x-auto  table-fixed border text-left ">
                            
                               <thead className=" hover:bg-slate-100">
                                <tr className="border-b-[1px]">
                                    <th className="px-[20px] py-[14px] w-[43%]"> Name</th>
                                    <th >Courses</th>
                                    <th className=" w-[19%] max-md:w-[24%]">Grading</th>
                                </tr>
                                </thead>
                                
                          
                              <tbody>
                                    <tr  className="border-b-[1px]" >
                                        <td className="px-[20px] py-[14px]">tope</td>
                                        <td className="text-amber-400">3-in-1 Web Development</td>
                                        <td>40/100</td>
                                    </tr>

                                    <tr  className="border-b-[1px]">
                                        <td className="px-[20px] py-[14px]">Sandra Omotayo</td>
                                        <td className="text-amber-400">Coding</td>
                                        <td>70/100</td>
                                    </tr>

                                    <tr >
                                        <td className="px-[20px] py-[14px]">Tomilola Hakeem</td>
                                        <td className="text-amber-400">Frontend Development</td>
                                        <td>20/100</td>
                                    </tr>

                                    </tbody>
                             
                                     

                        </table>
                        
                    </div>
                    <div className="flex  justify-end ">
                 
                    </div>
                    </div>
                  
                </div>

                
                
              
                

{/*==========================REFERRED STUDENTSt */}


            

                </div>

              
  
            </div>

        </div>
    );
};


export default InstructorDashboard;