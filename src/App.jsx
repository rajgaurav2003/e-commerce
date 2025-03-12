import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Header from "../src/Components/Header/Header";
import SubHeader from "../src/Components/SubHeader/SubHeader";
import HomeSlider from "../src/Pages/HomeSlider/HomeSlider";
import Footer from "../src/Components/Footer/Footer";
import Product from "../src/Pages/ProductSelction/Product";
import SignupPage from "../src/Pages/SignupPage/SignupPage";

function Layout() {
  const location = useLocation();
  const hideContent = location.pathname === "/signup"; // Hide specific sections on /signup

  return (
    <>
      {/* Header and Sticky SubHeader */}
      <Header />
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <SubHeader />
      </div>

      {/* Only show these components if NOT on /signup */}
      {!hideContent && (
        <>
          <HomeSlider />
          <Product />
          <Footer />
        </>
      )}

      {/* Define Routes inside the Layout */}
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
