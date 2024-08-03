
import { Link } from 'react-router-dom'
import { worksInProtfel } from '../Data/constants';



export default function ProjectCard({ name, image, description, technologies, images, icons, githubLink }) {

    const data = {
        name: name,
        image: image,
        description: description,
        technologies: technologies,
        images: images,
        icons: icons,
        githubLink: githubLink
    }
    console.log(worksInProtfel.length);
    return (

        <div className=''>
            <Link to="/detailPage" state={data}>
                <div className='flex flex-col lg:h-[35rem]'>
                    <img className='rounded-t-xl' src={image} />
                    <div className='p-4 flex flex-col h-full justify-center' >
                        <h2 className='text-2xl text-white font-bold pb-3'>{name}</h2>
                        <p className='pb-4 font-montserrat text-lg
                             text-slate-gray mt-2 max-w-none ' style={{ flex: '1 1 95%' }}>{description}</p>
                        <div className='flex flex-wrap' style={{ flex: '1 1 2%' }}>
                            {technologies.map((tech, index) => (
                                <span className='flex items-center justify-center mr-2 my-1 rounded h-8 bg-gray-400 px-2 py-3 text-sm font-medium text-purple-800 ' key={index}> {tech} </span>
                            ))}
                        </div>

                    </div>

                </div>
            </Link>

        </div>
    )
}



