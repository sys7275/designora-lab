import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contacts";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import ProjectDetails from "./pages/ProjectDetails";
import ProtectedAdminRoute from "./routes/ProtectedAdminRoute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route
  path="/admin"
  element={
    <ProtectedAdminRoute>
      <Admin />
    </ProtectedAdminRoute>
  }
/>
<Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;