import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Nav, Navbar, NavItem } from "reactstrap";
import DateFacts from "./components/DateFacts";
import MathFacts from "./components/MathFacts";
import TriviaFacts from "./components/TriviaFacts";
import YearFacts from "./components/YearFacts";

function App() {
  return (
    <div>
      <Navbar className="bg-light">
        <Nav>
          <NavItem>
            <Link to="/" className="nav-link">Year Facts</Link>
          </NavItem>
          <NavItem>
            <Link to="/date" className="nav-link">Date Facts</Link>
          </NavItem>
          <NavItem>
            <Link to="/math" className="nav-link">Math Facts</Link>
          </NavItem>
          <NavItem>
            <Link to="/trivia" className="nav-link">Trivia Facts</Link>
          </NavItem>
        </Nav>
      </Navbar>
      <Routes>
        <Route exact path="/" element={<YearFacts />} />
        <Route path="/date" element={<DateFacts/>} />
        <Route path="/math" element={<MathFacts />} />
        <Route path="/trivia" element={<TriviaFacts/>} />
      </Routes>
    </div>
  );
}

export default App;
