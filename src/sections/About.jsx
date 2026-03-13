import React from "react";

function About() {
    return (
        <section className="grid grid-cols-2 mx-4 md:mx-8">
            <div className="border h-full w-full border-white">
                <img src="https://picsum.photos/1210/1210" className="w-140 h-140 object-contain p-12" />
            </div>
            <div className="border h-full w-full border-white">
                <span>Project Overview</span>
                <span>Extras</span>
                <span>Socials</span>
            </div>
        </section>
    );
}

export default About;