import DefaultHeader from "../components/DefaultHeader/DefaultHeader";
import ProjectsCardsSection from "../components/ProjectsCardsSection/ProjectsCardsSection";

const Projects = ({userProfile}) => {
    return (
        <>
            <DefaultHeader title={"Projects"}/>
            <ProjectsCardsSection userProfile={userProfile}/>
        </>
    );
}

export default Projects;