import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import PageNotFound from "./pages/pageNotFound.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import Header from "./pages/Header.jsx";
import "./index.css";



function App() {


    return (
        <BrowserRouter>
            <div className="notes-container">
                <div className="note-animation note-1">♫♬</div>
                <div className="note-animation note-2">♪</div>
                <div className="note-animation note-3">♩</div>
                <div className="note-animation note-4">♬♬ ♫</div>
                <div className="note-animation note-5">♫ ♫</div>
                <div className="note-animation note-6">♫</div>
                <div className="note-animation note-7">♪ I love music</div>
            </div>
            <Header/>
            <div className="page-content-container">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about/:id" element={<About/>}/>
                <Route path="*" element={<PageNotFound/>}/>


            </Routes>
                </div>
        </BrowserRouter>
    )
}

export default App
