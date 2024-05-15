import { useCallback, useEffect, useState } from "react";
import Project from "../../components/Project/Project";
import { personalProjects, schoolProjects } from "../../projects.json";
import "./Projects.scss";

export default function Projects() {
    const [personalProjectsList, setPersonalProjectsList] = useState(Array<React.ReactElement>);
    const [schoolProjectsList, setSchoolProjectsList] = useState(Array<React.ReactElement>);

    const getProjects = useCallback(() => {
        const personalProjectsList: React.ReactElement[] = [];
        const schoolProjectsList: React.ReactElement[] = [];

        for (let i = 0; i < personalProjects.length; i++) {
            const project = personalProjects[i];

            const div = <Project title={project.title} description={project.description} image={project.image} link={project.link} languages={project.languages} />

            personalProjectsList.push(div);
        }

        setPersonalProjectsList(personalProjectsList);

        for (let i = 0; i < schoolProjects.length; i++) {
            const project = schoolProjects[i];

            const div = <Project title={project.title} description={project.description} image={project.image} link={project.link} languages={project.languages} />

            schoolProjectsList.push(div);
        }

        setSchoolProjectsList(schoolProjectsList);
    }, []);

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <div className="projects">
            <div className="title">
                <span className='left-chevron'></span>
                <span className='square'></span>
                <h2>Personal Projects</h2>
                <span className='square'></span>
                <span className='right-chevron'></span>
            </div>
            <div className="grid">
                {personalProjectsList}
            </div>
            <div className="title">
                <span className='left-chevron'></span>
                <span className='square'></span>
                <h2>School Projects</h2>
                <span className='square'></span>
                <span className='right-chevron'></span>
            </div>
            <div className="grid">
                {schoolProjectsList}
            </div>
        </div>
    )
}