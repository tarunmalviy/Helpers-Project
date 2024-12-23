import React from "react";
import SkillCard from "./SkillCard";
import Search from "./Search";

function Content() {
  return (
    <section className="text-gray-400 body-font bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
          <h1 className="sm:text-6xl text-4xl font-medium title-font mb-2 text-white">
            See Our Categories
          </h1>
        </div>
        <Search/>
        <SkillCard />
      </div>
    </section>
  );
}

export default Content;
