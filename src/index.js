import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NewsPage from "./pages/NewsPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";


import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
    {
        path: "/new-app",
        element: <App />,
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
    {
        path: "/contact",
        element: <ContactPage />,
    },
    {
        path: "/news",
        element: <NewsPage />,
    },
    {
        path: "/signup",
        element: <SignupPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
