import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LandingPage from "./Landing Page/LandingPage.js";
import Home from "./Home/Home.js";
import About from "./About/About.js";
import Trips from "./Trips/Trips.js";
import ThingsToDo from "./Things To Do/ThingsToDo.js";
import Contact from "./Contact/Contact.js";

const Main = withRouter(({location}) => {
  return(
      <div>
        {
          location.pathname !== '/' && <Navbar/>
        }
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/trips">
          <Trips />
        </Route>
        <Route exact path="/thingstodo">
          <ThingsToDo />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        {
          location.pathname !== '/' && <Footer/>
        }
      </div>
  )
})

function App() {
  return (
    <div className='app'>
      <Router >
        <Main />
      </Router>
    </div>
  );
}

export default App;
