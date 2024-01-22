import react, { useState } from "react";






const Faqs = ({text, day}) =>{


    const [toggle, setToggle] = useState(false);

    return(
        <div>
        <div className=" flex faq flex-col p-[8px] aling-center justify-center my-[auto] justify-between" style={{borderBottom:"1px solid gray"}}>
        <div className=" flex faq align-center justify-between">
            <h2>{text}</h2>
            <img src="/homepageimage/plus.svg" className="cursor-pointer  my-[auto]" onClick={() => setToggle(!toggle)}/>
        </div>


        {toggle && <p className="faq">{day}</p>}

        </div>
        


            </div>
    )
}


export default Faqs