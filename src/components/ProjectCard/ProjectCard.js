import {Badge, Button, Card} from "react-bootstrap";

const ProjectCard = ({ name, summary, languages, githubUrl, website }) => {
    const style = {
        badge: {
            marginRight: "5px"
        },
        button: {
            marginRight: "5px"
        }
    }

    return (
        <Card style={style.card}>
            <Card.Header>
                <Card.Title>{name}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>{summary}</Card.Text>
                <a href={website} style={style.button}><Button variant={"primary"}>Demo</Button></a>
                <a href={githubUrl} style={style.button}><Button variant={"secondary"}>Github</Button></a>
            </Card.Body>
            <Card.Footer>
                {languages.map(language => {
                    return (
                        <Badge style={style.badge} bg={"secondary"}>{language}</Badge>
                    );
                })}
            </Card.Footer>
        </Card>
    )
}

export default ProjectCard;