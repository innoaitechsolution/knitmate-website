import Navbar from "./components/Navbar/navbar";
import Intro from './components/Intro/intro';
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import PrivacyPolicy from "./privacypolicy/PrivacyPolicy";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Intro />      
            <Works />           
            <Contact />
            <Footer />
            <PrivacyPolicy />           
        </div>
    );
}

export default App;
