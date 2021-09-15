import DefaultHeader from "../components/DefaultHeader/DefaultHeader";
import {Button} from "react-bootstrap";

const Resume = ({userProfile}) => {

    const style = {
        wrapper: {
            padding: "2em 0 6em 0",
            display: "flex",
            justifyContent: "center"
        }
    }

    return (
        <>
            <DefaultHeader title={"Resume"}/>
            <div style={style.wrapper}>
                <a href={`https://gitconnected.com/${userProfile?.basics.username}/resume`}>
                    <Button>See Resume on GitConnected</Button>
                </a>
            </div>
        </>
    )
}

export default Resume;