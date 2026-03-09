import React, { useRef, useEffect, useState } from "react";

const experiences = [
    {
        id: 1,
        year: "2025",
        role: "Freelance Software Developer",
        company: "Self-Employed, Lucknow",
        duration: "Oct 2025 – Present",
        type: "Freelance",
        description:
            "Built 4+ full-stack applications with Node.js, Express, MongoDB. Designed REST APIs (10+ endpoints) with auth & middleware. Developed video streaming interface using hls.js. Modeled MongoDB schemas and containerized services using Docker.",
        skills: ["Node.js", "Express", "MongoDB", "REST APIs", "Docker"],
        color: "#a78bfa",
    },
    {
        id: 2,
        year: "2025",
        role: "Frontend Engineer Intern",
        company: "HealthTrip.com, Noida, India",
        duration: "Mar 2025 – Sep 2025",
        type: "Internship",
        description:
            "Developed 5 core CRM modules, sub-modules, and 15+ internal API integrations. Optimized SEO for 5,000+ dynamic pages using Next.js. Contributed to application-wide i18n for 9 languages. Worked extensively with TypeScript.",
        skills: ["TypeScript", "Next.js", "React", "SEO", "i18n"],
        color: "#00e5ff",
    },
    {
        id: 3,
        year: "2024",
        role: "Web Development Intern",
        company: "Royal Finserv, Delhi",
        duration: "May 2024 - Jul 2024",
        type: "Internship",
        description:
            "Contributed to web development projects, assisting in the development and maintenance of web applications while gaining hands-on experience.",
        skills: ["HTML/CSS", "JavaScript", "Web Development"],
        color: "#34d399",
    },
];

function TimelineItem({ exp, index }) {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const isLeft = index % 2 === 0;

    return (
        <div
            ref={ref}
            className={`relative flex items-start gap-0 mb-16 timeline-item  ${isLeft ? "flex-row" : "flex-row-reverse"
                }`}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible
                    ? "translateY(0)"
                    : `translateY(40px)`,
                transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
            }}
        >
            {/* Card */}
            <div
                className={`w-5/12 ${isLeft ? "pr-8 text-right" : "pl-8 text-left"}`}
            >
                <div className="relative group cursor-default">
                    {/* Background block mask for animation */}
                    <div
                        className="
                            absolute inset-0 
                            translate-x-[6px] translate-y-[6px]
                            transition-transform duration-200 ease-out
                            group-hover:translate-x-0 group-hover:translate-y-0
                            z-0
                        "
                        style={{
                            background: `${exp.color}`,
                            border: `1px solid ${exp.color}`,
                        }}
                    />

                    {/* Foreground card */}
                    <div
                        className="
                            relative z-10 
                            p-5 bg-black
                            transition-transform duration-200 ease-out
                            group-hover:translate-x-[6px] group-hover:translate-y-[6px]
                        "
                        style={{
                            border: `1px solid ${exp.color}`,
                        }}
                    >
                        {/* Type badge */}
                        <span
                            className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-3"
                            style={{
                                background: `${exp.color}22`,
                                color: exp.color,
                                border: `1px solid ${exp.color}44`,
                                fontFamily: "'Chakra Petch', sans-serif",
                            }}
                        >
                            {exp.type}
                        </span>

                        <h3
                            className="text-lg font-bold text-white mb-1 leading-tight"
                            style={{ fontFamily: "'Doto', sans-serif", letterSpacing: "0.03em" }}
                        >
                            {exp.role}
                        </h3>

                        <p
                            className="text-sm mb-1"
                            style={{ color: exp.color, fontFamily: "'Chakra Petch', sans-serif" }}
                        >
                            {exp.company}
                        </p>

                        <p
                            className="text-xs text-white/40 mb-3"
                            style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                        >
                            {exp.duration}
                        </p>

                        <p
                            className="text-sm text-white/60 leading-relaxed mb-4"
                            style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                        >
                            {exp.description}
                        </p>

                        {/* Skills */}
                        <div
                            className={`flex flex-wrap gap-2 ${isLeft ? "justify-end" : "justify-start"
                                }`}
                        >
                            {exp.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="text-xs px-2 py-0.5 rounded text-white/50 border border-white/10"
                                    style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Center stem + dot */}
            <div className="w-2/12 flex flex-col items-center relative">
                {/* Dot */}
                <div
                    className="relative z-10 flex items-center justify-center w-10 h-10 border-2 mt-4"
                    style={{
                        background: `${exp.color}18`,
                        borderColor: exp.color,
                        boxShadow: visible ? `0 0 16px 4px ${exp.color}55` : "none",
                        transition: `box-shadow 0.4s ease ${index * 0.15 + 0.3}s`,
                    }}
                >
                    <div
                        className="w-3 h-3"
                        style={{ background: exp.color }}
                    />
                </div>

                {/* Year label below dot */}
                <span
                    className="text-sm font-bold mt-2 text-white"
                    style={{
                        fontFamily: "'Doto', sans-serif",
                        letterSpacing: "0.08em",
                    }}
                >
                    {exp.year}
                </span>
            </div>

            {/* Empty spacer (opposite side) */}
            <div className="w-5/12" />
        </div>
    );
}

export default function Exp() {
    return (
        <section className="relative py-20 px-4 overflow-hidden border mx-4 md:mx-8 border-t-0" id="experience">
            {/* Ambient background glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(0,229,255,0.04) 0%, transparent 70%)",
                }}
            />

            {/* Section heading */}
            <div className="text-center mb-16">
                <h2
                    className="text-4xl md:text-5xl font-bold text-white"
                    style={{ fontFamily: "'Doto', sans-serif", letterSpacing: "0.05em" }}
                >
                    Experience
                </h2>
                <div
                    className="mx-auto mt-4 h-px w-24"
                    style={{
                        background:
                            "linear-gradient(90deg, transparent, #00e5ff88, transparent)",
                    }}
                />
            </div>

            {/* Timeline container */}
            <div className="relative max-w-4xl mx-auto">
                {/* Central vertical line */}
                <div
                    className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
                    style={{
                        background:
                            "linear-gradient(to bottom, transparent, #ffffff22 10%, #ffffff22 90%, transparent)",
                    }}
                />

                {experiences.map((exp, index) => (
                    <TimelineItem key={exp.id} exp={exp} index={index} />
                ))}
            </div>
        </section>
    );
}