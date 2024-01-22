const CohortSec4 = () => {
  return (
    <section id="section4" className="mt-10">
      <h1 className="text-[#0066FF] font-bold mb-5">OUR VALUES</h1>
      <p>
        At FlipToTech, our values serve as the cornerstone of everything we do.
        We believe in creating not just skilled professionals but individuals
        who are aligned with a set of principles that guide them towards
        excellence and collaboration. Here are the core values that define us:
      </p>

      {/* <ul className="flex flex-col gap-4 mt-5">
        <li className="font-bold">Innovation</li>
        <li className="font-bold">Inclusivity</li>
        <li className="font-bold">Collaboration</li>
        <li className="font-bold">Continuous Learning</li>
      </ul> */}

      <ol className="border-l-2 border-neutral-200 my-4">
        {/* <!--First item--> */}
        <li>
          <div className="flex-start flex items-center pt-3">
            <div className="-ml-[7px] mr-3 h-[12px] w-[12px] rounded-full bg-[#FFBD13]"></div>
            <div className="font-bold">Innovation</div>
          </div>
        </li>

        {/* <!--Second item--> */}
        <li>
          <div className="flex-start flex items-center pt-2">
            <div className="-ml-[7px] mr-3 h-[12px] w-[12px] rounded-full bg-[#FFBD13]"></div>
            <div className="font-bold">Inclusivity</div>
          </div>
        </li>

        {/* <!--Third item--> */}
        <li>
          <div className="flex-start flex items-center pt-2">
            <div className="-ml-[7px] mr-3 h-[12px] w-[12px] rounded-full bg-[#FFBD13]"></div>
            <div className="font-bold">Collaboration</div>
          </div>
        </li>

        {/* <!--fourth item--> */}
        <li>
          <div className="flex-start flex items-center pt-2">
            <div className="-ml-[7px] mr-3 h-[12px] w-[12px] rounded-full bg-[#FFBD13]"></div>
            <div className="font-bold">Continuous Learning</div>
          </div>
        </li>
      </ol>

      <p className="mt-5">
        At FlipToTech, our values are not just a reflection of who we are; they
        guide us on our journey towards a future where technology creates
        positive and lasting impacts. Join us as we embrace excellence through
        our shared values.
      </p>
    </section>
  );
};

export default CohortSec4;
