import { imagesPath } from "../../../config.json";
import './Header.scss';

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </nav>
            <nav>
                <ul className="socials">
                    <li><a href="https://www.linkedin.com/in/samuel-billot-40355b251/" target="_blank" title="LinkedIn"><img src={"samuelbillot/" + imagesPath + "icons/linkedin.svg"} alt="Linkedin" /></a></li>
                    <li><a href="https://github.com/Solarrris" target="_blank" title="GitHub"><img src={"samuelbillot/" + imagesPath + "icons/github.svg"} alt="Github" /></a></li>
                </ul>
            </nav>
        </header>
    )
}