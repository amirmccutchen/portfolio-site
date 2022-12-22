import React from "react";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
// Replace my name on line 10 with your name

function Footer() {
    return (
        <div className = 'py-3 text-center '>
            {/* add social icons here */}
            <SocialIcon url="https://github.com/amirmccutchen" bgColor="#525252" />
            <p className = 'text-sm mt-2 opacity-60'>
                &copy; {new Date().getFullYear()} Amir McCutchen. <br /> Built with JavaScript, React, and TailwindCSS.
            </p>
        </div>
    );
};

export default Footer;