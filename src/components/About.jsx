import React from 'react'


import myPicture from "../assets/imgs/img-2.jpg"
import { FaDownload } from "react-icons/fa6";

function About() {
    return (
        <div className='flex flex-col items-center mt-40 px-40'>
            <h2 className='poppins-bold text-4xl'>Hakkımda</h2>
            <div className='gap-20 my-24 flex flex-1 items-center justify-between'>
                <img className='rounded-full' width={300} height={200} src={myPicture} alt="My Picture" />
                <div>
                    <p className='poppins-regular'>Ben Gökay Baz, Junior Web Developer'ım. Osmaniye Korkut Ata Üniversitesi'nde Bilgisayar Programcılığı 1. sınıf öğrencisiyim.
                        Kendimi Javascript ekosisteminde sürekli geliştirmeye çabalıyorum.
                    </p>
                    <button className=' flex items-center gap-3 poppins-semibold text-sm mt-8 p-4 bg-[#12866b] text-white font-semibold rounded-xl'>
                        <FaDownload /> CV İndir</button>
                </div>
            </div>
        </div>
    )
}

export default About