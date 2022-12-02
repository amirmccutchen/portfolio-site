import React from "react";

// This component compiles all of your projects from the projects.jsx, nothing to edit here other than styling.

function ProjectItem({ title, imgUrl, stack, link}) {
  return (
    <a 
       href={link}
       target="_blank"
       rel="noopener noreferrer"
       className="border-2 border-gray-800 dark:border-gray-200 rounded-md overflow-hidden"
    >
       <img
          src={imgUrl}
          alt="portfolio" 
          className="w-full h-36 md:h-48 object-cover cursor-pointer"
       />
       <div className="w-full p-4">
          <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{title}</h3>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-gray-200 ">
             {stack.map(item => (
                <span className="inline-block px-2 py-1 font-semibold border-2 border-gray-800 dark:border-gray-200 rounded-md">
                   {item}
                </span>
             ))}
          </p>
       </div>
    </a>
 );
};

export default ProjectItem;