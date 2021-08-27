import {Navbar, Nav, Container} from 'react-bootstrap'

const Navigation = () => {
    return (
        <Navbar expand={"md"}>
            <Container>
                <Navbar.Brand><Navbar.Text>Aneesh S</Navbar.Text></Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className={"justify-content-end"}>
                    <Nav>
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Portfolio</Nav.Link>
                        <Nav.Link>Resume</Nav.Link>
                        <Nav.Link>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;