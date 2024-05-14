import "./Home.scss";

export default function Home() {
    return (
        <div className="home">
            <div className="left">
                <div className="title">
                    <h1>SAMUEL</h1>
                    <h1>BILLOT</h1>
                </div>
                <ul className="socials">
                    <li><a href="https://www.linkedin.com/in/samuel-billot-40355b251/" target="_blank" title="LinkedIn"><img src="samuelbillot/src/images/icons/linkedin.svg" alt="Linkedin" /></a></li>
                    <li><a href="https://github.com/Solarrris" target="_blank" title="GitHub"><img src="samuelbillot/src/images/icons/github.svg" alt="Github" /></a></li>
                </ul>
                <a className="resume" href="samuelbillot/src/assets/Resume.pdf" download="BILLOT-Samuel-Resume">Download my resume</a>
            </div>
        </div>
    )
}