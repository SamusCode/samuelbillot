import { useCallback } from "react";
import { imagesPath } from "../../../config.json";
import "./Project.scss";

interface CardProps {
    title: string;
    description: string;
    image: string;
    link: string;
    languages: string;
}

export default function Projects(props: CardProps) {

    const handleCardClick = useCallback((link: string | undefined) => {
        window.open(link, '_blank');
    }, [])

    return (
        <div onClick={() => handleCardClick(props.link)} key={props.title} className="project">
            <div>
                <img src={imagesPath + "projects/" + props.image} alt={props.title + " image"} />
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <p className="languages">{props.languages}</p>
            </div>
        </div>
    )
}