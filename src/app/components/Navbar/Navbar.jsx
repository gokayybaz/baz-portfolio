"use client"
import React from 'react'
import NavbarIconButton from './NavbarIconButton'

import { IoHome, IoHomeOutline, IoMoonOutline } from "react-icons/io5";


const Navbar = () => {
    const handleHomeButtonClick = () => {
        alert("Home Button Clicked!")
    }
    const handleChangeThemeButtonClick = () => {
        alert("Change Theme Button Clicked!")
    }
    return (
        <nav className="flex border-b border-gray-200 pb-2 flex-row items-center justify-between">
            <div>
                <p className="text-xl font-semibold">Gökay Baz</p>
                <p className="text-gray-400">IT Specialist & Junior DevOps Engineer</p>
            </div>
            <div className="flex items-center gap-4">
                <NavbarIconButton onClick={handleHomeButtonClick}>
                    <IoHomeOutline />
                </NavbarIconButton>
                <NavbarIconButton onClick={handleChangeThemeButtonClick}>
                    <IoMoonOutline />
                </NavbarIconButton>
            </div>
        </nav>
    )
}

export default Navbar