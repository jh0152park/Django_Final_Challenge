import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import Intro from "./screen/Intro";
import Comics from "./screen/Comics";

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
            // {
            //     path: "comics",
            //     element: <Comics />,
            // },
        ],
    },
]);

export default router;
