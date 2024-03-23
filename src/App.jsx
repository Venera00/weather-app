import { useState } from "react";
import Search from "./components/Search/Search";
import TimeAndLocation from "./components/TimeAndLocation/TimeAndLocation";
import "./App.css";

function App() {
  return (
    <>
      <Search />

      <TimeAndLocation />
    </>
  );
}

export default App;
