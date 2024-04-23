import React from 'react'

function ProjectCard(props) {
    return (
        <div className='flex h-max flex-col items-center border p-4 rounded-xl shadow-lg'>
            <img width={100} src={props.image} alt="" />
            <h2 className='text-sm poppins-semibold'>{props.title}</h2>
        </div>
    )
}

export default ProjectCard