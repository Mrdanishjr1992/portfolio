import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons'

export default function NavBar(){
    return (
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-around">
                <nav className="flex">

                    <NavLink 
                        to="/" exact 
                        activeClassName="text-white bg-red-700"
                        className="inline-flex items-center py-7 px-3 mx-20 rounded text-white hover:text-green-300 text-5xl font-bold cursive tracking-widest"
                    >
                        Dev Danish
                    </NavLink>
                    <NavLink 
                        to="/project"
                        activeClassName="text-black bg-red-700"
                        className="inline-flex items-center py-4 px-4 my-6 rounded text-white hover:text-green-300"
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                        to="/skills"
                        activeClassName="text-black bg-red-700"
                        className="inline-flex items-center py-4 px-4 my-6 rounded text-white hover:text-green-300"
                        >
                        Skills/Resume
                    </NavLink>
                    <NavLink 
                        to="/about"
                        activeClassName="text-black bg-red-700"
                        className="inline-flex items-center py-4 px-4 my-6 rounded text-white hover:text-green-300"
                        >
                        About me!
                    </NavLink>
                    <NavLink 
                        to="/contact"
                        activeClassName="text-black bg-red-700"
                        className="inline-flex items-center py-4 px-4 my-6 rounded text-white hover:text-green-300"
                        >
                        Contact
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/mohamed-s-abdulah/" className="mr-4" target="_blank" fgColor="#fff" style={ { height:35, width: 35 } } />
                    <SocialIcon url="https://github.com/Mrdanishjr1992" className="mr-4" target="_blank" fgColor="#fff" style={ { height:35, width: 35 } } />
                    <SocialIcon url="https://twitter.com/Mohamed_S_Abdul" className="mr-4" target="_blank" fgColor="#fff" style={ { height:35, width: 35 } } />
                </div>
            </div>
        </header>
    )
}