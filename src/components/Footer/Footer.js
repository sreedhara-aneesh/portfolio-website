import {Button, Col, Container, Row} from "react-bootstrap";


const Footer = () => {

    const style = {
        wrapper: {
            background: "lightGray"
        },
        contents: {
            padding: "2em 0"
        },
        columns: {
            padding: "2em 2em"
        },
        links: {
            display: "flex",
            flexDirection: "column"
        },
        createdBy: {
            fontWeight: "bold"
        }
    }

    return (
        <div style={style.wrapper}>
            <Container>
                <div style={style.contents}>
                    <Row>
                        <Col style={style.columns} sm={12} md={4}>
                            <span style={style.createdBy}>Created by Aneesh Sreedhara<br/>Copyright {(new Date()).getFullYear()}</span>
                        </Col>
                        <Col style={style.columns} sm={12} md={4}>
                            <h6>Navigation</h6>
                            <div style={style.links}>
                                <span>Home</span>
                                <span>Portfolio</span>
                                <span>Resume</span>
                                <span>Contact</span>
                            </div>
                        </Col>
                        <Col style={style.columns} xs={12} md={4}>
                            <h6>Network</h6>
                            <div style={style.links}>
                                <span>LinkedIn</span>
                                <span>GitConnected</span>
                                <span>Github</span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Footer;