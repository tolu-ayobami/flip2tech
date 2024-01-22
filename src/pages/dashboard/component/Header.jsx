import React,{useState} from "react";
import { Link } from "react-router-dom";








const Header = () =>{


    const [set, setSet] = useState(false);

    const jy = () => {
        setSet(!set);
    }


    return(
        <div>

<div className="flex shadow-md  z-50 bg-white justify-between p-[10px] max-md:px-[20px] px-[90px] fixed top-0 w-[100%] align-center   max-md:justify-between ">

<div className="my-[auto] mr-[30px]">
  <Link to="/"><img src="/homepageimage/logo.png" className="w-[200px] max-md:w-[120px]"></img></Link>
</div>
<div className={set? "active clao": "clao"}>


<div className="max-md:pt-[100px]">

<div className="my-[auto] mr-[30px]">
  <Link to="/"><img src="/homepageimage/logo-white.png" className="w-[200px] max-md:w-[120px] hidden max-md:flex"></img></Link>
</div>
    <ul className="flex align-center gap-[20px] max-md:flex-col max-md:mt-[40px] max-md:gap-[30px]">
      
        <Link to="/"><li >ABOUT US</li></Link>
        <Link to="/"><li>COURSES</li></Link>
        <Link to="/volunteer"> <li>VOLUNTEERS</li></Link>
        
    </ul>
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
</div>
)
}
export default Header;