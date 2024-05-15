import "./Experience.scss";

interface ExperienceProp {
    title: string;
    description: string;
    year: string;
    duration: string;
}

export default function Projects(props: ExperienceProp) {
    return (
        <div key={props.title} className="experience">
            <div>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <p>{props.year}</p>
                <p>{props.duration}</p>
            </div>
        </div>
    )
}