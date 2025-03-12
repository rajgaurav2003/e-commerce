import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/men" element={<h1>Men Section</h1>} />
      <Route path="/women" element={<h1>Women Section</h1>} />
      <Route path="/kids" element={<h1>Kids Section</h1>} />
      <Route path="/mobiles" element={<h1>Mobiles</h1>} />
      <Route path="/laptops" element={<h1>Laptops</h1>} />
      <Route path="/accessories" element={<h1>Accessories</h1>} />
      <Route path="/backpacks" element={<h1>Backpacks</h1>} />
      <Route path="/handbags" element={<h1>Handbags</h1>} />
      <Route path="/travel-bags" element={<h1>Travel Bags</h1>} />
      <Route path="/sneakers" element={<h1>Sneakers</h1>} />
      <Route path="/boots" element={<h1>Boots</h1>} />
      <Route path="/sandals" element={<h1>Sandals</h1>} />
      <Route path="/offers" element={<h1>Offers</h1>} />
      <Route path="/new-arrivals" element={<h1>New Arrivals</h1>} />
      <Route path="/best-sellers" element={<h1>Best Sellers</h1>} />
    </Routes>
  );
};

export default AppRoutes;
