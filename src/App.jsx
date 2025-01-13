import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import Design from "./Pages/Design";
import DesignPage1 from "./Pages/DesignPage1";
import DesignPage2 from "./Pages/DesignPage2";
import DesignPage3 from "./Pages/DesignPage3";
import DesignPage4 from "./Pages/DesignPage4";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Code from "./Pages/Code";
import CodePage1 from "./Pages/CodePage1";
import CodePage2 from "./Pages/CodePage2";
import Home from "./Component/Home";

function App() {
  return (
    <>
      <div className="home Relative">
        <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/code" element={<Code />} />
              <Route path="/codepage1" element={<CodePage1 />} />
              <Route path="/codepage2" element={<CodePage2 />} />
              <Route path="/design" element={<Design />} />
              <Route path="/designpage1" element={<DesignPage1 />} />
              <Route path="/designpage2" element={<DesignPage2 />} />
              <Route path="/designpage3" element={<DesignPage3 />} />
              <Route path="/designpage4" element={<DesignPage4 />} />
        </Routes>
      </Router>
      </div>
    </>
  );
}

export default App;
