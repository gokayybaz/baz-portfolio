import React from 'react'

import SocialMediaArea from '../components/SocialMediaArea.jsx';
import NavBar from '../components/NavBar.jsx';
import FirstAbout from '../components/FirstAbout.jsx';
import FirstAboutImage from '../components/FirstAboutImage.jsx';
import ScrollDown from '../components/ScrollDown.jsx'
import About from '../components/About.jsx';
import Projects from '../components/Projects.jsx';

import AbilitiesSvg from "../assets/abilities.svg"



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
            <About />
            <Projects />
            <div className='flex flex-col items-center mt-40 px-40'>
                <h2 className='poppins-bold text-4xl'>Yeteneklerim</h2>
                <div className='w-full gap-x-16 my-24 flex flex-1 items-center  justify-start'>
                    <img width={400} src={AbilitiesSvg} alt="Projects" />
                    <div className='grid grid-cols-4 gap-10'>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default HomeScreen