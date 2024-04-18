import React from 'react'

function NavBar() {
    return (
        <nav className='flex flex-1 items-center justify-between py-12'>
            <h1 className=' font-bold text-2xl text-[#12866b] poppins-bold'>Gökay Baz</h1>
            <ul className='flex gap-12 font-bold poppins-semibold'>
                <li>Anasayfa</li>
                <li>Blog</li>
                <li>Hakkımda</li>
                <li>İletişim</li>
            </ul>
        </nav>
    )
}

export default NavBar