import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("Light");
  const [btn, setBtn] = useState("success");

  const toggleMode = () => {
    if (mode === "Light") {
      setMode("Dark");
      document.body.style.backgroundColor = "#0c0c0c";
      setBtn("light");
    } else {
      setMode("Light");
      document.body.style.backgroundColor = "white";     
      setBtn("success");
    }
  };
  return (
    <>
   <BrowserRouter>
      <>
        <div >
          <Routes>
            <Route
              exact path="/"
              element={
                <>
                  <Navbar title="EditFlare" mode={mode} toggleMode={toggleMode} />
                  <div className="container my-3"><TextForm heading="Enter text to analyze" mode={mode} toggleMode={toggleMode} buttonMode={btn} /></div>
                  
                </>
              }
            />
            <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode} buttonMode={btn}/>}  />
          </Routes>
        </div>
        
      </>
    </BrowserRouter>
  </>
  );
}

export default App;
