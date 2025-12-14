"use client"
import React from 'react'

const NavbarIconButton = ({ children, onClick }) => {
    return (
        <span onClick={onClick} className="p-2 hover:bg-gray-800 hover:text-white transition-all cursor-pointer border rounded border-gray-600">
            {children}
        </span>
    )
}

export default NavbarIconButton