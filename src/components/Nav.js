import React from "react";

const Nav = () => {
  return (
    <nav data-aos="fade-right" className="mt-6">
      <div className="container left-1/2 translate-x-[-50%] bg-gray-700 mt-3 py-3 rounded-lg absolute lg:hidden">
        <ul className="text-center leading-10 text-white">
          <li className="flex justify-center items-center">
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
          <li className="flex justify-center items-center">
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
          <li className="flex justify-center items-center">
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
          <li className="flex justify-center items-center">
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
          <button className="bg-green-400 py-1 px-4 m-2 rounded-lg hover:bg-primaryPurple">
            Sign In
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
