import {
    useState,
    useEffect
} from "react";
import {getUserProfile} from "../../services/profileEndpoints";
import {Image} from "react-bootstrap";

const style = {
    wrapper: {
        padding: "6em 1em",
        textAlign: "center"
    },
    image: {
        width: "6em",
        marginTop: "2em"
    }
}

const HomeHeader = () => {

    const [userProfile, setUserProfile] = useState();

    useEffect(() => {
        getUserProfile().then(profile => {
            setUserProfile(profile);
        });
    }, []);

    return (
        <div style={style.wrapper}>
            <h1>{userProfile?.basics.name}</h1>
            <h6>{userProfile?.basics.headline}</h6>
            <Image style={style.image} src={userProfile?.basics.image} roundedCircle />
        </div>
    );
}

export default HomeHeader;