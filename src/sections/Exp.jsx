import React, { useRef, useEffect, useState } from "react";

const experiences = [
    {
        id: 1,
        year: "2025",
        role: "Frontend Developer Intern",
        company: "Healthtrip",
        duration: "Jan 2025 – Present",
        type: "Internship",
        description:
            "Built and optimized responsive UI components for a healthcare travel platform serving thousands of patients globally. Worked with React, Tailwind, and RESTful APIs to deliver seamless user experiences.",
        skills: ["React", "Tailwind CSS", "REST APIs", "Figma"],
        color: "#00e5ff",
    },
    {
        id: 2,
        year: "2024",
        role: "Full Stack Developer",
        company: "Freelance",
        duration: "Jun 2024 – Dec 2024",
        type: "Freelance",
        description:
            "Designed and developed end-to-end web applications for clients across e-commerce and SaaS domains. Delivered production-ready code with Node.js backends, React frontends, and MongoDB databases.",
        skills: ["Node.js", "React", "MongoDB", "Express"],
        color: "#a78bfa",
    },
    {
        id: 3,
        year: "2023",
        role: "Open Source Contributor",
        company: "GitHub Projects",
        duration: "2023",
        type: "Open Source",
        description:
            "Contributed to multiple open-source repositories with bug fixes, feature implementations, and documentation improvements. Engaged with global developer communities.",
        skills: ["Git", "JavaScript", "TypeScript", "Documentation"],
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
            className={`relative flex items-start gap-0 mb-16 timeline-item ${isLeft ? "flex-row" : "flex-row-reverse"
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
                <div
                    className="relative group rounded-xl p-5 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-default"
                    style={{
                        boxShadow: visible
                            ? `0 0 0 0px ${exp.color}00`
                            : "none",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 24px 2px ${exp.color}33, 0 0 0 1px ${exp.color}44`;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "none";
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

            {/* Center stem + dot */}
            <div className="w-2/12 flex flex-col items-center relative">
                {/* Dot */}
                <div
                    className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 mt-4"
                    style={{
                        background: `${exp.color}18`,
                        borderColor: exp.color,
                        boxShadow: visible ? `0 0 16px 4px ${exp.color}55` : "none",
                        transition: `box-shadow 0.4s ease ${index * 0.15 + 0.3}s`,
                    }}
                >
                    <div
                        className="w-3 h-3 rounded-full"
                        style={{ background: exp.color }}
                    />
                </div>

                {/* Year label below dot */}
                <span
                    className="text-xs font-bold mt-2 text-white/30"
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
        <section className="relative py-20 px-4 overflow-hidden" id="experience">
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
                <p
                    className="text-xs tracking-widest text-white/30 mb-2 uppercase"
                    style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                >
                    Career
                </p>
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