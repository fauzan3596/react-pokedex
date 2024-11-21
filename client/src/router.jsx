import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import MainLayout from "./layouts/MainLayout";
import Pokedex from "./pages/Pokedex";
import Favorite from "./Pages/Favorite";
import SearchPage from "./pages/SearchPage";

import Detail from "./Pages/Detail"
import ErrorPage from "./Pages/ErrorPage";
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
            },
            {
                path: '*',
                element: <ErrorPage />
            }
        ]
    }
])
export default router