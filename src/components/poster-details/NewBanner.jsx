import React from "react";

const BannerDetails = ({ reverse }) => {
  return (
    <section className="bg-slate-100 dark:bg-slate-900 dark:text-white">
      <div className="container flex flex-col items-center justify-center py-10 md:h-[500px]">
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
          {/* textcontainer */}
          <div
            className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
              reverse ? "md:order-last" : ""
            }`}
          >
            <h1 className=" text-2xl md:text-4xl text-red-900 dark:text-red-400 font-bold">
              {" "}
              Vision
            </h1>
            <p className="text-m text-slate-500 dark:text-slate-300">
              Godspeed helps founders and startups lead in the post-AI world
              through bold collaboration and breakthrough innovation.
            </p>
            <div>
              <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
                <li className="font-medium ">
                  Equip startups to lead in a rapidly evolving AI landscape.        
                </li>
                <li className="font-medium ">
                  Cultivate high-impact collaboration across ecosystems.
                </li>
                <li className="font-medium ">
                  Accelerate innovation that creates real-world value.
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
