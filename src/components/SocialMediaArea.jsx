import React from 'react'

import { FaSquareXTwitter, FaSquareGithub, FaLinkedin } from "react-icons/fa6";

function SocialMediaArea() {
    return (
        <div className='text-3xl items-center justify-center gap-10 flex flex-col text-[#73B5A6]'>
            <FaSquareXTwitter />
            <FaSquareGithub />
            <FaLinkedin />
        </div>
    )
}

export default SocialMediaArea