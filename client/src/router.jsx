import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import MainLayout from "./layouts/MainLayout";
import Pokedex from "./pages/Pokedex";
import Favorite from "./pages/Favorite";
import SearchPage from "./pages/SearchPage";

import Detail from "./components/Detail"
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
                path: '/detail/:name',
                element: <Detail />
            },
            {
                path: '/search',
                element: <SearchPage />
            },
            {
                path: '/favorite',
                element: <Favorite />
            }
        ]
    }
])
export default router