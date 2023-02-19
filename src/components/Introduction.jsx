import React from "react";
import Title from "./Title";
// For your name, title, and bio

function Introduction() {
    return (
        <div className = 'flex items-center justify-center flex-col text-center pt-10 pb-6'>
            <h1 className = 'text-5xl md:text-7x1 mb-5 md:mb-5 font-bold'>Amir McCutchen</h1>
            <p className = 'text-xl mb-5 font-medium font-sen'>Web Developer & Software Engineer</p>
            <img // insert your image here, resize if needed on line 12 using the w-x/12 starting with a mobile view, then work your way up
               src = '../images/me.jpg'
               alt = "Amir McCutchen" 
               class = "rounded-full w-5/12 md:w-4/12 lg:w-3/12 mb-6"
            />
            <p className = 'text-md max-w-xl mb-6 font-medium md:font-semibold dark:font-medium font-sen dark:text-white'>
                I am a Full-Stack Software Developer working to provide modern solutions and create smooth, user-friendly applications. 
                All projects are made to provide a streamlined, effective user experience in code written with an emphasis on cleanliness and legibility. 
                Coming from an entreprenuerial background, I know that ease of use and a streamlined experience within an app is the key to converting a potential client into a frequent one.
            </p>
            <Title>Featured Projects</Title>
        </div>
    );
};

export default Introduction;