import React from "react"

export const ProjectCard = ({ src, title, description, githubLink, projectLink }) => {
    return (
        <div className="group border border-white border-t-0 aspect-square p-6">

            <div className="relative w-full h-4/5">
                <div
                    className="
            absolute inset-0 
            bg-white
            translate-x-[6px] translate-y-[6px]
            transition-transform duration-200 ease-out
            group-hover:translate-x-0 group-hover:translate-y-0
            z-0
          "
                />
                <img
                    src={src}
                    alt={title}
                    className="
            relative z-10 
            w-full h-full object-cover border
            transition-transform duration-200 ease-out
            group-hover:translate-x-[6px] group-hover:translate-y-[6px]
          "
                />
            </div>

            <h3 className="pt-4 text-lg md:text-xl font-bold">{title}</h3>
            <p className="pt-2 h-16 overflow-hidden text-sm md:text-base">{description}</p>

            <div className="flex gap-4">
                {projectLink && (
                    <a
                        href={projectLink}
                        target="_blank"
                        rel="noreferrer"
                        className="
              border border-white font-bold
              p-2 mt-4 w-full
              transition-all duration-200 ease-out
              group-hover:bg-white flex items-center justify-center
              group-hover:text-black
              cursor-pointer hover:opacity-80
            "
                    >
                        View Project
                    </a>
                )}
                {githubLink && (
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="
              border border-white font-bold
              p-2 mt-4 w-full flex items-center justify-center
              transition-all duration-200 ease-out
              group-hover:bg-white
              group-hover:text-black
              cursor-pointer
              hover:opacity-80
            "
                    >
                        GitHub
                    </a>
                )}
            </div>
        </div>
    )
}