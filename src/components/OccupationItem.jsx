import React from "react";

// No need to do anything here, unless you want to edit styling. 
// Compiles the objects from /data/occupations.js before sending them to the Occupations component.


function OccupationItem({ year, title, duration, details }) {
   return (
      <ol className= 'flex flex-col md:flex-row relative border-l border-neutral-400 dark:border-neutral-700 '>
         <li className = 'mb-10 ml-4'>
            <div className = 'absolute w-3 h-3 bg-neutral-800 dark:bg-white rounded-full mt-1.5 -left-1.5 border border-white' />
            <p className= 'flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
               <span className = 'inline-block px-2 py-1 font-semibold text-neutral-100 dark:text-neutral-800 bg-neutral-800 dark:bg-neutral-200 rounded'>
                  {year}
               </span>
               <h3 className = 'text-lg font-semibold text-neutral-800 dark:text-white'>
                  {title}
               </h3>
               <div className = 'my-1 text-sm font-normal leading-none text-neutral-500 dark:text-neutral-400 font-sen'>
                  {duration}
               </div>
            </p>
            <p className = 'my-2 text-base  text-neutral-600 dark:text-neutral-300  font-sen '>
               {details}
            </p>
         </li>
      </ol>
   );
};

export default OccupationItem;