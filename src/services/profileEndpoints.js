import axios from "axios";

const GIT_CONNECTED_ENDPOINT = "https://gitconnected.com/v1/portfolio/sreedhara-aneesh";

const getUserProfile = async () => {
    const options = {
        method: "get",
        url: GIT_CONNECTED_ENDPOINT
    }
    const res = (await axios.request(options)).data;
    return res;
}

export {
    getUserProfile
}