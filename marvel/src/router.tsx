import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import Intro from "./screen/Intro";

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
        ],
    },
]);

export default router;
