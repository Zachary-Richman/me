'use client'

import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

export default function Newpage(){
  return(
    <main>
    <div className="header-container">
      <div className="header">
        <h1 className="title">Hey, I&apos;m Zach!</h1>
        <p>Experienced full stack web developer for <span className="highlight">5 years</span>. I enjoy building websites that are <span className="highlight">modern</span> and <span className="highlight">accessible</span></p>

        <Link href="#about">About Me!</Link>
      </div>
    </div>

    <div className="content-header" id="about">
      <h1>About Me</h1>
      <hr />
      <p>Writing code since elementary school</p>
    </div>  

    <div className="about-container">
      <div className="about">
        <h2>Get to know me!</h2>
        <p>
          Hey! I&apos;m <span className="highlight">Zach</span>, I&apos;ve been programming for over 5 years now. I first started with python, but quickly found my place as a web developer. In terms of code, I&apos;m all over the place. From fancy front end web design to training AI to recognize if I&apos;m awake or not, my skills are vast. You can frequently find me entered in hackathons, or contributing to the Open-Source world! I freelance doing just about anything, so nothing is out of the realm of possibility.
        </p>
        <Link href="#projects">Projects</Link>
      </div>
      <div className="skills-container">
        <p>Next.js</p>
        <p>Python</p>
        <p>Flask</p>
        <p>React</p>
        <p>Javascript</p>
        <p>C/C++</p>
        <p>HTML/CSS</p>
        <p>Sqlite3</p>
        <p>Node.js</p>
        <p>EJS</p>
        <p>Express</p>
        <p>PHP</p>
        <p>Arduino</p>
        <p>Bash</p>
        <p>Git</p>
        <p>Java</p>
        <p>Raspberry PI</p>
        <p>Shell</p>
        <p>Typescript</p>
      </div>
    </div>  

    <div className="content-header" id="projects">
      <h1>Projects</h1>
      <hr />
      <p>Where the fun begins . . .</p>
    </div>

    <div className="projects-container">
      <div className="project">
        <h2>Actium</h2>
        <p id="desc">Where streamlining everything into one becomes a reality.</p>
        <div className="project-items">
          <p>Python</p>
          <p>Node.js</p>
          <p>OpenCV</p>
          <p>Arduino</p>
          <p>Expressjs</p>
          <p>Azure</p>
        </div>
        <Link href="https://github.com/Actium-Open-Source">Github</Link>
      </div>

      <div className="project">
        <h2>Lumina</h2>
        <p id="desc">A free and open source home assistant</p>
        <div className="project-items">
          <p>Python</p>
          <p>git</p>
          <p>Raspberry PI</p>
          <p>Networking</p>
          <p>ollama</p>
          <p>AI/LLM</p>
        </div>
        <Link href="https://github.com/Lumina-Home-Assistant">Github</Link>
      </div>

      <div className="project">
        <h2>Lux</h2>
        <p id="desc">Revolutionizes your team workflow with every tool</p>
        <div className="project-items">
          <p>Python</p>
          <p>Flask</p>
          <p>React Native</p>
          <p>Google APIS</p>
          <p>Integrations</p>
        </div>
        <Link href="/development">In Production</Link>
      </div>
    </div>

    <div className="footer-container">
      <Link href="https://instagram.com/Nebularityy"><FontAwesomeIcon icon={faInstagram} /></Link>
      <Link href="https://github.com/NebulousCalm"><FontAwesomeIcon icon={faGithub} /></Link>
      <Link href="mailto:zjrichman@outlook.com"><FontAwesomeIcon icon={faEnvelope} /></Link>
      <Link href="https://stackoverflow.com/users/22534317/nebulous"><FontAwesomeIcon icon={faStackOverflow} /></Link>
    </div>
    </main>
  );
}
