import React from "react";
import Login from "./pages/login";
import VerifyTab from "./pages/verifyTab";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BMSignup from "./pages/BMSignup";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route exact path="/home" element={<VerifyTab />} />
          <Route path="branch" element={<BMSignup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
