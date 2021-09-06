import {Navbar, Nav, Container} from 'react-bootstrap'
import {useEffect, useState} from "react";
import {getUserProfile} from "../../services/profileEndpoints";

const Navigation = () => {

    const [userProfile, setUserProfile] = useState();

    useEffect(() => {
        getUserProfile().then(profile => {
            setUserProfile(profile);
        });
    }, []);

    return (
        <Navbar expand={"md"}>
            <Container>
                <Navbar.Brand><Navbar.Text>{userProfile?.basics.name}</Navbar.Text></Navbar.Brand>
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