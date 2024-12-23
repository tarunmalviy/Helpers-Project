import React from "react";

function Hero() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Connecting the Unorganized Sector with Opportunities
            
          </h1>
          <p className="mb-8 leading-relaxed">
          Welcome to Helpers, your one-stop solution for connecting with skilled workers from various fields. Whether you need a construction workers, wedding decorator, a lawyer, a tutor, or home services like electricians, plumbers, and maids, and many more category including day by day, our platform has it all. Customers can search for workers, view ratings out of 5, and prioritize hiring nearby workers. Join us to find reliable help or to offer your services in your community.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Search for Hire People
            </button>
            <button className="ml-4 inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 hover:text-white rounded text-lg">
              Post Job
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
