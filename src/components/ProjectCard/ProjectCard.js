import {Badge, Button, Card} from "react-bootstrap";

const ProjectCard = ({ displayName, summary, githubUrl, images }) => {
    const style = {
        badge: {
            marginRight: "5px"
        },
        button: {
            marginRight: "5px"
        }
    }

    return (
        <Card style={style.card} bg='light' border='dark' text='dark'>
            <Card.Img variant="top" src={images[0].resolutions.desktop.url}/>
            <Card.Body>
                <Card.Title>{displayName}</Card.Title>
                <Card.Text>{summary}</Card.Text>
                <a href={githubUrl} style={style.button}><Button variant={"primary"}>Github</Button></a>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;