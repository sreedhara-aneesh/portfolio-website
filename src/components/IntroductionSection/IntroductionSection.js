import {Container} from "react-bootstrap";

const IntroductionSection = ({userProfile}) => {

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
                    <span style={style.text}>{userProfile?.basics.summary}</span>
                </div>
            </Container>
        </div>
    );
}

export default IntroductionSection;