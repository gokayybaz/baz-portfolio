import Image from 'next/image'
import React from 'react'

const ProfileImage = () => {
    return (
        <div className="w-86 h-86 p-2 bg-black rounded-full flex items-center justify-center">
            <div className="w-82 h-82 overflow-hidden flex items-center justify-center bg-white rounded-full">
                <Image alt='Profile Image' className="rounded-full" width={350} height={350} src={"/baz-pp.png"} />
            </div>
        </div>
    )
}

export default ProfileImage