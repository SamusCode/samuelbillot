import { useCallback, useEffect, useState } from "react";
import Experience from "../../components/Experience/Experience";
import { carreer } from "../../career.json";
import "./Career.scss";

export default function Career() {
    const [leftExperiencesList, setLeftExperiencesList] = useState(Array<React.ReactElement>);
    const [rightExperiencesList, setRightExperiencesList] = useState(Array<React.ReactElement>);

    const getExperiences = useCallback(() => {
        const leftExperiencesList: React.ReactElement[] = [];
        const rightExperiencesList: React.ReactElement[] = [];

        for (let i = 0; i < carreer.length; i++) {
            const experience = carreer[i];

            const div = <Experience title={experience.title} description={experience.description} year={experience.year} duration={experience.duration} />

            if (i % 2 == 0) {
                leftExperiencesList.push(div);
            } else {
                rightExperiencesList.push(div);
            }
        }

        setLeftExperiencesList(leftExperiencesList);
        setRightExperiencesList(rightExperiencesList);
    }, []);

    useEffect(() => {
        getExperiences();
    }, []);

    return (
        <div className="career">
            <div className="container">
                <div className="left">
                    {leftExperiencesList}
                </div>
                <div className="right">
                    {rightExperiencesList}
                </div>
            </div>
        </div>
    )
}