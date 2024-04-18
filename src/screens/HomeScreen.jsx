import React from 'react'

import SocialMediaArea from '../components/SocialMediaArea.jsx';
import NavBar from '../components/NavBar.jsx';
import FirstAbout from '../components/FirstAbout.jsx';
import FirstAboutImage from '../components/FirstAboutImage.jsx';
import ScrollDown from '../components/ScrollDown.jsx'

import myPicture from "../assets/imgs/img-2.jpg"

function HomeScreen() {
    return (
        <div className='px-48'>
            <NavBar />
            <div className='mt-32 px-8 flex gap-16'>
                <SocialMediaArea />
                <div className='flex flex-1 items-center justify-between px-10'>
                    <FirstAbout />
                    <FirstAboutImage />
                </div>
            </div >
            <ScrollDown />
            <div className='flex flex-col items-center mt-40 px-40'>
                <h2 className='poppins-bold text-4xl'>Hakkımda</h2>
                <div className='gap-12 mt-24 flex flex-1 items-center justify-between'>
                    <img className='rounded-full' width={300} height={200} src={myPicture} alt="My Picture" />
                    <div>
                        <p>Merhaba! ben Gökay Baz, Junior Web Developer'ım. Osmaniye Korkut Ata Üniversitesi'nde Bilgisayar Programcılığı 1. sınıf öğrencisiyim.
                            Kendimi Javascript ekosisteminde sürekli geliştirmeye çabalıyorum.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HomeScreen