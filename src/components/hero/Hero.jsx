import React from "react";
import talent from "../../assets/talent.svg";
const Hero = () => {
  return (
    <div className="h-[650px] md:h-[500px]  bg-gradient-to-r from-gray-900 to-gray-400 pt-20">
      <section className="container flex flex-col items-center justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-white">
          {/* hero text container */}
          <div className="flex flex-col items-center text-center gap-4 md:items-start md:text-left mt-20  ">
            <h1 className="text-4xl"> We build Apps that get trending on earth</h1>
            <p> 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              tenetur nihil non suscipit! Eaque asperiores beatae eos id aliquid
              ex architecto consequuntur impedit iusto, repellendus, quo,
              perferendis esse doloremque rem.
            </p>
            <div className="space-x-4">
                <button className="btn-primary"> Sign Up </button>
                <button className="btn-outline"> Login </button>
            </div>
          </div>
          {/* hero image container */}
          <div className="mx-auto max-w-xs p-4">
            <img src={talent} alt="not found" className="mx-full" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
