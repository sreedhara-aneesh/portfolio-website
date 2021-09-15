import {Navbar, Nav, Container} from 'react-bootstrap'
import {Link} from "react-router-dom";

const Navigation = ({userProfile}) => {

    const style = {
        link: {
            color: "inherit",
            textDecoration: "none"
        }
    }

    return (
        <Navbar expand={"md"}>
            <Container>
                <Navbar.Brand><Navbar.Text>{userProfile?.basics.name}</Navbar.Text></Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className={"justify-content-end"}>
                    <Nav>
                        <Nav.Link><Link to={"/"} style={style.link}>Home</Link></Nav.Link>
                        <Nav.Link><Link to={"/projects"} style={style.link}>Projects</Link></Nav.Link>
                        <Nav.Link><Link to={"/resume"} style={style.link}>Resume</Link></Nav.Link>
                        <Nav.Link><Link to={"/contact"} style={style.link}>Contact</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;