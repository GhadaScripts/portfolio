import React from "react"
import { SocialIcon } from "react-social-icons";
import ResumeLink from "./ResumeLink";

export default function Contact() {
    return(
        <main className="bg-gray-900 bg-opacity-900 min-h-screen p-12">
            <div className="text-4xl mb-3 flex justify-center text-white font-bold mb-12">
                <h3>Click on the icons to connect with me!</h3>
            </div>
            <div className="bg-gray-700 mb-12 rounded-lg shadow-xl p-16 mb-12">
            <ResumeLink />
            </div>
            <div className="bg-gray-700 mb-12 rounded-lg shadow-xl p-16 ">
                <p className="text-white flex justify-center font-bold text-2xl">Email me at :</p>
                <p className="text-blue-400 flex justify-center font-bold text-3xl">rihab.dev9@gmail.com</p>
            </div>
            <div className="bg-gray-700 mb-12 rounded-lg shadow-xl p-16 text-2xl">
                <SocialIcon url="https://github.com/R-Rouis" className="mr-4 " target="_blank" style={{ height: 70, width: 70}} />
                <p className="text-white flex justify-center font-bold">This my github! Here you can checkout more of my projects and code as well as other things I am currently working on</p>
            </div>
            <div className="bg-gray-700 mb-12 rounded-lg shadow-xl p-16 text-2xl">
            <SocialIcon url="https://www.linkedin.com/in/rihab-rouis-896133125" className="mr-4" target="_blank" style={{ height: 70, width: 70}} />
            <p className="text-white flex justify-center font-bold">This is the link to my linkedin. Here you can connect with me</p>
            </div>
        </main>
    )
}