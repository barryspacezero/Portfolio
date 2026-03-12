import React, { useState, useEffect } from "react"
import Nav from "./sections/Nav"
import GameInfoBot from "./assets/GameInfoBot.png"
import FlipLearn from "./assets/FlipLearn.png"
import Exp from "./sections/Exp"
import NFP from "./assets/NFP.png"
import taskmanager from "./assets/taskmanager.png"
import { ProjectCard } from "./components/ProjectCard"

function App() {
  const [galactic, setGalactic] = useState(false);

  useEffect(() => {
    let buffer = "";
    const magicWord = "enchant";

    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      buffer += e.key.toLowerCase();
      if (buffer.length > magicWord.length) {
        buffer = buffer.slice(-magicWord.length);
      }

      if (buffer === magicWord) {
        setGalactic(prev => !prev);
        buffer = "";
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (galactic) {
      document.body.classList.add("galactic");
    } else {
      document.body.classList.remove("galactic");
    }
  }, [galactic]);

  return (
    <main className="min-h-screen">
      <Nav />
      <Exp />
      <h1 className="text-5xl font-bold text-white justify-center flex border mx-4 p-4 md:mx-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mx-4 md:mx-8">

        <ProjectCard src={NFP} title="Food Inspector" description="A simple nutrition tracking app built with ReactJS and Tailwind CSS." projectLink="https://nutrition-fact-panels.vercel.app/" githubLink={"https://github.com/barryspacezero/Nutrition_Fact_Panels"} />
        <ProjectCard src={taskmanager} title="Task-Tracker" description="A Task Tracker app built with NextJS, TypeScript and Tailwind CSS with backend written in Express, NodeJS and MongoDB." projectLink="https://penguin-task-tracker.vercel.app/" githubLink={"https://github.com/barryspacezero/Task-Tracker"} />
        <ProjectCard src={GameInfoBot} title="Telegram-GameInfoBot" description="A Telegram bot built with Python using the Pyrogram library and Twitch's API." githubLink="https://github.com/barryspacezero/Telegram-GameInfoBot" />
        <ProjectCard src={FlipLearn} title="Flip-Learn" description="A Flashcards app for Quizzes built with ReactJS, TypeScript and Tailwind CSS." projectLink="https://flip-learn-xw4f.vercel.app/" githubLink={"https://github.com/barryspacezero/Fliplearn"} />
      </div>


    </main>
  )
}

export default App