'use client'
import { useRouter } from "next/navigation"
import { useState } from "react";

const SearchBox = () => {
    const [text, setText] = useState('');
    // const searchQuery = new URLSearchParams(location.search);

    const handleChange = (evt) => {
        setText(evt.target.value);
    }

    // const handleNext = () => {
    //     if (text.trim() !== '') {
    //         searchQuery.set('sq', text);
    //         navigate(`${location.pathname}search/?${searchQuery.toString()}`);
    //     }
    // }
    const handleKeyDown = (evt) => {
        if (evt.key === 'Enter') {
            handleNext();
        }
    }


    return (
        <div className='mt-12 w-4/5'>
            <div className="relative flex w-full flex-wrap items-stretch">
                <input
                    type="search"
                    name='text'
                    onChange={handleChange}
                    className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="Search latest news..."
                    aria-label="Search"
                    aria-describedby="button-addon1" />

                <button
                    className="relative z-[2] w-12 flex justify-center items-center rounded-r bg-blue-600 p-2 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                    type="button"
                    id="button-addon1"
                    data-te-ripple-init
                    onKeyDown={handleKeyDown}
                    data-te-ripple-color="light">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fillRule="evenodd"
                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                            clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default SearchBox