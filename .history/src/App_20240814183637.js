import React from "react";
import Background from "./components/Background";
import Card from "./components/Card";

function App() {
  return (
    <div className="relative h-screen w-full bg-slate-800">
      <Background />
      <Card />
    </div>
  );
}

export default App;
