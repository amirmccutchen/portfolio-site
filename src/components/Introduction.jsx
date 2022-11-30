import React from "react";

function Introduction() {
    return (
        <div className = 'flex items-center justify-center flex-col text-center pt-16 pb-6'>
            <h1 className = 'text-5xl md:text-7x1 dark:text-neutral-300 mb-5 md:mb-5 font-bold'>Amir McCutchen</h1>
            <p className = 'text-base md:text-xl mb-4 font-medium'>Web Developer & Software Engineer</p>
            <img // insert your image here, resize if needed using the w-x/12 starting with a mobile view, then work your way up
               src = '../public/images/me.jpg'
               alt = "Amir McCutchen" 
               class = "rounded-full w-8/12 md:w-5/12 lg:w-3/12 mb-6"
            />
            <p className = 'text-md max-w-xl mb-6 font-bold'>I'm a full-stack engineer working to solve modern solutions and create smooth, user friendly applications. All of my projects are made to provide a streamlined, effective user experience with code written with an emphasis on cleanliness and legibility. Coming from an entreprenuerial background, I know that ease of use and a streamlined experience within an app is the key to converting a potential client into a frequent one.</p>
        </div>
    )
}

export default Introduction;