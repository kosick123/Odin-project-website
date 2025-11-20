import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Allpaths from "./Components/Allpaths";
import About from "./Components/About";
import Community from "./Components/Community";
import Supportus from "./Components/Supportus";
import Signin from "./Components/Signin";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

function App(){
    return(
        <div>
          <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/allpaths" element={<Allpaths />} />
                <Route path="/about" element={<About />} />
                <Route path="/community" element={<Community />} />
                <Route path="/supportus" element={<Supportus />} />
                <Route path="/signin" element={<Signin />} />
            </Routes>
            <Footer />
        </BrowserRouter>            

        </div>
    )
}
export default App;