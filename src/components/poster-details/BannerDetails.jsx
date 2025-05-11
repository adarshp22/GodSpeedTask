import React from "react";

const BannerDetails = ({ reverse }) => {
  return (
    <section className="bg-slate-100 dark:bg-slate-900 dark:text-white">
      <div className="container flex flex-col items-center justify-center py-10 md:h-[500px]">
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
          {/* textcontainer */}
          <div
            className={
              `flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${reverse? "md:order-last":"" }`
            }
          >
            <h1 className=" text-2xl md:text-4xl">
              {" "}
              We build Apps that get trending on earth
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              ipsa!
            </p>
            <div>
              <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
                <li className="font-medium ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                  ipsa!
                </li>
                <li className="font-medium ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                  ipsa!
                </li>
                <li className="font-medium ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                  ipsa!
                </li>
              </ul>
            </div>
            <button className="btn-primary">Get Started </button>
          </div>
          {/* image container */}
          {/* <div className={reverse ? "order-1" : ""}></div> */}
          <div className={reverse ? "order-1" : ""}>
            <img
              src="https://picsum.photos/400/300"
              alt="not found"
              className="mx-auto w-full p-4 md:max-w-[400px]"
            />
          </div>
        </div>
      </div>
    </section> 
  );
};

export default BannerDetails;
