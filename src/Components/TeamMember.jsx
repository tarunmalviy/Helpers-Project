import React from 'react'

function TeamMember({memberName='Member Name',position='Work'}) {
    return (
        <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
              
              
              <a className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="https://dummyimage.com/106x106"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-white">
                    {memberName}
                  </span>
                  <span className="text-gray-500 text-sm">{position}</span>
                </span>
              </a>
            </div>
          </div>
    )
}

export default TeamMember
