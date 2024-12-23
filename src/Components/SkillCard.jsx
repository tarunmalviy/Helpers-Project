import React from "react";

function SkillCard() {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full border rounded-2xl  text-white hover:border-blue-400 hover:text-blue-400">
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src="https://dummyimage.com/420x260"
        />
      </a>
      <div className="mt-4 flex justify-center">
        <h2 className=" title-font text-2xl font-medium ">
          Construction
        </h2>
      </div>
    </div>
  );
}

export default SkillCard;
