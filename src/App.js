import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ExploreSpaces from "./Pages/ExploreSpaces";
import SpaceDetail from "./Pages/SpaceDetail";
import Layout from "./Components/Layout";
import Dashboard from "./Pages/RentOut/Dashboard";
import Income from "./Pages/RentOut/Income";
import Reviews from "./Pages/RentOut/Reviews";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<ExploreSpaces />} />
          <Route path="/explore/:id" element={<SpaceDetail />} />

          <Route path="/rentOut" element={<Dashboard />}>
            <Route path="/rentOut/income" element={<Income />} />
            <Route path="/rentOut/reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
