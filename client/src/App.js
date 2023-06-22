import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Home from "./components/Home";
import Resume from "./components/Resume";

const App = () => {
  const [result, setResult] = useState({});

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<Home setResult={setResult} />} />
          <Route path="/resume" element={<Resume result={result} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
