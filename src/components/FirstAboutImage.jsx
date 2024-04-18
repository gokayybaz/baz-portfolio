import React from 'react'

import myPhoto from "../assets/imgs/IMG_4723.jpg"

function FirstAboutImage() {
    return (
        <div className='w-96 h-60 flex scale-110 items-center justify-center bg-[#12866b] rounded-full'>
            <img className=' scale-110 rounded-full' width={250} src={myPhoto} alt="My Photo" />
        </div>
    )
}

export default FirstAboutImage