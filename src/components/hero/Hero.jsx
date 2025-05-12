import React from "react";
import talent from "../../assets/talent.svg";
const Hero = () => {
  return (
    <div className="h-[650px] md:h-[500px]  bg-gradient-to-r from-gray-900 to-gray-400 pt-20">
      <section className="container flex flex-col items-center justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-white">
          {/* hero text container */}
          <div className="flex flex-col items-center text-center gap-4 md:items-start md:text-left mt-20  ">
            <h1 className="text-6xl text-zinc-300 font-bold">Airlift Your Startup to Success </h1>
            <p className="text-[16px] text-blue-300 font-bold">
              Leverage Godspeed’s AI-powered tech stack, resourceful network and
              personalized concierge service to get 360° coverage across
              technology, talent and business growth. Build faster, de-risk your
              journey and scale smarter —without the usual startup chaos.
            </p>
            <div className="space-x-4">
              <button className="btn-primary"> Get Early Access </button>
              <button className="btn-outline"> Teaser </button>
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
