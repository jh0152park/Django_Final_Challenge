import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import Intro from "./screen/Intro";
import Comics from "./screen/Comics";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Intro />,
            },
            {
                path: "comics",
                element: <Comics />,
            },
        ],
    },
]);

export default router;
