import React from "react";

function Statistic() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-white">
            Current Statistics of Our Platform
          </h1>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-blue-400 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 4.5C7.03 4.5 2.73 7.61 1 12c1.73 4.39 6.03 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6.03-7.5-11-7.5zm0 13c-3.63 0-6.8-2.17-8.19-5 1.39-2.83 4.56-5 8.19-5s6.8 2.17 8.19 5c-1.39 2.83-4.56 5-8.19 5zm0-8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z"/>

              </svg>
              <h2 className="title-font font-medium text-3xl text-white">
                2.7K
              </h2>
              <p className="leading-relaxed">Platform Viewers</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-blue-400 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-white">
                1.3K
              </h2>
              <p className="leading-relaxed">Registed workers</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-blue-400 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <h2 className="title-font font-medium text-3xl text-white">
                4.2
              </h2>
              <p className="leading-relaxed">Average Rating</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-blue-400 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-white">
                10+
              </h2>
              <p className="leading-relaxed">Categories</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistic;
