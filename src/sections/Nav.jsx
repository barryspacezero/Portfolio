import React, { useState } from 'react'
import HamburgerMenu from '../components/HamburgerMenu'
function Nav() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  }

  return (<>
    <nav className="flex flex-row mx-4 md:mx-8 mt-6 md:mt-8 justify-between items-center border px-6 md:px-12 py-3 md:py-0 gap-4 md:gap-0 border-white relative z-20 bg-black">
      <h3 className='text-xl md:text-xl font-bold flex wave-text cursor-default' onClick={(e) => window.open("https://sparshdev.space", "_blank")}>
        {"Hi, I'm [Sparsh]".split("").map((char, index) => (
          <span
            key={index}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h3>
      <div className='hidden md:flex'>
        <div className='relative'>
          <button
            onClick={() => setResumeOpen(!resumeOpen)}
            className='border-x font-bold border-white px-4 py-3 md:p-4 text-sm md:text-base hover:text-black hover:bg-white transition-colors h-full flex items-center gap-2'
          >
            Resume
            <span className="text-xs">{resumeOpen ? '▲' : '▼'}</span>
          </button>

          <div
            className={`absolute top-full left-0 w-full bg-black flex flex-col overflow-hidden transition-all duration-500 ease-in-out border-white ${resumeOpen ? 'max-h-64 border-x border-b opacity-100' : 'max-h-0 border-x-0 border-b-0 opacity-0'
              }`}
          >
            <a
              href="/Sparsh_s_Resume.pdf"
              download="Sparsh_s_Resume.pdf"
              className={`w-full text-center font-bold border-b border-white px-2 py-4 text-sm hover:text-black hover:bg-white transition-all duration-300 transform ${resumeOpen ? 'translate-y-0 opacity-100 delay-100' : '-translate-y-4 opacity-0'
                }`}
            >
              Frontend
            </a>
            <a
              href="/SparshFullStackResume.pdf"
              download="SparshFullStackResume.pdf"
              className={`w-full text-center font-bold px-2 py-4 text-sm hover:text-black hover:bg-white transition-all duration-300 transform ${resumeOpen ? 'translate-y-0 opacity-100 delay-200' : '-translate-y-4 opacity-0'
                }`}
            >
              Fullstack
            </a>
          </div>
        </div>
        <button className='border-r font-bold border-white px-4 py-3 md:p-4 text-sm md:text-base hover:text-black hover:bg-white transition-colors'>Projects</button>
      </div>
      <div className='md:hidden cursor-pointer' onClick={toggleHamburger}>
        <HamburgerMenu />
      </div>
    </nav>

    {/* Mobile Cascading Menu */}
    <div
      className={`md:hidden mx-4 md:mx-8 flex flex-col overflow-hidden transition-all duration-500 ease-in-out border-white ${hamburgerOpen ? 'max-h-[30rem] border-x border-b opacity-100' : 'max-h-0 border-x-0 border-b-0 opacity-0'
        }`}
    >
      <button
        onClick={() => setResumeOpen(!resumeOpen)}
        className={`w-full text-left font-bold border-b border-white px-6 py-4 text-base hover:text-black hover:bg-white transition-all duration-300 transform flex justify-between items-center ${hamburgerOpen ? 'translate-y-0 opacity-100 delay-100' : '-translate-y-4 opacity-0'
          }`}
      >
        <span>Resume</span>
        <span className="text-sm">{resumeOpen ? '▲' : '▼'}</span>
      </button>

      {/* Mobile Resume Dropdown Options */}
      <div
        className={`flex flex-col bg-white/5 overflow-hidden transition-all duration-500 ease-in-out border-white ${resumeOpen && hamburgerOpen ? 'max-h-40 border-b opacity-100' : 'max-h-0 border-b-0 opacity-0'}`}
      >
        <a
          href="/Frontend_Resume.pdf"
          download="Frontend_Resume.pdf"
          className={`w-full pl-10 pr-6 py-3 text-left font-bold border-b border-white text-sm hover:text-black hover:bg-white transition-all duration-300 transform ${resumeOpen && hamburgerOpen ? 'translate-y-0 opacity-100 delay-100' : '-translate-y-4 opacity-0'}`}
        >
          Frontend
        </a>
        <a
          href="/Fullstack_Resume.pdf"
          download="Fullstack_Resume.pdf"
          className={`w-full pl-10 pr-6 py-3 text-left font-bold border-b border-white text-sm hover:text-black hover:bg-white transition-all duration-300 transform ${resumeOpen && hamburgerOpen ? 'translate-y-0 opacity-100 delay-200' : '-translate-y-4 opacity-0'}`}
        >
          Fullstack
        </a>
      </div>

      <button
        className={`w-full text-left font-bold px-6 py-4 text-base hover:text-black hover:bg-white transition-all duration-300 transform ${hamburgerOpen ? 'translate-y-0 opacity-100 delay-200' : '-translate-y-4 opacity-0'
          }`}
      >
        Projects
      </button>
    </div>

    <section className='relative z-10 flex justify-center items-center border-x border-b min-h-[20rem] md:h-[20rem] lg:h-[28rem] border-white mx-4 md:mx-8 px-6 md:px-16 py-10 md:py-0 transition-all duration-500'>
      <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center leading-snug'>
        Hi, I'm [Sparsh], a curiosity-driven Fullstack Developer with a strong foundation in NextJS, performance-focused UI, and scalable component systems. Currently exploring Backend Technologies.
      </h2>
    </section>
  </>
  )
}

export default Nav