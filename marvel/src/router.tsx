import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import Intro from "./screen/Intro";
import Comics from "./screen/Comics";
import Characters from "./screen/Characters";
import ComicsDetail from "./screen/ComicsDetail";
import ComicCharacters from "./screen/ComicCharacters";
import CharactersDetail from "./screen/CharactersDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Intro />,
        errorElement: <NotFound />,
    },
    {
        path: "/comics",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Comics />,
            },
            {
                path: "/comics/:comicId",
                element: <ComicsDetail />,
            },
            {
                path: "/comics/:comicId/characters",
                element: <ComicCharacters />,
            },
        ],
    },
    {
        path: "/characters",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Characters />,
            },
            {
                path: "/characters/:characterId",
                element: <CharactersDetail />,
            },
        ],
    },
]);

export default router;
