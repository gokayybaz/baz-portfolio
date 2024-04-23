import React from 'react'
import ProjectCard from './ProjectCard'

import ProjectsSvg from "../assets/projects-img.svg"


function Projects() {
    return (
        <div className='flex flex-col items-center mt-40 px-40'>
            <h2 className='poppins-bold text-4xl'>Projelerim</h2>
            <div className='w-full gap-x-16 my-24 flex flex-1 items-center  justify-between'>
                <img width={400} src={ProjectsSvg} alt="Projects" />
                <div className='grid grid-cols-4 gap-10'>
                    <ProjectCard image="https://images.vexels.com/media/users/3/202049/isolated/preview/fbd4dd4f7d9cf8b224f03f26b8552e0e-heart-of-fast-food.png" title="Baz Yemek" />
                    <ProjectCard image="https://static.vecteezy.com/system/resources/previews/010/286/340/non_2x/online-cinema-art-movie-watching-with-popcorn-and-film-strip-cinematograph-concept-png.png" title="Baz Film" />
                    <ProjectCard image="https://static.vecteezy.com/system/resources/previews/009/418/828/non_2x/shop-marketing-3d-icon-illustration-for-your-website-user-interface-and-presentation-3d-render-illustration-free-png.png" title="Baz Store" />
                    <ProjectCard image="https://static.vecteezy.com/system/resources/previews/011/153/672/original/online-shopping-e-commerce-3d-illustrations-png.png" title="Baz E-Ticaret" />
                </div>
            </div>
        </div>
    )
}

export default Projects