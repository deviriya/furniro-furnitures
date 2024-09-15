import Aos from 'aos'
import React, { useEffect } from 'react'
import { FadeInWhenVisible } from '../../animation/bounceIn'

function TimeLine({ index, title, content, description, status, icon, percent }) {

    useEffect(() => {
        Aos.init({ once: true })
    }, [])
    return (
        <li className="mb-10 ms-6 dark:bg-[#0b0b0b] p-6 rounded-lg border dark:border-none dark:text-white" key={index}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 text-pink-600 rounded-full -start-3 ring-8 ring-white">
                {icon}
            </span>
            <h3 className="flex items-center mb-1 text-md md:text-lg font-semibold ">
                {title}
                <FadeInWhenVisible>
                    {percent &&
                        <span className="bg-pink-700 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">{percent}</span>}
                    {status &&
                        <span className="bg-pink-700 text-white text-xs md:text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">Latest</span>}
                </FadeInWhenVisible>
            </h3>
            <time className="block mb-2 text-xs md:text-sm font-normal leading-none text-gray-400">{content}</time>
            <p className="mb-4 text-sm md:text-md font-normal opacity-60">
                {description}
            </p>
        </li>
    )
}

export default TimeLine