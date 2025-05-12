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
            <h1 className=" text-2xl md:text-3xl text-red-900 dark:text-red-400 font-bold">
              {" "}
              Mission
            </h1>
            <p className="text-m text-slate-500 dark:text-slate-300">
              Godspeed is democratizing product development through advanced AI
              and a collaborative ecosystem that fuels founder, investor, and
              expert growth.
            </p>
            <div>
              <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
                <li className="font-small ">
                  Evolving AI and tech to simplify and scale product creation.
                </li>
                <li className="font-small ">
                  Connecting a vibrant community of innovators and supporters.
                </li>
                <li className="font-small">
                  Empowering mutual growth through open, collaborative progress.
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
