import React from "react";

// Social icons as inline SVGs to keep zero extra dependencies
const SocialIcon = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="inline-flex items-center justify-center hover:opacity-60 transition-opacity duration-200"
  >
    {children}
  </a>
);

// ---------- icon SVGs ----------
const GithubIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <polygon points="23 9 23 15 22 15 22 17 21 17 21 19 20 19 20 20 19 20 19 21 18 21 18 22 16 22 16 23 15 23 15 18 14 18 14 17 15 17 15 16 17 16 17 15 18 15 18 14 19 14 19 9 18 9 18 6 16 6 16 7 15 7 15 8 14 8 14 7 10 7 10 8 9 8 9 7 8 7 8 6 6 6 6 9 5 9 5 14 6 14 6 15 7 15 7 16 9 16 9 18 7 18 7 17 6 17 6 16 4 16 4 17 5 17 5 19 6 19 6 20 9 20 9 23 8 23 8 22 6 22 6 21 5 21 5 20 4 20 4 19 3 19 3 17 2 17 2 15 1 15 1 9 2 9 2 7 3 7 3 5 4 5 4 4 5 4 5 3 7 3 7 2 9 2 9 1 15 1 15 2 17 2 17 3 19 3 19 4 20 4 20 5 21 5 21 7 22 7 22 9 23 9"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="m22,2v-1H2v1h-1v20h1v1h20v-1h1V2h-1Zm-9,10v8h-3v-11h3v1h1v-1h4v1h1v10h-3v-8h-3Zm-9-4v-3h3v3h-3Zm3,1v11h-3v-11h3Z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="22" y="5" width="1" height="1"/><rect x="22" y="3" width="1" height="1"/><polygon points="21 5 21 6 22 6 22 7 21 7 21 12 20 12 20 14 19 14 19 16 18 16 18 17 17 17 17 18 16 18 16 19 14 19 14 20 11 20 11 21 4 21 4 20 2 20 2 19 1 19 1 18 3 18 3 19 6 19 6 18 7 18 7 17 5 17 5 16 4 16 4 15 3 15 3 14 5 14 5 13 3 13 3 12 2 12 2 10 4 10 4 9 3 9 3 8 2 8 2 4 3 4 3 5 4 5 4 6 5 6 5 7 7 7 7 8 10 8 10 9 12 9 12 5 13 5 13 4 14 4 14 3 19 3 19 4 22 4 22 5 21 5"/>
  </svg>
);

const MailIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="m21,5v-1H3v1H1v14h1v1h20v-1h1V5h-2Zm-11,7v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h14v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1Zm-6-5v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v11H3V7h1Z"/>
  </svg>
);

// ---------- main About section ----------
function About() {
  const socials = [
    { href: "https://github.com/barryspacezero", label: "GitHub", icon: <GithubIcon /> },
    { href: "https://www.linkedin.com/in/sparsh-gupta-606169213/", label: "LinkedIn", icon: <LinkedinIcon /> },
    { href: "https://x.com/barryspacezero", label: "X", icon: <TwitterIcon /> },
    { href: "mailto:sparsh.devesh.gupta@gmail.com", label: "Email", icon: <MailIcon /> },
  ];

  return (
    <footer id="about" className=" flex justify-center items-center border border-theme-border mx-4 md:mx-8 py-4">
      <div className="flex items-center gap-8">
        {socials.map((s, i) => (
          <SocialIcon key={i} href={s.href} label={s.label}>
            <span className="text-3xl hover:scale-110 transition-transform duration-200">
              {s.icon}
            </span>
          </SocialIcon>
        ))}
      </div>
    </footer>
  );
}

export default About;