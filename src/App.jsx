import { useState } from "react";
import Search from "./components/Search/Search";
import TimeAndLocation from "./components/TimeAndLocation/TimeAndLocation";
import User from "./components/User/User";
import "./App.css";

function App() {
  return (
    <>
      <Search />

      <TimeAndLocation />

      <User />
    </>
  );
}

export default App;
