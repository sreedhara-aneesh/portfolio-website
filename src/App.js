import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation/Navigation";
import HomeHeader from "./components/HomeHeader/HomeHeader";
import IntroductionSection from "./components/IntroductionSection/IntroductionSection";
import Footer from "./components/Footer/Footer";
import {Alert} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Alert variant={"warning"}>This website is under development, and very much unfinished.</Alert>
      <Navigation/>
      <HomeHeader/>
      <IntroductionSection/>
      <Footer/>
    </div>
  );
}

export default App;
