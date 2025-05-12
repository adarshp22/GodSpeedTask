import React from "react";
import Countup from "react-countup";
const Ovc = () => {
  return (
    <section className=" container h-12 md:h-32 p-3">
      <div className="grid grid-cols-4 divide-x divide-slate-700 mx-auto w-full md:max-w-[800px] shadow-lg bg-white -translate-y-20 md:-translate-y-12 my-4 md:p-8 dark:bg-gray-900 dark:text-white/70">
        <div className="flex flex-col items-center justify-center"> 
          <h1 className="text-sm font bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
          < Countup end={70} suffix ="+" duration ={2.75}/>
          </h1>
          <h1 className="sm:text-md text-xs md:text-lg">Projects</h1>
        </div>
       <div className="flex flex-col items-center justify-center"> 
          <h1 className="text-sm font bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
          < Countup end={5400000} suffix ="+" duration ={2.75}/>
          </h1>
          <h1 className="sm:text-md text-xs md:text-lg">Subscribers</h1>
        </div>
      <div className="flex flex-col items-center justify-center"> 
          <h1 className="text-sm font bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
          < Countup end={100000} suffix ="+" duration ={2.75}/>
          </h1>
          <h1 className="sm:text-md text-xs md:text-lg">Clients</h1>
        </div>
    <div className="flex flex-col items-center justify-center"> 
          <h1 className="text-sm font bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
          < Countup end={234} suffix ="+" duration ={2.75}/>
          </h1>
          <h1 className="sm:text-md text-xs md:text-lg">Products</h1>
        </div>
      </div>
    </section>
  );
};

export default Ovc;
