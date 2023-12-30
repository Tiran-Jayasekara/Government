
import React from 'react'

const AlertMessage = ({
    description,
}) => {
    return (
        <section class="flex items-center h-screen bg-gray-100 font-poppins dark:bg-gray-900 ">
            <div class="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-10 ">
                <div class="relative max-w-xl py-6 pl-2 mx-auto bg-white border-b-4 border-blue-500 rounded-md shadow dark:bg-gray-800"
                    role="alert">
                    <div class="flex px-6 ">
                        <div class="py-1 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="w-6 h-6 mr-4 text-blue-500 dark:text-blue-400 bi bi-check2-circle"
                                viewBox="0 0 16 16">
                                <path
                                    d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                <path
                                    d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                            </svg>
                        </div>
                        <div>
                            <p class="mb-1 text-lg font-bold text-blue-500 dark:text-gray-300">
                                Success
                            </p>
                            <p class="mb-4 text-sm text-gray-500 dark:text-gray-400">
                                {description}
                            </p>
                            <div class="flex flex-wrap items-center gap-4 ">
                                {/* <button class="text-blue-500 dark:text-blue-400 hover:text-blue-600 hover:underline">
                            Go back
                        </button> */}
                                <button class="text-blue-500 dark:text-blue-400 hover:text-blue-600 hover:underline">
                                    OK
                                </button>
                            </div>
                        </div>
                    </div>
                    <span class="absolute top-0 bottom-0 right-0 px-4 py-3 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="w-6 h-6 text-gray-100 bg-blue-500 rounded-full dark:bg-blue-400 hover:bg-blue-600 dark:hover:bg-blue-600 bi bi-x"
                            viewBox="0 0 16 16">
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default AlertMessage