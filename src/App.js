import {Routes, Route, BrowserRouter} from "react-router-dom";
import Navbar from "./NavBar/Navbar";
import HomePage from "./Pages/Home/HomePage";
import ApplyPage from "./Pages/ApplyPage";
import Stories from "./Pages/Stories";
import Footer from "./Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="stories" element={<Stories/>} />
                    <Route path="apply" element={<ApplyPage/>} />
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
