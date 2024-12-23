import React from "react";
import TeamMember from "./TeamMember";

function Testimonial() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-6xl font-medium title-font text-blue-400 mb-12 text-center">
        Our Team
        </h1>
        <div className="flex flex-wrap -m-4">
          <TeamMember />
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
