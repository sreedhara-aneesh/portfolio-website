import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import {Alert} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
    return (
        <Router className={"App"}>
            <Alert variant={"warning"}>This website is under development, and very much unfinished.</Alert>
            <Navigation/>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/projects"} component={Projects}/>
                <Route exact path={"/resume"} component={Resume} />
                <Route exact path={"/contact"} component={Contact} />
                <Route path={"*"} component={() => {return "404"}}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
