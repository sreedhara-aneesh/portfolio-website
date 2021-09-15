import HomeHeader from "../components/HomeHeader/HomeHeader";
import IntroductionSection from "../components/IntroductionSection/IntroductionSection";


const Home = ({userProfile}) => {
    return (
        <>
            <HomeHeader userProfile={userProfile}/>
            <IntroductionSection userProfile={userProfile}/>
        </>
    );
}

export default Home;