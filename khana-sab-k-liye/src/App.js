import React from "react";
import Login from "./pages/login";
import VerifyTab from "./pages/verifyTab";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route exact path="/home" element={<VerifyTab />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
