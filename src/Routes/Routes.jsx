
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../page/login/Login";
import SignUp from "../page/Signup/SignUp";
import Home from "../page/Home/Home";
import Panel from "../page/Panel/Panel";
import ErrorPage from "../page/errorPage/ErrorPage";
import Profile from "../page/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import Gallery from "../page/Gallery/Gallery";
import PanelFirst from "../page/PanelFirst/PanelFirst";
import About from "../page/About/About";
import PanelSecend from "../page/PanelSecend.jsx/PanelSecend";
import PanelThird from "../page/PanelThird.jsx/PanelThird";
import AboutUs from "../page/AboutUs/AboutUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            },
            {
                path: '/panel-member',
                element: <Panel/>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile/></PrivateRoute>
            },
            {
                path: '/gallery',
                element: <Gallery/>
            },
            {
                path: "/panel-member1",
                element: <PanelFirst/>
            },
            {
                path: "/panel-member2",
                element: <PanelSecend/>
            },
            {
                path: "/panel-member3",
                element: <PanelThird/>
            },
            {
                path: '/about', 
                element: <About/>
            },
            {
                path: '/aboutUs', 
                element: <AboutUs/>
            },
        ]
    }
]);

export default router;
