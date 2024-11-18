import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import MainLayout from "./layouts/MainLayout";
import Pokedex from "./pages/Pokedex";
import Favorite from "./pages/Favorite";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/pokedex',
                element: <Pokedex />
            },
            {
                path: '/detail:id',
                elemmet: <Home />
            },
            {
                path: '/search',
                elemmet: <Home />
            },
            {
                path: '/favorite',
                element: <Favorite />
            }
        ]
    }
])
export default router