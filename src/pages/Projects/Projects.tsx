import { useCallback, useEffect, useState } from "react";
import Project from "../../components/Project/Project";
import { projects } from "../../projects.json";
import "./Projects.scss";

export default function Projects() {
    const [projectsList, setProjectsList] = useState(Array<React.ReactElement>);

    const getProjects = useCallback(() => {
        const projectList: React.ReactElement[] = [];

        for (let i = 0; i < projects.length; i++) {
            const project = projects[i];
            console.log(project);

            const div = <Project title={project.title} description={project.description} image={project.image} link={project.link} />

            projectList.push(div);
        }

        setProjectsList(projectList);
    }, []);

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <div className="projects">
            <div className="grid">
                {projectsList}
            </div>
        </div>
    )
}