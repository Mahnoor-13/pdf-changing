import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Questions from "../Screens/Questions/index.js";

import Home from "../Screens/Home/index.js";

const Routess = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Questions" element={<Questions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routess;
