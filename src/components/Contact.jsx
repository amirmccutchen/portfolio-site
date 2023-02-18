import React from "react";
import Title from "./Title";

function Contact() {
    return (
        <div className = 'flex flex-col mb-10 mx-auto'>
            <div className = 'flex justify-center items-center'>
                <form // This will store your form submissions, sign up on a free site such as getform.io & create a new form, then paste your link into action.
                action = 'https://getform.io/f/a9924e91-687d-4e14-a253-48dc4c474461'
                method = 'POST'
                className = 'flex flex-col w-full md:w-7/12'>
                  <Title>Contact</Title>
                    <input
                      type = 'text'
                      name = 'name'
                      placeholder = 'Name'
                      className = 'p-2 bg-transparent border-2 border-neutral-500 dark:border-neutral-200 rounded-md focus:outline-none dark:opacity-80 font-sen'
                    />
                    <input
                      type = 'text'
                      name = 'name'
                      placeholder = 'Email Address'
                      className = 'my-2 p-2 bg-transparent border-2 border-neutral-500 dark:border-neutral-200 rounded-md focus:outline-none dark:opacity-80 font-sen'
                    />
                    <textarea
                      name = 'message'
                      placeholder = 'Message'
                      rows = '10'
                      className = 'p-2 mb-4 bg-transparent border-2 border-neutral-500 dark:border-neutral-200 rounded-md focus:outline-none dark:opacity-80 font-sen'
                    />
                    <button
                      type = 'bottom'
                      className = 'text-center place-self-center inline-block px-10 py-3 w-max text-neutral-200 font-medium rounded-md bg-gradient-to-r from-darkblue to-neutral-700 dark:from-neutral-800 dark:to-darkblue drop-shadow-md hover:stroke-white'>
                        Get In Touch
                      </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;