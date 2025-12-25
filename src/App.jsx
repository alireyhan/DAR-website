import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Landingpage from "./components/landingpage";
import Cataloguepage from "./components/catalogue";
import Projectpage from "./components/project";
import Appointmentpage from "./components/appointment";
import About from "./components/about";
export default function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Navigate to="/landingpage" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/landingpage" element={<Landingpage />} />
        <Route path="/project" element={<Projectpage />} />
        <Route path="/catalogue" element={<Cataloguepage />} />
            <Route path="/appointment" element={<Appointmentpage />} />
      </Routes>
    </Router>
    
  );
}
