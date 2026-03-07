import type { RouteObject } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";
import Contact from "../pages/Contact.tsx";
import Country from "../pages/Country.tsx";
import NotFound from "../pages/NotFound.tsx";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/country",
                element: <Country />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]

export default routes;