import React from "react";
import projects from "./data/projects";
import ProjectItem from "./ProjectItem";

// This component shows your entire portfolio, nothing to add here unless you want to edit styling.

function Portfolio() {
   return (
      <div className="flex flex-col md:flex-row items-center justify-center">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map(project => (
               <ProjectItem 
                  imgUrl={project.imgUrl}
                  title={project.title}
                  stack={project.stack}
                  link={project.link}
               />
            ))}
         </div>
      </div>
   );
};

export default Portfolio;