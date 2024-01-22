import { Carousel } from "flowbite-react";

export default function StoriesSLider() {
  return (
    <Carousel slideInterval={6000}>
      <div className="flex gap-8 md:flex-row flex-col font-poppins">
        <img
          alt=""
          src="https://utiva.io/static/media/ferdinand.de2b368d.webp"
          className="w-[350px] h-auto rounded-tr-[100px]"
        />
        <div className="w-full md:w-[55%] min-h-[300px] text-black">
          <h1 className="w-full md:w-fit text-[1.75rem] text-black/90 font-bold mb-4 font-petch">
            Frontend Engineer
          </h1>
          <p className="mb-4 font-medium tracking wider text-[1.1rem]">
            4 months to complete
          </p>
          <p className="tracking-wider text-[1rem]">
            I was looking for something a little more than a training, a school
            I could count on for my continuous skill and professional
            development. Utiva kept coming up so I jumped in. I went through the
            Data Accelerator program and then the ‘Big Data with Python’
            program. I am now a Data Scientist and Consultant.
          </p>
        </div>
      </div>
      <div className="flex gap-8 md:flex-row flex-col font-poppins">
        <img
          alt=""
          src="https://utiva.io/static/media/hambolu.2fa050c8.webp"
          className="w-[350px] h-auto rounded-tr-[100px]"
        />
        <div className="w-full md:w-[55%] min-h-[300px] text-black">
          <h1 className="w-full md:w-fit text-[1.75rem] text-black/90 font-bold mb-4 font-petch">
            Frontend Engineer
          </h1>
          <p className="mb-4 font-medium tracking wider text-[1.1rem]">
            4 months to complete
          </p>
          <p className="tracking-wider text-[1rem]">
            I was looking for something a little more than a training, a school
            I could count on for my continuous skill and professional
            development. Utiva kept coming up so I jumped in. I went through the
            Data Accelerator program and then the ‘Big Data with Python’
            program. I am now a Data Scientist and Consultant.
          </p>
        </div>
      </div>
      <div className="flex gap-8 md:flex-row flex-col font-poppins">
        <img
          alt=""
          src="https://utiva.io/static/media/charles.b3a7abf3.webp"
          className="w-[350px] h-auto rounded-tr-[100px]"
        />
        <div className="w-full md:w-[55%] min-h-[300px] text-black">
          <h1 className="w-full md:w-fit text-[1.75rem] text-black/90 font-bold mb-4 font-petch">
            Frontend Engineer
          </h1>
          <p className="mb-4 font-medium tracking wider text-[1.1rem]">
            4 months to complete
          </p>
          <p className="tracking-wider text-[1rem]">
            I was looking for something a little more than a training, a school
            I could count on for my continuous skill and professional
            development. Utiva kept coming up so I jumped in. I went through the
            Data Accelerator program and then the ‘Big Data with Python’
            program. I am now a Data Scientist and Consultant.
          </p>
        </div>
      </div>
      <div className="flex gap-8 md:flex-row flex-col font-poppins">
        <img
          alt=""
          src="https://utiva.io/static/media/eniola.dfff4b25.webp"
          className="w-[350px] h-auto rounded-tr-[100px]"
        />
        <div className="w-full md:w-[55%] min-h-[300px] text-black">
          <h1 className="w-full md:w-fit text-[1.75rem] text-black/90 font-bold mb-4 font-petch">
            Frontend Engineer
          </h1>
          <p className="mb-4 font-medium tracking wider text-[1.1rem]">
            4 months to complete
          </p>
          <p className="tracking-wider text-[1rem]">
            I was looking for something a little more than a training, a school
            I could count on for my continuous skill and professional
            development. Utiva kept coming up so I jumped in. I went through the
            Data Accelerator program and then the ‘Big Data with Python’
            program. I am now a Data Scientist and Consultant.
          </p>
        </div>
      </div>
    </Carousel>
  );
}
