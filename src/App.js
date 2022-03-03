import {Routes, Route, BrowserRouter} from "react-router-dom";
import Navbar from "./Navbar";
import AboutUs from "./Pages/AboutUs";
import Apply from "./Pages/Apply";
import Stories from "./Pages/Stories";
import Contact from "./Pages/Contact";
import Footer from "./Footer";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<AboutUs/>} />
                    <Route path="stories" element={<Stories/>} />
                    <Route path="contact" element={<Contact/>} />
                    <Route path="apply" element={<Apply/>} />
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
