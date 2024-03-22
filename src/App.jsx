import React from "react";
import { Outlet } from 'react-router-dom'
import Sidebar from "./components/Sidebar"


function App() {
  return (
    <div>
      <main className="flex items-start justify-center">
        <Sidebar />
        <Outlet />
      </main>
    </div>
  );
}

export default App;
