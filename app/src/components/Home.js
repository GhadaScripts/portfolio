import React from "react"
import image from "../Assets/pic.jpg"


export default function Home() {
    return (
        <main>
            <img src={image} alt="beach background" className="absolute object-cover w-full h-full"/>
            <section className="relative min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-5xl text-gray-800 leading-none lg:leading-snug flex justify-center font-bold ">Welcome to my page!</h1>
                <div>
                <p className="text-3xl text-gray-800 flex justify-center m-5 font-bold">
                I'm Rihab, I am a business IT technician, full-stack web developer, specializing in front-end and back-end development and interested in React. I built my portfolio with React, React-DOM, Javascript and React Social Icons. Go to my projects page to learn more about my projects and click on my other links to connect with me!
                    </p>

                </div>
            </section>
        
        </main>
    )
}