import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Agence from "./pages/Agence";
import Navbar from "./components/navbar/Navbar";
import FullNavbar from "./components/navbar/FullNavbar";

function App() {
  return (
    <>
    <Navbar />
    <FullNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/agence" element={<Agence />} />
      </Routes>
    </>
  );
}

export default App;
