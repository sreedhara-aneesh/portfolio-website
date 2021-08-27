import {Container} from "react-bootstrap";


const IntroductionSection = () => {

    const style = {
        wrapper: {
            padding: "2em 0 6em 0"
        },
        textWrapper: {
            maxWidth: "420px",
            margin: "auto",
            padding: "0 2em"

        },
        text: {
            padding: "1em 0",
            display: "block",
            width: "100%",
            textAlign: "justify"
        }
    }

    return (
        <div>
            <Container style={style.wrapper}>
                <div style={style.textWrapper}>
                    <span style={style.text}>Hello there, and welcome to my portfolio.</span>
                    <span style={style.text}>I am a computer science student at North Carolina State University, with a background in web development. My goal is to use programming to solve real world problems.</span>
                </div>
            </Container>
        </div>
    );
}

export default IntroductionSection;