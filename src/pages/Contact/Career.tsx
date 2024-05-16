import { useCallback, useEffect, useState } from "react";
import Experience from "../../components/Experience/Experience";
import { carreer } from "../../career.json";
import "./Career.scss";

export default function Career() {
    const [leftExperiencesList, setLeftExperiencesList] = useState(Array<React.ReactElement>);
    const [rightExperiencesList, setRightExperiencesList] = useState(Array<React.ReactElement>);
    const [circleSpanList, setCircleSpanList] = useState(Array<React.ReactElement>);


    const getExperiences = useCallback(() => {
        const leftExperiencesList: React.ReactElement[] = [];
        const rightExperiencesList: React.ReactElement[] = [];
        const circleSpanList: React.ReactElement[] = [];

        for (let i = 0; i < carreer.length; i++) {
            const experience = carreer[i];

            const div = <Experience title={experience.title} description={experience.description} year={experience.year} duration={experience.duration} />

            if (i % 2 == 0) {
                leftExperiencesList.push(div);
            } else {
                rightExperiencesList.push(div);
            }

            circleSpanList.push(<span className="circle"></span>)
        }

        setLeftExperiencesList(leftExperiencesList);
        setRightExperiencesList(rightExperiencesList);
        setCircleSpanList(circleSpanList);  
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
                <div className="line">
                    <span className="line"></span>
                    {circleSpanList}
                </div>
                <div className="right">
                    {rightExperiencesList}
                </div>
            </div>
        </div>
    )
}