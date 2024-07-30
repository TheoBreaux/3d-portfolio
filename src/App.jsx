import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import {
  Home,
  About,
  Projects,
  Education,
  Contact,
  EmailMarketing,
} from "./pages";
import ImagePage from "./components/ImagePage";

const App = () => {
  return (
    <div>
      <main className="bg-slate-300/20 h-full">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/marketing" element={<EmailMarketing />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/image/:imageName" element={<ImagePage />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
};

export default App;
