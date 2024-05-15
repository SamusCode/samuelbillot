import { publicPath, imagesPath } from "../../../config.json";
import "./Home.scss";

export default function Home() {
    return (
        <div className="home">
            <div className="container">
                <div className="left">
                    <div className="title">
                        <h1>SAMUEL</h1>
                        <h1>BILLOT</h1>
                    </div>
                    <ul className="socials">
                        <li><a href="https://www.linkedin.com/in/samuel-billot-40355b251/" target="_blank" title="LinkedIn"><img src={"samuelbillot/" + imagesPath + "icons/linkedin.svg"} alt="Linkedin" /></a></li>
                        <li><a href="https://github.com/Solarrris" target="_blank" title="GitHub"><img src={"samuelbillot/" + imagesPath + "icons/github.svg"} alt="Github" /></a></li>
                    </ul>
                    <a className="resume" href={"samuelbillot/" + publicPath + "/Resume.pdf"} download="BILLOT-Samuel-Resume">Download my resume</a>
                </div>
                <div className="right">
                    <img src={"samuelbillot/" + imagesPath + "profile-picture.png"} alt="Profile picture" />
                    <p>Computer lover and tech passionate. Let's work together to build your dream project.</p>
                </div>
            </div>
        </div>
    )
}