import React from "react";
import Background from "./components/Background";
import Card from "./components/Card";

function App() {
  return (
    <div className="relative h-screen w-full bg-slate-800">
      <Background />
      <div className="fixed left-0 top-0 z-[3] h-full w-full">
        <Card />
        <Card isDownload={true} />
      </div>
    </div>
  );
}

export default App;
