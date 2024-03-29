import React from "react"
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-blue-300 rounded-lg">
            <div className="container mx-auto flex justify-around">
                <nav className="text-3xl">
                    <NavLink to="/" exact className="inflex-flex items-center py-6 px-5 mr-4 text-gray-600 font-bold ">
                        Home
                    </NavLink>
                    <NavLink to="/about" className="inflex-flex items-center py-6 px-5 mr-4 text-gray-600 font-bold ">
                        About Me
                    </NavLink>
                    <NavLink to="/project" className="inflex-flex items-center py-6 px-5 mr-4 text-gray-600 font-bold ">
                        Projects
                    </NavLink>
                    <NavLink to="/contact" className="inflex-flex items-center py-6 px-5 mr-4 text-gray-600 font-bold ">
                        Contact
                    </NavLink>
                </nav>
                <div>
                    <SocialIcon url="https://github.com/R-Rouis" className="mr-4" target="_blank" style={{ height: 50, width: 50}} />
                    <SocialIcon url="https://www.linkedin.com/in/rihab-rouis-896133125" className="mr-4" target="_blank" style={{ height: 50, width: 50}}/>
                    <SocialIcon url="mailto:rihab.dev9@gmail.com" className="mr-4" target="_blank" style={{ height: 50, width: 50}}/>
                    </div>
            </div>
        </header>
    )
}