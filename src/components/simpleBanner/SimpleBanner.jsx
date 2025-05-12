import React from "react";

const SimpleBanner = () => {
  return (
    <>
    <div className="bg-primary">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-4 md:gap-8">
          <div className="px-2">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/1tH6ORztO7c"
              title="youtube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ;web-share"
              allowfullScreen
            ></iframe>
          </div>

          <div className="flex flex-col items-center gap-4 text-center text-white dark:text-white md:col-span-2 md:items-start md:text-left">
            <h1 className="text-3xl font-bold">Meet FOUNDER ! !</h1>
            <p>
             We are dedicated to developing a fair and equitable ecosystem which fulfils the need of startups and developers.
            </p>
            <button className="btn-primary !bg-white !text-black" >Meet Now</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default SimpleBanner;
