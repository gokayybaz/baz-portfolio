import React from 'react'

import { IoSend } from "react-icons/io5";


function FirstAbout() {
    return (
        <div>
            <h1 className='font-bold text-5xl poppins-bold'>Merhaba, Hoş Geldin!</h1>
            <h2 className=' text-gray-800 font-semibold mt-8 text-2xl poppins-semibold'>JUNIOR WEB DEVELOPER</h2>
            <p className='text-gray-700 text-lg w-2/3 mt-6 poppins-regular'>Ben Gökay Baz, Junior Web Geliştiriciyim.
                20 yaşındayım, <br /> Adana'da yaşıyorum.
                Benim hakkımda daha fazla bilgi için sitede dolaşmaya devam et...</p>
            <button className=' flex items-center gap-3 poppins-semibold text-sm mt-8 p-4 bg-[#12866b] text-white font-semibold rounded-xl'><IoSend />
                Benimle İletişime Geç</button>
        </div>
    )
}

export default FirstAbout