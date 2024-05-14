import { useEffect, useState } from 'react';
import './Header.scss';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const [homeFocusClassName, setHomeFocusClassName] = useState("");
    const [contactFocusClassName, setContactFocusClassName] = useState("");

    const location = useLocation();

    useEffect(() => {
        const locaitonList = location.pathname.split("/");

        const currentTarget = locaitonList[locaitonList.length - 1];

        setContactFocusClassName("");
        setHomeFocusClassName("");

        if (currentTarget == "contact") {
            setContactFocusClassName("focus");
        } else if (currentTarget == "") {
            setHomeFocusClassName("focus");
        }
    }, [location])

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/" className={"home " + homeFocusClassName}><div className='link-decoration'><span className='left-chevron'></span><span className='square'></span></div>Home</Link></li>
                    <li><Link to="/projects" className='projects'>PROJECTS</Link></li>
                    <li><Link to="/contact" className={"contact " + contactFocusClassName}>Contact<div className='link-decoration'><span className='square'></span><span className='right-chevron'></span></div></Link></li>
                </ul>
            </nav>
        </header>
    )
}