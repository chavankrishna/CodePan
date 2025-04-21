import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Dashboard from "./pages/Dashboard";
import Login from "./components/auth/Login";
import Navbar from "./components/common/Navbar";
import JavaPage from "./pages/topics/JavaPage";
import History from "./javatopics/fist/History";
import JavaScriptPage from "./pages/topics/JavaScriptPage";
import HistoryOfJs from "./topicswise-content-pages/JavaScript-Topics/First-Unit/HistoryOfJs";
import FeaturesOfJs from "./topicswise-content-pages/JavaScript-Topics/First-Unit/FeaturesOfJs";
import HelloWorldOfJs from "./topicswise-content-pages/JavaScript-Topics/First-Unit/HelloWorldOfJs";
// import HistoryOfJs from "./topicswise content pages/JavaScript Topics/First Unit/HistoryOfJs";
// import FeaturesOfJs from "./topicswise content pages/JavaScript Topics/First Unit/FeaturesOfJs";
// import HelloWorldOfJs from "./topicswise content pages/JavaScript Topics/First Unit/HelloWorldOfJs";
import { SearchProvider } from "./context/SearchContext.jsx";
import Footer from "./components/common/Footer.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import SignUp from "./components/auth/SignUp.jsx";
import Profile from "./pages/Profile.jsx";
import UseCases from "./topicswise-content-pages/JavaScript-Topics/First-Unit/UseCasesOfJs.jsx";
import VarletconstOfJs from "./topicswise-content-pages/JavaScript-Topics/Second-Unit/VarletconstOfJs.jsx";
import PrimitiveTypes from "./topicswise-content-pages/JavaScript-Topics/Second-Unit/PrimitiveTypes.jsx";
import ReferenceTypes from "./topicswise-content-pages/JavaScript-Topics/Second-Unit/ReferenceTypes.jsx";
import IntroductionOfJs from "./topicswise-content-pages/JavaScript-Topics/First-Unit/IntroductionOfJs.jsx";
import ForgotPassword from "./components/auth/ForgotPassword.jsx";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SearchProvider>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={ <About /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} /> 
            <Route path="/forgot-password" element={<ForgotPassword />} />

            <Route path="/profile" element={<Profile /> } />



            { /* JavaScript pages */ }       
            <Route path="/topics/javascript" element={<JavaScriptPage />} />
            <Route path="/topics/javascript/introduction" element={<IntroductionOfJs />} />
            <Route path="/topics/javascript/history" element={<HistoryOfJs />} /> 
            <Route path="/topics/javascript/features" element={<FeaturesOfJs />} />
            <Route path="/topics/javascript/hello-world" element={<HelloWorldOfJs />} />
            <Route path="/topics/javascript/use-cases" element={<UseCases />} /> 

            <Route path="/topics/javascript/var-vs-let-vs-const" element={<VarletconstOfJs />} />
            <Route path="/topics/javascript/primitive-types" element={<PrimitiveTypes />} />
            <Route path="/topics/javascript/reference-types" element={ <ReferenceTypes />} />


            { /* Java pages */ }    
            <Route path="/topics/java" element={<JavaPage />} />
            <Route path="/topics/java/history" element={<History />} />   

            <Route path="*" element={<h1>404 Not Found</h1>} />    
          </Routes>
        </AnimatePresence>
        <Footer />
      </SearchProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
