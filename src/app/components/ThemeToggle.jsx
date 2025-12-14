import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { IoMoonOutline } from 'react-icons/io5'
const ThemeToggle = () => {
    const { theme, setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const current = theme === "system" ? resolvedTheme : theme;


    return (
        <span onClick={() => setTheme(current === "dark" ? "light" : "dark")} className="p-2 hover:bg-gray-800 hover:text-white transition-all cursor-pointer border rounded border-gray-600">
            <IoMoonOutline />
        </span>
    )
}

export default ThemeToggle