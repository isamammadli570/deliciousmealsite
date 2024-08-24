import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import Details from "./pages/Details";
import Meals from "./pages/Meal";
import Cocktails from "./pages/Cocktail";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cart from "./pages/Cart";

const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 60 * 1000,
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="meals" element={<Meals />} />
            <Route path="cocktails" element={<Cocktails />} />
            <Route path=":id" element={<Details />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
