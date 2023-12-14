import Root from "../layouts/Root/Root";
import {
    createBrowserRouter
} from "react-router-dom";
// import Body from "../pages/Home/Body/Body";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Profile from "../pages/Profile/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }
        ]
    },
]);

export default router;