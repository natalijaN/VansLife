import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { VansList } from "./pages/vans/VansList";
import { VanDetail } from "./pages/vans/VanDetail";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/host/Dashboard";
import { Income } from "./pages/host/Income";
import { Reviews } from "./pages/host/Reviews";
import { HostLayout } from "./components/HostLayout";
import { HostVans } from "./pages/host/HostVans";
import { HostVanDetailLayout } from "./components/HostVanDetailLayout";
import { HostVansPricing } from "./pages/hostVans/Pricing";
import { HostVansPhotos } from "./pages/hostVans/Photos";
import { HostVansDetails } from "./pages/hostVans/Details";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="vans">
            <Route index element={<VansList />} />
            <Route path=":id" element={<VanDetail />} />
          </Route>
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans/:id" element={<HostVanDetailLayout />}>
              <Route index element={<HostVansDetails />} />
              <Route path="pricing" element={<HostVansPricing />} />
              <Route path="photos" element={<HostVansPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
