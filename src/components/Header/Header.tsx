import './Header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/" className='home focus'><div className='link-decoration'><span className='left-chevron'></span><span className='square'></span></div>Home</Link></li>
                    <li><Link to="/projects" className='projects'>PROJECTS</Link></li>
                    <li><Link to="/contact" className='contact'>Contact<div className='link-decoration'><span className='square'></span><span className='right-chevron'></span></div></Link></li>
                </ul>
            </nav>
        </header>
    )
}