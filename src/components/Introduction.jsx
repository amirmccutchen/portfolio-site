import React from "react";

function Introduction() {
    return (
        <div className = 'flex items-center justify-center flex-col text-center pt-16 pb-6'>
            <h1 className = 'text-4xl md:text-7x1 dark:text-neutral-300 mb-1 md:mb-3 font-bold'>Amir</h1>
            <p className = 'text-base md:text-xl mb-3 font-medium'>Web Developer & Software Engineer</p>
            <p className = 'text-sm max-w-xl mb-6 font-bold'>This is me</p>
        </div>
    )
}

export default Introduction;