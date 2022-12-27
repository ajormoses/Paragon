import React, { useState } from "react";

const ArticleFive = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [formData, setFormData] = useState("");

  return (
    <div className="bg-[#FBFBFF] text-center py-8 lg:py-16 lg:mt-40">
      <div className="container lg:w-[32rem] font-headerfont">
        <h1 className="font-extrabold text-3xl lg:text-4xl">
          Subscribe To Newsletters
        </h1>
        <p className="text-primaryPurple text-sm py-4 lg:py-6">
          We make all Payment easier and simpler. Recieve and send payment funds
        </p>
        <form className="flex gap-3" onSubmit={handleSubmit}>
          <input
            className="w-full bg-gray-200 pl-4"
            type="email"
            placeholder="Enter Your Email"
            onChange={(e) => setFormData(e.target.value)}
            value={formData}
          />
          <button className="btn">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default ArticleFive;
