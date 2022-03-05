import {Routes, Route, BrowserRouter} from "react-router-dom";
import Navbar from "./Navbar";
import AboutUsPage from "./Pages/AboutUs/AboutUsPage";
import ApplyPage from "./Pages/ApplyPage";
import Stories from "./Pages/Stories";
import Contact from "./Pages/Contact";
import Footer from "./Footer";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<AboutUsPage/>} />
                    <Route path="stories" element={<Stories/>} />
                    <Route path="contact" element={<Contact/>} />
                    <Route path="apply" element={<ApplyPage/>} />
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
