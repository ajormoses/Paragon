import React, { useState } from "react";
import Nav from "./Nav";
import ArticleOne from "./ArticleOne";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div>
      <div className="py-6 lg:py-4 bg-gray-100 font-headerfont fixed w-full z-30">
        <div className="flex justify-between items-center container">
          <div className="flex">
            <svg
              width="19"
              height="24"
              viewBox="0 0 19 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.75 9.36183C18.7529 10.9232 18.366 12.4607 17.6245 13.8347C16.8829 15.2088 15.8101 16.3761 14.5033 17.2307C13.1966 18.0853 11.6972 18.6002 10.1411 18.7288C8.58497 18.8574 7.02142 18.5956 5.5921 17.9671V24.0132C4.85459 24.0132 4.12431 23.8678 3.44302 23.5854C2.76173 23.3029 2.1428 22.889 1.62161 22.3672C1.10041 21.8454 0.687196 21.2259 0.405561 20.5443C0.123927 19.8627 -0.0206219 19.1323 -0.0197573 18.3948V10.921C-0.0197573 10.5494 0.127906 10.193 0.390704 9.93018C0.653502 9.66738 1.00991 9.51972 1.38156 9.51972H4.42762C4.72131 9.52364 5.00633 9.61978 5.24244 9.7945C5.47854 9.96921 5.6538 10.2137 5.74341 10.4934C5.95474 11.1952 6.35726 11.8242 6.90589 12.3101C7.45451 12.7961 8.12757 13.1196 8.84969 13.2447C9.57182 13.3697 10.3145 13.2912 10.9946 13.018C11.6746 12.7448 12.2652 12.2877 12.7001 11.6978C13.1351 11.108 13.3972 10.4087 13.4572 9.67829C13.5172 8.94788 13.3727 8.21517 13.0398 7.56226C12.707 6.90934 12.1989 6.36199 11.5725 5.98149C10.9461 5.60099 10.2263 5.40236 9.49345 5.40788H4.79608C4.16051 5.40874 3.53097 5.28433 2.94354 5.0417C2.35611 4.79908 1.82228 4.44305 1.37257 3.99395C0.92285 3.54484 0.566061 3.01148 0.322642 2.42438C0.0792226 1.83728 -0.0460592 1.20793 -0.0460587 0.572365C-0.0562617 0.381712 -0.0562617 0.190653 -0.0460587 0H9.56581C12.0184 0.0448492 14.3552 1.05116 16.073 2.8022C17.7908 4.55323 18.7521 6.90887 18.75 9.36183Z"
                fill="#5241C6"
              />
            </svg>
            <h1 className="text-primaryPurple text-lg font-bold pl-2">
              Paragon
            </h1>
          </div>
          <div onClick={handleClick} className="lg:hidden">
            {toggle ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.333252 0H21.6666V2.66667H0.333252V0ZM0.333252 6.66667H21.6666V9.33333H0.333252V6.66667ZM0.333252 13.3333H21.6666V16H0.333252V13.3333Z"
                  fill="black"
                />
              </svg>
            )}
          </div>
          <ul className="hidden lg:inline-block lg:flex lg:justify-between cursor-pointer">
            <li className="flex justify-center items-center mx-4">
              Product
              <svg
                className="ml-1"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00008 6.00002L0.75708 1.75702L2.17208 0.343018L5.00008 3.17202L7.82808 0.343018L9.24308 1.75702L5.00008 6.00002Z"
                  fill="#5241C6"
                />
              </svg>
            </li>
            <li className="flex justify-center items-center mx-4">
              Company
              <svg
                className="ml-1"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00008 6.00002L0.75708 1.75702L2.17208 0.343018L5.00008 3.17202L7.82808 0.343018L9.24308 1.75702L5.00008 6.00002Z"
                  fill="#5241C6"
                />
              </svg>
            </li>
            <li className="flex justify-center items-center mx-4">
              Open Account
              <svg
                className="ml-1"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00008 6.00002L0.75708 1.75702L2.17208 0.343018L5.00008 3.17202L7.82808 0.343018L9.24308 1.75702L5.00008 6.00002Z"
                  fill="#5241C6"
                />
              </svg>
            </li>
            <li className="flex justify-center items-center mx-4">
              Support
              <svg
                className="ml-1"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00008 6.00002L0.75708 1.75702L2.17208 0.343018L5.00008 3.17202L7.82808 0.343018L9.24308 1.75702L5.00008 6.00002Z"
                  fill="#5241C6"
                />
              </svg>
            </li>
            <button className="bg-green-400 py-1 px-4 m-2 rounded-lg hover:bg-primaryPurple hover:text-white ml-8 xl:ml-12 lg:py-2 lg:px-6">
              Sign In
            </button>
          </ul>
        </div>
        {toggle && <Nav />}
      </div>
      <ArticleOne />
      <div className="absolute top-0 w-full left-0">
        <img
          className="w-full h-bgheight lg:hidden"
          src="./images/Background-img.png"
        />
        <img
          className="w-full hidden lg:block h-[39rem] xl:h-bgheight"
          src="./images/desktop-bg.png"
        />
      </div>
    </div>
  );
};

export default Header;
