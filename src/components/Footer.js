import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-200 pt-10 text-center font-headerfont">
      <div className="container">
        <div className="md:grid md:grid-cols-5">
          <div className="pb-10 md:text-left">
            <div className="flex justify-center items-center md:justify-start">
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
              <h1 className="text-primaryPurple text-2xl font-bold pl-2">
                Paragon
              </h1>
            </div>
            <p className="text-xs text-primaryPurple py-3 md:text-sm md:py-5">
              We make all Payment easier and simpler. Recieve and send payment
              funds without cash.
            </p>
            <div className="flex justify-center md:justify-start cursor-pointer">
              <div>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="32"
                    height="32"
                    rx="16"
                    fill="#6F61D0"
                    className="hover:fill-green-400"
                  />
                  <path
                    d="M17.6666 17.2501H19.7499L20.5833 13.9167H17.6666V12.2501C17.6666 11.3917 17.6666 10.5834 19.3333 10.5834H20.5833V7.78341C20.3116 7.74758 19.2858 7.66675 18.2024 7.66675C15.9399 7.66675 14.3333 9.04758 14.3333 11.5834V13.9167H11.8333V17.2501H14.3333V24.3334H17.6666V17.2501Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="mx-4 md:mx-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="32"
                    height="32"
                    rx="16"
                    className="hover:fill-green-400"
                    fill="#6F61D0"
                  />
                  <path
                    d="M16.0001 7.66675C18.2642 7.66675 18.5467 7.67508 19.4351 7.71675C20.3226 7.75841 20.9267 7.89758 21.4584 8.10425C22.0084 8.31591 22.4717 8.60258 22.9351 9.06508C23.3588 9.48166 23.6867 9.98557 23.8959 10.5417C24.1017 11.0726 24.2417 11.6776 24.2834 12.5651C24.3226 13.4534 24.3334 13.7359 24.3334 16.0001C24.3334 18.2642 24.3251 18.5467 24.2834 19.4351C24.2417 20.3226 24.1017 20.9267 23.8959 21.4584C23.6873 22.0149 23.3593 22.5189 22.9351 22.9351C22.5184 23.3587 22.0145 23.6865 21.4584 23.8959C20.9276 24.1017 20.3226 24.2417 19.4351 24.2834C18.5467 24.3226 18.2642 24.3334 16.0001 24.3334C13.7359 24.3334 13.4534 24.3251 12.5651 24.2834C11.6776 24.2417 11.0734 24.1017 10.5417 23.8959C9.98535 23.6871 9.48135 23.3592 9.06508 22.9351C8.64125 22.5186 8.31336 22.0146 8.10425 21.4584C7.89758 20.9276 7.75841 20.3226 7.71675 19.4351C7.67758 18.5467 7.66675 18.2642 7.66675 16.0001C7.66675 13.7359 7.67508 13.4534 7.71675 12.5651C7.75841 11.6767 7.89758 11.0734 8.10425 10.5417C8.31278 9.98523 8.64075 9.48118 9.06508 9.06508C9.48147 8.64111 9.98544 8.31319 10.5417 8.10425C11.0734 7.89758 11.6767 7.75841 12.5651 7.71675C13.4534 7.67758 13.7359 7.66675 16.0001 7.66675ZM16.0001 11.8334C14.895 11.8334 13.8352 12.2724 13.0538 13.0538C12.2724 13.8352 11.8334 14.895 11.8334 16.0001C11.8334 17.1052 12.2724 18.165 13.0538 18.9464C13.8352 19.7278 14.895 20.1667 16.0001 20.1667C17.1052 20.1667 18.165 19.7278 18.9464 18.9464C19.7278 18.165 20.1667 17.1052 20.1667 16.0001C20.1667 14.895 19.7278 13.8352 18.9464 13.0538C18.165 12.2724 17.1052 11.8334 16.0001 11.8334ZM21.4167 11.6251C21.4167 11.3488 21.307 11.0839 21.1117 10.8885C20.9163 10.6932 20.6513 10.5834 20.3751 10.5834C20.0988 10.5834 19.8339 10.6932 19.6385 10.8885C19.4432 11.0839 19.3334 11.3488 19.3334 11.6251C19.3334 11.9013 19.4432 12.1663 19.6385 12.3617C19.8339 12.557 20.0988 12.6667 20.3751 12.6667C20.6513 12.6667 20.9163 12.557 21.1117 12.3617C21.307 12.1663 21.4167 11.9013 21.4167 11.6251ZM16.0001 13.5001C16.6631 13.5001 17.299 13.7635 17.7678 14.2323C18.2367 14.7012 18.5001 15.337 18.5001 16.0001C18.5001 16.6631 18.2367 17.299 17.7678 17.7678C17.299 18.2367 16.6631 18.5001 16.0001 18.5001C15.337 18.5001 14.7012 18.2367 14.2323 17.7678C13.7635 17.299 13.5001 16.6631 13.5001 16.0001C13.5001 15.337 13.7635 14.7012 14.2323 14.2323C14.7012 13.7635 15.337 13.5001 16.0001 13.5001Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="32"
                    height="32"
                    className="hover:fill-green-400"
                    rx="16"
                    fill="#6F61D0"
                  />
                  <path
                    d="M24.7168 10.9999C24.0751 11.2916 23.3834 11.4833 22.6668 11.5749C23.4001 11.1333 23.9668 10.4333 24.2334 9.59159C23.5418 10.0083 22.7751 10.2999 21.9668 10.4666C21.3084 9.74992 20.3834 9.33325 19.3334 9.33325C17.3751 9.33325 15.7751 10.9333 15.7751 12.9083C15.7751 13.1916 15.8084 13.4666 15.8668 13.7249C12.9001 13.5749 10.2584 12.1499 8.50011 9.99159C8.19178 10.5166 8.01678 11.1333 8.01678 11.7833C8.01678 13.0249 8.64178 14.1249 9.60845 14.7499C9.01678 14.7499 8.46678 14.5833 7.98345 14.3333V14.3583C7.98345 16.0916 9.21678 17.5416 10.8501 17.8666C10.3257 18.0101 9.77519 18.0301 9.24178 17.9249C9.46812 18.6353 9.91139 19.2569 10.5093 19.7024C11.1072 20.1478 11.8297 20.3947 12.5751 20.4083C11.3115 21.4086 9.74511 21.9493 8.13345 21.9416C7.85011 21.9416 7.56678 21.9249 7.28345 21.8916C8.86678 22.9083 10.7501 23.4999 12.7668 23.4999C19.3334 23.4999 22.9418 18.0499 22.9418 13.3249C22.9418 13.1666 22.9418 13.0166 22.9334 12.8583C23.6334 12.3583 24.2334 11.7249 24.7168 10.9999Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <ul className="pb-8 leading-10">
            <li className="text-primaryPurple">Product</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Business</li>
          </ul>
          <ul className="pb-8 leading-10">
            <li className="text-primaryPurple">Open Account</li>
            <li>Saving Account</li>
            <li>Current Account</li>
            <li>Fixed Deposit</li>
          </ul>
          <ul className="pb-8 leading-10">
            <li className="text-primaryPurple">Company</li>
            <li>Blog</li>
            <li>About Us</li>
          </ul>
          <ul className="leading-10 ">
            <li className="text-primaryPurple">Support</li>
            <li>Get Support</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="pt-10 md:pt-4 leading-8 md:flex md:justify-between">
          <p>Copyright &#169; 2022 Scudo Ltd. All right reserved</p>
          <div className="md:flex">
            <p>Privacy Policy</p>
            <p className="pl-6">Terms of Use</p>
          </div>
        </div>
        <div className="pt-8">
          <ul className="md:flex md:justify-between">
            <li>
              Dev:{" "}
              <a
                href="https://github.com/ajormoses"
                className="text-primaryPurple"
              >
                @ajormoses
              </a>
            </li>
            <li>
              UI designer:{" "}
              <a
                href="https://www.behance.net/oluwaseunayomide"
                className="text-primaryPurple"
              >
                @oluwaseunayomide
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
