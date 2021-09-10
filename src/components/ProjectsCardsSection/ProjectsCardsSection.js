import {useEffect, useState} from "react";
import {getUserProfile} from "../../services/profileEndpoints";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsCardsSection = () => {

    const style = {
        wrapper: {
            padding: "2em 0 6em 0"
        },
        cards: {
            maxWidth: "880px",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            flexWrap: "overflow"
        },
        card: {
            width: "420px",
            margin: "10px"
        }
    }

    const [userProfile, setUserProfile] = useState();

    useEffect(() => {
        getUserProfile().then(profile => {
            setUserProfile(profile);
        });
    }, []);

    return (
        <div style={style.wrapper}>
            <div style={style.cards}>
                {userProfile?.projects.map(project => {
                    return (
                        <div style={style.card}>
                            <ProjectCard  {...project} />
                        </div>
                    );
                })}
            </div>
        </div>
    );

}

export default ProjectsCardsSection;