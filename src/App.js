import logo from "./logo.svg";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import {
    faGlobeAsia,
    faSearch,
    faCircle,
    faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
    faFacebookSquare,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import W3schoolsnavbar from "./Components/W3schoolsnavbar";
import W3schoolscontent from "./Components/W3schoolscontent";
import W3schoolcontentmid from "./Components/W3schoolcontentmid";
import Colorpicker from "./Components/Colorpicker";
import Footer from "./Components/Footer";
import Gamepart from "./Components/Gamepart";
import Exercise from "./Components/Exercise";
import Webtemplates from "./Components/Webtemplates";
import Getstarted from "./Components/Getstarted";
import Iframecontent from "./Components/Iframecontent";

library.add(fas, faGlobeAsia, faCircle, faSearch, faCaretDown);
library.add(fab, faFacebookSquare, faInstagram, faLinkedin);
library.add(far, faThumbsUp);

function App() {
    return (
        <div className="App">
            <W3schoolsnavbar />
            <W3schoolscontent />
            <W3schoolcontentmid />
            <Colorpicker />
            <Gamepart />
            <Exercise />
            <Webtemplates />
            <Getstarted />
            <Iframecontent />
            <Footer />
        </div>
    );
}

export default App;
