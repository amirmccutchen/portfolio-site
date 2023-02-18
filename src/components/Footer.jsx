import React from "react";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
// Replace my name on line 10 with your name

function Footer() {
    return (
        <div className = 'py-1 text-center'>
            {/* add social icons here */}
            <SocialIcon url="https://github.com/amirmccutchen" bgColor="#525252" />
            <SocialIcon url="https://www.linkedin.com/in/amir-mccutchen/" bgColor="#525252" className="ml-4"/>
            <p className = 'text-sm mt-5 font-bold dark:font-medium opacity-75 dark:opacity-60 font-sen'>
                &copy; {new Date().getFullYear()} Amir McCutchen. <br /> Built with JavaScript, React, and TailwindCSS.
            </p>
        </div>
    );
};

export default Footer;