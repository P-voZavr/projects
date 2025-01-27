import "./css/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProjectPage from "./pages/projectPage.jsx";
import Contacts from "./pages/contacts.jsx";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/home.jsx";
import Projects from "./pages/projects.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
