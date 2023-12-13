import Root from "../layouts/Root/Root";
import {
    createBrowserRouter
} from "react-router-dom";
import Body from "../pages/Home/Body/Body";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Body></Body>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
]);

export default router;