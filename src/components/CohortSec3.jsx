import { useState } from "react";
import programs from "../data/program.json";
import { useNavigate } from "react-router-dom";

const CohortSec3 = () => {
  const [show, setShow] = useState(null);

  const navigate = useNavigate();
  return (
    <section id="section3" className="w-full pt-10">
      <h1 className="text-[#0066FF] font-bold mb-5">OUR PROGRAMMES</h1>
      <div className="w-full h-[450px] flex flex-col flex-wrap overflow-x-auto gap-6">
        {programs?.map((item, index) => {
          return (
            <div
              key={index}
              onMouseOver={() => setShow(index)}
              onMouseOut={() => setShow(null)}
              onClick={() => navigate(`/course/${item?.title}`)}
              className="w-[300px] h-[200px] relative border-black border rounded-lg text-white cursor-pointer"
            >
              <img
                alt=""
                src={item?.image}
                className="w-full h-full absolute top-0 left-0 rounded-lg"
              />
              {show === index && (
                <div className="w-full h-full z-[2] bg-black/50 absolute top-0 left-0 flex justify-center items-center p-3 scale">
                  <p className="font-medium text-[1.25rem] text-center uppercase">
                    {item?.title}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CohortSec3;
