import React from "react";
import occupations from "./data/occupations";
import OccupationItem from "./OccupationItem";

function Occupations() {
    return (
       <div className="flex flex-col md:flex-row justify-center my-20">
          <div className="w-full md:w-7/12">
             {occupations.map(occupation => (
                <OccupationItem 
                   year={occupation.year}
                   title={occupation.title}
                   duration={occupation.duration}
                   details={occupation.details}
                />
             ))}
          </div>
       </div>
    )
 }

export default Occupations;