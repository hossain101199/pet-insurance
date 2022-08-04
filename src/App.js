import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Form from "./Components/Form/Form";
import Footer from "./Components/Footer/Footer";
import LastSec from "./Components/Footer/LastSec";

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Form/:Zipcode" element={<Form />} />
      </Routes>
      <Footer></Footer>
      <LastSec></LastSec>
    </div>
  );
}

export default App;
