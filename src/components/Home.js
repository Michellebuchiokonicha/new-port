import React from "react";
 import Image from "../background-port.jpeg"

export default function Home() {
    return (
        <main>
            <img src={Image} alt="Background" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen p-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Hi hi, I am Buchi.</h1>
            </section>
        </main>
    )
}