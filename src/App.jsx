import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import Details from "./pages/Details";
import Meals from "./pages/Meal";
import Cocktails from "./pages/Cocktail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AppLayout />} />
        <Route path="meals" element = {<Meals />} />
        <Route path="cocktails" element={<Cocktails/>} />
        <Route path=":id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
