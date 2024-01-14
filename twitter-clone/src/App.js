import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar avatar={"https://avatars.githubusercontent.com/u/112971529?v=4"} 
               displayName={"Harman Shienh"} 
               username={"harmanshienh"} 
      />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;