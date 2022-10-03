import React from "react";
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default App;
