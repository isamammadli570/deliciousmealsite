import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
