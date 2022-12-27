import React from "react";

const ArticleFour = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:place-items-center lg:py-10 ">
      <div className="font-headerfont pt-10 lg:pr-40">
        <h1 className="text-3xl lg:text-6xl  font-bold">Download App</h1>
        <p className="text-primaryPurple text-sm lg:text-base lg:leading-8 py-6">
          We make all Payment easier and simpler. Recieve and send payment funds
          without cash.Paragon makes moving money as simple.
        </p>
        <div className="xs:grid xs:grid-cols-2 xs:gap-4">
          <img src="./images/googleplay.png" alt="Google Play" />
          <img
            className="mt-4 xs:mt-0"
            src="./images/appstore.png"
            alt="App Store"
          />
        </div>
      </div>

      <div className="relative mt-10 items-center h-articlethree">
        <div className="absolute top-20 z-0 rounded-full w-60 h-60 bg-primaryPurple left-1/2 translate-x-[-50%] lg:hidden"></div>
        <img
          className="m-auto absolute z-10 w-60 left-1/2 translate-x-[-50%] lg:hidden"
          src="./images/iphonepro.png"
          alt="Iphone Pro Max"
        />
        <img
          className="lg:w-72 xl:w-96 hidden lg:block"
          src="./images/d-iphone.png"
          alt="iphone"
        />
      </div>
    </div>
  );
};

export default ArticleFour;
