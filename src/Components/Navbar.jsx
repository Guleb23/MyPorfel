import React from 'react'
import my from '../assets/Images/my.jpg'
import logo from '../assets/Images/kevinRushLogo.png';
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa'
import { SlSocialVkontakte } from "react-icons/sl";
import { links } from '../Data/constants';
import NavBarLink from './NavBarLink';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const url = location.pathname;
    console.log(url);
    return (
        <div className='mb-10 lg:mb-6 mt-6 flex flex-col  border-b-[0.5px]' style={{ flex: "0 0 10%" }}>

            <nav className=' py-5  flex items-center justify-between'>
                <div className='  flex-shrink-0 items-center flex '>
                    <img className='mx-2 w-10' src={logo} alt='logo' />
                </div>
                <div className='flex gap-8'>
                    {links.map((link, index) => (
                        <NavBarLink title={link.title} to={link.to} key={index} />
                    ))}
                </div>
                <div className='m-8 justify-center items-center hidden lg:flex gap-4 text-2xl'>
                    <a href='https://github.com/Guleb23'>

                        <FaGithub />
                    </a>
                    <a href='https://github.com/Guleb23'>

                        <FaLinkedin />
                    </a>
                    <a href='https://t.me/HelloWorldPrint0'>

                        <FaTelegram />
                    </a>
                    <a href='https://vk.com/bvkkv'>

                        <SlSocialVkontakte />
                    </a>
                </div>

            </nav>
            {url === "/" ? <></> :
                <div onClick={() => { navigate(-1) }} className='cursor-pointer pb-2'>
                    <span className=' font-extrabold text-xl leading-none'>←</span>back
                </div>}

        </div>
    )
}
