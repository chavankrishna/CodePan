import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Dashboard from "./pages/Dashboard";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Navbar from "./components/common/Navbar";
import JavaPage from "./pages/topics/JavaPage";
import History from "./javatopics/fist/History";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/topics/java" element={<JavaPage />} />
          <Route path="/topics/java/history" element={<History />} />


          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default AppRoutes;
