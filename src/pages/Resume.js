import DefaultHeader from "../components/DefaultHeader/DefaultHeader";
import {useEffect, useState} from "react";
import {getUserProfile} from "../services/profileEndpoints";
import {Button} from "react-bootstrap";

const Resume = () => {

    const style = {
        wrapper: {
            padding: "2em 0 6em 0",
            display: "flex",
            justifyContent: "center"
        }
    }

    const [userProfile, setUserProfile] = useState();

    useEffect(() => {
        getUserProfile().then(profile => {
            setUserProfile(profile);
        });
    }, []);

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