import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home.jsx"
import NewVideo from "./pages/NewVideo.jsx";
import Template from "./pages/Template.jsx";
import AllVideos from "./pages/AllVideos.jsx";
import Edit from "./pages/Edit.jsx"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
    <Route path="/" element={<Home />} />
    <Route path="/newVideo" element={<NewVideo />} />
    <Route path="/template" element={<Template />} />
      <Route path="/allVideos" element={<AllVideos />} />
      <Route path="/edit" element={<Edit />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
