import React from "react"
import hiking1 from "../Assets/hiking1.jpg"
import Skills from "./Skills"

export default function About() {
    return(
        <main className="bg-gray-800 min-h-screen p-12">
            <div className="rounded-lg p-10 lg:pt-48 container mx-auto relative">
                <section className="rounded-lg shadow-2xl lg:flex p-20 bg-gray-700 ">
                    <img src={hiking1} className="rounded-lg w-50 h-50 lg:w-64 lg:h-64 mr-8" alt="mountains in nature"/>
                    <div className="bg-pink">
                        <h1 className="text-4xl justify-center mb-4 text-white">
                        About me:
                        </h1>
                        <div className="text-2xl  justify-center text-white">
                        My name is Rihab and i am a management IT technician graduated from the sousse-swiss state center, the training period was 2 years, I did various internships, in the bank, the post office, a PSIINFO IT company and in the Tunisian company of Electricity and GAZ. afterwards I worked in a French medical company, the post office was administrative assistant of production and purchase for 2 years and 2 months. after I have a private training in web development (Full-stack) for 5 months and for that I made an end of study project of this training and I have some project the most liked to create are on my page of projects and I will continue to develop them, feel free to click here for my Github link  <a href="https://github.com/R-Rouis" target="blank"><span className= "text-blue-400 font-bold "> Github Link </span></a> and check my progress!
                        </div>
                        <div>
                            <Skills />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}