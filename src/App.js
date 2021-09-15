import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import {useEffect, useState} from "react";
import {getUserProfile} from "./services/profileEndpoints";

function App() {

    const [userProfile, setUserProfile] = useState();

    useEffect(() => {
        getUserProfile().then(profile => {
            setUserProfile(profile);
        });
    }, []);

    return (
        <Router className={"App"}>
            <Navigation/>
            <Switch>
                <Route exact path={"/"}><Home userProfile={userProfile} /></Route>
                <Route exact path={"/projects"}><Projects userProfile={userProfile} /></Route>
                <Route exact path={"/resume"}><Resume userProfile={userProfile} /></Route>
                <Route exact path={"/contact"}><Contact userProfile={userProfile} /></Route>
                <Route path={"*"} component={() => {return "404"}}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
