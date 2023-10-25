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
import Layout from "./Layout.jsx";
import Home from "./Component/Home/Home";
import About from "./Component/Home/About.jsx";
import Contact from "./Component/Home/Contact.jsx";
import Download from "./Component/Download/Download.jsx";
import Github from "./Component/Github/Github.jsx";
import { githubinfoloader } from "./Component/Github/Github.jsx";
//1stmethod for ROuter

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

//2nd method for ROuter

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      {/* <Route path="userid/:userid" element={<User />} /> */}
      <Route path="download" element={<Download />} />
      <Route 
      loader={githubinfoloader}
      path="github" element={<Github />} />

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
