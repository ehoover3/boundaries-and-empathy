import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Layouts/NavBar";

import Adventure from "./Layouts/Adventure";
import Player from "./Layouts/Player";
import Statistics from "./Layouts/Statistics";
import Training from "./Layouts/Training";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Training />} />
        <Route path='/adventure' element={<Adventure />} />
        <Route path='/player' element={<Player />} />
        <Route path='/statistics' element={<Statistics />} />
      </Routes>
    </Router>
  );
}
