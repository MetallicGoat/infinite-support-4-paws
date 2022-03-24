import {Routes, Route, BrowserRouter} from "react-router-dom";
import Navbar from "./NavBar/Navbar";
import HomePage from "./Pages/Home/HomePage";
import ApplyPage from "./Pages/Apply/ApplyPage";
import StoriesPage from "./Pages/Stories/StoriesPage";
import Footer from "./Footer/Footer";

// new comment

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="stories" element={<StoriesPage/>} />
                    <Route path="apply" element={<ApplyPage/>} />
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
