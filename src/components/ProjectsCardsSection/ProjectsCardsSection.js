import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsCardsSection = ({userProfile}) => {

    const style = {
        wrapper: {
            padding: "2em 0 6em 0"
        },
        cards: {
            maxWidth: "880px",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap"
        },
        card: {
            width: "420px",
            margin: "10px"
        }
    }

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