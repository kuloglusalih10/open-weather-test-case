import { createBrowserRouter, } from "react-router-dom";
import {Layout} from '../layout'
import { Home } from "../screens/Home";
import {City} from "../screens/City";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index:true,
                element: <Home/>  
            },
            {
                element: <City/>,
                path: '/:plaka'
            }
        ],
    }
]);