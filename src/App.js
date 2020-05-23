import React from "react";
import Sidebar from "./Components/sidebar";
import { Content } from "./Components/contentContainer/content";
import "./App.css";
import Dashboard from "./Components/contentContainer/dashboard";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Dashboard />
      <Content />
    </div>
  );
}

export default App;
