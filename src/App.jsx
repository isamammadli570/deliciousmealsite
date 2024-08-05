import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AppLayout />} />
        <Route
          path=":id"
          element={<Detail />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
