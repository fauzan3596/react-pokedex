import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./pages/MainLayout"
import Home from "./pages/Home"

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                elemmet: <Home />
            },
            {
                path: '/pokedex',
                elemmet: <Home />
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
                elemmet: <Home />
            }
        ]
    }
])
export default router
