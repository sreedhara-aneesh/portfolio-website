import DefaultHeader from "../components/DefaultHeader/DefaultHeader";
import {Card, ListGroup} from "react-bootstrap";

const Contact = ({userProfile}) => {

    const style = {
        wrapper: {
            padding: "2em 0 6em 0",
            display: "flex",
            justifyContent: "center"
        },
        card: {
            width: "420px"
        }
    }

    return (
        <>
            <DefaultHeader title={"Contact"} />
            <div style={style.wrapper}>
                <Card style={style.card}>
                    <ListGroup variant={"flush"}>
                        <ListGroup.Item><b>Email:</b> {userProfile?.basics.email}</ListGroup.Item>
                        <ListGroup.Item><b>Phone:</b> {userProfile?.basics.phone}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        </>
    );
}

export default Contact;