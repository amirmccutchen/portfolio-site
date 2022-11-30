import React from "react";

// Replace my name on line 10 with your name

function Footer() {
    return (
        <div className = 'py-5 text-center '>
            {/* add social icons here */}
            <p className = 'text-sm mt-2 opacity-60'>
                &copy; {new Date().getFullYear()} Amir. All rights reserved.
            </p>
        </div>
    )
}

export default Footer;