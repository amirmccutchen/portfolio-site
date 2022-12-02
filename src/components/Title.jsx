import React from "react";

// Creates section titles for Timeline and Contact, nothing to edit here unless you want to edit the styling theme.

function Title({ children, id }) {
    return (
        <h1
          id = {id && id}
          className = 'text-2xl font-bold text-zinc-900 dark:text-neutral-100 underline underline-offset-8 decoration-4 mb-10 text-center'>
            {children}
          </h1>
    );
};

export default Title;