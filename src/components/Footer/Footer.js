import {Button, Col, Container, Nav, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import {getUserProfile} from "../../services/profileEndpoints";
import {Link} from "react-router-dom";


const Footer = () => {

    const style = {
        wrapper: {
            background: "lightGray"
        },
        contents: {
            padding: "2em 0"
        },
        columns: {
            padding: "2em 2em",
            textAlign: "center"
        },
        links: {
            display: "flex",
            flexDirection: "column"
        },
        link: {
            color: "inherit",
            textDecoration: "none"
        },
        createdBy: {
            fontWeight: "bold"
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
            <Container>
                <div style={style.contents}>
                    <Row>
                        <Col style={style.columns} sm={12} md={4}>
                            <span style={style.createdBy}>Generated for {userProfile?.basics.name}<br/>© 2021 Aneesh Sreedhara</span>
                        </Col>
                        <Col style={style.columns} sm={12} md={4}>
                            <h6>Navigation</h6>
                            <div style={style.links}>
                                <Link to={"/"} style={style.link}>Home</Link>
                                <Link to={"/portfolio"} style={style.link}>Portfolio</Link>
                                <Link to={"/resume"} style={style.link}>Resume</Link>
                                <Link to={"/contact"} style={style.link}>Contact</Link>
                            </div>
                        </Col>
                        <Col style={style.columns} xs={12} md={4}>
                            <h6>Network</h6>
                            <div style={style.links}>
                                {userProfile?.basics.profiles.map(profile => {
                                    return (<a href={profile.url} style={style.link}>{profile.network}</a>);
                                })}
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Footer;