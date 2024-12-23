import React from "react";

function Search() {
  return (
    
          <div className=" mb-14 flex justify-center">
            <div className="relative w-3/5  flex rounded-lg">
              <input
                type="text"
                className="w-full h-14 py-3 px-4 border text-xl text-black border-gray-300 rounded-l-3xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Search for Hire People"
              />
              <button className=" inline-flex items-center px-5  border border-transparent text-2xl font-medium rounded-r-3xl text-white bg-blue-600 hover:bg-blue-700 ">
                Search
              </button>
            </div>
          </div>
        
  );
}

export default Search;
