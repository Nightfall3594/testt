import './styles/colors.css'
import './styles/defaults.css'
import './styles/utilities.css'

import Navbar from "./components/common/navbar/navbar.jsx";
import Footer from "./components/common/footer/footer.jsx"
import Home from "./components/pages/home/home.jsx";
import {Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
        <Navbar />

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/journal" element={<Home/>} />
            <Route path="/projects" element={<Home/>} />
            <Route path="/thoughts" element={<Home/>} />
        </Routes>

        <Footer />
    </>
  )
}

export default App
