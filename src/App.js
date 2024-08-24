import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import ExploreSpaces from "./Components/ExploreSpaces";
import SpaceDetail from "./Components/SpaceDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<ExploreSpaces />} />
        <Route path="/explore/:id" element={<SpaceDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
