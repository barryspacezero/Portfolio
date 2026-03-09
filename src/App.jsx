import React, { useState, useEffect } from "react"
import Nav from "./sections/Nav"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-4 md:mx-8">
        <ProjectCard src={NFP} title="Food Inspector" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." />
        <ProjectCard src={taskmanager} title="Task-Tracker" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." />
        <ProjectCard src={"https://picsum.photos/536/354"} title="Telegram-GameInfoBot" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." />
        <ProjectCard src={"https://picsum.photos/200/300"} title="Flip-Learn" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." />
      </div>

      <Exp />
    </main>
  )
}

export default App