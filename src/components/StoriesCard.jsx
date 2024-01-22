/* eslint-disable react/prop-types */
export default function StoriesCard({ item }) {
  return (
    <div className="h-fit flex sm:flex-row flex-col sm:gap-7 items-center relative">
      <div className="w-full md:w-1/2 h-full relative">
        <img
          alt="hero"
          src={item?.image ? item?.image : "/images/icons8-user-64.png"}
          className="w-full h-[350px] md:h-[500px] object-cover"
        />
        <div className="w-full h-full bg-gradient-to-t from-black/90 to-transparent text-center text-[.9rem] absolute top-0 left-0 text-white flex justify-center items-end p-10">
          <p className="">
            <span className="text-[1.1rem] font-bold">{item?.name}</span>
            <br /> {item?.role}
          </p>
        </div>
      </div>

      <div className="w-full h-[300px] md:h-[500px md:w-1/2 bg-hero3 bg-no-repeat bg-[length:40%_auto] bg-[left_top_20%] flex items-center">
        <p className="text-[1rem] md:text-[1.5rem]">{item?.story}</p>
      </div>
    </div>
  );
}
