import axios from "axios";
import React, {useEffect, useState} from "react";
import review from "./data";
import ReactPaginate from "react-paginate";
import AOS from "aos";
import "aos/dist/aos.css"
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import ToastMod from "../../components/ToastMod";


const  VolunteerDashboard = () =>{
    

    useEffect(() =>{
		AOS.init({duration: 2000})

	}, [])
      
    const [images, setImages] = useState([]);
    useEffect(() =>{
setImages(review);
    }, [])

const [currentItems, setCurrentitems] = useState([])
const [pageCount, setPageCount] = useState(0)
const [itemOffset, setItemOffset] =useState(0)
  
const itemsPerPage = 3; 

useEffect(() =>{
const endOffset = itemOffset + itemsPerPage;
setCurrentitems(images.slice(itemOffset, endOffset))
setPageCount(Math.ceil(images.length / itemsPerPage));

}, [itemOffset, itemsPerPage,images])

const[toggle, setToggle] = useState(false);

const grt = () =>{
    setToggle(!toggle)
}



const handleclick = (event) =>{
    const newoffset = (event.selected + itemsPerPage) % images.length;
    setItemOffset(newoffset);
}
    const [code, setCode] = useState();

    const [color, setColor] = useState(false);
    
    const copy = () =>{
        navigator.clipboard.writeText(code);
        document.querySelector(".clip").hover ="green";
    }

    const col =() =>{
        setColor(!color)
    }

    const[an, setAn] = useState ([])

    
    const[close, setClose] = useState(false);

    const get = () =>{
        setClose(!close);
    } 
    const [loginSuccess, setloginSuccess] = useState(false);
    const [loader, setLoader] = useState(false);
const [ori, setOri] = useState([])
      async function fetchData(){

    const res = await fetch("https://flip2tech-production.up.railway.app/volunteer-dashboard/",{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
          "Authorization":"Bearer " + localStorage.getItem("token")
        },

      })

      const data = await res.json();
      console.log(data)
      setCode(data.referral_code)
   setOri(data.schools_name)
          setAn(data)
  
         }

         useEffect(() =>{
            fetchData();

         },[an])
        


    return(

        <div  className="w-full max-md:h-auto font-Poppins bg-slate-100">
           {loader && <Loader />}

{/* =================================================Show a toast message if login was successful */}
{loginSuccess && (
  <div className="w-[300px]">
    <ToastMod message="Logged in successfully" />
  </div>
)}
             
            <div className="flex w-full ">
              
           <div    
                  className={` w-[280px] h-full fixed bg-black ${toggle? "max-md:block max-md:fixed top-0 bottom-0 max-md:w-[300px]" : "max-md:hidden"}`}>
              
               <div  className="flex  align-center pl-[30px] pt-[38px]">
                <span className="flex  justify-center align-center  max-md:m-auto max-md:w-[60%]"><img src="/vdashboardimages/logohead.png"></img></span>
                <span className="flex my-[auto] p-[5px] max-lg:hidden max-md:block  bg-white justify-center align-center  max-md:m-auto max-md:w-[10%]  cursor-pointer" onClick={grt} ><img src="/vdashboardimages/close.png" className="w-[15px]"></img></span>
                </div>

                <div className="mt-[60px] flex flex-col gap-[10px] ml-[20px]">

          <div className="bg-amber-400 p-[10px]  rounded-tl-[10px] rounded-bl-[10px]">
            <img src="/vdashboardimages/Content.png"></img>
                </div>


                
             <Link to="/schoolregistration"> <div  className="my-[auto] hover:bg-amber-400 text-white hover:text-black p-[10px] flex align-center gap-[13px] rounded-tl-[10px] rounded-bl-[10px]">
     <span className="my-[auto]"><img src="/vdashboardimages/exit.svg" className="hover:bg-black-600"></img></span>
     <h1 className="font-medium ml-[6px]">School registration</h1>
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
                        <h1 className="font-bold  my-[auto]">{an.message}</h1>
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

                <div className="w-full p-[30px]">
                    <div className="w-[80%] max-sm:w-[95%] max-md:m-[auto] max-md:w-[95%] max-sm:flex-col flex gap-[30px] ">
                        <div className="w-[100%]  max-md:w-[100%] p-[10px] bg-blue-600 h-[129px] flex align-center justify-center flex-col rounded-md text-white text-center">
                            <p className="max-sm:text-[15px] max-md:text-[15px]">POINT</p>
                            <h1 className=" font-bold text-[30px] max-sm:text-[18px] max-md:text-[15px]">{an.points}</h1>

                        </div>

                        <div className="w-[100%]  max-md:w-[100%] p-[10px] bg-[#E3A700] h-[129px] flex align-center justify-center flex-col rounded-md text-white text-center">
                            <p className="max-sm:text-[15px] max-md:text-[15px]">SCHOOL REFERRED</p>
                            <h1 className=" font-bold text-[30px] max-sm:text-[18px] max-md:text-[15px] ">{an.schools_referred}</h1>

                        </div>

                        <div className="w-[100%]  max-md:w-[100%] p-[10px]  bg-blue-600 h-[129px] flex align-center justify-center flex-col rounded-md text-white text-center">
                            <p className="max-sm:text-[15px] max-md:text-[15px]">REFERRAL CODE</p>
                           <div className="flex  gap-[10px] justify-center align-center">
                            <h1 className=" font-bold text-[30px] max-sm:text-[18px] max-md:text-[15px] ">{an.referral_code}</h1>
                           <span className="my-[auto] cursor-pointer w-[20px] clip " onClick={copy}><img src="/vdashboardimages/copy.png" ></img></span>
                            </div>

                        </div>

                    </div>
                    
                </div>
            


                <div className="w-full p-[30px] max-md:p-[15px] max-md:m-[auto] max-md:h-full">
                    <div className="w-full max-md:m-[auto] max-md:w-[95%]">
                        <h1 className="font-semibold text-[30px] max-md:text-[20px]">REFERRED SCHOOLS</h1>
                    </div>

                <div className="w-[90%] max-sm:w-[100%] max-md:m-[auto] max-md:h-full max-md:w-[95%]">
                    <div className="w-[100%] max-sm:w-[100%]  max-md:w-[100%] mt-[20px] bg-[white]  shadow-md ">
                        <table className="w-full overflow-x-auto  table-fixed border text-left ">
                            
                               <thead className=" hover:bg-slate-100">
                                <tr className="border-b-[1px] br-[1px]">
                                    <th className="px-[20px] py-[14px] w-[45%]">Place Of Primary Assignments (ppa)</th>
                                    <th >LGA</th>
                                    <th className=" w-[19%] max-md:w-[25%]">Meal Tickets</th>
                                </tr>
                                </thead>
                               
                            
                              <tbody className="hover:bg-slate-100">
                                    <tr>
                                        
                                    {ori.map((map, index) =>{
                                        return <table>
                                            <tr>  
                                               <td className="px-[20px] py-[14px]">{map}</td>
                                            </tr>
                                        </table>
                                    
                                     })}
                                        
                                    
                                        <td className="text-amber-400">{an.LGA}</td>
                                        <td>-</td>
                                    </tr>

                                    </tbody>
                            
                                    

                        </table>
                        
                    </div>
                 {/*}  <div className="flex  justify-end ">
                   <ReactPaginate 
                    nextLabel="next >"
                    onPageChange={handleclick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel="< prevoius"
                    renderOnZeroPageCount={null}
                    containerClassName="pagination"
                    pageLinkClassName="page-num"
                    previousLinkClassName="page-num"
                    nextLinkClassName="page-num"
                    activeLinkClassName="active"
                    />
                                    </div>*/}
                    </div>
                  
                </div>

{/*==========================REFERRED STUDENTSt */}





                    <div className="w-full p-[30px] max-md:p-[15px] max-md:mt-[20px] ">
                    <div className="w-full max-md:w-[95%] max-md:m-[auto]">
                        <h1 className="font-semibold text-[30px] max-md:text-[20px]">REFERRED STUDENTS</h1>
                    </div>


                    <div className="w-[90%] max-sm:w-[100%]  max-md:w-[95%] max-md:m-[auto] max-md:h-full">
                    <div className="w-[100%] max-sm:w-[100%]  max-md:w-[100%] mt-[20px] bg-[white]  shadow-md">
                        <table className="w-full overflow-x-auto  table-fixed border text-left ">
                            
                               <thead className=" hover:bg-slate-100">
                                <tr className="border-b-[1px]">
                                    <th className="px-[20px] py-[14px] w-[43%]">place of primary Assignments (ppa)</th>
                                    <th >LGA</th>
                                    <th className=" w-[19%] max-md:w-[24%]">meal tickets</th>
                                </tr>
                                </thead>
                              
                            
                              <tbody className="hover:bg-slate-100">
                                  {/*  <tr >
                                    {ori.map((map, index) =>{
                                        return <table>
                                            <tr>  
                                               <td className="px-[20px] py-[14px]">{map}</td>
                                            </tr>
                                        </table>
                                    
                                     })}
                                        
                                        <td className="text-amber-400">{an.LGA}</td>
                                        <td>-</td>
                                    </tr>*/}

                                    </tbody>
                        
                                    

                        </table>
                        
                    </div>
                    {/*<div className="flex  justify-end ">
                   <ReactPaginate 
                    nextLabel="next >"
                    onPageChange={handleclick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel="< prevoius"
                    renderOnZeroPageCount={null}
                    containerClassName="pagination"
                    pageLinkClassName="page-num"
                    previousLinkClassName="page-num"
                    nextLinkClassName="page-num"
                    activeLinkClassName="active"
                    />
                                    </div>*/}
                    </div>



                    
                </div>
            

                </div>
                    
   
              
  
            </div>
              
                 
           
           
        </div>
    );
};


export default VolunteerDashboard;