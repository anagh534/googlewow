import React from "react";
import { Routes, Route } from "react-router-dom";
import Events from "./pages/Events";
import Childroute from "./Childroute";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Childroute />}>
          <Route path="" element={<Home />} />
          <Route path="/events" element={<Events />} />
        </Route>
      </Routes>
    </>
  );
}
