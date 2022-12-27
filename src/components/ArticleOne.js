import React from "react";

const ArticleOne = () => {
  return (
    <div className="pt-28 relative z-20 container lg:flex lg:justify-between lg:items-center">
      <div className="lg:basis-0">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-textColor1 to-textColor2 font-extrabold text-4xl lg:text-7xl sm:text-5xl md:text-6xl">
          The Best Payment Experiences
        </h1>
        <p className="text-primaryPurple text-sm pt-2 pb-5 lg:pt-4 lg:pb-7">
          We make all Payment easier and simpler. Recieve and send payment funds
          without cash. Paragon makes moving money as simple.
        </p>
        <div className="flex items-center">
          <button className="btn">Get Paragon</button>
          <div className="flex items-center ml-6">
            <p className="mr-2">How it Works</p>
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 0L8.00009 6L2.00009 12L0.590088 10.59Z"
                fill="#1A1D1A"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="py-10 lg:col-span-2">
        <img className="m-auto lg:hidden " src="./images/iphone.png" />
        <img
          className="hidden lg:inline-block lg:w-[25rem] xl:w-[32rem]"
          src="./images/desktop-iphone.png"
        />
      </div>
    </div>
  );
};

export default ArticleOne;
