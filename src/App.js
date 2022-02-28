import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Hero from "./components/pages/Hero";
import ActionPage from "./components/pages/ActionPage";
import SignInUp from "./components/pages/SignInUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Hero />} />
          <Route path="/signinup" element={<SignInUp />} />
          <Route path="/actionpage" element={<ActionPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
