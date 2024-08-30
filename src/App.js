import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ExploreSpaces from "./Pages/ExploreSpaces";
import SpaceDetail from "./Pages/SpaceDetail";
import Layout from "./Components/Layout";
import Dashboard from "./Pages/RentOut/Dashboard";
import Income from "./Pages/RentOut/Income";
import HostSpaces from "./Pages/RentOut/HostSpaces";
import HostSpaceDetail from "./Pages/RentOut/HostSpaceDetail";
import Reviews from "./Pages/RentOut/Reviews";
import RentOutLayout from "./Components/RentOutLayout";
import HostSpaceDetailLayout from "./Components/HostSpaceDetailLayout";
import HostSpacePricing from "./Pages/RentOut/HostSpacePricing";
import HostSpacePhotos from "./Pages/RentOut/HostSpacePhotos";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="explore" element={<ExploreSpaces />} />
          <Route path="explore/:id" element={<SpaceDetail />} />

          <Route path="rentOut" element={<RentOutLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="spaces" element={<HostSpaces />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="spaces/:id" element={<HostSpaceDetailLayout />}>
              <Route index element={<HostSpaceDetail />} />
              <Route path="pricing" element={<HostSpacePricing />} />
              <Route path="photos" element={<HostSpacePhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
